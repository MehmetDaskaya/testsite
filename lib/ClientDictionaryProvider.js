"use client";

import { DictionaryContext } from "./DictionaryContext";

export default function ClientDictionaryProvider({ dictionary, children }) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}
