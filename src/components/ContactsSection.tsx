import React from "react";
import { WaveAnimation } from "./WaveAnimation";
import "./ContactsSection.css";

interface Contact {
  name: string;
  link: string;
  logo: string;
}

const contacts: Contact[] = [
  {
    name: "Email",
    link: "mailto:francescogenovese@duck.com",
    logo: "/img/email.svg",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/francescogenovese",
    logo: "/img/linkedin.svg",
  },
  {
    name: "GitHub",
    link: "https://github.com/frephs",
    logo: "/img/github.svg",
  },
  {
    name: "Telegram",
    link: "https://frephs.t.me",
    logo: "/img/telegram.svg",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/frephs",
    logo: "/img/instagram.svg",
  },
  // {
  //   name: "PayPal",
  //   link: "https://paypal.me/frncscgnvs",
  //   logo: "/img/paypal.png",
  // },
  {
    name: "GoodReads",
    link: "https://goodreads.com/frephs/",
    logo: "/img/goodreads.svg",
  },
];

export const ContactsSection: React.FC = () => {
  return (
    <section id="contacts" className="contacts-section">
      <div className="contacts-navbar">
        <div className="contacts-footer-info">
          <p className="footer-text">© 2026 Francesco Genovese</p>
          <p className="footer-subtext">Built with React & TypeScript</p>
        </div>
        <div className="contacts-icons">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link"
              title={contact.name}
            >
              <img
                className="contact-icon"
                src={contact.logo}
                alt={contact.name}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="contacts-waves">
        <WaveAnimation className="wave-animation" />
      </div>
    </section>
  );
};
