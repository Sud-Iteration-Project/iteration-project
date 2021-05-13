import React, { useState } from "react";

function Questionnaire({ addiction, setMoodHistory, email }) {
  const [mood, setMood] = useState(() => "");
  const [todayMood, setTodayMood] = useState(() => false);
  const [textEntry, setTextEntry] = useState("");
  const [attendAppointments, setAttendAppointments] = useState("");
  const [appointments, setAppointments] = useState("");
  const [takeMedication, setTakeMedication] = useState("");
  const [medications, setMedications] = useState("");

  function sendQuestionnaireResponse() {
    if (mood && mood !== "" && textEntry && textEntry !== "") {
      fetch("/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, mood, textEntry }),
      })
        .then((data) => data.json())
        .then((response) => {
          setMoodHistory(response.moodHistory);
          setTodayMood(true);
        });
    }
  }

  const questionnaire = (
    <div class="questions">
      <p>How are you feeling today?</p>
      <span>
        <input
          type="radio"
          id="unwell"
          value="unwell"
          name="mood"
          onChange={(e) => setMood(e.target.value)}
        ></input>
        <label htmlFor="unwell">Unwell</label>
        <input
          type="radio"
          id="neutral"
          value="neutral"
          name="mood"
          onChange={(e) => setMood(e.target.value)}
        ></input>
        <label htmlFor="neutral">Neutral</label>
        <input
          type="radio"
          id="great"
          value="great"
          name="mood"
          onChange={(e) => setMood(e.target.value)}
        ></input>
        <label htmlFor="great">Great</label>
      </span>
      <p>Describe your day :</p>
      <textarea
        class="text-entry"
        onChange ={(e) => setTextEntry(e.target.value)}
      ></textarea>
      <p>Have you or will you be attending any appointments and/or meetings today?</p>
      <span>
        <input
            type="radio"
            id="yes"
            value="yes"
            name="appointments"
            onChange={(e) => setAttendAppointments(e.target.value)}
          ></input>
          <label htmlFor="yes">Yes</label>
          <input
            type="radio"
            id="no"
            value="no"
            name="appointments"
            onChange={(e) => setAttendAppointments(e.target.value)}
          ></input>
          <label htmlFor="no">No</label>
      </span>
      <p>If so, which appointments and/or meetings have you or will you attend today?</p>
      <textarea
        class="text-entry"
        onChange ={(e) => setAppointments(e.target.value)}
      ></textarea>
      <p>Have you or will you be taking any prescribed medication today?</p>
      <span>
        <input
            type="radio"
            id="yes"
            value="yes"
            name="medication"
            onChange={(e) => setTakeMedication(e.target.value)}
          ></input>
          <label htmlFor="yes">Yes</label>
          <input
            type="radio"
            id="no"
            value="no"
            name="medication"
            onChange={(e) => setTakeMedication(e.target.value)}
          ></input>
          <label htmlFor="no">No</label>
      </span>
      <p>If so, which medication have you or will you be taking today?</p>
      <textarea
        class="text-entry"
        onChange ={(e) => setMedications(e.target.value)}
      ></textarea>
      <div className="submitButton">
        <button type="submit" onClick={() => sendQuestionnaireResponse()}>
          Submit
        </button>
      </div>
    </div>
  );

  const finished = (
    <div>
      <p>You're all checked in for today!</p>
    </div>
  );

  return (
    <div className="questionnaire">
      {!todayMood ? questionnaire : finished}
    </div>
  );
}

export default Questionnaire;
