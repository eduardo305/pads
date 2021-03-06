import { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import CustomMarker from "../CustomMarker";

const initialState = {
  width: "100%",
  height: "100%",
  latitude: 41.5868,
  longitude: -93.625,
  zoom: 13
};

const Map = ({ pads, location, onClick }) => {
  const [viewport, setViewport] = useState(initialState);

  const onViewportChange = viewport => {
    setViewport({ ...viewport, width: "100%", height: "100%" });
  };

  const renderMarkers = () => {
    return pads.map(pad => {
      return (
        <Marker
          key={pad.id}
          latitude={pad.coordinates.latitude}
          longitude={pad.coordinates.longitude}
        >
          <div onClick={() => onClick(pad)}>
            <CustomMarker
              price={pad.price}
              image={pad.floorPlans && pad.floorPlans[0].images[0]}
            />
          </div>
        </Marker>
      );
    });
  };

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(position => {
    //   console.log("Map -> position", position);
    //   setViewport({
    //     ...initialState,
    //     latitude: position.coords.latitude,
    //     longitude: position.coords.longitude
    //   });
    // });
    setViewport({
      ...initialState,
      latitude: location.latitude,
      longitude: location.longitude
    });
  }, [location]);

  return (
    <div
      className="map"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        mapboxApiAccessToken="pk.eyJ1IjoiZWR1YXJkbzMwNSIsImEiOiJja2IycW1tb2cwZWF4MnNwZDRuaWhtdnA1In0.IQ9D2UW47ZpwJVmiy0YltQ"
        onViewportChange={viewport => onViewportChange(viewport)}
        {...viewport}
      >
        {renderMarkers()}
      </ReactMapGL>
    </div>
  );
};

export default Map;
