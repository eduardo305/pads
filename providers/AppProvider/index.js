import { useState, createContext } from "react";
import { useLazyQuery } from "@apollo/client";
import { withApollo } from "../../libs/apollo";
import { ALL_PADS, PADS_BY } from "../../gql/allPads";

const AppContext = createContext(null);

const initialFilters = {
  propertyTypes: ["apartment"],
  price: 30000,
  bedrooms: 3,
  propertySize: 10000,
  furnished: false
};

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [pads, setPads] = useState([]);
  const [filters, setFilters] = useState(initialFilters);

  // const [getPads, { loading, error, data }] = useLazyQuery(ALL_PADS);
  const [getPads, { loading, error, data }] = useLazyQuery(PADS_BY);

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        pads,
        setPads,
        filters,
        setFilters,
        padsContent: { getPads, loading, error, data }
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const WithApolloAppProvider = withApollo({ ssr: true })(AppProvider);

export { AppContext, WithApolloAppProvider };
