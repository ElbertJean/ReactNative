import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import MapView, { Marker, UrlTile } from "react-native-maps";
import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState({
    latitude: -23.129096216749616,
    longitude: -45.82651434998431,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Erro", "Permissão para acessar localização foi negada!");
        return;
      }

      try {
        const userLocation = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = userLocation.coords;

        setLocation({ latitude, longitude });
        setInitialRegion((prevRegion) => ({
          ...prevRegion,
          latitude,
          longitude,
        }));
      } catch (error) {
        console.error("Erro ao obter localização:", error);
        Alert.alert("Erro", "Não foi possível obter a localização.");
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        customMapStyle={[
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
        ]}
      >
        <UrlTile
          urlTemplate="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
          maximumZ={19}
        />
        {location && (
          <Marker
            coordinate={location}
            title="Você está aqui"
            description="Localização atual"
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
