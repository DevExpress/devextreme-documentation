---
id: dxVectorMap.Options.layers.sizeGroupingField
type: String | undefined
default: undefined
---
---
##### shortDescription
Specifies the field that provides data to be used for sizing [bubble](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/elementType.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#elementType') markers. Setting this property makes sense only if the [layer type](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/type.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#type') is *"marker"* and the [elementType](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/elementType.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#elementType') is *"bubble"*.

---
If you need the size of the bubble marker to depend on the value of one of its [attributes](/api-reference/10%20UI%20Components/dxVectorMap/6%20Map%20Elements/Layer%20Element/3%20Methods/attribute(name).md '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/Methods/#attributename'), assign the name of this attribute to the **sizeGroupingField** property. The attribute must contain numeric values. After that, specify groups into which attribute values must be classified by assigning an array to the [sizeGroups](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/sizeGroups.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#sizeGroups') property.

[note]If you need to classify a bubble by its value, leave the **sizeGroupingField** property unassigned.