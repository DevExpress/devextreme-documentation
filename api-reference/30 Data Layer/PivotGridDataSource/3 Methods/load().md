---
##### shortDescription
Starts updating the data source. Reloads data from the [XMLA](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') [store](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/') only.

##### return: Promise
A Promise of the jQuery.Deferred object, which is resolved when data has been loaded.

---
Use this method to update the pivot grid after making changes in the data source, for example after editing a field using the [field(id, options)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/field(id_options).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid_options') method.

Use the following code to access loaded data.

    <!--JavaScript-->    dataSource.load()
        .done(function(result) {
            // 'result' contains the loaded data
        })
        .fail(function(error) {
            // handle error
        });

[note] If you need to fully reload data from a [store](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/') that differs from XMLA, use the [reload()](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/reload().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#reload') method.