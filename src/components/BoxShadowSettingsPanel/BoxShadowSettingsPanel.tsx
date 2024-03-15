import React from 'react';

import { useBoxShadowSettings } from 'src/contexts/BoxShadowSettings';
import { Checkbox, ColorPicker, Slider, Button } from 'src/components/atoms';
import { BoxShadowSettingsPanelContainer } from './BoxShadowSettingsPanel.styles';

const BoxShadowSettingsPanel = () => {
  const [{ settings }, actions] = useBoxShadowSettings();

  return (
    <BoxShadowSettingsPanelContainer>
      <Slider
        id="h-shadow"
        label="Horizontal Shadow:"
        value={settings.horizontal}
        onChange={actions.updateHorizontal}
      ></Slider>
      <Slider
        id="v-shadow"
        label="Vertical Shadow:"
        value={settings.vertical}
        onChange={actions.updateVertical}
      ></Slider>
      <Slider
        id="blur-radius"
        label="Blur Radius:"
        min={0}
        value={settings.blur}
        onChange={actions.updateBlur}
      ></Slider>
      <Slider
        id="spread-radius"
        label="Spread Radius:"
        value={settings.spread}
        onChange={actions.updateSpread}
      ></Slider>
      <ColorPicker
        id="shadow-color"
        label="Shadow Color:"
        value={settings.color}
        onChange={actions.updateColor}
      ></ColorPicker>
      <Slider
        id="shadow-opacity"
        label="Shadow Opacity:"
        step={0.01}
        min={0}
        max={1}
        value={settings.opacity}
        onChange={actions.updateOpacity}
      ></Slider>
      <Checkbox
        id="shadow-inset"
        label="Inset Shadow:"
        value={settings.inset}
        onChange={actions.updateInset}
      ></Checkbox>
      <Button color="secondary" onClick={actions.reset}>
        Reset
      </Button>
    </BoxShadowSettingsPanelContainer>
  );
};

export { BoxShadowSettingsPanel };
