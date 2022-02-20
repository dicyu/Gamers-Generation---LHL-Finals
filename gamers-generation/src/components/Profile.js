import React from "react";

import "./Profile.scss";

function Profile(props) {
  const testData = ["Ren", "bybang", "pro.di.gy"];

  return (
    <div className="bio">
      <div className="bio__gamerbio">Bio of the person goes here</div>

      <div className="bio__container">
        <div className="bio__recent-box">
          Recent Gamers <span className="bio__inner-text">Played With</span>
        </div>
        {testData.map((gamer) => (
          <div className="bio__gamers-container">
            <div className="bio__gamers-name">
              <span className="bio__profile-pic">Picture</span>
              {gamer}
            </div>
          </div>
        ))}
      </div>

      <div className="bio__skill-container">
        <div className="bio__skill-text">
          <p>Preferences</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
