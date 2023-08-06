import { ReactElement, useState } from "react";
import "./EmoticonTwo.css";
import * as React from 'react';

type SelectOption = {
  value: string;
  display: string;
};

const options: SelectOption[] = [
  { value: '', display: 'Keine Zeit ausgewählt' },
  { value: 'fNFzfwLM72c', display: '70er' },
  { value: 'Qt2mbGP6vFI', display: '80er' },
  { value: '4fndeDfaWCg', display: '90er' },
  { value: 'LOZuxwVk7TU', display: '2000er' },
];

const EraContent: React.FC<{ era: string }> = ({ era }) => {
  switch (era) {
    case '70er':
      return <div>Disco music, psychedelic art, Star Wars, personal computers</div>;
    case '80er':
      return <div>MTV, neon fashion, Brat Pack movies, video games</div>;
    case '90er':
      return <div>Grunge and hip hop music, Internet, popular TV shows, Y2K fears</div>;
    case '2000er':
      return <div>Social media, reality TV, smartphones, emo and pop punk music</div>;
    default:
      return null;
  }
};

export type EmoticonTwo = {
  firstName: string;
  lastName: string;
};

export default function EmoticonTwo({
  firstName,
  lastName,
}: EmoticonTwo): ReactElement {
  const [selectedOption, setSelectedOption] = useState<SelectOption>(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const option = options.find((option) => option.value === value);
    if (option) setSelectedOption(option);
  };

  return (
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
            <select value={selectedOption.value} onChange={handleChange}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.display}
                </option>
              ))}
            </select>
            <p>Sie haben ausgewählt: {selectedOption.display}</p>
          </div>
        </form>
        {selectedOption.value !== "" && 
          <div className="outer">
            <img className="tv" id="image" src="/oldTv.png" alt="Image Description" />
            <div className="youtube-video-container" >
              <iframe className="videoNostalgie"
                width="1080px"
                height="720px"
                src={`https://www.youtube.com/embed/${selectedOption.value}?autoplay=1&controls=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>
          </div>}
        <EraContent era={selectedOption.display} />
        <div className="table" style={{ display: "flex" }}>
        </div>
      </div>
    </div>
  );
}
