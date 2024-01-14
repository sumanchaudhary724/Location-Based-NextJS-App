import { UserLocationContext } from "@/app/context/UserLocationContext";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useContext } from "react";

function GoogleMapView() {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const containerStyle = {
    width: "100%",
    height: "500px",
  };
  console.log(userLocation);

  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={["f12b2bc44d27d59e"]}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation}
          options={{ mapId: "f12b2bc44d27d59e" }}
          zoom={13}
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
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
