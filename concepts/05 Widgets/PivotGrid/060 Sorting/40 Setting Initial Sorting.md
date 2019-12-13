To sort row or column fields by their own values, set the [sortOrder](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortOrder.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder') option of the required field. For example, the following code sorts the *"Region"* field in descending order.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataSource: {
            // ...
            fields: [{
                // ...
                dataField: 'Region',
                sortOrder: 'desc' // sorts "Region" in descending order
            }, {
                // ...
            }]
        }
    };
    
If you need to sort fields by summary values, set the field's [sortBySummaryField](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortBySummaryField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryField') option to the data field that provides summary values. For example, consider that a grid contains a *"Region"* field located in the row header, a *"Date"* field located in the column header, and an *"Amount"* field that provides summary values. Then, to sort the *"Region"* field by summary values of the *"Amount"* field, use the following code.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataSource: {
            // ...
            fields: [{
                dataField: 'Region',
                area: 'row',
                sortBySummaryField: 'Amount' // sorts "Region" by summary values of "Amount"
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
    
The code snippet above will sort the *"Region"* field by [Grand Totals](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/05%20Totals '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Totals'). To sort the same field by Totals of a specific column, specify the path to this column using the [sortBySummaryPath](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortBySummaryPath.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryPath') option. For example, the following code will sort the *"Region"* field by Totals of the *"2015"* column.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataSource: {
            // ...
            fields: [{
                dataField: 'Region',
                area: 'row',
                sortBySummaryField: 'Amount' 
                sortBySummaryPath: [2015] // sorts "Region" by Totals of the "2015" column
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

In case you want to make initially set sorting impossible for the end-user to change, assign **false** to the [allowSorting](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/allowSorting.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowSorting') and/or [allowSortingBySummary](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/allowSortingBySummary.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowSortingBySummary') options.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        allowSorting: false, // disables UI sorting by field values
        allowSortingBySummary: false // disables UI sorting by summary values
    }