import React, { ReactElement, useEffect, useRef } from "react";



export type AboutPanelProps = {
  /** The formatted version string for the currently running application ("0.2.0"). */
  firstName: string;
  /** The changelog of the application as raw markdown text. */
  lastName: string;
};

/**
 * A reusable panel which displays a text about the current app, its version and the changelog.
 */
export default function EmoticonTwo({
  firstName,
  lastName
}: AboutPanelProps): ReactElement {

  return (
    <>
      <div
        style={{
          padding: "0 50px 20px",
          height: "fit-content",
          backgroundColor: "cyan",
        }}
      >
        <h1 style={{ marginTop: "20px" }}>Willkommen</h1>

        <p>
          Hallo: <span style={{ fontFamily: "monospace" }}>{firstName}</span>
        </p>
        <p>
        <span style={{ fontFamily: "monospace" }} >{lastName} </span>
        </p>
      </div>
    </>
  );
}
