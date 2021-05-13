import React from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";

function AuthContainer({
  authtype,
  firstName,
  setFirstName,
  age,
  setAge,
  email,
  setEmail,
  password,
  setPassword,
  emergencyContactName,
  emergencyContactPhone,
  setEmergencyContactName,
  setEmergencyContactPhone,
  missedLogin,
  setMissedLogin,
  addiction,
  setAddiction,
  setMoodHistory,
  setIsLoggedIn,
  zipCode,
  setZipCode,
}) {
  const renderThis = [];
  if (authtype === "signup") {
    renderThis.push(
      <Signup
        key="signup"
        firstName={firstName}
        setFirstName={setFirstName}
        age={age}
        setAge={setAge}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        emergencyContactName={emergencyContactName}
        emergencyContactPhone={emergencyContactPhone}
        setEmergencyContactName={setEmergencyContactName}
        setEmergencyContactPhone={setEmergencyContactPhone}
        missedLogin={missedLogin}
        setMissedLogin={setMissedLogin}
        addiction={addiction}
        setAddiction={setAddiction}
        zipCode = {zipCode}
        setZipCode = {setZipCode}
      />
    );
  } else if (authtype === "login") {
    renderThis.push(
      <Login
        key="signup"
        setFirstName={setFirstName}
        setAge={setAge}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        setEmergencyContactName={setEmergencyContactName}
        setEmergencyContactPhone={setEmergencyContactPhone}
        setMissedLogin={setMissedLogin}
        addiction={addiction}
        setAddiction={setAddiction}
        setMoodHistory={setMoodHistory}
        setIsLoggedIn={setIsLoggedIn}
        zipCode = {zipCode}
        setZipCode = {setZipCode}
      />
    );
  }

  return (
    <div className="auth-container">
      <div id="inputFields">{renderThis}</div>
    </div>
  );
}

export default AuthContainer;
