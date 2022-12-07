import React from "react";
import ReactDOM from "react-dom/client";
// import StyledPractice from "./1-styled-component/StyledPractice";
// import AnimationPseudo from "./1-styled-component/AnimationPseudo";
import { ThemeProvider } from "styled-components";
import ThemePractice from "./1-styled-component/ThemePractice";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 1-styled-component */}
    <ThemeProvider theme={darkTheme}>
      <ThemePractice />
    </ThemeProvider>
    {/* <StyledPractice />
      <AnimationPseudo /> */}
  </React.StrictMode>
);
