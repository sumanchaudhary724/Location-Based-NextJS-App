import { UserLocationContext } from "@/app/context/UserLocationContext";
import React, { useContext, useEffect, useState } from "react";
import Markers from "./Markers";
import { SelectedBusinessContext } from "@/app/context/SelectedBusinessContext";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

function GoogleMapView({ businessList }) {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { selectedBusiness, setSelectedBusiness } = useContext(
    SelectedBusinessContext
  );
  const [map, setMap] = useState();

  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  useEffect(() => {
    if (map && selectedBusiness) {
      map.panTo(selectedBusiness.geometry.location);
    }
  }, [selectedBusiness]);
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={["f12b2bc44d27d59e"]}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          // center={userLocation}

          center={
            !selectedBusiness.name
              ? userLocation
              : selectedBusiness.geometry.location
          }
          options={{ mapId: "f12b2bc44d27d59e" }}
          zoom={13}
          onLoad={(map) => setMap(map)}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "/user-location.png",
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
          {businessList.map(
            (item, index) =>
              index <= 7 && <Markers business={item} key={index} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
