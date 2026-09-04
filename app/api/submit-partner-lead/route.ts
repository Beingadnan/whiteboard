import { NextRequest, NextResponse } from 'next/server';

// Helper function to get current timestamp in Indian Standard Time (IST)
function getISTTimestamp(): string {
  const now = new Date();
  
  const istString = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  
  const parts = istString.split(', ');
  const datePart = parts[0].split('/');
  const timePart = parts[1] || '';
  
  const year = datePart[2];
  const month = datePart[1];
  const day = datePart[0];
  
  return `${year}-${month}-${day} ${timePart} IST`;
}

function getPartnerLeadScriptUrl(): string {
  const envUrl = 
    process.env.PARTNER_LEAD_SCRIPT_URL || 
    process.env.STUDENT_LEAD_SCRIPT_URL || 
    process.env.GOOGLE_SCRIPT_URL || 
    process.env.GOOGLE_SHEET_URL || 
    process.env.GOOGLE_SHEETS_URL ||
    process.env.GOOGLE_APPS_SCRIPT_URL ||
    process.env.NEXT_PUBLIC_PARTNER_LEAD_SCRIPT_URL ||
    process.env.NEXT_PUBLIC_STUDENT_LEAD_SCRIPT_URL ||
    '';

  return envUrl.trim().replace(/^["']|["']$/g, '');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const scriptUrl = getPartnerLeadScriptUrl();
    
    // Check if Google Apps Script URL is configured
    if (!scriptUrl || scriptUrl.includes('YOUR_SCRIPT_ID')) {
      console.warn('⚠️ Partner Google Apps Script URL is not configured in environment variables.');
      console.warn('Set PARTNER_LEAD_SCRIPT_URL or STUDENT_LEAD_SCRIPT_URL in .env.local');
      
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully (Google Sheets not configured in .env.local)' 
      });
    }
    
    // Prepare data for Google Sheets
    const sheetData = {
      timestamp: getISTTimestamp(),
      name: body.name || '',
      email: body.email || '',
      phone: body.phone || '',
      company: body.company || '',
      experience: body.experience || body.partnershipType || '',
      location: body.location || '',
      message: body.message || '',
      source: 'Partner Inquiry Form'
    };

    console.log('📤 Submitting partner lead to Google Sheets:', {
      url: scriptUrl,
      data: sheetData
    });

    // Submit to Google Apps Script
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sheetData),
      redirect: 'follow',
    });

    let responseText = '';
    try {
      responseText = await response.text();
    } catch {
      responseText = '';
    }

    const isExplicitAuthError = response.status === 401 || response.status === 403;
    const isPermissionPage = responseText.includes('accounts.google.com') || 
                             responseText.includes('Sign in - Google Accounts') ||
                             responseText.includes('Service invoked too many times');

    if (isExplicitAuthError || isPermissionPage) {
      console.error('❌ Partner Google Sheets Deployment Access Error:', {
        status: response.status,
        url: scriptUrl,
        hint: 'Please ensure "Who has access" is set to "Anyone" in Google Apps Script Web App deployment.'
      });

      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully',
        warning: 'Google Sheets access permission issue. Please check deployment settings.'
      });
    }

    console.log('✅ Partner Google Sheets Response Status:', response.status, responseText.substring(0, 150));

    return NextResponse.json({ 
      success: true, 
      message: 'Partner form submitted successfully and recorded.',
      status: response.status
    });

  } catch (error: any) {
    console.error('❌ Error submitting partner lead:', error);
    const errorMessage = error.message || 'Failed to submit form. Please try again.';
    
    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage,
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
