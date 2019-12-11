---
default: undefined
type: function()
---
---
##### shortDescription
Specifies the function that determines how to split data from the data source into ranges for header items. Cannot be used for the [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') store type and along with [remote operations](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/remoteOperations.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations').

---
When implementing a callback function for this option, you can access the value of a field using the object passed as the function's parameter. This function must return the range name according to the data value passed into it. 

The following code implements a selector function that groups the birth dates by decades.

    <!--JavaScript-->function (data) {
        return Math.floor(data.birthdate.getFullYear() / 10) * 10 
    }

Another example: the following function divides values into *"> 1000"* and *"< 1000"* groups against a threshold value of 1000.

    <!--JavaScript-->function (data) {
        return data.amount > 1000 ? '> 1000' : '< 1000'
    }