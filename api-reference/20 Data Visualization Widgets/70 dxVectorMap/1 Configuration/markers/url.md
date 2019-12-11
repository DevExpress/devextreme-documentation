---
dep: Specify url as one of the attributes and reference it with the 'layers.dataField' option
default: undefined
type: string
---
---
##### deprecated
Use the **layers** | [dataField](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/layers/dataField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataField') option instead.

##### shortDescription
Specifies a URL for a map marker of the *image* [type](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/markerSettings/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#type').

---
If you need to display map markers as images, set the **markerSettings** | **type** option to *'image'*. After that, specify a URL to the required image for each marker using the **url** field of the marker data object.