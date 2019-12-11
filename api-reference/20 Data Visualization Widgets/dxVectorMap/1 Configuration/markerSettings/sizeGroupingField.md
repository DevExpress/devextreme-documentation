---
dep: ..\layers\sizeGroupingField.md
default: undefined
type: String
---
---
##### shortDescription
Specifies the field that provides data to be used for sizing [bubble](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#type') markers.

---
If you need for the size of a bubble marker to depend on the value of one of its [attributes](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markers/attributes.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markers/#attributes'), assign the name of this attribute to the **sizeGroupingField** option. The attribute must contain numeric values. After that, specify groups into which attribute values must be classified. For this purpose, assign an array to the [sizeGroups](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/sizeGroups.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#sizeGroups') option.

[note]If you need to classify a bubble by its [value](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Marker/2%20Fields/value.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/Fields/#value'), leave the **sizeGroupingField** option unassigned.