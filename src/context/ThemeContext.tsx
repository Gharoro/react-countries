import React, { createContext, ReactNode, useState } from "react";

interface IThemeContext {
  isDark: boolean;
  setIsDark?: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultState = {
  isDark: false,
};

const ThemeContext = createContext<IThemeContext>(defaultState);
const { Provider } = ThemeContext;

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      {children}
    </Provider>
  );
};

export { ThemeContext, ThemeProvider };
