---
##### shortDescription
Returns the total count of items in the current [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/').

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the operation is completed.

---
<!--JavaScript-->
    var data = DevExpress.data.query(inputArray)
        .count()
        .done(function(result) {
            // 'result' holds the desired value
        });