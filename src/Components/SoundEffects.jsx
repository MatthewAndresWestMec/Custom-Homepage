// SoundComponent.js

import React, { useState } from 'react';
import { Howl } from 'howler';
import hoverSound from '../assets/hover.mp3';
import clickSound from '../assets/click.mp3';

const SoundComponent = () => {
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const playHover = () => {
    // Clear existing timeout (if any)
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    const timeout = setTimeout(() => {
      const sound = new Howl({
        src: [hoverSound],
        volume: 0.5,
      });
      sound.play();
    }, 100);
    setHoverTimeout(timeout);
  };

  const playClick = () => {
    const sound = new Howl({
      src: [clickSound],
    });
    sound.play();
  };

  return (
    <div>
      {/* Elements with hover effect */}
      <div className="hover-element" onMouseEnter={playHover} onMouseLeave={() => clearTimeout(hoverTimeout)}>
        Hover me for a hover sound!
      </div>

      {/* Elements with click effect */}
      <div className="click-element" onClick={playClick}>
        Click me for a click sound!
      </div>
    </div>
  );
};

export default SoundComponent;
