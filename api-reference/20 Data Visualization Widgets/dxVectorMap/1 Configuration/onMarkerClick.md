---
dep: onClick.md
EventForAction: ..\4 Events\markerClick.md
type: function(e) | String
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [markerClick](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/4%20Events/markerClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#markerClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance').

##### field(e.element): Object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.target): Marker object
The clicked marker.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked marker. An object that represents this marker has fields and methods documented in the [Marker](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Marker '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/') class description.

Alternatively, you can navigate to a specific URL when the **markerClick** event fires. For this purpose, assign this URL to the **onMarkerClick** option.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapzoomingandcentering/"
}