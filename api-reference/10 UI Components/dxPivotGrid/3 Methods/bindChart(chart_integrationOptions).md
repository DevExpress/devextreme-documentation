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
Main article: [Integration with Chart](/concepts/05%20UI%20Components/PivotGrid/150%20Integration%20with%20Chart/10%20Integration%20with%20Chart.md '/Documentation/Guide/UI_Components/PivotGrid/Integration_with_Chart/')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/ChartIntegration/"
}

#####See Also#####
#include common-link-callmethods