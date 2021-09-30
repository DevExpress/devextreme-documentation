---
id: CustomStore.Options.totalCount
type: function(loadOptions)
---
---
##### shortDescription
Specifies a custom implementation of the [totalCount(options)](/api-reference/30%20Data%20Layer/Store/3%20Methods/totalCount(options).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#totalCountoptions') method.

##### param(loadOptions): Object
Filtering and grouping settings.

##### field(loadOptions.filter): Object
Data filtering settings.

##### field(loadOptions.group): Object
Data grouping settings.

##### return: Promise<Number>
A Promise that is resolved after data is loaded.
#include ref-promisedistinction

---
