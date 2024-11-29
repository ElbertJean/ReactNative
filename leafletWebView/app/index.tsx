import React from 'react';
import { WebView } from 'react-native-webview';
import { areasSJC } from './areasSJC';

const App = () => {
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" />
            <link rel="stylesheet" href="https://unpkg.com/leaflet-draw@1.0.4/dist/leaflet.draw.css" />
            <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"></script>
            <script src="https://unpkg.com/leaflet-draw@1.0.4/dist/leaflet.draw.js"></script>
            <style>
            #map { height: 100%; width: 100%; }
            html, body { margin: 0; height: 100%; overflow: hidden; }
            </style>
        </head>
        <body>
            <div id="map"></div>
            <script>
            const map = L.map('map', {
                scrollWheelZoom: true
            }).setView([-23.129096216749616, -45.82651434998431], 13);

            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                maxZoom: 19,
            }).addTo(map);

            const geoJsonData = ${JSON.stringify(areasSJC)};

            L.geoJSON(geoJsonData, {
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.name) {
                        layer.bindPopup('<b>' + feature.properties.name + '</b><br>' + feature.properties.description);
                    }
                }
            }).addTo(map);

            L.control.scale({
                position: 'bottomleft' 
            }).addTo(map);

            const drawControl = new L.Control.Draw({
                position: 'topright',
                // edit: {
                //     featureGroup: new L.FeatureGroup()
                //     },
                draw: {
                    polygon: true,
                    polyline: false,
                    rectangle: false,
                    circle: false,
                    marker: false,
                    circleMarker: false
                }
            });
            map.addControl(drawControl);

            map.on(L.Draw.Event.CREATED, function(e) {
                const layer = e.layer;
                map.addLayer(layer);

                if (layer instanceof L.Polygon) {
                    const latLngs = layer.getLatLngs();
                    alert("Coordenadas do Polígono: " + JSON.stringify(latLngs));
                }
            });
            </script>
        </body>
        </html>
    `;

    return (
        <WebView
            originWhitelist={['*']}
            source={{ html: htmlContent }}
            style={{ flex: 1 }}
        />
    );
};

export default App;
