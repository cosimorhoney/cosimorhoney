import * as React from "react";

/* Not used, yet. */
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/simo.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Simo"
    />,
  ]);
};
