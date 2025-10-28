/**
 * Utility to parse markdown files and extract flashcard content
 * Converts markdown sections into question-answer pairs for flashcards
 */

/**
 * Parse markdown content and extract flashcards
 * Creates flashcards from headers and their following content
 */
export function parseMarkdownToFlashcards(content, filename) {
  const flashcards = [];
  
  // Split content by lines
  const lines = content.split('\n');
  let currentSection = null;
  let currentContent = [];
  let lastH3 = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Match headers (##, ###, ####)
    if (line.startsWith('###')) {
      // Save previous section if exists
      if (currentSection && currentContent.length > 0) {
        const answer = currentContent.join('\n').trim();
        if (answer) {
          flashcards.push({
            question: currentSection,
            answer: answer,
            unit: filename
          });
        }
      }
      
      // Start new section
      currentSection = line.replace(/^###\s*/, '');
      lastH3 = currentSection;
      currentContent = [];
    } else if (line.startsWith('##')) {
      // Save previous section
      if (currentSection && currentContent.length > 0) {
        const answer = currentContent.join('\n').trim();
        if (answer) {
          flashcards.push({
            question: currentSection,
            answer: answer,
            unit: filename
          });
        }
      }
      
      currentSection = line.replace(/^##\s*/, '');
      lastH3 = null;
      currentContent = [];
    } else if (line.startsWith('#')) {
      // Skip main title
      continue;
    } else if (line.startsWith('+ ') || line.startsWith('• ')) {
      // Bullet points - create individual flashcards
      const bulletContent = line.replace(/^[+•]\s*/, '');
      const nextLines = [];
      
      // Collect continuation lines (indented)
      let j = i + 1;
      while (j < lines.length && lines[j].trim() && !lines[j].trim().startsWith('+') && !lines[j].trim().startsWith('•') && !lines[j].trim().startsWith('#')) {
        nextLines.push(lines[j].trim());
        j++;
      }
      
      const fullBullet = [bulletContent, ...nextLines].join('\n').trim();
      
      if (fullBullet && lastH3) {
        // Extract key point as question
        const colonIndex = bulletContent.indexOf(':');
        if (colonIndex > 0) {
          const key = bulletContent.substring(0, colonIndex).trim();
          flashcards.push({
            question: `${lastH3}: ${key}`,
            answer: fullBullet,
            unit: filename
          });
        } else {
          flashcards.push({
            question: lastH3,
            answer: fullBullet,
            unit: filename
          });
        }
      }
      
      i = j - 1; // Skip processed lines
    } else if (line) {
      // Regular content
      currentContent.push(line);
    }
  }
  
  // Save last section
  if (currentSection && currentContent.length > 0) {
    const answer = currentContent.join('\n').trim();
    if (answer) {
      flashcards.push({
        question: currentSection,
        answer: answer,
        unit: filename
      });
    }
  }
  
  return flashcards;
}

/**
 * Load and parse all markdown files
 */
export async function loadAllFlashcards() {
  const flashcards = [];
  
  // List of markdown files to load (excluding README)
  const mdFiles = ['Unit2.md']; // Add more units as they become available
  
  for (const file of mdFiles) {
    try {
      const response = await fetch(`/APWorldHistory/content/${file}`);
      if (response.ok) {
        const content = await response.text();
        const cards = parseMarkdownToFlashcards(content, file);
        flashcards.push(...cards);
      }
    } catch (error) {
      console.error(`Error loading ${file}:`, error);
    }
  }
  
  return flashcards;
}
