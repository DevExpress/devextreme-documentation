---
##### shortDescription
Gets data displayed in a PivotGrid.

##### return: object
Pivot grid data.

---
This method returns pivot grid data in the following structure.

    <!--JavaScript-->{
        "rows":[
            {
                "value": /*Row 1 value*/,
                "index": /*Row 1 index*/,
                "text": /*Row 1 caption*/
            },
            {
                "value": /*Row 2 value*/,
                "index": /*Row 2 index*/,
                "text": /*Row 2 caption*/
                "children":[
                    {
                        "value": /*Row 2.1 value*/,
                        "index": /*Row 2.1 index*/,
                        "text": /*Row 2.1 caption*/,
                        "children": [/*Level 3 and deeper*/]
                    },
                    . . .
                ]
            },
            . . .
        ],
        "columns":[
            {
                "value": /*Column 1 value*/,
                "index": /*Column 1 index*/,
                "text": /*Column 1 caption*/
            },
            {
                "value": /*Column 2 value*/,
                "index": /*Column 2 index*/,
                "text": /*Column 2 caption*/
                "children":[
                    {
                        "value": /*Column 2.1 value*/,
                        "index": /*Column 2.1 index*/,
                        "text": /*Column 2.1 caption*/,
                        "children": [/*Level 3 and deeper*/]
                    },
                    . . .
                ]
            },
            . . .
        ],
        "values":[
            [
                [
                    /*Measure 1 value*/,
                    /*Measure 2 value*/,
                    . . .
                ],
                . . .
            ],
            . . .
        ]
    }

[note] *Measure* is an alternative name for a field to be used for calculating summary values. Such fields are located in the **Data Fields** section of the [Field Chooser](/api-reference/10%20UI%20Widgets/dxPivotGridFieldChooser '/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/').

As shown above, the object has three fields &#8212; *rows*, *columns* and *values*. The *rows* and *columns* arrays contain the following fields:

* *value* &#8212; the item as it was retrieved from the data source;
* *index* &#8212; the row/column index pointing to the corresponding summary value from the *values* array;
* *text* &#8212; the item's caption as it appears in the pivot grid;
* *children* &#8212; the optional array that contains items of the deeper hierarchical levels.

The *values* array contains the summary values, each one has three indexes. You can get a summary value using the following pattern.

	<!--JavaScript-->var value = values[/*row index*/][/*column index*/][/*measure index*/];
    
[note] If you use [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') and your [data area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') is empty, this function will return **values of the default measure**, which were sent by an OLAP server. Although the OLAP server sends such values, they are hidden from the UI and can be obtained by this function only.