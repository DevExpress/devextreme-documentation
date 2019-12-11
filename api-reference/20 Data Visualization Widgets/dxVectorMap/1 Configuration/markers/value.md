---
dep: 
default: undefined
type: Number
---
---
##### deprecated
Specify the **value** as one of the GeoJSON attributes (the GeoJSON object is passed to the **layers** | [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource') option) and reference it using the **layers** | [dataField](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataField') option.

##### shortDescription
Specifies a value for a map marker of the *bubble* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#type').

---
When you use markers of the bubble type on your map, specify the **value** option for each marker. This option defines the size of the bubble that represents a marker: the greater the value, the bigger the size. Additionally, you can specify the sizes of the bubbles with minimum and maximum values. For this purpose, use the [minSize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/minSize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#minSize') and [maxSize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/maxSize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#maxSize') options of the **markerSettings** configuration object.