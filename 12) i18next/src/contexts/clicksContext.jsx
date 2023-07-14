import { createContext, useContext, useState } from 'react';

const ClicksContext = createContext();

export function ClicksProvider({ children }) {
  const [totalClicks, setTotalClicks] = useState(0);
  function totalPrev() {
    setTotalClicks(totalClicks - 1);
  }

  function totalNext() {
    setTotalClicks(totalClicks + 1);
  }

  return (
    <ClicksContext.Provider value={{ totalClicks, totalPrev, totalNext }}>
      {children}
    </ClicksContext.Provider>
  );
}

export function useClicksContext() {
  const context = useContext(ClicksContext);
  if (!context) {
    throw new Error('useClicksContext must be used within a ClicksContextProvider');
  }

  return context;
}
