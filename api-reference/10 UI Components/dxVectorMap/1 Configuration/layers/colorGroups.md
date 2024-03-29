---
id: dxVectorMap.Options.layers.colorGroups
type: Array<Number>
default: undefined
---
---
##### shortDescription
Allows you to paint layer elements with similar attributes in the same color.

---
If you have specified the [field that provides area-coloring data](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/colorGroupingField.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#colorGroupingField'), you need to specify groups into which this data must be classified. For this purpose, assign an array of numbers to the [colorGroups](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/colorGroups.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#colorGroups') property. Each pair of numbers in this array defines a range of data values.

For example, imagine that the **colorGroups** array contains four items: [0, 1, 2, 3]. This array specifies three ranges, or groups: 0-1, 1-2 and 2-3. Thus, data values will be split up into three groups. Each group will be assigned a color from the [palette](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/palette.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#palette') in order to paint the corresponding areas. Areas of those data values that do not match neither group will be drawn in a default color.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/Palette/"
}