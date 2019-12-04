import React from "react";
import styled from "styled-components";

const WidgetContainer = styled.div`
  display: flex;
  margin-left: 30px;
`;

const Col1Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 60%;
  margin-right: 1.5em;
  /* // border: 1px solid #99a3ad; */
`;

const Col2Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 40%;
  /* // border: 1px solid #99a3ad; */
`;

const GoogleReminders = styled.div`
  color: #313660;
  font-size: 1em;
  padding: 10px;
  width: 85%;
  height: 20vh;
  margin-bottom: 2.5em;
  max-height: 100%;
  border: 1px solid #99a3ad;
  background-color: white;
  border-radius: 10px;
  overflow: auto;
`;
const JiraReminders = styled.div`
  color: #313660;
  font-size: 1em;
  padding: 10px;
  width: 85%;
  height: 34vh;
  max-height: 100%;
  border: 1px solid #99a3ad;
  background-color: white;
  border-radius: 10px;
  overflow: auto;
`;

const MavenLinkHours = styled.div`
  color: #313660;
  font-size: 1em;
  padding: 10px;
  margin-bottom: 2em;
  width: 85%;
  height: 45vh;
  max-height: 100%;
  background-color: white;
  border: 1px solid #99a3ad;
  border-radius: 10px;
  overflow: auto;
`;

const QuickLinks = styled.div`
  display: flex;
  justify-content: space-between;
  color: #313660;
  font-size: 1em;
  padding-bottom: 20px;
  width: 90%;
  height: 10vh;
  overflow: auto;
`;

const Links = styled.div`
  display: flex;
  padding: 0px !important;
  background-color: #e3e7ea;
  width: 90px;
  height: 90px;
`;

class Resources extends React.Component {
  render() {
    return (
      <div>
        <WidgetContainer>
          <Col1Container>
            <div>
              <h2>Google Reminders</h2>
              <GoogleReminders></GoogleReminders>
            </div>
            <div>
              <h2>Jira Ticket Board</h2>
              {/* <hr/> */}
              <JiraReminders></JiraReminders>
            </div>
          </Col1Container>
          <Col2Container>
            <div>
              <h2>Mavenlink Hours</h2>
              <MavenLinkHours></MavenLinkHours>
            </div>
            <div>
              <h2>Quick Links</h2>
              <QuickLinks>
                <a href="https://google.com">
                  <Links />
                </a>
                <a href="https://google.com">
                  <Links />
                </a>
                <a href="https://google.com">
                  <Links />
                </a>
              </QuickLinks>
            </div>
          </Col2Container>
        </WidgetContainer>
      </div>
    );
  }
}

export default Resources;
