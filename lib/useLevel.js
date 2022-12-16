import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

// eslint-disable-next-line react/prop-types
function LevelStateProvider({ children }) {
  const [levelState, setLevelState] = useState({ level: null });

  function setLevel(data) {
    setLevelState(data);
  }

  return (
    <LocalStateProvider value={{ levelState, setLevel }}>
      {children}
    </LocalStateProvider>
  );
}

function useLevel() {
  const all = useContext(LocalStateContext);
  return all;
}

export { LevelStateProvider, useLevel };
