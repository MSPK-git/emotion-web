import React, { useState, useEffect, ReactElement } from "react";

interface TimerProps {
  endOfTime: () => void;
}

function Timer({ endOfTime }: TimerProps): ReactElement {
  const [seconds, setSeconds] = useState<number>(10);
  const [fontSize, setFontSize] = useState<number>(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
      setFontSize((fontSize) => (fontSize < 70 ? fontSize + 2 : fontSize));
    }, 1000);

    // Clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (seconds < 0) {
      endOfTime();
    }
  }, [seconds]);

  return (
    <div style={{ fontWeight: "bold", color: "red", fontSize: fontSize }}>
      {seconds < 1
        ? "nur noch EIN Platz frei!"
        : `nur noch ${seconds} Plätze frei!`}
    </div>
  );
}

export default Timer;
