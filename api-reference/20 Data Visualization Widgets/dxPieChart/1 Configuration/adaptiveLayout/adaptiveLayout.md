---
id: dxPieChart.Options.adaptiveLayout
type: Object
---
---
##### shortDescription
Specifies adaptive layout options.

---
The adaptive layout enables the widget to hide optional elements if they do not fit in the container. Elements are hidden in the following sequence:

1. [Title](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/title.md '{basewidgetpath}/Configuration/title')
2. [Export menu icon](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '{basewidgetpath}/Configuration/export')
3. [Legend](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/legend '{basewidgetpath}/Configuration/legend')
4. [Point labels](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label '{basewidgetpath}/Configuration/commonSeriesSettings/label') (can be saved by setting the **adaptiveLayout**.[keepLabels](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/adaptiveLayout/keepLabels.md '{basewidgetpath}/Configuration/adaptiveLayout#keepLabels') option to **true**)

Use the **height** and **width** options in the **adaptiveLayout** object to specify the minimum container size at which the layout begins to adapt.

<a href="https://jsfiddle.net/ChartJS/2arphpsx/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo on JSFiddle</a>

#####See Also#####
- [Adaptive Layout](/concepts/05%20Widgets/PieChart/89%20Adaptive%20Layout.md '/Documentation/Guide/Widgets/PieChart/Adaptive_Layout/')