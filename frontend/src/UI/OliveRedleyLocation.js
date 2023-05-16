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
    lat: 6.4640,
    lng: 81.4719,
  };

function OliveRedleyLocation() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBsnNha55KUTk7Fl5-SHJMlw7QX8o-Kpwg"
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
      </GoogleMap>
  ) : <></>
}

export default React.memo(OliveRedleyLocation)