---
##### shortDescription
Indicates whether or not the current page contains fewer items than the number of items specified by the [pageSize](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pageSize.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize') configuration option.

##### return: Boolean
If the loaded page size is less then the specified page size, the value is true; otherwise, the value is false.

---
[note] If [paging](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') is disabled, the method always returns *true*.