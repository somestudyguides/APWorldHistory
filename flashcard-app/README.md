# AP World History Flashcard Website

A simple, modern flashcard web application that automatically indexes and displays content from markdown files. Built with React and deployed to GitHub Pages.

## 🌟 Features

- **Auto-Indexing**: Automatically reads and parses markdown files from the repository
- **Interactive Flashcards**: Click to flip cards and reveal answers
- **Filter by Unit**: Easily filter flashcards by unit/topic
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations
- **Auto-Updates**: When markdown files are updated, the website automatically reflects changes after rebuild

## 📋 Table of Contents

- [Architecture](#architecture)
- [How It Works](#how-it-works)
- [Setup and Installation](#setup-and-installation)
- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [Adding New Content](#adding-new-content)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## 🏗️ Architecture

The application consists of three main parts:

1. **Build-time Indexing**: A Node.js script copies markdown files from the repository root to the `public/content/` directory during build
2. **Runtime Parsing**: The React app fetches and parses markdown files, extracting flashcard content
3. **Interactive UI**: React components display flashcards with flip animations and navigation

## 🔧 How It Works

### Markdown File Processing

1. During build time, `scripts/copy-md.js` copies all `.md` files (except README.md) from the repository root to `public/content/`
2. At runtime, the app fetches these files from `/APWorldHistory/content/*.md`
3. The `markdownParser.js` utility parses markdown and extracts:
   - Headers (##, ###) as questions
   - Following content as answers
   - Bullet points as individual flashcards
   - Unit information from filename

### Flashcard Generation

The parser creates flashcards from various markdown structures:

- **Headers**: Section headers become questions with following content as answers
- **Bullet Points**: Each bullet with nested content becomes a flashcard
- **Structured Content**: Lists with colons (e.g., "+ 1:") are parsed intelligently

## 🚀 Setup and Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation Steps

1. Navigate to the flashcard app directory:
   ```bash
   cd flashcard-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. The app is now ready for development!

## 💻 Development

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Development Features

- Hot Module Replacement (HMR) for instant updates
- Fast refresh with Vite
- ESLint for code quality

### Linting

Check code quality:

```bash
npm run lint
```

## 🏗️ Building

Build the application for production:

```bash
npm run build
```

This will:
1. Run `scripts/copy-md.js` to copy markdown files to `public/content/`
2. Build the React application with Vite
3. Output production files to the `dist/` directory

Preview the production build locally:

```bash
npm run preview
```

## 🚀 Deployment

### Deploy to GitHub Pages

Deploy the application to GitHub Pages:

```bash
npm run deploy
```

This command:
1. Builds the production version
2. Deploys the `dist/` folder to the `gh-pages` branch
3. Makes the site available at `https://<username>.github.io/APWorldHistory/`

### GitHub Pages Configuration

The application is configured for GitHub Pages with:
- Base URL set to `/APWorldHistory/` in `vite.config.js`
- Deploy script using `gh-pages` package

### Manual Deployment

If needed, you can manually deploy:

1. Build the app: `npm run build`
2. Deploy: `npx gh-pages -d dist`

## 📝 Adding New Content

### Adding New Markdown Files

**Important: DO NOT modify the markdown parser or the flashcard-app to add new files manually!**

The system is designed to automatically detect new markdown files:

1. Add your new markdown file to the **repository root** (e.g., `Unit3.md`, `Unit4.md`)
2. Update the `mdFiles` array in `src/utils/markdownParser.js`:
   ```javascript
   const mdFiles = ['Unit2.md', 'Unit3.md', 'Unit4.md']; // Add your new file
   ```
3. Rebuild and redeploy:
   ```bash
   npm run build
   npm run deploy
   ```

### Markdown Format Guidelines

For best results, format your markdown files like this:

```markdown
# Unit Title

## Section Title

Content for this section...

### Subsection

More detailed content...

+ 1:
  Bullet point with explanation
  
+ 2:
  Another bullet point
```

The parser will automatically create flashcards from:
- Section headers (##) and their content
- Subsection headers (###) and their content  
- Bullet points with their nested content

## 📁 Project Structure

```
flashcard-app/
├── public/
│   ├── content/          # Markdown files (copied during build)
│   │   └── Unit2.md
│   └── vite.svg
├── scripts/
│   └── copy-md.js        # Build script to copy markdown files
├── src/
│   ├── components/
│   │   ├── Flashcard.jsx       # Flashcard component
│   │   └── Flashcard.css       # Flashcard styles
│   ├── utils/
│   │   └── markdownParser.js   # Markdown parsing logic
│   ├── App.jsx           # Main application component
│   ├── App.css           # App styles
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── dist/                 # Production build (generated)
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🛠️ Technologies Used

### Core Technologies

- **React 19**: Modern UI library
- **Vite**: Fast build tool and dev server
- **JavaScript (ES6+)**: Modern JavaScript features

### Libraries

- **gray-matter**: Parse markdown frontmatter (if needed)
- **marked**: Markdown parsing (available if needed)
- **gh-pages**: GitHub Pages deployment

### Build Tools

- **Node.js**: Build scripts
- **ESLint**: Code linting
- **Vite**: Fast builds and HMR

## 🎨 Customization

### Styling

Styles are organized in:
- `src/index.css`: Global styles
- `src/App.css`: Main app layout
- `src/components/Flashcard.css`: Flashcard-specific styles

### Colors and Themes

To customize colors, edit the gradient values in:
- `Flashcard.css`: Card front/back gradients
- `App.css`: Button and accent colors

### Card Layout

To adjust card size or layout, modify:
- `.flashcard-front` and `.flashcard-back` in `Flashcard.css`
- `min-height` and `max-width` values

## 🐛 Troubleshooting

### Flashcards Not Showing

1. Check that markdown files are in `public/content/`
2. Verify the `mdFiles` array includes your files
3. Check browser console for fetch errors
4. Ensure base URL is correct in `vite.config.js`

### Build Errors

1. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
2. Clear build cache: `rm -rf dist`
3. Check Node.js version (should be v16+)

### Deployment Issues

1. Ensure GitHub Pages is enabled in repository settings
2. Check the `gh-pages` branch exists
3. Verify the base URL matches your repository name

## 📄 License

This project is part of the APWorldHistory repository. See the repository's LICENSE file for details.

## 🤝 Contributing

When adding content:
1. Add markdown files to the repository root (NOT in flashcard-app)
2. Follow the markdown format guidelines
3. Update the `mdFiles` array in `markdownParser.js`
4. Test locally before deploying

## 📞 Support

For issues or questions:
1. Check this documentation
2. Review the troubleshooting section
3. Check browser console for errors
4. Review the markdown parsing logic in `src/utils/markdownParser.js`
