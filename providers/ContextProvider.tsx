"use client";

import { createContext, useState } from "react";

export const AppContext = createContext<any>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  return (
    <AppContext.Provider value={{ isLoading, setIsLoading, result, setResult }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
