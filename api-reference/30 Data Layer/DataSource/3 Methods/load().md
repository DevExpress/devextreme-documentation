---
##### shortDescription
Starts loading data.

##### return: Promise
A Promise of the jQuery.Deferred object resolved when the data has loaded.

---
Use the following code to access the loaded data.

    <!--JavaScript-->
    dataSource.load()
        .done(function(result) {
            // 'result' contains the loaded data
        })
        .fail(function(error) {
            // handle error
        });

The Promise object returned by the **load()** method is extended by the **operationId** field. Pass its value to the [cancel(operationId)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/cancel(operationId).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#canceloperationId') method to cancel the invoked operation.

    <!--JavaScript-->
    var loadPromise = dataSource.load();
    loadPromise.done(function(result) {
        . . .
    });
    . . .
    dataSource.cancel(loadPromise.operationId);