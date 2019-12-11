---
dep: 
EventForAction: ..\4 Events\markerClick.md
type: function(e) | String
---
---
##### notUsedInTheme

##### deprecated
Use the [onClick](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/onClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onClick') option instead.

##### shortDescription
A handler for the [markerClick](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/4%20Events/markerClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#markerClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.

##### field(e.element): Object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.target): Marker object
The clicked marker.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked marker. An object that represents this marker has fields and methods documented in the [Marker](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Marker '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/') class description.

Alternatively, you can navigate to a specific URL when the **markerClick** event fires. For this purpose, assign this URL to the **onMarkerClick** option.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapzoomingandcentering/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>