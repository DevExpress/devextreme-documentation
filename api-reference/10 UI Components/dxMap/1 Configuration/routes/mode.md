---
id: dxMap.Options.routes.mode
type: Enums.RouteMode | String
default: 'driving'
---
---
##### shortDescription
Specifies a transportation mode to be used in the displayed route.

---
You can choose between two predefined modes— `'driving'` or `'walking'`—regardless of the current provider. Additionally, provider-specific modes are available:

- [Google](https://developers.google.com/maps/documentation/javascript/directions#TravelModes)
    - `DRIVING`
    - `BICYCLING`
    - `TRANSIT`
    - `WALKING`

- [Azure](https://learn.microsoft.com/en-us/rest/api/maps/route/get-route-directions?view=rest-maps-1.0&tabs=HTTP#travelmode)
    - `bicycle`
    - `bus`
    - `car`
    - `motorcycle`
    - `pedestrian`
    - `taxi`
    - `truck`
    - `van`

- [Bing](https://learn.microsoft.com/en-us/bingmaps/v8-web-control/modules/directions-module/routemode-enumeration)
    - `driving`
    - `transit`
    - `truck`
    - `walking`

[note]

If the route doesn't render as expected, consider the following possible causes: 

* Not every provider supports all possible route modes. Make sure that you specify a supported mode. 
* Check that you specify a provider-specific spelling (compare Google's `BICYCLING` and Azure's `bicycle`). 
* DevExtreme Map allows partial access to provider’s API. If you changed configuration, the provider may no longer support the route mode you specified. 

[/note]