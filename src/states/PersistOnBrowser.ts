import { AtomEffect } from "recoil";

/**
 * Returns an atom effect which stores the atom value in the browser's local storage
 * @param key A key of the atom state we want to persist in the local storage
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const persistState: (key: string) => AtomEffect<any> =
  (key) =>
  ({ setSelf, onSet }) => {
    // check if we are in the browser environment, if in server environment do nothing
    if (typeof window !== "undefined") {
      const savedValue = localStorage.getItem(key);
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue: unknown, _: unknown, isReset: boolean) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };
