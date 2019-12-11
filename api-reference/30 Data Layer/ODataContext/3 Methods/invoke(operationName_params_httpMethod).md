---
##### shortDescription
Initiates the specified WebGet service operation that returns nothing. For the information on service operations, refer to the [OData documentation](https://www.odata.org/documentation).

##### param(operationName): String
The name of the operation to invoke.

##### param(params): Object
The bag of parameters supported by the operation.

##### param(httpMethod): Object
Specifies the HTTP method for this operation. The default value is "POST".

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the operation has completed.

---
For more information, refer to the [Invoking Service Operations](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData/5%20Invoking%20Service%20Operations.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Invoking_Service_Operations') documentation section.