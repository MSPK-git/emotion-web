import { ReactElement, useState } from "react";
import Table from "./Table";
import "./EmoticonOne.css";
import { useRecoilState } from "recoil";
import { partyItemsState } from "../../states/PartyItemState";

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

export type EmoticonOne = {
  /** The formatted version string for the currently running application ("0.2.0"). */
  firstName: string;
  /** The changelog of the application as raw markdown text. */
  lastName: string;
};

/**
 * A reusable panel which displays a text about the current app, its version and the changelog.
 */
export default function EmoticonOne({
  firstName,
  lastName,
}: EmoticonOne): ReactElement {
  const [partyItems, setPartyItems] = useRecoilState(partyItemsState);
  const [inputName, setInputName] = useState("");
  const [inputItem, setInputItem] = useState("");
  return (
    <>
      <div
        style={{
          padding: "2px",
          width: "100%",
          height: "1500px",
          backgroundColor: "lightblue",
        }}
      >
        <div style={{ padding: "70px" }}>
          <h1>
            Willkommen, {firstName} {lastName} was bringst du zur Grillparty
            mit?
          </h1>
          <form>
            <label>
              Name:
              <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                name="name"
              />
            </label>
            <label>
              Ich bringe mit...
              <input
                type="text"
                value={inputItem}
                onChange={(e) => setInputItem(e.target.value)}
                name="item"
              />
            </label>
            <button
              className="button-one"
              onClick={() => {
                if (inputItem && inputName) {
                  setPartyItems((prev) => [
                    ...prev,
                    { name: inputName, item: inputItem },
                  ]);
                }
              }}
            >
              Speichern
            </button>
          </form>
          <div className="table" style={{ display: "flex" }}>
            <Table items={partyItems}></Table>
          </div>
        </div>
      </div>
    </>
  );
}
