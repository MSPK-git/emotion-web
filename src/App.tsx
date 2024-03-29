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
    color: "black"
  };

  return (
    <>
      {emotion !== Emotion.none ? (
        <button 
        className={`round-1 button-float ${emotion === Emotion.two ? "button-nostalgia" : ""}`} 
        onClick={() => setEmotion(Emotion.none)}
      >
        ←
      </button>
      
      ) : (
        <div className="App">
          <header className="App-header">
           
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                backgroundColor: "#282c34",
              }}
            >
              <div style={divStyle} onClick={() => setEmotion(Emotion.one)}>
                Emotion eins
              </div>
              <div style={divStyle} onClick={() => setEmotion(Emotion.two)}>
                Emotion zwei
              </div>
              <div style={divStyle} onClick={() => setEmotion(Emotion.three)}>
                Emotion drei
              </div>
            </div>
            <p>Bitte wähle eine der drei Emotionen aus.</p>
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
