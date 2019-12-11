---
##### shortDescription
Starts reloading data from any [store](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/') and updating the data source.

##### return: Promise
A Promise of the jQuery.Deferred object, which is resolved when data has been loaded.

---
Use this method to update the pivot grid if you expect changes in data.

Use the following code to access loaded data.

    <!--JavaScript-->    dataSource.reload()
        .done(function(result) {
            // 'result' contains the loaded data
        })
        .fail(function(error) {
            // handle error
        });