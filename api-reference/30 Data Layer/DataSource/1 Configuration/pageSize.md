---
default: 20
type: number
---
---
##### shortDescription
Specifies the maximum number of items the page can contain.

---
[note]If you specify the **pageSize** option value when the [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') option is *true*, set the [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') option to *true* as well. Otherwise, the DataSource instance loads all items at once ignoring the [pageSize](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pageSize.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize') option.