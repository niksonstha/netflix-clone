import React, { useEffect, useState } from "react";
import "./Nav.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function Nav() {
  const [show, setShow] = useState(false);

  const transitationNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const logoutHanlder = () => {
    signOut(auth);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitationNavbar);

    return () => {
      window.removeEventListener("scroll", transitationNavbar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
          onClick={logoutHanlder}
        />
      </div>
    </div>
  );
}

export default Nav;
