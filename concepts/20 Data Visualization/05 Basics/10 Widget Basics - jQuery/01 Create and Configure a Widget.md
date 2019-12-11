Any widget must be placed in a container. This role is played by a `<div>` HTML element. Add a `<div>` to the `<body>` tag of your page. Make sure that this `<div>` has the `id` attribute specified.

    <!--HTML--><div id="chartContainer" style="height:400px; max-width:800px"></div>

DevExtreme supplies a jQuery plugin for each widget.

<ul style="font-size:14px">
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/">dxChart()</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPieChart/">dxPieChart()</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/">dxPolarChart()</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxTreeMap/">dxTreeMap()</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxCircularGauge/">dxCircularGauge()</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxLinearGauge/">dxLinearGauge()</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxBarGauge/">dxBarGauge()</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxRangeSelector/">dxRangeSelector()</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxBullet/">dxBullet()</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxSparkline/">dxSparkline()</a></li>
  <li><a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/">dxVectorMap()</a></li>
</ul>

To create, for example, the **Chart** widget within the `chartContainer` element, use the `dxChart()` plugin as the following code shows.

    <!--JavaScript-->$(function () {
		$("#chartContainer").dxChart();
	});

To configure a widget, pass an object to the plugin as shown in the following code. Note that the properties of this object mirror the options of the widget.

    <!--JavaScript-->$(function () {
		$("#chartContainer").dxChart({
			dataSource: [
                { fruit: 'Oranges', total: 10 },
                { fruit: 'Apples', total: 15 },
                { fruit: 'Bananas', total: 9 }
			],
			series: { argumentField: 'fruit', valueField: 'total' }
		});
	});

#####See Also#####
- [Reference](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/') | **WidgetName** | **Configuration** - describes all options of a specific DevExtreme widget.