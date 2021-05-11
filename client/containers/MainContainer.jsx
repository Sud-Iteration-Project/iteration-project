import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import AuthContainer from "./AuthContainer";
import ContentContainer from "./ContentContainer";
import HomepageContainer from "../components/HomepageContainer";

function MainContainer() {
  const [firstName, setFirstName] = useState(() => "");
  const [age, setAge] = useState(() => 0);
  const [email, setEmail] = useState(() => "");
  const [password, setPassword] = useState(() => "");
  const [emergencyContactName, setEmergencyContactName] = useState(() => "");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState(() => 0);
  const [missedLogin, setMissedLogin] = useState(() => 0);
  const [addiction, setAddiction] = useState(() => "");
  const [isLoggedIn, setIsLoggedIn] = useState(() => false);
  const [moodHistory, setMoodHistory] = useState(() => []);
  const [zipCode, setZipCode] = useState(0);

  return (
    <div className="main-container">
      <Router>
        <NavBar
          setFirstName={setFirstName}
          age={age}
          emergencyContactName={emergencyContactName}
          emergencyContactPhone={emergencyContactPhone}
          setEmergencyContactName={setEmergencyContactName}
          setEmergencyContactPhone={setEmergencyContactPhone}
          missedLogin={missedLogin}
          addiction={addiction}
          moodHistory={moodHistory}
          isLoggedIn={isLoggedIn}
          zipCode = {zipCode}
          setZipCode = {setZipCode}
        />

        <Switch>
          <Route path="/login" exact>
            <AuthContainer
              authtype="login"
              setFirstName={setFirstName}
              setAge={setAge}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              setEmergencyContactName={setEmergencyContactName}
              setEmergencyContactPhone={setEmergencyContactPhone}
              setMissedLogin={setMissedLogin}
              setAddiction={setAddiction}
              setIsLoggedIn={setIsLoggedIn}
              setMoodHistory={setMoodHistory}
              zipCode = {zipCode}
              setZipCode = {setZipCode}
            />
          </Route>
        </Switch>
        <Switch>
          <Route path="/signup" exact>
            <AuthContainer
              authtype="signup"
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
          </Route>
        </Switch>
        <Switch>
          <Route path="/user" exact>
            <ContentContainer
              email={email}
              firstName={firstName}
              age={age}
              emergencyContactName={emergencyContactName}
              emergencyContactPhone={emergencyContactPhone}
              setEmergencyContactName={setEmergencyContactName}
              setEmergencyContactPhone={setEmergencyContactPhone}
              missedLogin={missedLogin}
              addiction={addiction}
              moodHistory={moodHistory}
              setMoodHistory={setMoodHistory}
              isLoggedIn={isLoggedIn}
              zipCode = {zipCode}
              setZipCode = {setZipCode}
            />
          </Route>
        </Switch>
        <Switch>
          <Route path="/" exact>
            <HomepageContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default MainContainer;
