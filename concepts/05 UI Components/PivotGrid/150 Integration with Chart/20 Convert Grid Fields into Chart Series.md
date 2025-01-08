The second argument of the **bindChart(chart, integrationOptions)** method customizes the contents, behavior, and appearance of the Chart component. This section describes the fields in this argument that handle data procession.

When binding Chart to PivotGrid, specify how to form Chart series from PivotGrid fields. PivotGrid data fields always become Chart value fields. Row and column fields can form either arguments or series. The **inverted** field specifies the following values:

- `true` - row field values become arguments; column field values form series.   
- `false` (default) - column field values become arguments; row field values form series.

    pivotGridInstance.bindChart(chartInstance, {
        // ...
        inverted: false // true
    });

In the example below, toggle the check box to update the **inverted** field. When this field is `false`, values of the *"2014"* column field become the arguments, while values of the *"Europe"* row field form series. When **inverted** is `true`, the result is reversed.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/DataVisualization/Guides/GridChartIntegration/inverted.html, /Content/Applications/25_1/DataVisualization/Guides/GridChartIntegration/inverted.js"></div>

When PivotGrid contains multiple data fields, they can become sets of series or sets of arguments. To specify this behavior, use the **putDataFieldsInto** field and choose *"series"* (default) or *"args"*.

    pivotGridInstance.bindChart(chartInstance, {
        // ...
        putDataFieldsInto: "series" // "args"
    });

Some data fields may alternate on the Chart plot. To control this behavior, set the **alternateDataFields** field to `true` (default) or `false`.

    pivotGridInstance.bindChart(chartInstance, {
        // ...
        alternateDataFields: true // false
    });

Below, use the controls under the UI components to change the **putDataFieldsInto** and **alternateDataFields** fields. Observe how the "Total" and "Avg" data fields depend on these values.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/DataVisualization/Guides/GridChartIntegration/dataFieldsLayout.html, /Content/Applications/25_1/DataVisualization/Guides/GridChartIntegration/dataFieldsLayout.js"></div>

To process data in a specific way, assign a callback function to the **processCell** field. This function will be called for each data cell of PivotGrid.

    pivotGridInstance.bindChart(chartInstance, {
        // ...
        processCell: function (cellData) {
            // Process data here
            return cellData; // This line is optional
        }
    });

The **cellData** argument has the following fields:

- **rowPath**: <span style="font-size:12px">Array</span>    
The path to the data cell by row field values.
- **rowPathFormatted**: <span style="font-size:12px">Array</span>   
Same as **rowPath**, but with [format](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/format.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#format') and [customizeText](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/customizeText.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#customizeText') applied.
- **rowFields**: <span style="font-size:12px">Array</span>      
Objects representing row [fields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/').     
- **maxRowLevel**: <span style="font-size:12px">Number</span>      
A zero-based index that indicates the maximum currently-expanded row level. Equals to 0 when grid has no row fields at all, 1 when all rows are collapsed, 2 when at least one first-level row is expanded, etc.
<br/><br/>
- **columnPath**: <span style="font-size:12px">Array</span>     
The path to the data cell by column field values.
- **columnPathFormatted**: <span style="font-size:12px">Array</span>     
Same as **columnPath**, but with [format](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/format.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#format') and [customizeText](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/customizeText.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#customizeText') applied.   
- **columnFields**: <span style="font-size:12px">Array</span>       
Objects representing column [fields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/').
- **maxColumnLevel**: <span style="font-size:12px">Number</span>       
A zero-based index that indicates the maximum currently-expanded column level. Equals to 0 when the grid has no column fields at all, 1 when all columns are collapsed, 2 when at least one first-level column is expanded, etc.
<br/><br/>
- **dataFields**: <span style="font-size:12px">Array</span>     
Objects representing data [fields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/').
- **dataValues**: <span style="font-size:12px">Array</span>     
Data of the current cell. Contains several values if the pivot grid has several data fields.
- **dataIndex**: <span style="font-size:12px">Number</span>        
A zero-based index that indicates which data field and value from the **dataFields** and **dataValues** arrays respectively are currently in process. If you have only one data field, **dataIndex** always equals to 0.
<br/><br/>
- **visible**: <span style="font-size:12px">Boolean</span>      
Indicates whether the current cell will be passed to the chart or not. Equals to **true** if the cell belongs to the deepest expanded level. This field is changeable. For example, if you need to prevent a cell from being added to a chart series, set **visible** to **false**.
- **chartDataItem**: <span style="font-size:12px">Object</span>     
The resulting item that will be passed on to the chart data source. The fields of this object are customizable.
    * **series**: <span style="font-size:12px">String</span>        
    The name of the series to which the data item will belong.
    * **arg**: <span style="font-size:12px">Number | String | Date</span>       
    The argument of the data item.
    * **val**: <span style="font-size:12px">Number | String | Date</span>      
    The value of the data item.