import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Emotion, emotionState } from "./states/EmotionState";
import { useRecoilState } from "recoil";
import EmoticonOne from "./components/emoticon_1/EmotionOne";
import EmoticonTwo from "./components/emoticon_2/EmotionTwo";
import EmoticonThree from "./components/emoticon_3/EmotionThree";
import Home from "./components/Home";

export type BackgroundColor = "#282c34" | "blue" | "cyan" | "turquise";
export default function App() {
  const [color, changeColor] = useState<BackgroundColor>("#282c34");
  const [emotion, setEmotion] = useRecoilState(emotionState);

  const divStyle = {
    backgroundColor: "lightgrey",
    padding: "20px",
    margin: "10px",
    borderRadius: "10px",
  };

  return (
    <>
      {emotion !== Emotion.none ? (
        <button className="round-1 button-float" onClick={() => setEmotion(Emotion.none)}>
          ←
        </button>
      ) : (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                backgroundColor: "#282c34",
              }}
            >
              <div style={divStyle} onClick={() => setEmotion(Emotion.one)}>
                Emoticon One
              </div>
              <div style={divStyle} onClick={() => setEmotion(Emotion.two)}>
                Emoticon Two
              </div>
              <div style={divStyle} onClick={() => setEmotion(Emotion.three)}>
                Emoticon Three
              </div>
            </div>
            <p>Please choose your preferred emotion in the navigation above.</p>
          </header>
        </div>
      )}

      {emotion === Emotion.one && (
        <EmoticonOne firstName="na" lastName="nu"></EmoticonOne>
      )}
      {emotion === Emotion.two && (
        <EmoticonTwo firstName="na" lastName="nu"></EmoticonTwo>
      )}
      {emotion === Emotion.three && (
        <EmoticonThree firstName="na" lastName="nu"></EmoticonThree>
      )}
    </>
  );
}
