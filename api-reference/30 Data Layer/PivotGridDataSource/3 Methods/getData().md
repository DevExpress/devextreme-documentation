---
id: PivotGridDataSource.getData()
---
---
##### shortDescription
Gets the loaded data. Another data portion is loaded every time a [header item](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers') is expanded.

##### return: Object
The loaded data.

---
This method returns an object with the following structure:

    <!--JavaScript-->{
        rows: [{
            index: /* Row 1 index */,
            text:  /* Row 1 caption */,
            value: /* Row 1 value */
        }, {
            index: /* Row 2 index */,
            text:  /* Row 2 caption */,
            value: /* Row 2 value */,
            children: [{
                index: /* Row 2.1 index */,
                text:  /* Row 2.1 caption */,
                value: /* Row 2.1 value */,
                children: [ /* Level 3 and deeper */ ]
            },
            // ...
            ]
        },
        // ...
        ],
        columns: [{
            index: /* Column 1 index */,
            text:  /* Column 1 caption */,
            value: /* Column 1 value */
        }, {
            index: /* Column 2 index */,
            text:  /* Column 2 caption */,
            value: /* Column 2 value */,
            children: [{
                index: /* Column 2.1 index */,
                text:  /* Column 2.1 caption */,
                value: /* Column 2.1 value */,
                children: [ /* Level 3 and deeper */ ]
            },
            // ...
            ]
        },
        // ...
        ],
        values: [
            [
                [
                    /* Measure 1 summary value 1 */,
                    /* Measure 2 summary value 1 */,
                    // ...
                ],
                [
                    /* Measure 1 summary value 2 */,
                    /* Measure 2 summary value 2 */,
                    // ...
                ],
                // ...
            ],
            // ...
        ],
        grandTotalRowIndex: 0,
        grandTotalColumnIndex: 0
        
    }

[note] "Measure" refers to a pivot grid field in the data [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area').

The object mentioned above contains three arrays: `rows`, `columns`, and `values`. Objects in the `rows` and `columns` arrays describe [header items](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers') in the row and column areas and contain the following fields:

* `index` - the index of the row/column that contains the header item; used to find a summary value in the `values` array;
* `value` - the field value from the data source that corresponds to the header item;
* `text` - the header item's caption;
* `children` - an optional array that contains lower-level header items.

The `values` array contains summary values. Each of them has three indexes. To get a summary value, use the following pattern:

    <!--JavaScript-->var value = values[/* row index */][/* column index */][/* measure index */];

You can pass `grandTotalRowIndex` and `grandTotalColumnIndex` as row index and column index to get [grand total values](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/05%20Totals '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Totals').
    
[note]

If you use the [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') and your data area is empty, this method returns **the default measure values**. They are hidden from the UI until you place the default measure in the data area using the [field(id, options)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/field(id_options).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid_options') method. The default measure is specified on the OLAP server.

    <!--JavaScript-->pivotGridDataSource.field(/* measure name */, { area: "data" });

[/note]

#####See Also#####
- [createDrillDownDataSource(options)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/createDrillDownDataSource(options).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#createDrillDownDataSourceoptions')