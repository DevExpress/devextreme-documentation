---
##### shortDescription
Cancels the load operation associated with the specified identifier.

##### return: Boolean
Indicates whether the operation is successfully canceled (*true*) or was not found (*false*).

---
You can access the load operation identifier using the **operationId** field extending the Promise object returned by the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') or [reload()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/reload().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload') method.

    <!--JavaScript-->
    var loadPromise = dataSource.load();
    loadPromise.done(function(result) {
        . . .
    });
    . . .
    dataSource.cancel(loadPromise.operationId);

[note]The **cancel(operationId)** method does not interrupt the HTTP request.