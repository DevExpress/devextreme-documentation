---
dep: ..\layers\colorGroupingField.md
default: undefined
type: String
---
---
##### deprecated
Use the **layers** | **colorGroupingField** option instead.

##### shortDescription
Specifies the field that provides data to be used for coloring markers.

---
If you need for the color of a specific map marker to depend on the value of one of its [attributes](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markers/attributes.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markers/#attributes'), assign the name of this attribute to the **colorGroupingField** option. The attribute must contain numeric values. After that, specify groups into which attribute values must be classified. For this purpose, assign an array to the [colorGroups](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/colorGroups.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#colorGroups') option. Each group in this array will be assigned a color from the [palette](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/palette.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#palette').