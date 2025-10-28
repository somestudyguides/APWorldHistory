# Quick Deployment Guide

## 🚀 Deploying to GitHub Pages

Follow these simple steps to deploy the flashcard website:

### Step 1: Navigate to the flashcard app
```bash
cd flashcard-app
```

### Step 2: Install dependencies (first time only)
```bash
npm install
```

### Step 3: Deploy to GitHub Pages
```bash
npm run deploy
```

That's it! The website will be live at:
**https://somestudyguides.github.io/APWorldHistory/**

---

## 🔄 Updating the Website

When you add or modify markdown files:

1. Navigate to flashcard app:
   ```bash
   cd flashcard-app
   ```

2. If you added new Unit files (e.g., Unit3.md), edit `src/utils/markdownParser.js`:
   ```javascript
   const mdFiles = ['Unit2.md', 'Unit3.md', 'Unit4.md'];
   ```

3. Rebuild and redeploy:
   ```bash
   npm run deploy
   ```

The website will automatically update within 1-2 minutes!

---

## 🧪 Testing Locally (Optional)

To preview changes before deploying:

1. Start development server:
   ```bash
   npm run dev
   ```

2. Open browser to: `http://localhost:5173/APWorldHistory/`

3. Make changes and see them update live

4. When satisfied, deploy with `npm run deploy`

---

## ✅ Checklist

Before deploying:
- [ ] Markdown files are in the repository root
- [ ] New units are added to `mdFiles` array in `markdownParser.js`
- [ ] Tested locally (optional but recommended)
- [ ] Ready to run `npm run deploy`

After deploying:
- [ ] Wait 1-2 minutes for GitHub Pages to update
- [ ] Visit https://somestudyguides.github.io/APWorldHistory/
- [ ] Verify flashcards are showing correctly

---

## ❓ Troubleshooting

**Website not updating?**
- Wait a few minutes and refresh
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that deployment succeeded (no errors in terminal)

**Flashcards not showing?**
- Verify markdown files are named `Unit*.md`
- Check `mdFiles` array includes your files
- Run `npm run build` to see if there are errors

**Need help?**
- See `flashcard-app/README.md` for detailed documentation
- See `FLASHCARD_DOCUMENTATION.md` for full user guide
