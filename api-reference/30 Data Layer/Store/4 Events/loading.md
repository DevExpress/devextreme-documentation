---
type: event
---
---
##### shortDescription
Fires before data is loaded.

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
The number of items to skip.

##### field(loadOptions.take): number
The number of items to take for the loaded data.

##### field(loadOptions.userData): object
A bag for holding user-defined parameters.

---
To learn how to handle events, refer to the [Events and Change Tracking](/concepts/30%20Data%20Layer/5%20Data%20Layer/5%20Events%20and%20Change%20Tracking.md '/Documentation/Guide/Data_Layer/Data_Layer/#Events_and_Change_Tracking') topic.