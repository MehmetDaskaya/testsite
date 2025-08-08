// app/components/ClientLayout.js
"use client";

import { ParallaxProvider } from "react-scroll-parallax";

export default function ClientLayout({ children }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
