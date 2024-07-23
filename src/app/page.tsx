"use client";

import { SquidWidget } from "@0xsquid/widget";

export default function Home() {
  const defaultConfig = {
    apiUrl: "https://apiplus.squidrouter.com",
    integratorId: "unergy-sdk",
    disabledChains: {
      source: ["1"]
    }
  };
    
  return (
    <main style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ minWidth: "440px"}}>
        <SquidWidget config={defaultConfig} />
      </div>
    </main>
  );
}
