"use client";

import { useEffect } from "react";

export default function LangSetter({ locale }) {
  useEffect(() => {
    // Set the document language attribute
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  // This component doesn't render anything
  return null;
}
