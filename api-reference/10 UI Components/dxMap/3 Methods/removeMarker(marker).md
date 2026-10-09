---
id: dxMap.removeMarker(marker)
---
---
##### shortDescription
Removes a marker from the map.

##### return: Promise<void>
A Promise that is resolved after the marker is removed.

##### param(marker): Object | Number | Array<Object>
The [Marker](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/markers '/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/') object(s) or an index.

---
You cannot pass an OpenLayers Overlay to this method (when [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider) is *"osm"*).

#####See Also#####
#include common-link-callmethods