---
id: dxMap.Options.routes.mode
type: Enums.RouteMode | String
default: 'driving'
---
---
##### shortDescription
Specifies a transportation mode to be used in the displayed route.

---
Choose a predefined route mode, such as `'driving'` or `'walking'`, or select one supported by your provider:

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

[note] DevExtreme Map allows access to part of the provider’s API as is. We are not responsible for incorrect mode selections or usage. 