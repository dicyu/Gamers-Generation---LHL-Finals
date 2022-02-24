import React, { useEffect, useMemo, useRef, useState } from "react";
import "./ProfileCards.scss";
import TinderCard from "react-tinder-card";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import {
  getAccessTokenInLocalStorage,
  storeAccessTokenInLocalStorage,
} from "../helpers/helpers";

function ProfileCards(props) {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState([]);
  const [childRefs, setChildRefs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState();

  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    const storedToken = getAccessTokenInLocalStorage("token");
    axios
      .get(`/profileCards?token=${storedToken}`)
      .then((res) => {
        const refs = [];
        res.data.result.forEach((person) => {
          const personRef = React.createRef();
          person.ref = personRef;
          refs.push(personRef);
        });
        setPeople(res.data.result);
        setChildRefs(refs);
        setCurrentIndex(res.data.result.length - 1);
      })
      .catch((error) => setError(error));
  }, []);

  // swipeable card
  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < people.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < people.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  const onSwipe = (dir, person, index) => {
    swiped(dir, person.name, index);

    if (dir === "right") {
      props.createLike(person.id);
      console.log(`You Liked ${person.name}`);
    }
  };

  return (
    <div className="swipeable__card">
      {people.map((person, index) => (
        
        people ? 
          
        <TinderCard
        ref={person.ref}
        className="swipe"
        key={person.name}
        preventSwipe={["up", "down"]}
        onSwipe={(dir) => onSwipe(dir, person, index)}
        onCardLeftScreen={() => outOfFrame(person.name, index)}
        >
        <div className="card_bio__container">
          <div
            className="card"
            style={{
              backgroundImage: `url(${person.avatar})`,
            }}
            >
          </div>
          <div className="bio">
            {person.gamer_tag}
            <br />
            <div className="bio-bio">
            {person.bio}
            </div>
          </div>
        </div>
        {console.log(people)}
      </TinderCard>

        :
        
        <TinderCard
        className="swipe"
        preventSwipe={["up", "down", "left", "right"]} >
          {console.log("Working?")}
      
        <div className="card_bio__container">
          <div
            className="card"
            style={{
              backgroundImage: `url(https://tinyurl.com/2p8w3hbr)`,
            }}
            >
          </div>
          <div className="bio">
            The Panda
            <br />
            <div className="bio-bio">
            The Panda says you are out of matches.
            </div>
          </div>
        </div>
      </TinderCard>
        
      ))}
      
      <div className="swipeButtons">
        <IconButton
          className="swipeButtons__left"
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          // onClick={() => handleSwipe("left", person.id)}
          onClick={() => swipe("left")}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton
          className="swipeButtons__repeat"
          style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
          onClick={() => goBack()}
        >
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton
          className="swipeButtons__right"
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          // onClick={() => handleSwipe("right", person.id)}
          onClick={() => swipe("right")}
        >
          <FavoriteIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default ProfileCards;
