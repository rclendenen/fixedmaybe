# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (since you want emails sent to writeovercoffeee@gmail.com)
4. Connect your Gmail account (writeovercoffeee@gmail.com)
5. Note down the **Service ID** (you'll need this)

## Step 3: Create Email Templates
You need to create 2 email templates:

### Template 1: Prayer Request Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Name it "Prayer Request Template"
4. Use this template content:

**Subject:** Prayer Request: {{subject}}

**Body:**
```
You have received a new prayer request from your website:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Prayer Request:
{{message}}

---
This email was sent from your website contact form.
```

5. Save the template and note the **Template ID**

### Template 2: Booking Request Template
1. Create another template
2. Name it "Booking Request Template"
3. Use this template content:

**Subject:** Speaking Engagement Request: {{event_type}}

**Body:**
```
You have received a new booking request from your website:

Name: {{from_name}}
Email: {{from_email}}
Event Type: {{event_type}}

Event Details:
{{event_details}}

---
This email was sent from your website booking form.
```

4. Save the template and note the **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## Step 5: Update Your Website Code
Replace these placeholders in your `script.js` file:

- Replace `YOUR_PUBLIC_KEY` with your actual public key
- Replace `YOUR_SERVICE_ID` with your Gmail service ID
- Replace `YOUR_TEMPLATE_ID` with your template IDs (you'll need different ones for prayer vs booking)

## Step 6: Test Your Forms
1. Deploy your updated website
2. Test both the prayer request and booking request forms
3. Check that emails are received at writeovercoffeee@gmail.com

## Important Notes:
- EmailJS free plan allows 200 emails per month
- All emails will be sent from your connected Gmail account
- The forms will now send emails directly without opening email clients
- Users will see loading states and success/error messages

## Troubleshooting:
- If emails aren't sending, check the browser console for errors
- Make sure all IDs are correct in the script.js file
- Verify your Gmail account is properly connected in EmailJS
- Check your spam folder for test emails
