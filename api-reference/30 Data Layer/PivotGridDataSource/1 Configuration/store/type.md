---
acceptValues: 'array' | 'local' | 'odata' | 'xmla'
type: String
---
---
##### shortDescription
Specifies the type of the store used to access data.

---
The option can take on one of the following values.

- "array"  
 Creates an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/').

- "local"  
 Creates a [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/').

- "odata"  
 Creates an [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/').

- "breeze"  
 Creates a **BreezeStore**. This value requires the [Breeze extension](https://github.com/DevExpress/PhoneJS-DataLayerExtensions/tree/master/breeze).

- "jaydata"  
 Creates a **JayDataStore**. This value requires the [JayData extension](https://github.com/DevExpress/PhoneJS-DataLayerExtensions/tree/master/jayData).

- "xmla"  
 Creates an [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/').