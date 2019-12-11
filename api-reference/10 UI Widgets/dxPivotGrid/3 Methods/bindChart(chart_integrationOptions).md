---
##### shortDescription
Binds a [Chart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/') to the **PivotGrid**.

##### param(chart): String|jQuery|Object
**Chart** to be bound to **PivotGrid**.    
Accepts the [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance'), [jQuery element](https://api.jquery.com/Types/#jQuery) or [selector](https://api.jquery.com/category/selectors) of **Chart**'s container.

##### param(integrationOptions): Object
Configures **Chart** contents and appearance.

##### field(integrationOptions.inverted): Boolean
Default Value: **false**.    
If **true**, [row field](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers') values go to the [chart arguments](/concepts/05%20Widgets/Chart/20%20Axes/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Axes/Overview/') and [column field](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers') values form [series](/concepts/05%20Widgets/Chart/10%20Series/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Series/Overview/'). If **false** - vice versa.

##### field(integrationOptions.dataFieldsDisplayMode): String
Default Value: *"splitAxes"*.   
Accepts one of the following values.   

- *"singleAxis"* - values of all data fields are displayed on a single [value axis](/concepts/05%20Widgets/Chart/20%20Axes/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Axes/Overview/').  
- *"splitAxes"* - each data field gets an individual value axis. Applies only if **putDataFieldsInto** is *"series"*.  
- *"splitPanes"* - each data field gets an individual [pane](/concepts/05%20Widgets/Chart/40%20Panes/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Panes/Overview/'). Applies only if **putDataFieldsInto** is *"series"*.  

**NOTE:** Applies only if **PivotGrid** contains several [data fields](/concepts/05%20Widgets/PivotGrid/020%20Fields%20and%20Areas/10%20Fields.md '/Documentation/Guide/Widgets/PivotGrid/Fields_and_Areas/#Fields').

##### field(integrationOptions.putDataFieldsInto): String
Default Value: *"series"*.   
Accepts one of the following values.

- *"args"* - data fields go to the chart arguments.  
- *"series"* - data fields go to the chart series.

##### field(integrationOptions.alternateDataFields): Boolean
Default Value: *true*.   
Specifies whether to alternate data fields in the resulting chart or not.   
**NOTE:** Applies only if **PivotGrid** contains several data fields.

##### field(integrationOptions.processCell): function()
Allows you to process data of a grid cell before it will be visualized by the chart.

##### field(integrationOptions.customizeChart): function()
Allows you to customize the appearance of the chart.

##### field(integrationOptions.customizeSeries): function()
Allows you to customize the chart series.

##### return: function()|null
Unbinds the chart. If **null**, then binding failed.

---
Main article: [Integration with Chart](/concepts/05%20Widgets/PivotGrid/150%20Integration%20with%20Chart/10%20Integration%20with%20Chart.md '/Documentation/Guide/Widgets/PivotGrid/Integration_with_Chart/')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/ChartIntegration/jQuery/Light/"
}

#####See Also#####
#include common-link-callmethods