---
id: dxChart.Options.valueAxis.strips
type: Array<Object>
inherits: dxChart.Options.commonAxisSettings.stripStyle
notUsedInTheme: 
---
---
##### shortDescription
Declares a collection of strips belonging to the value axis.

---
A strip is a colored piece of the chart's background that highlights a range of values. Strips allow a viewer to see whether a certain series point falls in or out of a range.

![DevExtreme HTML5 Charts Strips](/images/ChartJS/visual_elements/strips.png)

Each object in the **strips** array configures a single strip. To limit a strip, set its **startValue** and **endValue** options. You may set only one of them, in which case the strip will not have a limit at one end. Note that setting the **color** option is also necessary for a strip to be displayed.

#####See Also#####
- **valueAxis**.[stripStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/stripStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/stripStyle/') - specifies the appearance of those strips that belong to the value axis.
- **commonAxisSettings**.[stripStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/stripStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/stripStyle/') - specifies the appearance of all strips in the widget.