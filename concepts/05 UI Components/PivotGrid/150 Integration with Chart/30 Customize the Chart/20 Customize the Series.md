If you need to customize the automatically-formed series, assign a callback function to the **customizeSeries** field. This function will be called once for each series.

    pivotGridInstance.bindChart(chartInstance, {
        // ...
        customizeSeries: function (seriesName, seriesOptions) {
            // Change series properties here
            return seriesOptions; // This line is optional
        }
    });

The function accepts the following arguments.

- **seriesName**: <span style="font-size:12px">String</span>    
Identifies the series. 
- **seriesOptions**: <span style="font-size:12px">Object</span>     
The properties of the series.
    * **axis**: <span style="font-size:12px">String</span>      
    The name of the axis the series occupies. Has a value only when there are several axes in the Chart.
    * **pane**: <span style="font-size:12px">String</span>      
    The name of the pane the series occupies. Has a value only when there are several panes in the Chart.
    
The **seriesOptions** can contain any appearance-related properties from the [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') section of the reference.

When series are generated from several data fields, they can be arranged in three different ways:

- *"singleAxis"* - series of all data fields are displayed on a single value axis.
- *"splitAxes"* - series of each data field occupy an individual value axis.
- *"splitPanes"* - series of each data field occupy an individual pane.

To specify the exact way, use the **dataFieldsDisplayMode** field.

    pivotGridInstance.bindChart(chartInstance, {
        // ...
        dataFieldsDisplayMode: 'splitAxes' | 'singleAxis' | 'splitPanes'
    });

[note]If you have set the [putDataFieldsInto](/concepts/05%20UI%20Components/PivotGrid/150%20Integration%20with%20Chart/20%20Convert%20Grid%20Fields%20into%20Chart%20Series.md '/Documentation/Guide/UI_Components/PivotGrid/Integration_with_Chart/#Convert_Grid_Fields_into_Chart_Series') field to *"args"*, **dataFieldsDisplayMode** will be set to *"singleAxis"* forcedly.