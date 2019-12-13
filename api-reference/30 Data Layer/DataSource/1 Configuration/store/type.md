---
id: DataSource.Options.store.type
acceptValues: 'array' | 'local' | 'odata'
type: String
---
---
##### shortDescription
Specifies the storage type the **DataSource** uses.

---
This option accepts one of the following values:

- "array"  
 Creates an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/').

- "local"  
 Creates a [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/').

- "odata"  
 Creates an [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/').

Each store has options that are detailed in the links above. Declare these options in the **store** object.

You can implement custom data access logic as described in the [Custom Sources](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources') topic if these stores are not suitable.