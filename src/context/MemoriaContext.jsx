import React, { createContext, useState } from "react";

// 1. Létrehozzuk a Context-et
const MemoriaContext = createContext();

// 2. A Context Provider funkcionális komponens
export const MemoriaProvider = ({ children }) => {
  function clickEllenorzes(num) {
    if (num % 2 == 0) {
      return 0;
    } else {
      return num++;
    }
  }
  return (
    <MemoriaContext.Provider value={{}}>{children}</MemoriaContext.Provider>
  );
};

// 3. Exportáljuk a Context-et és a Provider-t
