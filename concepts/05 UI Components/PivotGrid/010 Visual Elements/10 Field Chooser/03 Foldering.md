The Field Chooser allows you to organize fields from the *"All Fields"* section in folders. To display a field in a folder, set the field's [displayFolder](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/displayFolder.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#displayFolder') option to the folder name. The following code displays *"Country"* and *"City"* fields in an *"Address"* folder.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataSource: {
            // ...
            fields: [{
                // ...
                dataField: 'Country',
                displayFolder: 'Address'
            }, {
                // ...
                dataField: 'City',
                displayFolder: 'Address'
            }, {
                // ...
            }]
        }
    };
    
![DevExtreme PivotGrid FieldChooser](/images/DataGrid/PivotGrid_fieldChooser_foldering.png)