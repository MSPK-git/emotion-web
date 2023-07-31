import { ReactElement, useState } from "react";
import Table from "./Table";
import "./EmoticonOne.css";
import { useRecoilState } from "recoil";
import { partyItemsState } from "../../states/PartyItemState";

import * as React from 'react';

export type EmoticonOne = {
  firstName: string;
  lastName: string;
};

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
          backgroundColor: "#B8E6B1",
        }}
      >
        <div style={{ padding: "70px" }}>
          <h1 className="emo1_h1">
            Willkommen, <br/>was bringst du zur Grillparty
            mit?
          </h1>
          <p className="emo1_p">
            Schön, dass du dabei bist. Bitte trage deinen Namen ein und teile uns mit, was du zur Grillparty mitbringst. <br/>
            In der Tabelle kannst du sehen, was die anderen Teilnehmer bereits mitbringen werden. Es macht jedoch nichts, wenn etwas mehrfach vorhanden ist. <br/>
            Lass dir etwas Zeit und überlege in Ruhe, was du mitbringen möchtest.
          </p>
          
          <form className="form1">
            <label className="label1">
              Name:
              <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                name="name"
                className="input1"
              />
            </label>
            <label className="label1">
              Ich bringe mit...
              <input
                type="text"
                value={inputItem}
                onChange={(e) => setInputItem(e.target.value)}
                name="item"
                className="input1"
              />
            </label>
            <button
              className="button1"
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

          <div className="table1" style={{ display: "flex" }}>
            <Table items={partyItems}></Table>
          </div>
        </div>
      </div>
    </>
  );
}
