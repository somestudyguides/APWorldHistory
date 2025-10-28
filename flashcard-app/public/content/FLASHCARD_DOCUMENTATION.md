# AP World History Flashcard Website - Documentation

## 📚 Overview

This repository contains AP World History study materials in markdown format, along with an interactive flashcard web application that automatically indexes and displays the content.

## 🌟 Features

The flashcard website provides:
- **Automatic Indexing**: Reads all markdown files from the repository and converts them into interactive flashcards
- **No Manual Updates Needed**: When markdown files are updated, the website automatically reflects changes after rebuild
- **Interactive Learning**: Click-to-flip flashcards with smooth animations
- **Filtering**: Filter flashcards by unit/topic
- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **GitHub Pages Deployment**: Accessible online at https://somestudyguides.github.io/APWorldHistory/

## 📁 Repository Structure

```
APWorldHistory/
├── Unit2.md                    # Study content (markdown files)
├── Unit3.md, Unit4.md, etc.   # Additional units (as added)
├── flashcard-app/             # React flashcard application
│   ├── src/                   # Source code
│   ├── public/                # Static assets
│   ├── scripts/               # Build scripts
│   └── README.md              # Detailed app documentation
├── README.md                  # This file
└── LICENSE
```

## 🚀 Quick Start

### For Students (Using the Website)

Simply visit the deployed website:
**https://somestudyguides.github.io/APWorldHistory/**

No installation needed!

### For Developers (Local Development)

1. **Navigate to the app directory**:
   ```bash
   cd flashcard-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run locally**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

## 📝 Adding New Study Content

### Adding New Units

1. Create a new markdown file in the repository root (e.g., `Unit3.md`)
2. Format your content following the structure in `Unit2.md`
3. Update the flashcard app to include the new file:
   - Edit `flashcard-app/src/utils/markdownParser.js`
   - Add your new file to the `mdFiles` array:
     ```javascript
     const mdFiles = ['Unit2.md', 'Unit3.md', 'Unit4.md'];
     ```
4. Rebuild and deploy:
   ```bash
   cd flashcard-app
   npm run build
   npm run deploy
   ```

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

**Note**: Do NOT modify the markdown files in the `flashcard-app/public/content/` directory - these are automatically copied during build.

## 🛠️ Technical Details

### Technology Stack

- **React 19**: Modern UI framework
- **Vite**: Fast build tool and dev server
- **JavaScript (ES6+)**: Modern JavaScript
- **GitHub Pages**: Free hosting
- **Markdown**: Content format

### How Auto-Indexing Works

1. **Build Time**: The `scripts/copy-md.js` script copies all `.md` files from the repository root to `public/content/`
2. **Runtime**: The React app fetches markdown files and parses them using `markdownParser.js`
3. **Display**: Parsed content is displayed as interactive flashcards
4. **Auto-Update**: When markdown files change, rebuild + redeploy updates the website

### Build Process

```bash
npm run build
```

This command:
1. Executes `copy-md.js` to copy markdown files
2. Builds the React app with Vite
3. Outputs production files to `dist/`

### Deployment Process

```bash
npm run deploy
```

This command:
1. Runs the build process
2. Pushes the `dist/` folder to the `gh-pages` branch
3. GitHub Pages automatically serves the updated site

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
