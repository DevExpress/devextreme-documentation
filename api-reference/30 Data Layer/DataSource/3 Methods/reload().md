---
##### shortDescription
Clears currently loaded **DataSource** items and calls the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method.

##### return: Promise
A Promise of a jQuery Deferred object, which is resolved when loading is complete and rejected when loading fails.

---
The Promise object returned by the **reload()** method is extended by the **operationId** field. Pass its value to the [cancel(operationId)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/cancel(operationId).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#canceloperationId') method to cancel the invoked operation.

    <!--JavaScript-->
    var reloadPromise = dataSource.reload();
    reloadPromise.done(function(result) {
        . . .
    });
    . . .
    dataSource.cancel(reloadPromise.operationId);