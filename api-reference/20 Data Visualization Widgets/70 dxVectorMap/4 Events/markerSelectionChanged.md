---
dep: Use the 'onSelecitonChanged' option instead
type: event
---
---
##### notUsedInTheme

##### deprecated
Use the [selectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/4%20Events/selectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#selectionChanged') event instead.

##### shortDescription
Fires when a user selects/deselects a marker.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.target): Marker object
The selected/deselected area.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the selected/deselected marker. An object that represents this marker has fields and methods documented in the [Marker](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/7%20Map%20Elements/Marker '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/') class description.

To identify whether a marker has been selected or deselected, call its [selected()](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/7%20Map%20Elements/Marker/3%20Methods/selected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/Methods/#selected') method. Pass *true* or *false* to this method to select or deselect the marker.

#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')