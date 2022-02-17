import { useState, useEffect } from "react";
import axios from "axios";

export default function useAppData() {
  const [state, setState] = useState({
    gamers: {
      id: null,
      name: "",
      gamer_tag: "",
      email: "",
      password: "",
      language: "English",
      timezone: "",
    },
    friends_list: {
      gamer_id: null,
      friends: {
        id: null,
        // gamer_tag: null,
        // avatar: "",
      },
    },
    reports: {},
  });

  // Acquisition of App data

  useEffect(() => {
    Promise.all([
      axios.get("/gamers"),
      axios.get("/friends"),
      axios.get("/reports"),
    ])
      .then((all) => {
        setState({
          gamers: all[0].data,
          friends_list: all[1].data,
          reports: all[2].data,
        });
      })
      .catch((err) => {
        console.log("Database info is not here, ", err);
      });
  });

  const register = (id, gamers) => {
    const gamer = { ...state.gamers[id], gamers: { ...gamers } };
    const newGamer = { ...state.gamers, [id]: { gamer } };

    return axios
      .post(`/gamers/${id}`, newGamer)
      .then(() => setState(...state, gamer));
  };

  const addFriend = (id, friends_list) => {
    const friend = {
      ...state.friends_list[id],
      friends_list: { ...friends_list },
    };

    const friends = {
      ...state.friends_list,
      [id]: friend,
    };

    return axios.put(`/friends/${id}`, friend).then((res) => {
      setState(...state, friends);
      return res;
    });
  };

  const removeFriend = (id, friends_list) => {
    const friend = {
      ...state.friends_list[id],
      friends_list: { ...friends_list },
    };

    const friends = {
      ...state.friends_list,
      [id]: friend,
    };

    return axios.delete(`/friends/${id}`, friend).then((res) => {
      setState(...state, friends);
      return res;
    });
  };

  return { state, setState, addFriend, removeFriend, register };
}
