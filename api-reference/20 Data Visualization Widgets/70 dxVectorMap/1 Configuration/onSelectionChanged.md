---
EventForAction: ..\4 Events\selectionChanged.md
type: function
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [selectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/4%20Events/selectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#selectionChanged') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.target): MapLayerElement object
The selected/deselected layer element.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the selected/deselected layer element. An object that represents this element has fields and methods documented in the [Layer Element](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/') class description.

To identify whether a layer element has been selected or deselected, call its [selected()](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/7%20Map%20Elements/Layer%20Element/3%20Methods/selected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/Methods/#selected') method. Pass *true* or *false* to this method to select or deselect the marker.