---
id: dxPivotGrid.bindChart(chart, integrationOptions)
---
---
##### shortDescription
Binds a [Chart](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/') to the PivotGrid.

##### return: function() | null
Unbinds the Chart. If **null**, then binding failed.

##### param(chart): String | jQuery | Object
The Chart to be bound to the PivotGrid.    
Accepts the Chart's instance, <a href="http://api.jquery.com/Types/#jQuery" target="_blank">jQuery element</a> or container <a href="https://api.jquery.com/category/selectors/" target="_blank">selector</a>.

##### param(integrationOptions): Object
The Chart's configuration.

##### field(integrationOptions.alternateDataFields): Boolean
Default Value: **true**.   
Specifies whether to alternate data fields in the resulting chart or not.   
Applies only if the PivotGrid contains several data fields.

##### field(integrationOptions.customizeChart): function()
Allows you to customize the Chart's appearance.

##### field(integrationOptions.customizeSeries): function()
Allows you to customize the series.

##### field(integrationOptions.dataFieldsDisplayMode): String
Default Value: *"splitAxes"*.   
Accepts one of the following values.   

- *"singleAxis"* - values of all data fields are displayed on a single [value axis](/concepts/05%20UI%20Components/Chart/20%20Axes/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Axes/Overview/').  
- *"splitAxes"* - each data field gets an individual value axis. Applies only if **putDataFieldsInto** is *"series"*.  
- *"splitPanes"* - each data field gets an individual [pane](/concepts/05%20UI%20Components/Chart/40%20Panes/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Panes/Overview/'). Applies only if **putDataFieldsInto** is *"series"*.      

Applies only if the PivotGrid contains several [data fields](/concepts/05%20UI%20Components/PivotGrid/020%20Fields%20and%20Areas/10%20Fields.md '/Documentation/Guide/UI_Components/PivotGrid/Fields_and_Areas/#Fields').

##### field(integrationOptions.inverted): Boolean
Default Value: **false**.    
If **true**, [row field](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Headers') values go to the [chart arguments](/concepts/05%20UI%20Components/Chart/20%20Axes/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Axes/Overview/') and [column field](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Headers') values form [series](/concepts/05%20UI%20Components/Chart/10%20Series/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series/Overview/'). If **false** - vice versa.

##### field(integrationOptions.processCell): function()
Allows you to process cell data before the Chart visualizes it.

##### field(integrationOptions.putDataFieldsInto): String
Default Value: *"series"*.   
Accepts one of the following values.

- *"args"* - data fields go to the chart arguments.  
- *"series"* - data fields go to the chart series.

---
The **customizeChart**, **customizeSeries**, and **processCell** fields of the **integrationOptions** object are functions. They accept arguments whose structure is described below.

- **customizeChart**

        <!--JavaScript-->customizeChart: function (chartOptions) {
            // Change chart properties here
            return chartOptions; // This line is optional
        }
        
    The **chartOptions** object has the following structure:

    <table class="dx-table full-width">
        <tr>
            <th>Field name</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td><b>valueAxis</b></td>
            <td>Array</td>
            <td>Allows you to customize the automatically-created value axes. Each object in this array can contain fields described in the <a href="/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/" target="_blank">valueAxis</a> property description. When this array holds several objects, use their <a href="/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#name" target="_blank">name</a> field to identify the axis.</td>
        </tr>
        <tr>
            <td><b>panes</b></td>
            <td>Array</td>
            <td>Allows you to customize the automatically-created panes. Each object in this array can contain fields described in the <a href="/Documentation/ApiReference/UI_Components/dxChart/Configuration/panes/" target="_blank">panes</a> property description. When this array holds several objects, use their <a href="/Documentation/ApiReference/UI_Components/dxChart/Configuration/panes/#name" target="_blank">name</a> field to identify the pane.</td>
        </tr>
    </table>

    You can also specify any other [Chart properties](/Documentation/ApiReference/UI_Components/dxChart/Configuration/) in this object, except [dataSource](/Documentation/ApiReference/UI_Components/dxChart/Configuration/#dataSource).

- **customizeSeries** 

        <!--JavaScript-->customizeSeries: function (seriesName, seriesOptions) {
            // Change series properties here
            return seriesOptions; // This line is optional
        }

    The **seriesName** argument is a string that allows you to identify a series. The **seriesOptions** argument is an object with the following structure:

    <table class="dx-table full-width">
        <tr>
            <th>Field name</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td><b>axis</b></td>
            <td>String</td>
            <td>The name of the axis to which the series belongs. Has a value only when the chart has multiple axes.</td>
        </tr>
        <tr>
            <td><b>pane</b></td>
            <td>String</td>
            <td>The name of the pane the series occupies. Has a value only when the chart has multiple panes.</td>
        </tr>
    </table>

    You can also specify any other [series properties](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/) in this object, except [seriesTemplate](Documentation/ApiReference/UI_Components/dxChart/Configuration/seriesTemplate/).

- **processCell**

        <!--JavaScript-->processCell: function (cellData) {
            // Process data here
            return cellData; // This line is optional
        }
        
    The **cellData** object has the following structure:

    <table class="dx-table full-width">
        <tr>
            <th>Field name</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td><b>rowPath</b></td>
            <td>Array</td>
            <td>The path to the data cell by row field values.</td>
        </tr>
        <tr>
            <td><b>rowPathFormatted</b></td>
            <td>Array</td>
            <td>Same as <b>rowPath</b>, but with <a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#format" target="_blank">format</a> and <a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#customizeText" target="_blank">customizeText</a> applied.</td>
        </tr>
        <tr>
            <td><b>rowFields</b></td>
            <td>Array</td>
            <td>Contains objects that are row <a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/" target="_blank">fields</a>.</td>
        </tr>
        <tr>
            <td><b>maxRowLevel</b></td>
            <td>Number</td>
            <td>A zero-based index that indicates the maximum currently expanded row level. Equals to 0 when the pivot grid has no row fields, 1 when all rows are collapsed, 2 when at least one first-level row is expanded, etc.</td>
        </tr>
        <tr>
            <td><b>columnPath</b></td>
            <td>Array</td>
            <td>The path to the data cell by column field values.</td>
        </tr>
        <tr>
            <td><b>columnPathFormatted</b></td>
            <td>Array</td>
            <td>Same as <b>columnPath</b>, but with <a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#format" target="_blank">format</a> and <a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#customizeText" target="_blank">customizeText</a> applied.</td>
        </tr>
        <tr>
            <td><b>columnFields</b></td>
            <td>Array</td>
            <td>Contains objects that are column <a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/" target="_blank">fields</a>.</td>
        </tr>
        <tr>
            <td><b>maxColumnLevel</b></td>
            <td>Number</td>
            <td>A zero-based index that indicates the maximum currently expanded column level. Equals to 0 when the pivot grid has no column fields, 1 when all columns are collapsed, 2 when at least one first-level column is expanded, etc.</td>
        </tr>
        <tr>
            <td><b>dataFields</b></td>
            <td>Array</td>
            <td>Contains objects that are data <a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/" target="_blank">fields</a>.</td>
        </tr>
        <tr>
            <td><b>dataValues</b></td>
            <td>Array</td>
            <td>Data of the current cell. Contains several values if the pivot grid has several data fields.</td>
        </tr>
        <tr>
            <td><b>dataIndex</b></td>
            <td>Number</td>
            <td>A zero-based index that indicates which data field and value from the <b>dataFields</b> and <b>dataValues</b> arrays are currently processed. </td>
        </tr>
        <tr>
            <td><b>visible</b></td>
            <td>Boolean</td>
            <td>Indicates whether the current cell will be passed to the chart. <b>true</b> if the cell belongs to the deepest expanded level.</td>
        </tr>
        <tr>
            <td><b>chartDataItem</b></td>
            <td>Object</td>
            <td>The resulting item passed to the Chart's data source. This object's structure is described in the table below.</td>
        </tr>
    </table>

    The **chartDataItem** object has the following structure: 
    <table class="dx-table full-width">
        <tr>
            <th>Field name</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td><b>series</b></td>
            <td>String</td>
            <td>The name of the series to which the data item belongs.</td>
        </tr>
        <tr>
            <td><b>arg</b></td>
            <td>Number | String | Date</td>
            <td>The argument of the data item.</td>
        </tr>
        <tr>
            <td><b>val</b></td>
            <td>Number | String | Date</td>
            <td>The value of the data item.</td>
        </tr>
    </table>

Main article: [Integration with Chart](/concepts/05%20UI%20Components/PivotGrid/150%20Integration%20with%20Chart/10%20Integration%20with%20Chart.md '/Documentation/Guide/UI_Components/PivotGrid/Integration_with_Chart/')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/ChartIntegration/"
}

#####See Also#####
#include common-link-callmethods