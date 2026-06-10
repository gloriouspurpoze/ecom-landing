"use client";
import React, { createContext, useContext, useState } from "react";

export type BusinessType = "restaurant" | "retail" | "homeservice";

interface PlaygroundState {
  businessType: BusinessType;
  brandName: string;
  primaryColor: string;
  setBusinessType: (type: BusinessType) => void;
  setBrandName: (name: string) => void;
  setPrimaryColor: (color: string) => void;
}

const PlaygroundContext = createContext<PlaygroundState | undefined>(undefined);

export const PlaygroundProvider = ({ children }: { children: React.ReactNode }) => {
  const [businessType, setBusinessType] = useState<BusinessType>("restaurant");
  const [brandName, setBrandName] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#FF5A1F");

  return (
    <PlaygroundContext.Provider value={{ businessType, brandName, primaryColor, setBusinessType, setBrandName, setPrimaryColor }}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export const usePlayground = () => {
  const context = useContext(PlaygroundContext);
  if (!context) throw new Error("usePlayground must be used within a PlaygroundProvider");
  return context;
};
