import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1100px',
  height: '800px'
};

const center = {
  lat: 7.8731,
  lng: 80.7718
};

const marker = {
    lat: 6.3354,
    lng: 80.0339,
  };
  const marker2 = {
    lat: 6.0515,
    lng: 80.8516,
  };
  const marker3 = {
    lat: 6.1395,
    lng: 80.1063,
  };
  const marker4 = {
    lat: 5.9483,
    lng: 80.4716,
  };
  const marker5 = {
    lat: 8.5874,
    lng: 81.2152,
  };


function HawksbillLocation() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB3xMuz5vFa4qQelPmvGQ9IzOmQNn_Uk4k"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
       <Marker position={marker} />
       <Marker position={marker2} />
       <Marker position={marker3} />
       <Marker position={marker4} />
       <Marker position={marker5} />
      </GoogleMap>
  ) : <></>
}

export default React.memo(HawksbillLocation)