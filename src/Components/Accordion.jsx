// Accordion.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faFacebook,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Weather from './Weather';
import RandomizedQuote from './RandomQuote';

const Accordion = () => {
  const [openTab, setOpenTab] = useState(null);

  const toggleAccordion = (tab) => {
    setOpenTab(openTab === tab ? null : tab);
  };

  const randomAboutMe =
    "Hello! I'm Casper the Ghost, a passionate developer with a love for creating innovative and user-friendly applications. In my free time, I enjoy exploring new technologies, contributing to open-source projects, and sipping on a good cup of coffee.";

  const socialMediaLinks = [
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/janedoe' },
    { icon: faTwitter, url: 'https://twitter.com/janedoe' },
    { icon: faInstagram, url: 'https://www.instagram.com/janedoe/' },
    { icon: faFacebook, url: 'https://www.facebook.com/janedoe/' },
    { icon: faGithub, url: 'https://github.com/janedoe' },
  ];

  const contactInfo = {
    email: 'janedoe@example.com',
    linkedin: 'https://www.linkedin.com/in/janedoe',
  };

  return (
    <div className='accordion'>
      <div
        className={`accordion-header ${openTab === 'aboutMe' ? 'open' : ''}`}
        onClick={() => toggleAccordion('aboutMe')}>
        About Me
      </div>
      {openTab === 'aboutMe' && (
        <div className='accordion-content'>
          <p>{randomAboutMe}</p>
        </div>
      )}

      <div
        className={`accordion-header ${
          openTab === 'socialMedia' ? 'open' : ''
        }`}
        onClick={() => toggleAccordion('socialMedia')}>
        Social Media
      </div>
      {openTab === 'socialMedia' && (
        <div className='accordion-content'>
          <div className='social-media-links'>
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'>
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
          <p>Email: {contactInfo.email}</p>
          <p>
            LinkedIn:{' '}
            <a
              href={contactInfo.linkedin}
              target='_blank'
              rel='noopener noreferrer'>
              {contactInfo.linkedin}
            </a>
          </p>
        </div>
      )}

      <div
        className={`accordion-header ${
          openTab === 'weatherAndQuotes' ? 'open' : ''
        }`}
        onClick={() => toggleAccordion('weatherAndQuotes')}>
        Weather and Quotes
      </div>
      {openTab === 'weatherAndQuotes' && (
        <div className='accordion-content'>
          <Weather />
          <RandomizedQuote />
        </div>
      )}
    </div>
  );
};

export default Accordion;
