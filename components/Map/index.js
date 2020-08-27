import { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
// import CustomMarker from 'components/CustomMarker';

const initialState = {
  width: "100%",
  height: "100%",
  latitude: 41.5868,
  longitude: -93.625,
  zoom: 13
};

const Map = ({ pads }) => {
  const [viewport, setViewport] = useState(initialState);

  const onViewportChange = viewport => {
    setViewport({ ...viewport, width: "100%", height: "100%" });
  };

  // const renderMarkers = () => {
  // 	return pads.map((pad) => {
  // 		console.log('renderMarkers -> pad', pad);
  // 		return (
  // 			<Marker
  // 				key={pad.id}
  // 				latitude={pad.location.latitude}
  // 				longitude={pad.location.longitude}
  // 			>
  // 				<CustomMarker
  // 					price={pad.price}
  // 					image={pad.floorPlans && pad.floorPlans[0].images[0]}
  // 				/>
  // 			</Marker>
  // 		);
  // 	});
  // };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log("Map -> position", position);
      setViewport({
        ...initialState,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
  }, []);

  return (
    <div className="map" style={{ width: "100%", height: "100%" }}>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxApiAccessToken="pk.eyJ1IjoiZWR1YXJkbzMwNSIsImEiOiJja2IycW1tb2cwZWF4MnNwZDRuaWhtdnA1In0.IQ9D2UW47ZpwJVmiy0YltQ"
        onViewportChange={viewport => onViewportChange(viewport)}
        {...viewport}
      ></ReactMapGL>
    </div>
  );
};

export default Map;
