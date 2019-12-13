---
id: PivotGridDataSource.Options.store.type
acceptValues: 'array' | 'local' | 'odata' | 'xmla'
type: String
---
---
##### shortDescription
Specifies the **PivotGridDataSource**'s storage type.

---
This option accepts one of the following values:

- "array"  
 Creates an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/').

- "local"  
 Creates a [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/').

- "odata"  
 Creates an [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/').

- "xmla"  
 Creates an [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/').

Each store has options that are detailed in the links above. Declare these options in the **store** object.

You can also implement custom data access logic as described in the [Use CustomStore](/concepts/05%20Widgets/PivotGrid/035%20Use%20CustomStore '/Documentation/Guide/Widgets/PivotGrid/Use_CustomStore/') topic.