---
id: dxMap.Options.type
type: Enums.MapType
default: 'roadmap'
---
---
##### shortDescription
The type of a map to display.

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/ProvidersAndTypes/"
}

If [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider) is *"osm"*, assign a function to **providerConfig**.[tileServer](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#tileServer) to display different tiles for each map type. A URL template or an [OsmTileServerConfig](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/) object displays the same tiles for all types.
