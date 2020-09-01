/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, ReactElement, useContext } from "react";
import {
  LoginButton,
  LogoutButton,
  SessionContext,
} from "@inrupt/solid-ui-react";
import logo from "../logo.svg";
import "./Header.scss";

const Header: FC<{}> = (): ReactElement => {
  const { session } = useContext(SessionContext);

  return (
    <header>
      <a className="logo" href="/">
        <img src={logo} width="80" alt="KBC Bank Logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a
              href="https://bank-vision.webflow.io/#plans"
              className="secondary-link"
            >
              Plans
            </a>
          </li>
          <li>
            <a
              href="https://bank-vision.webflow.io/#save"
              className="secondary-link"
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="https://bank-vision.webflow.io/#invest"
              className="secondary-link"
            >
              Our guarantee
            </a>
          </li>
          <li>
            <a
              href="https://bank-vision.webflow.io/#testimonial"
              className="secondary-link"
            >
              Success stories
            </a>
          </li>
        </ul>
        {session.info.webId ? (
          <LogoutButton>
            <a href="#" className="second-button popup-button w-button">
              Logout
            </a>
          </LogoutButton>
        ) : (
          <LoginButton
            oidcIssuer="https://inrupt.net/"
            redirectUrl="http://localhost:3000"
          >
            <a href="#" className="second-button popup-button w-button">
              Login
            </a>
          </LoginButton>
        )}
      </nav>
    </header>
  );
};
export default Header;
