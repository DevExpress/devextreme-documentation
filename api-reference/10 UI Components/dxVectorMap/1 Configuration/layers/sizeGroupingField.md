---
id: dxVectorMap.Options.layers.sizeGroupingField
type: String
default: undefined
---
---
##### shortDescription
Specifies the field that provides data to be used for sizing [bubble](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/elementType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#elementType') markers. Setting this option makes sense only if the [layer type](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#type') is *"marker"* and the [elementType](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/elementType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#elementType') is *"bubble"*.

---
If you need the size of the bubble marker to depend on the value of one of its [attributes](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element/3%20Methods/attribute(name).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/Methods/#attributename'), assign the name of this attribute to the **sizeGroupingField** option. The attribute must contain numeric values. After that, specify groups into which attribute values must be classified by assigning an array to the [sizeGroups](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/sizeGroups.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#sizeGroups') option.

[note]If you need to classify a bubble by its value, leave the **sizeGroupingField** option unassigned.