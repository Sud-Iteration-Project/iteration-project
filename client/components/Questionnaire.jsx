import React, { useState } from "react";

function Questionnaire({ addiction, setMoodHistory, email }) {
  const [mood, setMood] = useState(() => "");
  const [todayMood, setTodayMood] = useState(() => false);
  const [textEntry, setTextEntry] = useState("");

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
      <button type="submit" onClick={() => sendQuestionnaireResponse()}>
        Submit
      </button>
    </div>
  );

  const finished = (
    <div>
      <p>You're all checked in for today!</p>
    </div>
  );

  return (
    <div className="questionnaire">
      <p>How are you feeling today?</p>
      {!todayMood ? questionnaire : finished}
    </div>
  );
}

export default Questionnaire;
