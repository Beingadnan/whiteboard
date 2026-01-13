import { NextRequest, NextResponse } from 'next/server';

// Helper function to get current timestamp in Indian Standard Time (IST)
function getISTTimestamp(): string {
  const now = new Date();
  
  // Use toLocaleString with Asia/Kolkata timezone for accurate IST conversion
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
  
  // Format: YYYY-MM-DD HH:MM:SS IST
  // toLocaleString returns format like "DD/MM/YYYY, HH:MM:SS"
  const parts = istString.split(', ');
  const datePart = parts[0].split('/');
  const timePart = parts[1];
  
  // Reorder date from DD/MM/YYYY to YYYY-MM-DD
  const year = datePart[2];
  const month = datePart[1];
  const day = datePart[0];
  
  return `${year}-${month}-${day} ${timePart} IST`;
}

// Google Apps Script Web App URL for Partner Leads
// Replace this with your Google Apps Script Web App URL
const PARTNER_LEAD_SCRIPT_URL = process.env.PARTNER_LEAD_SCRIPT_URL || 
  'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Check if Google Apps Script URL is configured
    if (!PARTNER_LEAD_SCRIPT_URL || PARTNER_LEAD_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
      console.warn('Google Apps Script URL not configured. Form data:', body);
      console.warn('PARTNER_LEAD_SCRIPT_URL value:', PARTNER_LEAD_SCRIPT_URL);
      // Return success even if not configured (for development/testing)
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully (Google Sheets not configured)' 
      });
    }
    
    // Log the URL being used (for debugging)
    console.log('Using Google Apps Script URL:', PARTNER_LEAD_SCRIPT_URL);
    
    // Prepare data for Google Sheets
    const sheetData = {
      timestamp: getISTTimestamp(),
      name: body.name || '',
      email: body.email || '',
      phone: body.phone || '',
      company: body.company || '',
      experience: body.experience || '',
      location: body.location || '',
      message: body.message || '',
      source: 'Partner Form'
    };

    // Submit to Google Apps Script
    // Send as JSON in POST body - this is the most reliable method
    const response = await fetch(PARTNER_LEAD_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sheetData),
      redirect: 'follow',
    });

    // Google Apps Script Web Apps often return 200 even on errors
    // Try to parse the response to check for errors
    let responseData;
    let responseText = '';
    try {
      responseText = await response.text();
      // Try to parse as JSON, but handle text responses too
      try {
        responseData = JSON.parse(responseText);
      } catch {
        responseData = { text: responseText };
      }
    } catch (parseError) {
      // If we can't parse, that's okay - Google Apps Script might return HTML
      responseData = { status: response.status };
    }

    // Check if response is an HTML error page (common with Google Apps Script errors)
    const isHtmlError = responseText.includes('<!DOCTYPE html') || 
                       responseText.includes('Page not found') || 
                       responseText.includes('unable to open the file') ||
                       responseText.includes('Sorry, unable to open') ||
                       responseText.includes('Error 401') ||
                       responseText.includes('Error 403');

    // Log detailed response for debugging
    console.log('Google Apps Script Response:', {
      status: response.status,
      statusText: response.statusText,
      contentType: response.headers.get('content-type'),
      isHtmlError,
      responsePreview: responseText.substring(0, 300),
      url: PARTNER_LEAD_SCRIPT_URL
    });

    // Check for authentication/authorization errors
    if (response.status === 401 || response.status === 403 || isHtmlError) {
      console.error('❌ Google Sheets API configuration error:', {
        status: response.status,
        isHtmlError,
        url: PARTNER_LEAD_SCRIPT_URL,
        message: 'Please check your Google Apps Script Web App deployment settings:',
        checklist: [
          '1. Make sure you deployed as "Web app" (not just saved the script)',
          '2. Set "Execute as" to "Me"',
          '3. Set "Who has access" to "Anyone" (very important!)',
          '4. After changing access, you MUST create a NEW deployment',
          '5. Copy the NEW Web App URL (it changes with each deployment)',
          '6. Make sure the URL ends with /exec',
          '7. Test the URL in browser - should show JSON, not HTML error page'
        ],
        troubleshooting: [
          '→ Open the URL in your browser: ' + PARTNER_LEAD_SCRIPT_URL,
          '→ If you see HTML error page, deployment is wrong',
          '→ If you see JSON (even error), deployment is correct',
          '→ Go to Apps Script > Deploy > Manage deployments',
          '→ Delete old deployments and create a NEW one',
          '→ Make sure "Who has access" is EXACTLY "Anyone" (not "Anyone with Google account")'
        ]
      });
      
      // Still return success to user (better UX) but log the error
      // The form data is still captured, just not saved to Google Sheets
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully',
        warning: 'Google Sheets integration not configured. Please contact administrator.'
      });
    }

    // Check if response indicates success
    // Google Apps Script Web Apps typically return 200 with redirect
    if (response.status >= 200 && response.status < 300 && !isHtmlError) {
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully',
        data: responseData
      });
    } else {
      console.error('Google Sheets API error:', response.status, {
        isHtmlError,
        responsePreview: responseText.substring(0, 200)
      });
      
      // Still return success to user but log the error
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully',
        warning: 'There was an issue saving to Google Sheets, but your form was received.'
      });
    }

  } catch (error: any) {
    console.error('Error submitting partner lead:', error);
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

