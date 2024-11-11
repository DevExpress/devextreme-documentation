---
id: dxVectorMap.Options.layers.colorGroupingField
type: String | undefined
default: undefined
---
---
##### shortDescription
Specifies the field that provides data to be used for coloring of layer elements.

---
If you need for the color of a specific map area to depend on the value of one of its  [attributes](/api-reference/10%20UI%20Components/dxVectorMap/6%20Map%20Elements/Layer%20Element/3%20Methods/attribute(name).md '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/Methods/#attributename'), assign the name of this attribute to the **colorGroupingField** property. The attribute must contain numeric values. After that, specify groups into which attribute values must be classified. For this purpose, assign an array to the [colorGroups](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/colorGroups.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#colorGroups') property. Each group in this array will be assigned a color from the [palette](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/palette.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#palette').

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/Palette/"
}