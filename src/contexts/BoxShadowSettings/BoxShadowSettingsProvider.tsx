import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import { IBoxShadowSettings, ICssResult, settingsToCss } from './models';

type BoxShadowSettingsProviderProps = {
  children?: React.ReactNode;
  initialSettings: IBoxShadowSettings;
};

type BoxShadowSettingsState = {
  settings: IBoxShadowSettings;
  css: ICssResult;
};

type BoxShadowSettingsActions = {
  updateHorizontal: (offset: number) => void;
  updateVertical: (offset: number) => void;
  updateBlur: (offset: number) => void;
  updateSpread: (offset: number) => void;
  updateColor: (color: string) => void;
  updateOpacity: (offset: number) => void;
  updateInset: (inset: boolean) => void;
  reset: () => void;
};

type BoxShadowSettingsContextType = [
  state: BoxShadowSettingsState,
  actions: BoxShadowSettingsActions
];

const BoxShadowSettingsContext = createContext<BoxShadowSettingsContextType | null>(
  null
);
BoxShadowSettingsContext.displayName = 'BoxShadowSettingsContext';

const BoxShadowSettingsProvider = ({
  children,
  initialSettings,
}: BoxShadowSettingsProviderProps) => {
  // TODO: Redo to a Reducer!!
  const [settings, setSettings] = useState(initialSettings);
  const [cssState, setCssState] = useState(settingsToCss(settings));

  useEffect(() => {
    setCssState(settingsToCss(settings));
  }, [settings]);

  const updateHorizontal = useCallback(
    (offset: number) => {
      setSettings((current) => {
        return {
          ...current,
          horizontal: offset,
        };
      });
    },
    [setSettings]
  );
  const updateVertical = useCallback(
    (offset: number) => {
      setSettings((current) => {
        return {
          ...current,
          vertical: offset,
        };
      });
    },
    [setSettings]
  );
  const updateBlur = useCallback(
    (offset: number) => {
      setSettings((current) => {
        return {
          ...current,
          blur: offset,
        };
      });
    },
    [setSettings]
  );
  const updateSpread = useCallback(
    (offset: number) => {
      setSettings((current) => {
        return {
          ...current,
          spread: offset,
        };
      });
    },
    [setSettings]
  );

  const updateColor = useCallback(
    (color: string) => {
      setSettings((current) => {
        return {
          ...current,
          color,
        };
      });
    },
    [setSettings]
  );

  const updateOpacity = useCallback(
    (offset: number) => {
      setSettings((current) => {
        return {
          ...current,
          opacity: offset,
        };
      });
    },
    [setSettings]
  );

  const updateInset = useCallback(
    (inset: boolean) => {
      setSettings((current) => {
        return {
          ...current,
          inset,
        };
      });
    },
    [setSettings]
  );

  const reset = useCallback(() => {
    setSettings(initialSettings);
  }, [initialSettings, setSettings]);

  // Too much useMemo and useCallback?
  const settingsMemo = useMemo(() => {
    return { settings, css: cssState };
  }, [settings, cssState]);
  const actionsMemo = useMemo(() => {
    return {
      updateHorizontal,
      updateVertical,
      updateBlur,
      updateSpread,
      updateColor,
      updateOpacity,
      updateInset,
      reset,
    };
  }, [
    updateHorizontal,
    updateVertical,
    updateBlur,
    updateSpread,
    updateColor,
    updateOpacity,
    updateInset,
    reset,
  ]);
  const theValue: BoxShadowSettingsContextType = [settingsMemo, actionsMemo];

  return (
    <BoxShadowSettingsContext.Provider value={theValue}>
      {children}
    </BoxShadowSettingsContext.Provider>
  );
};

export { BoxShadowSettingsProvider, BoxShadowSettingsContext };
