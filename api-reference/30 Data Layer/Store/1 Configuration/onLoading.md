---
EventForAction: ..\4 Events\loading.md
type: function(loadOptions)
---
---
##### shortDescription
A handler for the [loading](/api-reference/30%20Data%20Layer/Store/4%20Events/loading.md '{basewidgetpath}/Events/#loading') event.

##### param(loadOptions): Object
An object defining options for the loaded data.

##### field(loadOptions.filter): Object
A filter expression for the loaded data.

##### field(loadOptions.sort): Object
A sort expression for the loaded data.

##### field(loadOptions.select): Object
An expression for selection in the loaded data.

##### field(loadOptions.group): Object
An expression for grouping in the loaded data.

##### field(loadOptions.skip): Number
The number of item to skip.

##### field(loadOptions.take): Number
The number of items to take for the loaded data.

##### field(loadOptions.userData): Object
A bag for holding user-defined parameters.

##### field(loadOptions.searchValue): Object
The value to which the search expression value is compared.

##### field(loadOptions.searchOperation): String
A search operation expression.

##### field(loadOptions.searchExpr): getter|Array
A getter representing a search expression.

---
Assign a function to perform a custom action before data is loaded.