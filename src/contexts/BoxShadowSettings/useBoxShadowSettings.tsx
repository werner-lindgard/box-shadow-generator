import { useContext } from "react";

import { BoxShadowSettingsContext } from "./BoxShadowSettingsProvider";

const useBoxShadowSettings = () => {
  const context = useContext(BoxShadowSettingsContext);
  if (!context) {
    throw new Error('useBoxShadowSettings() must be used within a <BoxShadowSettingsProvider>')
  }

  return context;
}

export { useBoxShadowSettings };