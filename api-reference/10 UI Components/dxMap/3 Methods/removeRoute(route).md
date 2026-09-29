---
id: dxMap.removeRoute(route)
---
---
##### shortDescription
Removes a route from the map.

##### return: Promise<void>
A Promise that is resolved after the route is removed.

##### param(route): Object | Number | Array<Object>
The [Route](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/routes '/Documentation/ApiReference/UI_Components/dxMap/Configuration/routes/') object(s) or an index.

---
You cannot pass an OpenLayers Feature to this method when you use the *"osm"* [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider).

#####See Also#####
#include common-link-callmethods