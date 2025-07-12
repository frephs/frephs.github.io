import React from 'react';
import './ContactsSection.css';

interface Contact {
  name: string;
  link: string;
  logo: string;
}

const contacts: Contact[] = [
  {
    name: "Email",
    link: "mailto:francescogenovese@duck.com",
    logo: "/img/email.svg"
  },
  {
    name: "GitHub",
    link: "https://github.com/frephs",
    logo: "/img/github.svg"
  },
  {
    name: "Telegram",
    link: "https://frephs.t.me",
    logo: "/img/telegram.svg"
  },
  {
    name: "Instagram",
    link: "https://instagram.com/frephs",
    logo: "/img/instagram.svg"
  },
  {
    name: "PayPal",
    link: "https://paypal.me/frncscgnvs",
    logo: "/img/paypal.png"
  },
  {
    name: "GoodReads",
    link: "https://goodreads.com/frephs/",
    logo: "/img/goodreads.svg"
  }
];

export const ContactsSection: React.FC = () => {
  return (
    <section id="contacts" className="contacts-section">
      <h2 className="section-title">Contacts</h2>
      <div className="contacts-grid">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-card">
              <div className="contact-content">
                <img 
                  className="contact-logo" 
                  src={contact.logo} 
                  alt={contact.name}
                />
                <div className="contact-name">{contact.name}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
