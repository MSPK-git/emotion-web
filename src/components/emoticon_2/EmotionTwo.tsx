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
      <div className="bg"
        style={{
          backgroundImage: `url('/nostalgia.jpg')`,
          backgroundRepeat: 'no-repeat',
          padding: "2px",
          width: "100%",
          height: "1500px",
        }}
      >
        <div style={{ padding: "70px" }}>
          <h1 className="heading-emotion-two">
            Willkommen, In welche Zeit möchtest du zurückversetzt werden?
          </h1>
          <form>
            <div>
              <select value={videoId} onChange={handleChange}>
                <option value="">Keine Zeit ausgewählt</option>
                <option value="fNFzfwLM72c" className="70er">70er</option>
                <option value="Qt2mbGP6vFI" className="80er">80er</option>
                <option value="4fndeDfaWCg" className="90er">90er</option>
                <option value="LOZuxwVk7TU" className="2000er">2000er</option>
              </select>
              <p>Sie haben ausgewählt: {videoId}</p>
            </div>
          </form>
          <div className="outer">
          <img className="tv" id="image" src="/oldTv.png" alt="Image Description" />
          {videoId !== "" && <div className="youtube-video-container" >
            <iframe className="videoNostalgie"
              width="1080px"
              height="720px"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowfullscreen
              ></iframe>
          </div>}
              </div>
          
          <div className="table" style={{ display: "flex" }}>
            {/* <Table items={partyItems}></Table> */}
          </div>
        </div>
      </div>
    </>
  );
}
