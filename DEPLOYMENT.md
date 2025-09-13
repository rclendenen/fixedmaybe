# 🚀 Deploy Your Author Website to Vercel

## Quick Deployment Steps

### Option 1: Vercel Dashboard (Recommended)

1. **Go to [vercel.com](https://vercel.com) and sign in**
2. **Click "New Project"**
3. **Import from GitHub:**
   - Connect your GitHub account if not already connected
   - Select your repository (create one if needed)
   - Click "Import"
4. **Configure Project:**
   - Project Name: `elizabethkgreen-com` (or your preferred name)
   - Framework Preset: `Other`
   - Root Directory: `./` (leave as default)
   - Build Command: Leave empty
   - Output Directory: Leave empty
5. **Click "Deploy"**
6. **Your site will be live in seconds!**

### Option 2: GitHub Repository Setup

If you need to create a GitHub repository first:

1. **Go to [github.com](https://github.com)**
2. **Create a new repository:**
   - Repository name: `elizabethkgreen.com`
   - Make it Public
   - Don't initialize with README
3. **Upload your files:**
   - Click "uploading an existing file"
   - Drag and drop all your website files
   - Commit the changes
4. **Then follow Option 1 above**

### Option 3: Vercel CLI (Advanced)

If you have Node.js installed:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from your project directory
vercel

# Follow the prompts
# - Link to existing project or create new
# - Set project name
# - Deploy!
```

## Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain (e.g., `elizabethkgreen.com`)

2. **Update DNS:**
   - Go to your domain registrar
   - Add these DNS records:
     - Type: `A` | Name: `@` | Value: `76.76.19.19`
     - Type: `CNAME` | Name: `www` | Value: `cname.vercel-dns.com`

## Benefits of Vercel

✅ **Instant Deployments** - Your site updates immediately  
✅ **Global CDN** - Fast loading worldwide  
✅ **Free SSL** - Automatic HTTPS  
✅ **Custom Domains** - Use your own domain  
✅ **Preview Deployments** - Test changes before going live  
✅ **Analytics** - Built-in performance monitoring  

## Your Website Files

Make sure these files are in your repository:
- `index.html` - Main website page
- `styles.css` - All your styling
- `script.js` - Interactive features
- `author selfie.JPG` - Your author photo
- `vercel.json` - Deployment configuration
- `README.md` - Project documentation

## Need Help?

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- GitHub Help: [help.github.com](https://help.github.com)
ng n a

   upl
      Th
      