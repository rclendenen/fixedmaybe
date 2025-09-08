# Quick EmailJS Setup - Fix the Error

## The Problem
You're getting the error because EmailJS isn't configured yet. The forms are trying to use placeholder values instead of real credentials.

## Quick Fix (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free)
3. Use your email address to create account

### Step 2: Add Gmail Service
1. In your dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Click "Connect Account"
5. Sign in with writeovercoffeee@gmail.com
6. **Copy the Service ID** (looks like: service_xxxxxxx)

### Step 3: Create Email Template
1. Click "Email Templates"
2. Click "Create New Template"
3. Name it "Prayer Request"
4. Set Subject: `Prayer Request: {{subject}}`
5. Set Body:
```
From: {{from_email}}
Subject: {{subject}}

Prayer Request:
{{message}}

---
Sent from your website
```
6. **Copy the Template ID** (looks like: template_xxxxxxx)

### Step 4: Get Public Key
1. Click "Account" in the sidebar
2. **Copy your Public Key** (looks like: xxxxxxxxxxxxxxxxxx)

### Step 5: Update Your Website
Replace these 3 values in your `script.js` file:

1. Find line 23: `emailjs.init('YOUR_PUBLIC_KEY');`
   - Replace `YOUR_PUBLIC_KEY` with your actual public key

2. Find line 143: `emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)`
   - Replace `YOUR_SERVICE_ID` with your service ID
   - Replace `YOUR_TEMPLATE_ID` with your template ID

### Step 6: Test
1. Save the file
2. Deploy your website
3. Test the prayer request form
4. Check writeovercoffeee@gmail.com for the email

## Need Help?
If you get stuck, I can help you with the specific values once you have them from EmailJS.

## Current Status
✅ Forms are working with mailto (opens email client)
🔄 EmailJS setup in progress (will send directly from website)
