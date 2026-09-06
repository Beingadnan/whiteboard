# 📊 Unified Google Sheets Setup Guide (Single Sheet for All Forms)

All forms across the entire website now submit to a **single unified endpoint** (`/api/submit-lead`) and record into **one Google Sheet**.

---

## 1. Google Apps Script Code (Copy & Paste this into `Code.gs`)

1. Open your Google Sheet > Click **Extensions** > **Apps Script**.
2. Replace all contents of `Code.gs` with the following code:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Create Header automatically if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp (IST)",
        "Name",
        "Email",
        "Phone",
        "Course / Program / Details",
        "University / Organization",
        "State / Location",
        "Subject / Inquiry Type",
        "Message / Notes",
        "Source Form"
      ]);
    }
    
    // Append the row
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name || "",
      data.email || "",
      "'" + (data.phone || ""), // prepends ' to keep 10-digit number format
      data.course || "",
      data.university || "",
      data.state || "",
      data.subject || "",
      data.message || "",
      data.source || "Website Lead"
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

---

## 2. Deployment Steps

1. Click **💾 Save** (or `Cmd + S`).
2. Click **Deploy** > **Manage deployments** (or **New deployment**).
3. Click the ✏️ **Edit** icon next to your active deployment (or create a new Web app deployment).
4. Configure:
   - **Version**: Select **"New version"**
   - **Execute as**: `Me (<your google email>)`
   - **Who has access**: 👉 **`Anyone`** 👈
5. Click **Deploy**.
6. Copy the **Web App URL** (ends in `/exec`).

---

## 3. Configure `.env.local`

Set your Web App URL in `.env.local`:
```env
GOOGLE_SHEET_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

---

## 4. All Forms Connected (100% Wired)

Every form on the platform feeds into this single sheet with its exact source:
1. **Home Hero Program Matcher** (`Home Hero Matcher Widget`)
2. **Home Quick Callback Card** (`Home Quick Callback Card`)
3. **Course Explorer Lead Form** (`Course Page Lead Form`)
4. **Course Details Page Form** (`Course Page Lead: <Course Name>`)
5. **University Directory Lead Form** (`University Page Lead Form`)
6. **University Details Page Form** (`University Page Lead: <University Name>`)
7. **Contact Page Form** (`Contact Page Direct Inquiry`)
8. **Career Counselling Page Form** (`Career Counselling Page Booking`)
9. **Partner / Collaborate Form** (`Collaborate Page Partner Form`)
10. **Scroll & Exit Lead Popup** (`Scroll Trigger Lead Popup`)
