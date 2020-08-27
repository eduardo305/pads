import { withApollo } from "../libs/apollo";
import { useLazyQuery, useQuery } from "@apollo/client";
// import { ALL_CHARACTERS } from '../../gql/allCharacters';
import { ALL_PADS } from "../gql/allPads";

import ButtonGroup from "../components/ButtonGroup";

const buttons = [{ label: "40mm" }, { label: "44mm" }];

const Test = () => {
  // const [getPads, { loading, error, data }] = useLazyQuery(ALL_PADS);
  const { loading, error, data } = useQuery(ALL_PADS);
  console.log("loading: ", loading);
  console.log("error: ", error);
  console.log("data: ", data);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="test">
      <button onClick={() => getPads()}>OK</button>
      {data &&
        data.pads.map(data => {
          return <div key={data.id}>{data.title}</div>;
        })}

      <ButtonGroup buttons={buttons} allowMultipleSelection />
    </div>
  );
};

export default withApollo({ ssr: true })(Test);
