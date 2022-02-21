import React, { useEffect, useMemo, useRef, useState } from "react";
import "./ProfileCards.scss";
import TinderCard from "react-tinder-card";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

function ProfileCards() {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState([]);
  const [childRefs, setChildRefs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    axios
      .get("/profileCards")
      .then((req) => {
        const refs = [];
        req.data.forEach((person) => {
          const personRef = React.createRef();
          person.ref = personRef;
          refs.push(personRef);
        });
        setPeople(req.data);
        setChildRefs(refs);
        setCurrentIndex(req.data.length - 1);
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

  const createLike = (sent_like, received_like) => {
    axios
      .post("/likes", {
        sent_like,
        received_like,
      })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSwipe = (dir, person_id) => {
    swipe(dir);
    if (dir === "right") {
      createLike(1, person_id);
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className="swipeable__card">
      {people.map((person, index) => (
        <TinderCard
          ref={person.ref}
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, person.name, index)}
          onCardLeftScreen={() => outOfFrame(person.name, index)}
        >
          <div className="card_bio__container">
            <div
              className="card"
              style={{
                backgroundImage: `url(${person.avatar})`,
              }}
            >
              <h3>{person.name}</h3>
            </div>
            <div className="bio">{person.bio}</div>
          </div>
        </TinderCard>
      ))}
      <div className="swipeButtons">
        {people.map((person) => (
          <>
            <IconButton
              className="swipeButtons__left"
              style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
              onClick={() => handleSwipe("left", person.id)}
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
              onClick={() => handleSwipe("right", person.id)}
            >
              <FavoriteIcon fontSize="large" />
            </IconButton>
          </>
        ))}
      </div>
    </div>
  );
}

export default ProfileCards;
