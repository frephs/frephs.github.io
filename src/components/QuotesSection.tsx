import React from 'react';
import './QuotesSection.css';

interface Quote {
  author: string;
  source?: string;
  quote: string;
}

const quotes: Quote[] = [
  {
    author: "Lucretius",
    source: "De rerum natura",
    quote: "Rerum magnarum parva potest res exemplare dare et vestigia notitiai. \n\nA small thing can give an example of great things and impart knowledge of their traces."
  },
  {
    author: "Edsger W. Dijkstra",
    quote: "The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise."
  },
  {
    author: "Karl Marx",
    quote: "In the modern industry the means of production must become means of production in common, social means of production, and, as such, they are employed in common, and produce, not privately for the individual producer, but socially.\n\nFrom each according to their ability, to everyone according to their needs.\n\nThe ideas of the ruling class are in every epoch the ruling ideas, i.e., the class which is the ruling material force of society, is at the same time its ruling intellectual force."
  },
  {
    author: "Pravin Lal",
    quote: "Beware of he who would deny you access to information, for in his heart he dreams himself your master"
  }
];

export const QuotesSection: React.FC = () => {
  return (
    <section id="quotes" className="quotes-section">
      <h2 className="section-title">Inspirations</h2>
      <div className="quotes-container">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <div className="quote-content">
              <div className="quote-text">
                {quote.quote.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < quote.quote.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
              <hr className="quote-divider" />
              <div className="quote-footer">
                <span className="quote-source">{quote.source || ""}</span>
                <span className="quote-author">{quote.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
