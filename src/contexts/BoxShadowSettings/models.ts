interface IBoxShadowSettings {
  horizontal: number;
  vertical: number;
  blur: number;
  spread: number;
  color: string;
  opacity: number;
  inset: boolean;
}

interface ICssResult {
  key: string;
  value: string;
}

interface IRGB {
  r: number;
  g: number;
  b: number;
}
// Convert HEX value to RGB. Assumes a 3 or 6 digit hex code...
const hexToRGB = (hex: string): IRGB | null => {
  const shortHandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const longHex = hex.replace(shortHandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(longHex);
  if (result) {
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
  }
  return null;
}

const BOX_SHADOW_KEY = 'box-shadow';
const DEFAULT_RGB = {
  r: 0,
  g: 0,
  b: 0
};

const settingsToCssKey = (settings: IBoxShadowSettings): string => BOX_SHADOW_KEY;

const settingsToCssValue = (settings: IBoxShadowSettings): string => {
  const offsets = `${settings.horizontal}px ${settings.vertical}px`;
  const blur = `${settings.blur}px`;
  const spread = `${settings.spread}px`;
  const rgb = hexToRGB(settings.color) || DEFAULT_RGB;
  const color = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${settings.opacity})`;

  let result = `${offsets} ${blur} ${spread} ${color}`;
  if (settings.inset) {
    result = `inset ${result}`;
  }

  return result;
}

const settingsToCss = (settings: IBoxShadowSettings): ICssResult => {
  return {
    key: settingsToCssKey(settings),
    value: settingsToCssValue(settings),
  }
};

export type { IBoxShadowSettings, ICssResult };
export { settingsToCss, settingsToCssKey, settingsToCssValue }
