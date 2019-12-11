---
##### shortDescription
Binds a [Chart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/') to the **PivotGrid**.

##### param(chart): String|jQuery|Object
<b>Chart</b> to be bound to <b>PivotGrid</b>.<br />
Accepts the <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance">instance</a>, <a href="http://api.jquery.com/Types/#jQuery">jQuery element</a> or <a href="https://api.jquery.com/category/selectors/">selector</a> of <b>Chart</b>'s container.

##### param(integrationOptions): Object
Configures <b>Chart</b> contents and appearance.

##### field(integrationOptions.inverted): Boolean
Default Value: <i>false</i>.<br />
If <i>true</i>, <a href="/Documentation/16_2/Guide/Widgets/PivotGrid/Visual_Elements/#Headers">row field</a> values go to the <a href="/Documentation/16_2/Guide/Widgets/Chart/Visual_Elements/#Axes/Argument_Axis">chart arguments</a> and <a href="/Documentation/16_2/Guide/Widgets/PivotGrid/Visual_Elements/#Headers">column field</a> values form <a href="/Documentation/16_2/Guide/Widgets/Chart/Visual_Elements/#Series">series</a>. If <i>false</i> - vice versa.

##### field(integrationOptions.dataFieldsDisplayMode): String
Default Value: <i>"splitAxes"</i>.<br />
Accepts one of the following values.<br />
<ul>
    <li><i>"singleAxis"</i> - values of all data fields are displayed on a single <a href="/Documentation/16_2/Guide/Widgets/Chart/Visual_Elements/#Axes/Value_Axis">value axis</a>.</li>
    <li><i>"splitAxes"</i> - each data field gets an individual value axis. Applies only if <b>putDataFieldsInto</b> is <i>"series"</i>.</li>
    <li><i>"splitPanes"</i> - each data field gets an individual <a href="/Documentation/16_2/Guide/Widgets/Chart/Visual_Elements/#Panes">pane</a>. Applies only if <b>putDataFieldsInto</b> is <i>"series"</i>.</li>
</ul>
<b>NOTE:</b> Applies only if <b>PivotGrid</b> contains several <a href="/Documentation/16_2/Guide/Widgets/PivotGrid/Fields_and_Areas/#Fields">data fields</a>.

##### field(integrationOptions.putDataFieldsInto): String
Default Value: <i>"series"</i>.<br />
Accepts one of the following values.
<ul>
    <li><i>"args"</i> - data fields go to the chart arguments.</li>
    <li><i>"series"</i> - data fields go to the chart series.</li>
</ul>

##### field(integrationOptions.alternateDataFields): Boolean
Default Value: <i>true</i>.<br />
Specifies whether to alternate data fields in the resulting chart or not.<br />
<b>NOTE:</b> Applies only if </b>PivotGrid</b> contains several data fields.

##### field(integrationOptions.processCell): function()
Allows you to process data of a grid cell before it will be visualized by the chart.

##### field(integrationOptions.customizeChart): function()
Allows you to customize the appearance of the chart.

##### field(integrationOptions.customizeSeries): function()
Allows you to customize the chart series.

##### return: function()|null
Unbinds the chart. If <b>null</b>, then binding failed.

---
Main article: [Integration with Chart](/concepts/05%20Widgets/PivotGrid/150%20Integration%20with%20Chart/10%20Integration%20with%20Chart.md '/Documentation/Guide/Widgets/PivotGrid/Integration_with_Chart/')

<a href="/Demos/WidgetsGallery/Demo/PivotGrid/ChartIntegration/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>