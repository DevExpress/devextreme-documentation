---
id: OsmTileServerConfig.maxZoom
type: Number
---
---
##### shortDescription
Specifies the highest zoom level available from the tile source.

---
The provider uses **19** if this value is omitted. Set it to the highest level that your tile service supports.

This setting does not limit the map view zoom. OpenLayers can enlarge tiles beyond the source's highest level. To restrict user zoom, configure the native OpenLayers View as described in [Access the OpenLayers API](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/25%20Access%20the%20OpenLayers%20API.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Access_the_OpenLayers_API/').
