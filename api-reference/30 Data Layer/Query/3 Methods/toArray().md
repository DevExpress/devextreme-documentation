---
##### shortDescription
Returns the array of current [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/') items.

##### return: Array
The array of items.

---
<!--JavaScript-->
    var data = DevExpress.data.query(inputArray).sortBy("lastName").toArray();

This method is an alternative to the [enumerate()](/api-reference/30%20Data%20Layer/Query/3%20Methods/enumerate().md '/Documentation/ApiReference/Data_Layer/Query/Methods/#enumerate') method and is executed synchronously. Only the array query supports it.