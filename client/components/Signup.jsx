import React from "react";
import { useHistory } from "react-router-dom";

export const phoneNumberify = (value) => {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "");

  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

function Signup({
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
  addiction,
  setAddiction,
  zipCode,
  setZipCode,
}) {
  const history = useHistory();

  const signup = () => {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        age,
        emergencyContactName,
        emergencyContactPhone,
        addiction,
        firstName,
        zipCode,
      }),
    })
      .then((data) => data.json())
      .then((response) => {
        setPassword("");
        setAge(0);
        setEmergencyContactName("");
        setEmergencyContactPhone("");
        setAddiction("");
        setFirstName("");
        setZipCode(0);
        history.push("/login");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="signup">
      <div id="space">
        <label htmlFor="email">Email </label>
        <input
          id="email"
          type="email"
          placeholder="MyEmail@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="password">
          <br></br>Password{" "}
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label htmlFor="fname">First Name</label>
        <input
          id="fname"
          type="text"
          placeholder="John Doe"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          min="10"
          max="99"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <label htmlFor="zipCode">ZipCode</label>
        <input
          id="zipCode"
          type="number"
          placeholder="Enter Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        ></input>
        <label htmlFor="ename">Emergency Contact Name</label>
        <input
          id="ename"
          type="text"
          value={emergencyContactName}
          onChange={(e) => setEmergencyContactName(e.target.value)}
          required
        ></input>
        <label htmlFor="ephone">Emergency Contact Phone Number</label>
        <input
          type="tel"
          pattern="([0-9]{3})[0-9]{3}-[0-9]{4}"
          maxLength="13"
          value={emergencyContactPhone}
          onChange={(e) => {
            setEmergencyContactPhone(phoneNumberify(e.target.value));
          }}
          required
        ></input>
        <input
          type="radio"
          id="alcoholism"
          name="addiction"
          value="alcoholism"
          onChange={(e) => setAddiction(e.target.value)}
        />
        <label htmlFor="alcoholism">Alcoholism</label>
        <br></br>
        <input
          type="radio"
          id="methamphetamine"
          name="addiction"
          value="methamphetamine abuse"
          onChange={(e) => setAddiction(e.target.value)}
        />
        <label htmlFor="methamphetamine">Methamphetamine Abuse</label>
        <br></br>
        <input
          type="radio"
          id="opioids"
          name="addiction"
          value="opioids abuse"
          onChange={(e) => setAddiction(e.target.value)}
        />
        <label htmlFor="opiods">Opioids Abuse</label>
        <br></br>
        <input
          type="radio"
          id="heroine"
          name="addiction"
          value="heroine abuse"
          onChange={(e) => setAddiction(e.target.value)}
        />
        <label htmlFor="heroine">Heroin Abuse</label>
        <br></br>
        <input
          type="radio"
          id="cocaine"
          name="addiction"
          value="cocaine abuse"
          onChange={(e) => setAddiction(e.target.value)}
        />
        <label htmlFor="cocaine">Cocaine Abuse</label>
        <br></br>
        <button type="submit" onClick={(e) => signup()}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Signup;
