import React from "react";

import "./Profile.scss";

function Profile(props) {

  return (
    <div className="bio">
      <div className="bio__gamerbio">{props.bio}</div>

      <div className="bio__container">
        {/* <div className="bio__recent-box">
          Recent Gamers <span className="bio__inner-text">Played With</span>
        </div> */}
        {/* {testData.map((gamer) => ( */}
          <div className="bio__gamers-container">
            <div className="bio__gamers-name">
              <span className="bio__profile-pic">{props.avatar}</span>
              {props.gamer_tag}
            </div>
          </div>
        {/* ))} */}
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
