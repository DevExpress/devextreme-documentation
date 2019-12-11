---
module: viz/bar_gauge
inherits: ..\BaseWidget\BaseWidget.md
---
---
##### widgettree
values: [50, 30, 90]

##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **BarGauge** widget contains several circular bars that each indicates a single value.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxBarGauge` jQuery plug-in.

        <!--HTML--><div id="gaugeContainer"></div>

    <!---->

        <!--JavaScript-->$("#gaugeContainer").dxBarGauge({
			startValue: 0,
			endValue: 100,
			values: [21.3, 54.1, 30.9, 45.2, 89.41]
		});

- **Knockout**  
 Add a div element and apply the `dxBarGauge` binding to this element.

        <!--HTML-->
        <div data-bind="dxBarGauge: {
			startValue: 0,
			endValue: 100,
			values: [21.3, 54.1, 30.9, 45.2, 89.41]
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-bar-gauge` directive to this element.

        <!--HTML-->
        <div dx-bar-gauge="{
			startValue: 0,
			endValue: 100,
			values: [21.3, 54.1, 30.9, 45.2, 89.41]
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/20%20Data%20Visualization/05%20Basics/01%20Installation '/Documentation/Guide/Data_Visualization/Basics/Installation/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/gaugesbargaugesbargaugebasicelementslabelscustomization/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=4pOpe70YkS0&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=24" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

#####See Also#####
- [Data Visualization Guides](/Documentation/Howto#datavisualization)