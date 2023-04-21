import React, { ReactElement, useEffect, useRef } from "react";

function indexOfRegEx(
  string: string,
  regex: RegExp,
  startpos?: number
): number {
  const indexOf = string.substring(startpos || 0).search(regex);
  return indexOf >= 0 ? indexOf + (startpos || 0) : indexOf;
}



export const initialAboutPanelState = {
  size: {
    width: 1000,
    height: 600,
  },
  position: {
    x: 0,
    y: 0,
  },
  isVisible: true,
  isSnapped: true,
  zIndex: 1,
  gridPosition: 0,
  centered: true,
};

export type AboutPanelProps = {
  firstName: string;
  lastName: string;
};

/**
 * A reusable panel which displays a text about the current app, its version and the changelog.
 */
export default function EmotionThree({
  firstName,
  lastName

}: AboutPanelProps): ReactElement {





  return (
    <>
      <div style={{ padding: "0 50px 20px", height: "fit-content", backgroundColor: "red" }}>
        <h1 style={{ marginTop: "20px" }}>Willkommen</h1>

        <p>
          Hallo:{" "}
          <span style={{ fontFamily: "monospace" }}>{firstName}</span>
        </p>
        <p>
          <span style={{ fontFamily: "monospace" }} >{lastName} </span>
        </p>
      </div>
    </>
  );
}
