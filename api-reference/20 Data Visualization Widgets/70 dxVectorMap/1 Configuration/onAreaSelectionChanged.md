---
dep: Use the 'onSelectionChanged' option instead
EventForAction: ..\4 Events\areaSelectionChanged.md
type: function
---
---
##### notUsedInTheme

##### deprecated
Use the [onSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onSelectionChanged') option instead.

##### shortDescription
A handler for the [areaSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/4%20Events/areaSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#areaSelectionChanged') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.target): Area object
The selected/deselected area.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the selected/deselected area. An object that represents this area has fields and methods documented in the [Area](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/7%20Map%20Elements/Area '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/') class description.

To identify whether an area has been selected or deselected, call its [selected()](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/7%20Map%20Elements/Area/3%20Methods/selected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/Methods/#selected') method. Pass *true* or *false* to this method to select or deselect the area.