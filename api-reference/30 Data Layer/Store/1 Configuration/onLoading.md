---
EventForAction: ..\4 Events\loading.md
type: function
---
---
##### shortDescription
A handler for the **loading* event.

##### param(loadOptions): object
An object defining options for the loaded data.

##### field(loadOptions.filter): object
A filter expression for the loaded data.

##### field(loadOptions.sort): object
A sort expression for the loaded data.

##### field(loadOptions.select): object
An expression for selection in the loaded data.

##### field(loadOptions.group): object
An expression for grouping in the loaded data.

##### field(loadOptions.skip): number
The number of item to skip.

##### field(loadOptions.take): number
The number of items to take for the loaded data.

##### field(loadOptions.userData): object
A bag for holding user-defined parameters.

---
Assign a function to perform a custom action before data is loaded.