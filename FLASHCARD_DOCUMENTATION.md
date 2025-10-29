# AP World History Flashcard Website

## 📚 Overview

This repository contains AP World History study materials in markdown format, along with a simple static flashcard web application.

## 🌟 Features

- **Simple Static HTML**: Single-file application, no build tools needed
- **Automatic Deployment**: Changes update automatically via GitHub Pages
- **Interactive Learning**: Click-to-flip flashcards with smooth animations
- **Shuffle & Filter**: Randomize cards and filter by unit
- **Responsive Design**: Works on all devices

## 📁 Repository Structure

```
APWorldHistory/
├── index.html                 # Flashcard web app
├── Unit2.md                   # Study content
├── DEPLOY.md                  # Deployment guide
├── README.md                  # Repository overview
└── LICENSE
```

## 🚀 Quick Start

Visit the website: **https://somestudyguides.github.io/APWorldHistory/**

## 📝 Adding New Content

### Adding New Units

1. Create a new markdown file in the repository root (e.g., `Unit3.md`)
2. Format your content following the structure in `Unit2.md`
3. Edit `index.html` to load the new file in the `loadFlashcards()` function
4. Commit and push:
   ```bash
   git add Unit3.md index.html
   git commit -m "Add Unit 3"
   git push
   ```
5. GitHub Pages updates automatically within 1-2 minutes

### Markdown Format

The parser creates flashcards from:

**Headers:**
```markdown
## Section Title
Content here...

### Subsection
More details...
```

**Bullet Points:**
```markdown
+ 1:
  Key point with explanation

+ 2:
  Another key point
```

## 🛠️ Technical Details

- **Technology**: Pure HTML/CSS/JavaScript
- **Hosting**: GitHub Pages (free)
- **Deployment**: Automatic on push to `main`

The entire app is in `index.html` with embedded CSS and JavaScript. No build process needed.

## 🎓 Usage

- **Navigate**: Use Previous/Next buttons
- **Flip cards**: Click to reveal answers
- **Shuffle**: Randomize card order
- **Filter**: Show specific units

## 📄 License

See [LICENSE](LICENSE) file for details.

