---
id: dxVectorMap.Options.layers.selectionMode
acceptValues: 'multiple' | 'none' | 'single'
type: String
default: 'single'
---
---
##### shortDescription
Specifies whether single or multiple map elements can be selected on a vector map.

---
Several options and methods are connected with the selection operation. To specify whether single or multiple areas can be selected at a time, use the **selectionMode** option. To determine whether a certain area is selected when the widget is created, use the **isSelected** field of the object returned by the [customize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/customize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#customize') callback function.

At runtime, you can do the following operations.

- Obtain the current selection state of a layer element using its [selected()](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element/3%20Methods/selected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/Methods/#selected') method.

- Change the current selection state of a layer element using its [selected(state)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element/3%20Methods/selected(state).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/Methods/#selectedstate') method. Pass **true** or **false** to this method.

- Deselect all the selected layer elements using the [clearSelection()](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer/3%20Methods/clearSelection().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer/Methods/#clearSelection') method of the map layer.

The change of the selection state invokes the callback function assigned to the [onSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onSelectionChanged') option. Within this function, you can handle the selection event in the manner you require.

#include common-ref-enum with {
    enum: "`SelectionMode`",
    values: "`None`, `Single` and `Multiple`"
}