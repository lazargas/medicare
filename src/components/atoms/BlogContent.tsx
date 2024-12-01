import React from 'react';

interface BlogFormatterProps {
  content: string;
  className?: string;
}

const BlogFormatter: React.FC<BlogFormatterProps> = ({ content, className = '' }) => {
  // Split content into paragraphs
  const paragraphs = content.split('\n').filter(p => p.trim() !== '');

  const formatParagraph = (text: string, index: number) => {
    // Check if it's a bullet point (starts with ♦ or •)
    if (text.trim().startsWith('♦') || text.trim().startsWith('•')) {
      return (
        <div key={index} className="pl-6 my-4 border-l-4 border-gray-200">
          <p className="text-gray-800">
            {text}
          </p>
        </div>
      );
    }

    // Check if it's a quote (starts with quotation marks)
    if (text.trim().startsWith('"') && text.trim().endsWith('"')) {
      return (
        <blockquote key={index} className="border-l-4 border-gray-300 pl-4 my-6 italic text-gray-700">
          {text}
        </blockquote>
      );
    }

    // Check if it's a reference or DOI
    if (text.toLowerCase().includes('doi:') || text.toLowerCase().includes('reference')) {
      return (
        <div key={index} className="text-sm text-gray-600 my-4">
          {text.split('DOI:').map((part, i) => {
            if (i === 0) return part;
            // Convert DOI to clickable link
            const doi = part.trim();
            return (
              <React.Fragment key={i}>
                DOI:{' '}
                <a 
                  href={`https://doi.org/${doi}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {doi}
                </a>
              </React.Fragment>
            );
          })}
        </div>
      );
    }

    // Check if it's a date line (usually near the start, contains a date)
    const datePattern = /\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}\b/;
    if (datePattern.test(text) && index < 3) {
      return (
        <p key={index} className="text-sm text-gray-600 my-4">
          {text}
        </p>
      );
    }

    // Regular paragraph
    return (
      <p key={index} className={`my-4 leading-relaxed ${index === 0 ? 'text-lg' : ''}`}>
        {text}
      </p>
    );
  };

  return (
    <article className={`max-w-full mx-auto py-8 ${className}`}>
      <div className="prose prose-lg prose-gray">
        {paragraphs.map((paragraph, index) => formatParagraph(paragraph, index))}
      </div>
    </article>
  );
};

export default BlogFormatter;