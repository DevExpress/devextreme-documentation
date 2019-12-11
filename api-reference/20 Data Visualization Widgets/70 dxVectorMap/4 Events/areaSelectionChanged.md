---
dep: Use the 'onSelectionChanged' option instead
type: event
---
---
##### notUsedInTheme

##### deprecated
Use the [selectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/4%20Events/selectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#selectionChanged') event instead.

##### shortDescription
Fires when a user selects/deselects an area.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.target): Area object
The selected/deselected area.

---
When implementing a handling function, use the object passed to it as the parameter. Among the fields of this object, you can find the selected/deselected area. An object that represents this area has fields and methods documented in the [Area](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/7%20Map%20Elements/Area '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/') class description.

To identify whether an area has been selected or deselected, call its [selected()](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/7%20Map%20Elements/Area/3%20Methods/selected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/Methods/#selected') method. Pass *true* or *false* to this method to select or deselect the area.

#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')