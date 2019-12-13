---
id: LoadOptions.requireTotalCount
type: Boolean
---
---
##### shortDescription
Indicates whether the total count of data objects is needed.

---
When this option is **true**, the store expects the result to contain the **totalCount** field, which is the total data object count in the resulting data set. This count should reflect the number of data items after filtering but disregard any [take](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/take.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#take') parameter used for the query.