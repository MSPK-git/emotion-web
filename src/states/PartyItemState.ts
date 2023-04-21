import { atom } from "recoil";
import { persistState } from "./PersistOnBrowser";

export type PartyItem = {
  name: string;
  item: string;
};

export const partyItemsState = atom<PartyItem[]>({
  key: "partyItemsState",
  default: [{ name: "Peter", item: "Gurke" }],
  effects: [persistState("partyItemsState")],
});
