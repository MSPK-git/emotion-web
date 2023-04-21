import React, { ReactElement, useEffect, useRef } from "react";
import logo from "../logo.svg";

/**
 * A reusable panel which displays a text about the current app, its version and the changelog.
 */
export default function Home(): ReactElement {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Please choose your preferred emotion in the navigation above.
          </p>
        </header>
      </div>
    </>
  );
}
