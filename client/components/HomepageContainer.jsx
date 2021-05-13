import React from 'react';
import styled, { css } from 'styled-components';
const HeaderDiv = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  background: #FFE8C2;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-top: 10px;
  /* padding-left: 10%; */
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`
const Header = styled.div`
  height: 20%;
  width: 70vw;
  color: #F0A868;
  background: #fff;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  padding-top: 5%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  `
  const ParaDiv = styled.div`
  height: 40%;
  width: 70vw;
  color: #F0A868;
  background: #fff;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  align-content: center;
  padding: 2%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  `
const CardDiv = styled.div`
  height: 50%;
  display: flex;
  color: #F0A868;
  background: #6A8D73;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-top: 10px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 30vw;
  justify-content: flex-start;
  align-items: center;
  background: #FFE8C2;
  /* padding-left: 20px; */
  /* padding-top: 4%; */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */;
  overflow: auto;
`
const Header2 = styled.div`
  /* height: 10%; */
  font-size: 20px;
  width: 25vw;
  background: #fff;
  text-align: center;
  padding-top: 4%;
  padding-bottom: 4%;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
`
const resources = [];
function HomepageContainer({
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
  zipCode,
}) {


    // const str = new String('SAMHSA');
    // const url = 'https://www.samhsa.gov/find-help/national-helpline';
    // const result = str.link(url);

    // if(isLoggedIn === true) {
      fetch(`https://api.aa.org.au/meetings.json?postcode=${zipCode}`)
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < 5; i++) {
          resources.push(<div className="meetingInfo">
            <p className="meetingInfoDetails">
              Name: {data.meetings[i].title}
              <br />Address: {data.meetings[i].address}
              <br />Status: {data.meetings[i].status}
              <br />Type: {data.meetings[i].type}
              <br />Zoom ID: {data.meetings[i].zoom_id}
              <br />Zoom Link: {data.meetings[i].zoom_link}
            </p>
          </div>);
        }
      })

    // }
    return (
        <div>
            <HeaderDiv>
            <Header>Mapping Patient Journeys in Drug Addiction Treatment</Header>
            <ParaDiv>Mapping the patient journey could help reduce relapse.
            Taking it's cue from Customer Journey Mapping in marketing, this project is intended to track a specific stage of the patient journey.
            With Daily Check-ins, resources, and points of contact to the health system, we could offer a complete tracking of where a patient is on their road to recovery.
            </ParaDiv>
            </HeaderDiv>
            <CardDiv>
                <Card>
                  <Header2>
                    Resources
                  </Header2>
                  {<a href = "https://www.samhsa.gov/find-help/national-helpline">SAMHSA</a>}
                </Card>
                <Card>
                  <Header2>
                    Meeting Information
                  </Header2>
                  {resources}
                </Card>
                <Card>
                  <Header2>
                    Find Care
                  </Header2>
                </Card>
            </CardDiv>
        </div>
    )
}
export default HomepageContainer;