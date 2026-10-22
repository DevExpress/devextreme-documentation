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

If [provider](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/provider.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider') is *"osm"*, assign a function to **providerConfig**.[tileServer](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/providerConfig/tileServer.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#tileServer') to display different tiles for each map type. A URL template or an [OsmTileServerConfig](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/') object displays the same tiles for all types.
