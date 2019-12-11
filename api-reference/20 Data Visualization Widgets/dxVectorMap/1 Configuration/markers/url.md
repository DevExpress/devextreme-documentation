---
dep: 
default: undefined
type: String
---
---
##### deprecated
Specify the **url** as one of the GeoJSON attributes (the GeoJSON object is passed to the **layers**.[dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource') option) and reference it using the **layers**.[dataField](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataField') option.

##### shortDescription
Specifies a URL for a map marker of the *image* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#type').

---
If you need to display map markers as images, set the **markerSettings**.**type** option to *'image'*. After that, specify the URL of the required image for each marker using the **url** field of the marker data object.