import { atom } from "recoil";
import { persistState } from "./PersistOnBrowser";

export enum Emotion {
  "none",
  "one",
  "two",
  "three",
}

export const emotionState = atom<Emotion>({
  key: "emotionState",
  default: Emotion.none,
  effects: [persistState("emotionState")],
});
