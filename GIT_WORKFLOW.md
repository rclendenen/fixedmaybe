# Git Workflow Guide - Pushing New Commits

## Current Setup
- You're on the `redesign-preview` branch
- This branch is connected to GitHub
- Vercel automatically creates preview deployments for this branch

## Step-by-Step: Pushing New Commits

### 1. Make Your Changes
Edit any files you want to update (e.g., `styles.css`, `index.html`, etc.)

### 2. Check What Changed
```bash
git status
```
This shows:
- Files you've modified (in red)
- Files you've added (in green)
- Files ready to commit

### 3. Stage Your Changes
Stage specific files:
```bash
git add styles.css
git add index.html
```

Or stage all changes at once:
```bash
git add .
```

### 4. Commit Your Changes
```bash
git commit -m "Description of what you changed"
```

Example commit messages:
- `"Update hero section colors"`
- `"Adjust spacing in Events section"`
- `"Fix mobile layout"`
- `"Update footer styling"`

### 5. Push to GitHub
```bash
git push origin redesign-preview
```

### 6. Vercel Auto-Deploys
- Vercel automatically detects the push
- Creates a new preview deployment
- Your preview URL updates (same URL, new content)
- Usually takes 1-2 minutes

## Complete Example Workflow

Let's say you want to adjust the hero section colors:

```bash
# 1. Make changes to styles.css (edit in your code editor)

# 2. Check what changed
git status

# 3. Stage the changes
git add styles.css

# 4. Commit with a descriptive message
git commit -m "Adjust hero section background color to lighter linen"

# 5. Push to GitHub
git push origin redesign-preview

# 6. Wait 1-2 minutes, then refresh your preview URL
```

## Quick Commands Reference

| Action | Command |
|--------|---------|
| Check status | `git status` |
| Stage all changes | `git add .` |
| Stage specific file | `git add filename.css` |
| Commit changes | `git commit -m "Your message"` |
| Push to GitHub | `git push origin redesign-preview` |
| See commit history | `git log --oneline` |
| Undo last commit (keep changes) | `git reset --soft HEAD~1` |
| Discard changes to a file | `git restore filename.css` |

## Working with Multiple Files

If you've changed multiple files:

```bash
# Stage all changes
git add .

# Commit all at once
git commit -m "Update multiple sections with new styling"

# Push
git push origin redesign-preview
```

Or commit files separately:

```bash
# Stage and commit CSS changes
git add styles.css
git commit -m "Update CSS styling"

# Stage and commit HTML changes
git add index.html
git commit -m "Update HTML structure"

# Push both commits
git push origin redesign-preview
```

## Branch Management

### Switch Back to Main Branch
```bash
git checkout main
```

### Switch Back to Preview Branch
```bash
git checkout redesign-preview
```

### Create a New Branch
```bash
git checkout -b new-feature-name
```

## Troubleshooting

### "Your branch is ahead of 'origin/redesign-preview'"
- This means you have commits that haven't been pushed yet
- Run: `git push origin redesign-preview`

### "Changes not staged for commit"
- You need to stage your changes first
- Run: `git add .` or `git add filename`

### "Nothing to commit, working tree clean"
- All changes are already committed
- If you just made changes, make sure you saved the file

### Undo Last Commit (Keep Changes)
```bash
git reset --soft HEAD~1
```

### Undo Last Commit (Discard Changes)
```bash
git reset --hard HEAD~1
```

### Discard Changes to a File
```bash
git restore filename.css
```

## Preview URL Updates

- Your preview URL stays the same: `your-project-redesign-preview.vercel.app`
- The content updates automatically when you push
- Check Vercel dashboard to see deployment status
- Green checkmark = deployment successful

## Ready to Deploy to Production?

When you're happy with the preview:

```bash
# Switch to main branch
git checkout main

# Merge the preview branch
git merge redesign-preview

# Push to main (triggers production deployment)
git push origin main
```

## Need Help?

If you get stuck:
- Check `git status` to see what's happening
- Run `git log --oneline` to see recent commits
- Check Vercel dashboard for deployment status
