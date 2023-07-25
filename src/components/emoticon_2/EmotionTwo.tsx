import { ReactElement, useState } from "react";
// import Table from "./Table";
import "./EmoticonTwo.css";
import { useRecoilState } from "recoil";
// import { partyItemsState } from "../../states/PartyItemState";
import * as React from 'react';



export type EmoticonTwo = {
  firstName: string;
  lastName: string;
};

/**
 * A reusable panel which displays a text about the current app, its version and the changelog.
 */
export default function EmoticonTwo({
  firstName,
  lastName,
}: EmoticonTwo): ReactElement {
  const [videoId, setVideoId] = useState("");
  // const videoUrl = `https://www.youtube.com/embed/${videoId}`; 
  // console.log(videoUrl);
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setVideoId(event.target.value);
  };
  return (
    <>
      {/* <img
          src=""
          className={"photobook"}
          alt="background"
          style={{
            opacity: 1,
            width: "100%",
          }}
          /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundImage: `url('/nostalgia.jpg')`,
          backgroundRepeat: 'no-repeat',
          padding: "2px",
          width: "100%",
          height: "1500px",
        }}
      >
        <div style={{ padding: "70px" }}>
          <h1 className="heading-emotion-two">
            Willkommen, {firstName} {lastName} In welche Zeit möchtest du zurückversetzt werden?
          </h1>
          <form>
            <div>
              <select value={videoId} onChange={handleChange}>
                <option value="">Keine Zeit ausgewählt</option>
                <option value="Qt2mbGP6vFI">80er</option>
                <option value="4fndeDfaWCg">90er</option>
                <option value="LOZuxwVk7TU">2000er</option>
              </select>
              <p>Sie haben ausgewählt: {videoId}</p>
            </div>
          </form>
          {videoId !== "" && <div className="youtube-video-container" >
            <iframe className="videoNostalgie"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowfullscreen
            ></iframe>
          </div>}
          
          <div className="table" style={{ display: "flex" }}>
            {/* <Table items={partyItems}></Table> */}
          </div>
        </div>
      </div>
    </>
  );
}
