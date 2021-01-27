To sort row or column fields by their own values, change the [sortOrder](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortOrder.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder') option of the required field. For this purpose, call the [field(id, options)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/field(id_options).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid_options') method. For example, the following code sorts the *"Region"* field in descending order.

    <!--JavaScript-->var pivotGridDataSource = pivotGridInstance.getDataSource();
    pivotGridDataSource.field("Region", {
        sortOrder: 'desc'
    });
    pivotGridDataSource.load();
    
[note]After you have made changes in a PivotGridDataSource, call its [load()](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#load') method to refresh data in the bound **PivotGrid**.