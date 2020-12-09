---
id: dxMap.Options.onRouteAdded
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a route is created on the map.

##### param(e): Object
Information about the event.

##### field(e.component): dxMap
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.options): Object
The added route's data.

##### field(e.originalRoute): Object
The original route that the current map provider uses (only for "google" and "bing" providers).

##### return: any
<!-- Description goes here -->

---
#####See Also#####
- [Add and Remove a Route](/concepts/05%20Widgets/Map/25%20Configure%20Routes/05%20Add%20and%20Remove.md '/Documentation/Guide/Widgets/Map/Configure_Routes/Add_and_Remove/')