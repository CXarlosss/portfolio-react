// @ts-nocheck
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from '../../styles/components/contact/map.module.css'; // Asegúrate de que la ruta sea correcta

const googleMapsApiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Reemplaza con tu API Key de Google Maps
const cosladaLocation = { lat: 40.4687, lng: -3.5599 }; // Coordenadas aproximadas de Coslada, Madrid

function Map() {
  return (
    <div className={styles.map}>
      <h2>Mi Ubicación</h2>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '300px' }}
          center={cosladaLocation}
          zoom={13} // Ajusta el zoom según lo que quieras mostrar
        >
          <Marker position={cosladaLocation} title="Coslada" />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;