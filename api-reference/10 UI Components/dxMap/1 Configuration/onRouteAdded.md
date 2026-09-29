---
id: dxMap.Options.onRouteAdded
type: function(e) | undefined
default: undefined
---
---
##### shortDescription
A function that is executed when a route is created on the map.

##### param(e): ui/map:RouteAddedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.options): Object
The added route's data.

##### field(e.originalRoute): Object
The original route that the current map provider uses (unavailable for the *"googleStatic"* provider).

---
If you use the *"osm"* [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider), **originalRoute** is an OpenLayers [Feature](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html) with [LineString](https://openlayers.org/en/latest/apidoc/module-ol_geom_LineString-LineString.html) geometry. Map does not raise this event for unresolved routes that the component does not display. Define **providerConfig**.[calculateRoute](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateRoute) to ensure Map displays routes.

#####See Also#####
- [Add and Remove a Route](/concepts/05%20UI%20Components/Map/25%20Configure%20Routes/05%20Add%20and%20Remove.md '/Documentation/Guide/UI_Components/Map/Configure_Routes/Add_and_Remove/')