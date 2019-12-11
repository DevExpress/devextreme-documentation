---
module: viz/polar_chart
inherits: ..\BaseChart\BaseChart.md
---
---
##### widgettree
dataSource: [{
    arg: "Monday",
    val: 3
}, {
    arg: "Tuesday",
    val: 2
}, {
    arg: "Wednesday",
    val: 3
}, {
    arg: "Thursday",
    val: 4
}, {
    arg: "Friday",
    val: 6
}, {
    arg: "Saturday",
    val: 11
}, {
    arg: "Sunday",
    val: 4
}]

##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **PolarChart** is a widget that visualizes data in a polar coordinate system.

---
The **PolarChart** widget visualizes data in a polar coordinate system. In this system, each point on a plane is determined by the distance from the center (the point's value) and the angle from a fixed direction (the point's argument). To understand how a chart is displayed in a polar coordinate system, imagine how it would be displayed in a rectangular coordinate system and then round off the argument axis in your mind.

<img src="/Content/images/doc/16_1/ChartJS/PolarChart_rectangular.png" alt="DevExtreme HTML5 Charts DataVisualization" style="display:inline-block; vertical-align:bottom" />
<img src="/Content/images/doc/16_1/ChartJS/PolarChart_polar.png" alt="DevExtreme HTML5 Charts PolarChart RadarChart DataVisualization" style="display:inline-block; vertical-align:bottom" />

You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxPolarChart` jQuery plug-in.

        <!--HTML--><div id="chartContainer"></div>

    <!---->

        <!--JavaScript-->$("#chartContainer").dxPolarChart({
			dataSource: dataSource,
			series: [
				{valueField: "day", name: "Day" }, 
				{ valueField: "night", name: "Night" }
			],
			commonSeriesSettings: {     
				argumentField: "month",
				type: "scatter"
			}
		});

- **Knockout**  
 Add a div element and apply the `dxPolarChart` binding to this element.

        <!--HTML-->
        <div data-bind="dxPolarChart: {
			dataSource: dataSource,
			series: [
				{valueField: 'day', name: 'Day' }, 
				{ valueField: 'night', name: 'Night' }
			],
			commonSeriesSettings: {     
				argumentField: 'month',
				type: 'scatter'
			}
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-polar-chart` directive to this element.

        <!--HTML-->
        <div dx-polar-chart="{
			dataSource: dataSource,
			series: [
				{valueField: 'day', name: 'Day' }, 
				{ valueField: 'night', name: 'Night' }
			],
			commonSeriesSettings: {     
				argumentField: 'month',
				type: 'scatter'
			}
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/20%20Data%20Visualization/05%20Basics/01%20Installation '/Documentation/Guide/Data_Visualization/Basics/Installation/') article.

The **PolarChart** widget contains multiple visual elements (axes, titles, labels, strips, grid, etc.). To learn more about the widget's visual elements, refer to the [PolarChart Elements](/concepts/20%20Data%20Visualization/10%20Charts/352%20PolarChart%20Elements '/Documentation/Guide/Data_Visualization/Charts/PolarChart_Elements/') help article. To learn how to provide data for the **PolarChart** widget, refer to the <a href="/Documentation/16_1/Guide/Data_Visualization/Charts/Data_Binding">Data Binding</a> article.

Choose one of the following supported series types.

- [Line](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/5%20Series%20Types/LineSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/')
- [Area](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/5%20Series%20Types/AreaSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/AreaSeries/')
- [Scatter](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/5%20Series%20Types/ScatterSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/ScatterSeries/')
- [Bar](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/5%20Series%20Types/BarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/BarSeries/')
- [StackedBar](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/5%20Series%20Types/StackedBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/StackedBarSeries/')

You can read an overview of these series types in the [PolarChart Series Types](/concepts/20%20Data%20Visualization/10%20Charts/355%20PolarChart%20Series%20Types '/Documentation/Guide/Data_Visualization/Charts/PolarChart_Series_Types/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartspolarandradarchartspolarandradarchartspolarrose/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=mcaID_EYLOo&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=40" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

#####See Also#####
- [Data Visualization Guides](/Documentation/Howto#datavisualization)