---
id: dxPolarChart.Options.adaptiveLayout
type: Object
---
---
##### shortDescription
Specifies adaptive layout options.

---
The adaptive layout enables the widget to hide optional elements if they do not fit in the container. Elements are hidden in the following sequence:

1. [Title](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/title.md '{basewidgetpath}/Configuration/title')
2. [Export menu icon](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '{basewidgetpath}/Configuration/export')
3. [Legend](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/legend '{basewidgetpath}/Configuration/legend')
4. [Argument axis labels](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/label '{basewidgetpath}/Configuration/argumentAxis/label')
5. [Point labels](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label '{basewidgetpath}/Configuration/commonSeriesSettings/label') (can be saved by setting the **adaptiveLayout**.[keepLabels](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/adaptiveLayout/keepLabels.md '{basewidgetpath}/Configuration/adaptiveLayout#keepLabels') option to **true**)

Use the **height** and **width** options in the **adaptiveLayout** object to specify the minimum container size at which the layout begins to adapt.

<a href="https://jsfiddle.net/ChartJS/0s1tw53v/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo on JSFiddle</a>