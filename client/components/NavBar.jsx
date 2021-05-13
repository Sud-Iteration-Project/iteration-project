import React from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavBarElements";

function NavBar({
  setFirstName,
  setAge,
  setEmergencyContactName,
  setEmergencyContactPhone,
  setMissedLogin,
  setAddiction,
  setMoodHistory,
  setIsLoggedIn,
  isLoggedIn,
  setZipCode,
}) {
  function logOut() {
    setFirstName("");
    setAge(0);
    setEmergencyContactName("");
    setEmergencyContactPhone(0);
    setMissedLogin(0);
    setAddiction("");
    setMoodHistory([]);
    setIsLoggedIn(false);
    setZipCode(0);
  }

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>SUD App</h1>
        </NavLink>
        <NavMenu>
          {isLoggedIn === false && <NavLink to="/"><h1>Home</h1></NavLink>}
          {isLoggedIn === true && <NavLink to="/user"><h1>Dashboard</h1></NavLink>}
          {isLoggedIn === false && <NavLink to="/login"><h1>Login</h1></NavLink>}
        </NavMenu>
        {isLoggedIn === true && (
          <NavBtn onClick={() => logOut()}>
            <NavBtnLink to="/login">Log Out</NavBtnLink>
          </NavBtn>
        )}
        {isLoggedIn === false && (
          <NavBtn>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          </NavBtn>
        )}
      </Nav>
    </>
  );
}

export default NavBar;
