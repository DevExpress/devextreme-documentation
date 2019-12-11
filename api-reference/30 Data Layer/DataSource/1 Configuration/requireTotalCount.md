---
type: Boolean
---
---
##### shortDescription
Specifies whether or not the DataSource instance requests the total count of items available in the storage.

---
If this option is set to *true*, the **done** callback of the **Deferred.Promise** returned by the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method will hold the **extra** argument containing the **totalCount**, which holds the total count of data source items.