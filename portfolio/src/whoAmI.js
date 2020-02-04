import React from 'react';
import './styles/whoAmI.css';
import myPhoto from './images/IMG_2589.jpeg';

const WhoAmI = () => {
  return (
    <div>
      <div id="whoAmI">
        <h2>Pleasure to meet you.</h2>
        <p />
        <img src={myPhoto} alt="Personal" />
        <p>
          I'm Vanessa, a New York born and based full stack software engineer
          with a background in restaurant management. My time in restaurants
          enforced my passion for well thought out systems, crafting amazing experiences
          and teams, collaborating, and the satisfaction that comes when form,
          function and aesthetics meet and merge.
          <p />
          I transitioned into engineering because I knew I wanted to do
          something bigger while still feeding this need to be creative,
          collaborative, to fix and improve. Thus began the journey and I
          enrolled into the Grace Hopper Academy,a full-time immersive software
          engineering program centered on full stack JavaScript development.
          As a recent graduate, I am currently open to all opportunities.
          <p />
          If you are interested in working together, let's connect! You can
          reach me by choosing one of the options to your left.
        </p>
      </div>
    </div>
  );
};

export default WhoAmI;
