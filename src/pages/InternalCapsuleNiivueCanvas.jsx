import React, { useState } from "react";
import { Niivue, DRAG_MODE, cmapper } from "@niivue/niivue";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useColorMode } from "@docusaurus/theme-common";

export const InternalCapsuleNiivueCanvas = () => (
    <BrowserOnly fallback={<div>Loading...</div>}>
  {() => {
    return (
        <div className="sidebar-and-niivue-container">
          <aside class="sidebar-container">
          </aside>
          <div className="niivue-container">
          </div>
        </div>
    );
  }}
  </BrowserOnly>
);

export default InternalCapsuleNiivueCanvas;