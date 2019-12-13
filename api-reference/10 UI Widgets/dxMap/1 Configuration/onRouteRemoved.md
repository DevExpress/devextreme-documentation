---
id: dxMap.Options.onRouteRemoved
type: function(e)
default: null
EventForAction: dxMap.routeRemoved
---
---
##### shortDescription
A function that is executed when a route is removed from the map.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.options): Object
The removed route's data.

---
#####See Also#####
- [Add and Remove a Route](/concepts/05%20Widgets/Map/25%20Configure%20Routes/05%20Add%20and%20Remove.md '/Documentation/Guide/Widgets/Map/Configure_Routes/Add_and_Remove/')