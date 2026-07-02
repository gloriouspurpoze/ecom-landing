"use client";

import { usePlayground } from "@/app/context/PlaygroundContext";
import { getVerticalConfig } from "@/data/verticals";

/** Vertical-aware copy + demo data for the active business type. */
export function useVerticalContent() {
  const {
    businessType,
    setBusinessType,
    brandName,
    setBrandName,
    primaryColor,
    setPrimaryColor,
    hydrated,
    verticalModalOpen,
    openVerticalModal,
    closeVerticalModal,
    selectVertical,
  } = usePlayground();
  const config = getVerticalConfig(businessType);

  const displayBrand = brandName.trim() || config.hero.defaultBrand;

  return {
    businessType,
    setBusinessType,
    brandName,
    setBrandName,
    primaryColor,
    setPrimaryColor,
    hydrated,
    verticalModalOpen,
    openVerticalModal,
    closeVerticalModal,
    selectVertical,
    config,
    displayBrand,
    signupHref: `/signup?plan=growth&businessType=${businessType}`,
  };
}
