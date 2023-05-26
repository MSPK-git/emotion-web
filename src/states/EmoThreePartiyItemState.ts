// This state relates to Marias project

import { atom } from "recoil";
import { persistState } from "./PersistOnBrowser";

export type EmoThreePartyItem = {
  name: string;
  item: string;
};

export const emoThreePartyItemsState = atom<EmoThreePartyItem[]>({
  key: "emoThreePartyItemsState",
  default: [{ name: "Peter", item: "Gurke" }],
  effects: [persistState("emoThreePartyItemsState")],
});
