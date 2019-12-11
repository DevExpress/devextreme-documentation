---
dep: ..\layers\selectionMode.md
default: 'single'
acceptValues: 'multiple' | 'none' | 'single'
type: String
---
---
##### shortDescription
Specifies whether single or multiple areas can be selected on a vector map.

---
Several options and methods are connected with the selection operation. To specify whether single or multiple areas can be selected at a time, use the **selectionMode** option. To determine whether a certain area is selected when the widget is created, use the **isSelected** field of the object returned by the [customize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/customize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/#customize') callback function.

At runtime, you can do the following operations.

- Obtain the current selection state of an area using its [selected()](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Area/3%20Methods/selected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/Methods/#selected') method.

- Change the current selection state of an area using its [selected(state)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Area/3%20Methods/selected(state).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/Methods/#selectedstate') method. Pass **true** or **false** to this method.

- Deselect all the selected areas using the [clearAreaSelection()](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/3%20Methods/clearAreaSelection().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#clearAreaSelection') method of the map instance.

The change of the selection state invokes the callback function assigned to the [onAreaSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/onAreaSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onAreaSelectionChanged') option. Within this function you can handle the selection event in the manner you require.