To sort fields by their own values, the user invokes the [Field Chooser](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/10%20Field%20Chooser/01%20Field%20Chooser.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser'). There, each item of the *"Row Fields"* and *"Column Fields"* areas has an arrow icon on its right side. The user clicks (or taps) this icon to sort the values of the corresponding field.

![DevExtreme PivotGrid FieldChooser SortingIcons](/images/DataGrid/PivotGrid_fieldChooser_sortingIcons.png)

Alternatively, this type of sorting can be performed using the [Field Panel](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel'). Each item on it has the same clickable arrow icon that sorts the values of the corresponding field.

![DevExtreme PivotGrid FieldPanel](/images/DataGrid/PivotGrid_fieldPanel_sortingIcons.png)

To allow the user to sort by field values, set the [allowSorting](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/allowSorting.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowSorting') option to **true**.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        allowSorting: true // allows the end-user to sort all column and row fields
    };
    
If you need to allow sorting for an individual field only, set the [same option](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/allowSorting.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowSorting') inside the configuration object of this field.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataSource: {
            // ...
            fields: [{
                dataField: "FirstName",
                allowSorting: true // allows sorting by the "FirstName" only
                // ...
            }, {
                // ...
            }]
        },
        allowSorting: false
    };