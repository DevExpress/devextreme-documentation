Check the following:

- **providerConfig**.[tileServer](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#tileServer) specifies a tile URL for the current map type. A **tileServer** function must return a tile source synchronously for each map type.
- Tile requests include the credentials that your tile service requires.
- Your tile server allows cross-origin requests (CORS). OpenLayers sends CORS requests for tile images.
- Tile URLs use HTTPS if your application uses HTTPS.
- Your Content Security Policy allows tile server origins (the `img-src` directive).
