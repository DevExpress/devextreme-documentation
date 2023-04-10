---
id: BaseChart.Options.adaptiveLayout
type: viz\chart_components\base_chart:BaseChartAdaptiveLayout
inheritsType: viz\chart_components\base_chart:BaseChartAdaptiveLayout
---
---
##### shortDescription
Specifies adaptive layout properties.

---
The adaptive layout enables the UI component to hide optional elements if they do not fit in the container. Elements are hidden in the following sequence:

1. [Title](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/title '{basewidgetpath}/Configuration/title')
2. [Export menu icon](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/export '{basewidgetpath}/Configuration/export')
3. [Legend](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/legend '{basewidgetpath}/Configuration/legend')
4. [Axis titles](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/title '{basewidgetpath}/Configuration/commonAxisSettings/title')
5. [Axis labels](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/label '{basewidgetpath}/Configuration/commonAxisSettings/label')
6. [Point labels](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label '{basewidgetpath}/Configuration/commonSeriesSettings/label') (can be saved by setting the **adaptiveLayout**.[keepLabels](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/adaptiveLayout/keepLabels.md '{basewidgetpath}/Configuration/adaptiveLayout#keepLabels') property to **true**)

Use the **height** and **width** properties in the **adaptiveLayout** object to specify the minimum container size at which the layout begins to adapt.

<a href="https://jsfiddle.net/ChartJS/2m1pv4ag/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo on JSFiddle</a>

#####See Also#####
- [Adaptive Layout](/concepts/05%20UI%20Components/Chart/89%20Adaptive%20Layout.md '/Documentation/Guide/UI_Components/{WidgetName}/Adaptive_Layout/')