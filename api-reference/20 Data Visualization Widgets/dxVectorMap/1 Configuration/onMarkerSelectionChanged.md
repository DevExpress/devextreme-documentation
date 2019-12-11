---
dep: 
EventForAction: ..\4 Events\markerSelectionChanged.md
type: function(e)
---
---
##### notUsedInTheme

##### deprecated
Use the [onSelecitonChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onSelectionChanged') option instead.

##### shortDescription
A handler for the [markerSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/4%20Events/markerSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#markerSelectionChanged') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.

##### field(e.element): Object
The widget's container.

##### field(e.target): Marker object
The selected/deselected area.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the selected/deselected marker. An object that represents this marker has fields and methods documented in the [Marker](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Marker '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/') class description.

To identify whether a marker has been selected or deselected, call its [selected()](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Marker/3%20Methods/selected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/Methods/#selected') method. Pass *true* or *false* to this method to select or deselect the marker.