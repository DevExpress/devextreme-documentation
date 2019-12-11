---
dep: 
default: undefined
type: Array
---
---
##### deprecated
Specify the **values** as one of the GeoJSON attributes (the GeoJSON object is passed to the **layers** | [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource') option) and reference it using the **layers** | [dataField](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataField') option.

##### shortDescription
Specifies values for a map marker of the *pie* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#type').

---
When you use pie markers on your map, each marker is represented by a tiny pie chart whose slices are defined by the array assigned to the **values** field of the marker object. If you are not satisfied with the size of pie markers, you can change it using the [size](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/size.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#size') option of the **markerSettings** object.