To understand how fields are sorted by summary values, consider two dimensions: [column header and row header](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers'). To sort fields of one dimension, the user right-clicks (or performs a long tap) on a field of another dimension. In the appeared context menu, he or she chooses the required item.

![DevExtreme PivotGrid FieldChooser SortingIcons](/images/DataGrid/PivotGrid_sortingBySummary_contextMenu.png)

To allow the user to perform this type of sorting, set the [allowSortingBySummary](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/allowSortingBySummary.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowSortingBySummary') option to **true**.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        allowSortingBySummary: true // allows the end-user to sort by summary for all column and row fields
    };
    
If you need to allow sorting by summary for an individual field only, set the [same option](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/allowSortingBySummary.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowSortingBySummary') inside the configuration object of this field.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataSource: {
            // ...
            fields: [{
                dataField: "FirstName",
                allowSortingBySummary: true // allows the end-user to sort by summary for the "FirstName" field only
                // ...
            }, {
                // ...
            }]
        },
        allowSortingBySummary: false
    };