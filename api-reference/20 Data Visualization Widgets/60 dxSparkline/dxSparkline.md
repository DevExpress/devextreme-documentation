---
module: viz/sparkline
inherits: ..\BaseSparkline\BaseSparkline.md
---
---
##### widgettree
dataSource: [{
    arg: "1",
    val: 1
}, {
    arg: "2",
    val: 2
}, {
    arg: "3",
    val: 8
}, {
    arg: "4",
    val: 4
}, {
    arg: "5",
    val: 5
}, {
    arg: "6",
    val: 2
}, {
    arg: "7",
    val: 7
}, {
    arg: "8",
    val: 3
}]

##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Sparkline** widget is a compact chart that contains only one series. Owing to their size, sparklines occupy very little space and can be easily collected in a table or embedded straight in text.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxSparkline` jQuery plug-in.

        <!--HTML--><div id="sparklineContainer"></div>

    <!---->

        <!--JavaScript-->$("#sparklineContainer").dxSparkline({
			dataSource: dataSource,
			argumentField: 'month',
			valueField: '2010',
			type: 'spline'
		});

- **Knockout**  
 Add a div element and apply the `dxSparkline` binding to this element.

        <!--HTML-->
        <div data-bind="dxSparkline: {
			dataSource: dataSource,
			argumentField: 'month',
			valueField: '2010',
			type: 'spline'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-sparkline` directive to this element.

        <!--HTML-->
        <div dx-sparkline="{
			dataSource: dataSource,
			argumentField: 'month',
			valueField: '2010',
			type: 'spline'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/20%20Data%20Visualization/05%20Basics/01%20Installation '/Documentation/Guide/Data_Visualization/Basics/Installation/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartssparklinessparklinesline/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=0c9bcWgpxho&index=27&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>