import React, {useEffect, useState } from "react";
import "./Navigation.scss";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import axios from "axios";
import Register from "./Register";
import Sidebar from "./Sidebar";

import {
  getAccessTokenInLocalStorage,
  storeAccessTokenInLocalStorage,
} from "../helpers/helpers";

function Navigation() {
    // State for user
    const [token, setToken] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [show, setShow] = useState(false)
  
    useEffect(() => {
      const storedToken = getAccessTokenInLocalStorage("token");
      return axios
        .get(`/current-user?token=${storedToken}`)
        .then((res) => {
          setToken(res.data.token);
          setCurrentUser(res.data.result);
        })
        .catch((err) => {
          setToken(null);
        });
    }, []);
  
  return (
    <div className="navbar">
          <Link to="/">
            <IconButton>
              <HomeIcon fontSize="large" className="navbar__home" />
            </IconButton>
          </Link>
          {token ? (
            <span className="navbar__authentication">
              <Sidebar gamer_tag={currentUser && currentUser.gamer_tag} />
            </span>
          ) : (
            <span className="navbar__authentication">
              <Link to="/register">
                <IconButton>
                  <Button
                    variant="outlined"
                    style={{
                      backgroundColor: "transparent",
                      color: "#fff",
                    }}
                  >
                    Sign up
                  </Button>
                </IconButton>
              </Link>
              <Link to="/login">
                <IconButton>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#fff",
                      color: "#000",
                    }}
                  >
                    Login
                  </Button>
                </IconButton>
              </Link>
            </span>
          )}
      </div>
  )
}

export default Navigation;
