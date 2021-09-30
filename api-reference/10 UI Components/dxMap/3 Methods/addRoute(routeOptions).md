---
id: dxMap.addRoute(routeOptions)
---
---
##### shortDescription
Adds a route to the map.

##### return: Promise<Object>
A Promise that is resolved with an original route instance when the route is added.
#include ref-promisedistinction

##### param(options): Object | Array<Object>
The [Route](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/routes '/Documentation/ApiReference/UI_Components/dxMap/Configuration/routes/') object(s).

---
The route object should include the **locations** field, containing an array of route locations.
Each location can be specified in any of the following formats.

 - { lat: 40.749825, lng: -73.987963}
 - "40.749825, -73.987963"
 - [40.749825, -73.987963]
 - "Brooklyn Bridge,New York,NY"

#####See Also#####
#include common-link-callmethods