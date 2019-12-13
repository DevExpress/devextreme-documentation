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
A Promise that is resolved after data is loaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---
