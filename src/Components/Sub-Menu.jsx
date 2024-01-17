import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Howl } from 'howler';
import clickSound from '../assets/click.mp3';
import {
  faEnvelope,
  faSearch,
  faHdd,
  faMapMarkerAlt,
  faGraduationCap,
  faChalkboardTeacher,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faTwitter,
  faSpotify,
  faSlack,
  faTrello,
  faFreeCodeCamp,
} from '@fortawesome/free-brands-svg-icons';

const TabsComponent = () => {
  const playClick = () => {
    const sound = new Howl({
      src: [clickSound],
    });
    sound.play();
  };

  const [activeTab, setActiveTab] = useState('Google');
  const [shortcuts, setShortcuts] = useState({
    Google: [
      { name: 'Gmail', icon: faEnvelope, link: 'https://mail.google.com/' },
      {
        name: 'Google Search',
        icon: faSearch,
        link: 'https://www.google.com/',
      },
      { name: 'Google Drive', icon: faHdd, link: 'https://drive.google.com/' },
      {
        name: 'Google Maps',
        icon: faMapMarkerAlt,
        link: 'https://www.google.com/maps/',
      },
    ],
    Entertainment: [
      { name: 'YouTube', icon: faYoutube, link: 'https://www.youtube.com/' },
      { name: 'Twitter', icon: faTwitter, link: 'https://twitter.com/' },
      { name: 'Spotify', icon: faSpotify, link: 'https://www.spotify.com/' },
    ],
    Work: [
      {
        name: 'Google Docs',
        icon: faFileAlt,
        link: 'https://docs.google.com/',
      },
      { name: 'Slack', icon: faSlack, link: 'https://slack.com/' },
      { name: 'Trello', icon: faTrello, link: 'https://trello.com/' },
    ],
    Learn: [
      {
        name: 'Coursera',
        icon: faGraduationCap,
        link: 'https://www.coursera.org/',
      },
      {
        name: 'Free Code Camp',
        icon: faFreeCodeCamp,
        link: 'https://www.freecodecamp.org/',
      },
      {
        name: 'Udemy',
        icon: faChalkboardTeacher,
        link: 'https://www.udemy.com/',
      },
    ],
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    playClick();
  };

  return (
    <div className='tabs-container'>
      <div className='tabs'>
        {Object.keys(shortcuts).map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}>
            {tab}
          </div>
        ))}
      </div>

      <div className='shortcuts'>
        {shortcuts[activeTab].map((shortcut) => (
          <a
            key={shortcut.name}
            href={shortcut.link}
            className='shortcut'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='icon-circle'>
              <FontAwesomeIcon icon={shortcut.icon} />
            </div>
            <span className='shortcutName'>{shortcut.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;
