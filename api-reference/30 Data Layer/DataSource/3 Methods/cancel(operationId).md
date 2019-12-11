---
id: DataSource.cancel(operationId)
---
---
##### shortDescription
Cancels the load operation with a specific identifier.

##### return: Boolean
**true** if the operation was canceled; **false** if it was not found.

---
You can access the operation identifier using the **operationId** field that extends the Promise object returned from the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') and [reload()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/reload().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload') methods.

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    var loadPromise = ds.load();
    loadPromise.done(function (result) {
        // ...
    });

    ds.cancel(loadPromise.operationId);

[note] Calling this method does not interrupt the HTTP request.