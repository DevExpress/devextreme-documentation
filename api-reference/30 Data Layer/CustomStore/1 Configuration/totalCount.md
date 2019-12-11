---
type: function
---
---
##### shortDescription
The user implementation of the [totalCount(options)](/api-reference/30%20Data%20Layer/Store/3%20Methods/totalCount(options).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#totalCountoptions') method.

##### param(loadOptions): object
An object specifying filtering and grouping options.

##### field(loadOptions.filter): object
Data filtering conditions.

##### field(loadOptions.group): object
Data grouping options.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after data has been loaded.

---
The method passed to this option should return either the [jQuery.Deferred](https://api.jquery.com/jQuery.Deferred) promise or **jQuery.Deferred** compatible object.