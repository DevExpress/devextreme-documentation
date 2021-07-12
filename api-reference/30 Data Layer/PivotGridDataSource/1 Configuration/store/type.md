---
id: PivotGridDataSource.Options.store.type
acceptValues: 'array' | 'local' | 'odata' | 'xmla'
type: String
---
---
##### shortDescription
Specifies the **PivotGridDataSource**'s storage type.

---
This property accepts one of the following values:

- "array"  
 Creates an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'). [View Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/SimpleArray/)

- "local"  
 Creates a [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/').

- "odata"  
 Creates an [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/').

- "xmla"  
 Creates an [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/'). [View Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/OLAPDataSource/)

Each store has properties that are detailed in the links above. Declare these properties in the **store** object.

You can also implement custom data access logic as described in the [Use CustomStore](/concepts/05%20UI%20Components/PivotGrid/035%20Use%20CustomStore '/Documentation/Guide/UI_Components/PivotGrid/Use_CustomStore/') topic.