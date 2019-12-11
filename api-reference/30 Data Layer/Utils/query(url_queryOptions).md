---
module: data/query
export: default
---
---
##### shortDescription
Creates a [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/') instance for accessing the remote service specified by a URL.

##### param(url): String
Specifies the URL of the remote data service.

##### param(queryOptions): Object
Specifies additional query options.

##### return: Object
The created Query instance.

---
The object passed to the **queryOptions** argument should provide the **adapter** method implementing the remote data access logic, in addition to options passed to this method, because the **queryOptions** object is passed to the **adapter** method as well.

If you leave the **adapter** property unspecified, the default adapter implementing the [OData protocol](https://www.odata.org) will be used.

The **queryOptions** object may also provide the **errorHandler** property specifying function [handling errors](/concepts/30%20Data%20Layer/5%20Data%20Layer/55%20Handling%20Errors.md '/Documentation/Guide/Data_Layer/Data_Layer/#Handling_Errors') that occurred within the [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/').

For more information on Queries, refer to the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept') article.