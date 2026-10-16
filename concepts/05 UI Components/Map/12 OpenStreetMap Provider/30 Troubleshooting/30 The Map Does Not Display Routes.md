Check the following:

- Your application specifies **providerConfig**.[calculateRoute](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateRoute).
- Each route contains two or more locations. Address strings require **calculateLocation**.
- The **calculateRoute** promise resolves with a valid [OsmRouteResult](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmRouteResult/) value.

Routes appear in unexpected locations if the coordinate order is incorrect. Coordinate pairs list latitude then longitude. GeoJSON [LineString](https://www.rfc-editor.org/info/rfc7946/#section-3.1.4) positions list longitude then latitude.
