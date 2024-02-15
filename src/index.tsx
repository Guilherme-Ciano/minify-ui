import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./utils/globalStyles.css";

import MinimalButton from "./components/Buttons/index";
import MinimalInput from "./components/Inputs";

import { BasePadding, Column, PageWrapper, Row } from "./components/Layout";
import { A, H1, H2, H3, P } from "./components/Typography";

ReactDOM.render(<App />, document.getElementById("root"));

export const Button = MinimalButton;
export const Input = MinimalInput;

export const Layout = {
  Row,
  Column,
  BasePadding,
  PageWrapper,
};

export const Typography = {
  A,
  H1,
  H2,
  H3,
  P,
};
