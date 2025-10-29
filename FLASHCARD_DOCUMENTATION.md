# AP World History Flashcard Website - Documentation

## 📚 Overview

This repository contains AP World History study materials in markdown format, along with a simple static flashcard web application that automatically displays the content.

## 🌟 Features

The flashcard website provides:
- **Simple Static HTML**: Single-file application, no build tools needed
- **Automatic Deployment**: Changes to markdown files automatically update the website via GitHub Pages
- **Interactive Learning**: Click-to-flip flashcards with smooth animations
- **Filtering**: Filter flashcards by unit/topic
- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Zero Configuration**: Just push to GitHub and it works!

## 📁 Repository Structure

```
APWorldHistory/
├── index.html                 # Flashcard web app (single HTML file)
├── Unit2.md                   # Study content (markdown files)
├── Unit3.md, Unit4.md, etc.  # Additional units (as added)
├── DEPLOY.md                 # Quick deployment guide
├── FLASHCARD_DOCUMENTATION.md # This file
├── flashcard-app/            # Old React version (can be ignored/removed)
└── README.md
└── LICENSE
```

## 🚀 Quick Start

### For Students (Using the Website)

Simply visit the deployed website:
**https://somestudyguides.github.io/APWorldHistory/**

No installation needed!

## 📝 Adding New Study Content

### Adding New Units

1. Create a new markdown file in the repository root (e.g., `Unit3.md`)
2. Format your content following the structure in `Unit2.md`
3. Edit `index.html` to load the new file (add it to the `loadFlashcards` function)
4. Commit and push to GitHub:
   ```bash
   git add Unit3.md index.html
   git commit -m "Add Unit 3"
   git push
   ```
5. GitHub Pages automatically updates within 1-2 minutes!

**Note:** Currently, `index.html` only loads `Unit2.md`. To support multiple units, you'll need to modify the JavaScript in `index.html` to fetch and parse additional files.

### Markdown Format Guidelines

The parser extracts flashcards from:

**Headers as Questions**:
```markdown
## Section Title
Content explaining the section...

### Subsection
More specific information...
```

**Bullet Points as Flashcards**:
```markdown
+ 1:
  First key point with explanation

+ 2:
  Second key point
```

## 🛠️ Technical Details

### Technology Stack

- **Pure HTML/CSS/JavaScript**: No framework, no build tools
- **Static File**: Single `index.html` file
- **GitHub Pages**: Free hosting directly from the repository
- **Markdown**: Content format (Unit*.md files)

### How It Works

1. **Load Time**: The browser loads `index.html`
2. **Fetch Markdown**: JavaScript fetches `Unit2.md` from the same directory
3. **Parse Content**: JavaScript parses markdown and extracts Q&A pairs
4. **Display**: Flashcards are rendered with flip animations
5. **Auto-Update**: When you push changes to GitHub, Pages serves the updated files

### File Structure

The entire app is contained in `index.html`:
- HTML structure
- CSS styling (embedded in `<style>` tags)
- JavaScript logic (embedded in `<script>` tags)

This makes it extremely simple to deploy - just push to GitHub!

### Deployment

The website deploys automatically when you push to the `main` branch:
1. Make changes to `Unit2.md` or `index.html`
2. Commit and push to GitHub
3. GitHub Pages serves the updated files within 1-2 minutes

## 📖 Full Documentation

For detailed documentation about the flashcard app, see:
**[flashcard-app/README.md](flashcard-app/README.md)**

Topics covered:
- Architecture and design
- Component structure
- Customization options
- Troubleshooting
- Development guidelines

## 🎓 Usage Tips

### For Students

1. **Navigate through cards**: Use Previous/Next buttons or keyboard arrows
2. **Flip cards**: Click on any card to reveal the answer
3. **Filter by unit**: Use the dropdown to focus on specific topics
4. **Study on any device**: The website is fully responsive

### For Content Creators

1. **Keep markdown files in root**: Don't move them into subdirectories
2. **Follow consistent formatting**: Use headers and bullet points as shown in Unit2.md
3. **Test locally first**: Run `npm run dev` to preview changes
4. **Update parser list**: Remember to add new files to `mdFiles` array

## 🔒 Important Notes

### DO NOT:
- ❌ Modify markdown files in `flashcard-app/public/content/` (they're auto-generated)
- ❌ Commit `node_modules/` or `dist/` folders (they're in .gitignore)
- ❌ Change base URLs without updating GitHub Pages settings

### DO:
- ✅ Add markdown files to the repository root
- ✅ Update the `mdFiles` array when adding new units
- ✅ Test locally before deploying
- ✅ Follow the markdown formatting guidelines

## 🐛 Troubleshooting

### Flashcards not showing new content?
1. Ensure the new markdown file is in the repository root
2. Check that it's added to `mdFiles` array in `markdownParser.js`
3. Rebuild: `npm run build`
4. Redeploy: `npm run deploy`

### Build errors?
1. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
2. Clear build cache: `rm -rf dist`
3. Check Node.js version (v16+ required)

### Website not updating on GitHub Pages?
1. Check that deployment succeeded
2. Wait a few minutes for GitHub Pages to refresh
3. Clear browser cache
4. Check the `gh-pages` branch exists

## 📄 License

See [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Add study content as markdown files
2. Follow the formatting guidelines
3. Test the flashcard website locally
4. Submit a pull request

## 📞 Support

For issues or questions:
1. Check this documentation
2. Review `flashcard-app/README.md` for technical details
3. Check browser console for errors
4. Open an issue on GitHub
