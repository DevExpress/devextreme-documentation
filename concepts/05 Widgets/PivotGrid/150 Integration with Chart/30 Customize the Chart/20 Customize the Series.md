If you need to customize the automatically-formed series, assign a callback function to the **customizeSeries** field. This function will be called once for each series.

    <!--JavaScript-->pivotGridInstance.bindChart('#chartWidget', {
        // ...
        customizeSeries: function (seriesName, seriesOptions) {
            // Change series options here
            return seriesOptions; // This line is optional
        }
    });
    
The function accepts the following arguments.

- **seriesName**: <span style="font-size:12px">String</span>    
Identifies the series. 
- **seriesOptions**: <span style="font-size:12px">Object</span>     
The options of the series.
    * **axis**: <span style="font-size:12px">String</span>      
    The name of the axis the series occupies. Has a value only when there are several axes in the chart.
    * **pane**: <span style="font-size:12px">String</span>      
    The name of the pane the series occupies. Has a value only when there are several panes in the chart.
    
The **seriesOptions** can contain any appearance-related options from the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') section of the reference.

When series were generated from several data fields, they can be arranged in three different manners.

- *"singleAxis"* - series of all data fields are displayed on a single value axis.
- *"splitAxes"* - series of each data field occupy an individual value axis.
- *"splitPanes"* - series of each data field occupy an individual pane.

To specify the exact manner, use the **dataFieldsDisplayMode** field.

    <!--JavaScript-->pivotGridInstance.bindChart('#chartWidget', {
        // ...
        dataFieldsDisplayMode: 'splitAxes' | 'singleAxis' | 'splitPanes'
    });
    
[note]If you have set the [putDataFieldsInto](/concepts/05%20Widgets/PivotGrid/150%20Integration%20with%20Chart/20%20Convert%20Grid%20Fields%20into%20Chart%20Series.md '/Documentation/Guide/Widgets/PivotGrid/Integration_with_Chart/#Convert_Grid_Fields_into_Chart_Series') field to *"args"*, **dataFieldsDisplayMode** will be set to *"singleAxis"* forcedly.