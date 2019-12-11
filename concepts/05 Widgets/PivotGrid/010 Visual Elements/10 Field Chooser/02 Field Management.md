By default, all fields from a data source object are visible in the *"All Fields"* section of the Field Chooser. To hide a specific field, assign **false** to its [visible](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/visible.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#visible') property.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataSource: {
            // ...
            fields: [{
                dataField: 'ID',
                visible: false // hides this field in the Field Chooser 
            }, {
                // ...
            }]
        }
    };

Using the Field Chooser, the end-user moves fields between areas with no restrictions by default. Occasionally, you may need to specify the area to which a field must belong. For example, the field that provides data for summary should not be placed anywhere except the data area. For such a field, set the [isMeasure](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/isMeasure.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#isMeasure') option to **true**.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataSource: {
            // ...
            fields: [{
                // ...
                dataField: 'Amount',
                area: 'data',
                summaryType: 'count',
                isMeasure: true // allows the end-user to place this field to the data area only
            }, {
                // ...
            }]
        }
    };
    
And the reverse can be done if you need to restrict a field from being placed to the data area by setting its **isMeasure** option to **false**.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataSource: {
            // ...
            fields: [{
                // ...
                dataField: 'Region',
                area: 'row',
                isMeasure: false // disallows the end-user to place this field to the data area
            }, {
                // ...
            }]
        }
    };