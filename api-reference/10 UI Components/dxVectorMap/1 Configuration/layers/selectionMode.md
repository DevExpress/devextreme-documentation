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
Several properties and methods are connected with the selection operation. To specify whether single or multiple areas can be selected at a time, use the **selectionMode** property. To determine whether a certain area is selected when the UI component is created, use the **isSelected** field of the object returned by the [customize](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/customize.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#customize') callback function.

At runtime, you can do the following operations.

- Obtain the current selection state of a layer element using its [selected()](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element/3%20Methods/selected().md '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/Methods/#selected') method.

- Change the current selection state of a layer element using its [selected(state)](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element/3%20Methods/selected(state).md '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/Methods/#selectedstate') method. Pass **true** or **false** to this method.

- Deselect all the selected layer elements using the [clearSelection()](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer/Methods/#clearSelection') method of the map layer.

The change of the selection state invokes the callback function assigned to the [onSelectionChanged](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/#onSelectionChanged') property. Within this function, you can handle the selection event in the manner you require.

#include common-ref-enum with {
    enum: "`SelectionMode`",
    values: "`None`, `Single` and `Multiple`"
}