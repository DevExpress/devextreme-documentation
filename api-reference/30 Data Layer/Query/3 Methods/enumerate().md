---
##### shortDescription
Executes the [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/').

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the operation is completed.

---
<!--JavaScript-->
    DevExpress.data.query("http://www.example.com/service.url", queryOptions)
        .enumerate()
        .done(function(result) {
            // 'result' holds the got array
        });

This method is an alternate to the [toArray()](/api-reference/30%20Data%20Layer/Query/3%20Methods/toArray().md '/Documentation/ApiReference/Data_Layer/Query/Methods/#toArray') method. The same result, but different form.