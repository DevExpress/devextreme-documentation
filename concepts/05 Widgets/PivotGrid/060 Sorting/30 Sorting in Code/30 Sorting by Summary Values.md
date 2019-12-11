If you need to sort fields by summary values, change the field's [sortBySummaryField](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortBySummaryField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryField') option. Set this option to the data field that provides summary values. For example, consider that a grid contains a *"Region"* field located in the row header, a *"Date"* field located in the column header, and an *"Amount"* field that provides summary values. The configuration may be as follows.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataSource: {
            // ...
            fields: [{
                dataField: 'Region',
                area: 'row'
            }, {
                dataField: 'Date',
                area: 'column'
            }, {
                dataField: 'Amount',
                area: 'data',
                summaryType: 'count'
            }]
        }
    };
    
In this case, to sort the *"Region"* field by summary values, call the [field(id, options)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/field(id_options).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid_options') as shown in the code below.

    <!--JavaScript-->var pivotGridDataSource = pivotGridInstance.getDataSource();
    pivotGridDataSource.field("Region", {
        sortBySummaryField: 'Amount'
    });
    pivotGridDataSource.load();
    
The code snippet above will sort the *"Region"* field by [Grand Totals](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/05%20Totals '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Totals'). To sort the same field by Totals of a specific column, specify the path to this column using the [sortBySummaryPath](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortBySummaryPath.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryPath') option. For example, the following code will sort the *"Region"* field by Totals of the *"2015"* column.

    <!--JavaScript-->var pivotGridDataSource = pivotGridInstance.getDataSource();
    pivotGridDataSource.field("Region", {
        sortBySummaryField: 'Amount',
        sortBySummaryPath: [2015]
    });
    pivotGridDataSource.load();
    
[note]After you have made changes in a PivotGridDataSource, call its [load()](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#load') method to refresh data in the bound **PivotGrid**.