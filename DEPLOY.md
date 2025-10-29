# Quick Deployment Guide

## 🚀 Deploying to GitHub Pages

The flashcard website is now a **simple static HTML file** that deploys automatically!

### Automatic Deployment

Every time you push changes to the `main` branch, GitHub Pages automatically serves the website from `index.html`.

**Website URL:** https://somestudyguides.github.io/APWorldHistory/

### Enabling GitHub Pages (One-Time Setup)

If not already enabled:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Click **Save**

That's it! Your site will be live in 1-2 minutes.

---

## 🔄 Updating the Website

The website automatically updates when you modify markdown files!

**To add new content:**

1. Edit `Unit2.md` or add new unit files (`Unit3.md`, `Unit4.md`, etc.) in the repository root
2. Commit and push to the `main` branch:
   ```bash
   git add Unit2.md
   git commit -m "Update Unit 2 content"
   git push
   ```
3. GitHub Pages will automatically update within 1-2 minutes!

**Note:** The `index.html` file currently loads `Unit2.md`. To add more units, edit `index.html` and add them to the loading function.

---

## 🧪 Testing Locally

To preview the website on your computer:

1. **Option 1: Simple Python Server**
   ```bash
   python3 -m http.server 8000
   ```
   Then open: `http://localhost:8000/`

2. **Option 2: Any Local Web Server**
   Just serve the repository root directory with any web server.

The flashcards will load from the `Unit2.md` file in the same directory.

---

## ✅ Checklist

Before updating:
- [ ] Markdown files are in the repository root
- [ ] Content follows the format (headers, bullet points)
- [ ] Tested locally (optional but recommended)
- [ ] Ready to commit and push to `main`

After pushing:
- [ ] Wait 1-2 minutes for GitHub Pages to update
- [ ] Visit https://somestudyguides.github.io/APWorldHistory/
- [ ] Verify flashcards are showing correctly
