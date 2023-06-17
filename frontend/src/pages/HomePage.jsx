import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "./HomePage.css";
import Login from "../components/Login.jsx";
import SignUp from "../components/SignUp.jsx";

const currentDate = new Date().getFullYear();

const HomePage = () => {
  return (
    <div className="wrapper">
      <div className="auth-container">
        {/* <p>Chat-app</p> */}
        <h1>Welcome Back!</h1>
        <Tabs>
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* <p>&copy; {currentDate}</p> */}
      </div>
      <div className="design-container">
        <div className="round-design"></div>
        <div className="blur-round-design"></div>
      </div>
    </div>
  );
};

export default HomePage;
