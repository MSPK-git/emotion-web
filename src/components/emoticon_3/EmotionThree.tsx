import { ReactElement, useState } from "react";
import Table from "./Table";
import "./EmoticonThree.css";
import { useRecoilState } from "recoil";
import * as React from "react";
import Timer from "./elements/Timer";
import { useInView } from "react-intersection-observer";
import { emoThreePartyItemsState } from "../../states/EmoThreePartiyItemState";
export type EmoticonOne = {
  firstName: string;
  lastName: string;
};

export default function EmoticonThree({}: EmoticonOne): ReactElement {
  const [partyItems, setPartyItems] = useRecoilState(emoThreePartyItemsState);
  const [inputName, setInputName] = useState("");
  const [inputItem, setInputItem] = useState("");
  const [timeEnded, setTimeEnded] = useState(false);
  const [textChange, setTextChange] = useState(0);
  const [btnPressAmount, setBtnPressAmount] = useState(0);
  const [badItem, setBadItem] = useState("");

  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  const overlayStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    animation: "slide 4s 1 normal forwards",
    animationDelay: "2000ms",
  };
  // - UNUSED -
  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     console.log(window.scrollY);
  //     if (window.scrollY > 500) {
  //       console.log("Der Nutzer hat mehr als 500px gescrollt!");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  React.useEffect(() => {
    console.log(textChange);
  }, [textChange]);

  function endOfTime() {
    setTimeEnded(true);
  }
  function buttonPressed() {
    if (btnPressAmount === 0) {
      setBtnPressAmount((amount) => amount + 1);
      setBadItem(inputItem);
      setInputItem("");
    } else {
      setBadItem("");
      setTextChange(1);
      setTimeout(function () {
        setTextChange(2);
        setTimeout(function () {
          setTextChange(3);
        }, 5000);
      }, 5000);
    }
  }

  return (
    <>
      <div
        style={{
          padding: "2px",
          width: "100%",
          height: "100%",
          backgroundColor: "#222224",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            padding: "70px",
          }}
        >
          <h1
            style={{
              color: textChange === 1 ? "red" : "white",
              alignSelf: "center",
              padding: "60px 0px 0px 0px",
              position: "relative",
              zIndex: 99,
            }}
            className={textChange === 1 ? "blinkOpacity" : ""}
          >
            {textChange === 0
              ? "Bist du bei der Grillparty dabei?"
              : textChange === 1
              ? "Na endlich!"
              : textChange === 2
              ? "...wenn du nicht kommst..."
              : " ...laden wir DICH NIE WIEDER EIN!"}
          </h1>
          {textChange >= 2 ? (
            <>
              <div style={{ display: "flex" }}></div>
              <div
                style={{
                  margin: "auto",
                  position: "relative",
                  width: "1000px",
                  height: "500px",
                  top: "-133px",
                }}
              >
                <img
                  ref={ref}
                  src="./fear-ex.jpg"
                  className={inView ? "fadeIn" : ""}
                  alt="background"
                  style={{
                    opacity: inView ? 1 : 0,
                    transition: "opacity 2000ms",
                    width: "100%",
                  }}
                />
                <img
                  src="./fear-balls.png"
                  alt="foreground"
                  // @ts-ignore
                  style={{
                    ...overlayStyle,
                    width: "100%",
                    transitionDelay: "2000ms",
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <div
                style={{ alignSelf: "center" }}
                className={`blinkOpacity ${
                  inView ? "fastFadeInOut" : "borderTest"
                }`}
              >
                {textChange < 1 && <Timer endOfTime={endOfTime}></Timer>}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "30px",
                }}
              >
                <form>
                  <div style={{ height: "100px" }}>
                    <label
                      style={{
                        color: "white",
                      }}
                    >
                      Name:
                      <input
                        className={timeEnded && !inputName ? "blink input3" : "input3"}
                        type="text"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        name="name"
                      />
                    </label>
                  </div>
                  <label
                    style={{
                      color: "white",
                    }}
                  >
                    Ich bringe mit...
                  </label>
                  <div style={{ height: "100px", width: "400px" }}>
                    <input
                      className={timeEnded && !inputItem ? "blink input3" : "input3"}
                      id="input2"
                      type="text"
                      value={inputItem}
                      onChange={(e) => setInputItem(e.target.value)}
                      name="item"
                    />
                    {badItem && (
                      <div style={{ color: "red" }}>
                        {badItem}? Ekelhaft! Bringe etwas anderes mit!
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    {textChange < 1 && (
                      <button
                        className={`button-one ${
                          timeEnded && inputItem && inputName
                            ? "blinkOpacity"
                            : ""
                        }`}
                        onClick={(e) => {
                          if (inputItem && inputName) {
                            e.preventDefault();
                            buttonPressed();
                            if (btnPressAmount > 0) {
                              setPartyItems((prev) => [
                                ...prev,
                                { name: inputName, item: inputItem },
                              ]);
                            }
                          }
                        }}
                        disabled={inputItem && inputName ? false : true}
                      >
                        Ich bin dabei!
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </>
          )}
          {textChange < 2 && (
            <div
              className="table"
              style={{ margin: "0px 20% 0px 20%", display: "flex" }}
            >
              <Table items={partyItems}></Table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
