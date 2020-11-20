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

const initialLocation = {
  name: "Sunnyvale",
  latitude: 37.375180799999995,
  longitude: -122.0018176
};

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [pads, setPads] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [location, setLocation] = useState(initialLocation);

  // const [getPads, { loading, error, data }] = useLazyQuery(ALL_PADS);
  const [getPads, { loading, error, data = { pads: [] } }] = useLazyQuery(
    PADS_BY
  );

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        pads,
        setPads,
        location,
        setLocation,
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
