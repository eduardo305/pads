import { useState, createContext } from "react";

const AppContext = createContext(null);

const initialFilters = {
  propertyType: "apartment",
  price: 3000,
  bedrooms: 3,
  propertySize: 1000,
  furnished: false
};

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("Sunnyvale");
  const [pads, setPads] = useState([]);
  const [filters, setFilters] = useState(initialFilters);

  return (
    <AppContext.Provider
      value={{ query, setQuery, pads, setPads, filters, setFilters }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
