"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { parseVerticalParam, type VerticalId } from "@/data/verticals";

export type BusinessType = VerticalId;

export const VERTICAL_STORAGE_KEY = "torq-orbit-vertical";
const META_STORAGE_KEY = "torq-orbit-vertical-meta";

type VerticalMeta = {
  vertical: BusinessType;
  source: "modal" | "skip" | "url" | "manual";
  answeredAt: string;
};

function readStoredVertical(): BusinessType | null {
  if (typeof window === "undefined") return null;
  return parseVerticalParam(localStorage.getItem(VERTICAL_STORAGE_KEY));
}

function persistVertical(type: BusinessType, source: VerticalMeta["source"]) {
  localStorage.setItem(VERTICAL_STORAGE_KEY, type);
  const meta: VerticalMeta = { vertical: type, source, answeredAt: new Date().toISOString() };
  localStorage.setItem(META_STORAGE_KEY, JSON.stringify(meta));
}

interface PlaygroundState {
  businessType: BusinessType;
  brandName: string;
  primaryColor: string;
  hydrated: boolean;
  verticalModalOpen: boolean;
  setBusinessType: (type: BusinessType) => void;
  setBrandName: (name: string) => void;
  setPrimaryColor: (color: string) => void;
  openVerticalModal: () => void;
  closeVerticalModal: (type?: BusinessType) => void;
  selectVertical: (type: BusinessType) => void;
}

const PlaygroundContext = createContext<PlaygroundState | undefined>(undefined);

export const PlaygroundProvider = ({ children }: { children: React.ReactNode }) => {
  const [businessType, setBusinessTypeState] = useState<BusinessType>("restaurant");
  const [brandName, setBrandName] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#1d9e75");
  const [hydrated, setHydrated] = useState(false);
  const [verticalModalOpen, setVerticalModalOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = parseVerticalParam(
      params.get("vertical") ?? params.get("businessType")
    );
    const fromStorage = readStoredVertical();

    if (fromUrl) {
      setBusinessTypeState(fromUrl);
      if (!fromStorage) {
        persistVertical(fromUrl, "url");
      }
    } else if (fromStorage) {
      setBusinessTypeState(fromStorage);
    } else {
      // First-time visitor — no saved choice yet
      setBusinessTypeState("restaurant");
      setVerticalModalOpen(true);
    }

    setHydrated(true);
  }, []);

  const setBusinessType = useCallback((type: BusinessType) => {
    setBusinessTypeState(type);
    if (typeof window === "undefined") return;
    persistVertical(type, "manual");
    const url = new URL(window.location.href);
    url.searchParams.set("vertical", type);
    window.history.replaceState(null, "", url.toString());
  }, []);

  const openVerticalModal = useCallback(() => {
    setVerticalModalOpen(true);
  }, []);

  const closeVerticalModal = useCallback((type?: BusinessType) => {
    const choice = type ?? businessType;
    setBusinessTypeState(choice);
    persistVertical(choice, "skip");
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("vertical", choice);
      window.history.replaceState(null, "", url.toString());
    }
    setVerticalModalOpen(false);
  }, [businessType]);

  const selectVertical = useCallback((type: BusinessType) => {
    setBusinessTypeState(type);
    persistVertical(type, "modal");
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("vertical", type);
      window.history.replaceState(null, "", url.toString());
    }
    setVerticalModalOpen(false);
  }, []);

  return (
    <PlaygroundContext.Provider
      value={{
        businessType,
        brandName,
        primaryColor,
        hydrated,
        verticalModalOpen,
        setBusinessType,
        setBrandName,
        setPrimaryColor,
        openVerticalModal,
        closeVerticalModal,
        selectVertical,
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
};

export const usePlayground = () => {
  const context = useContext(PlaygroundContext);
  if (!context) throw new Error("usePlayground must be used within a PlaygroundProvider");
  return context;
};
