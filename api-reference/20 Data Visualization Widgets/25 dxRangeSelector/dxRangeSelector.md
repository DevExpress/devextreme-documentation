---
module: viz/range_selector
inherits: ..\BaseWidget\BaseWidget.md
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
    val: 3
}, {
    arg: "4",
    val: 4
}, {
    arg: "5",
    val: 5
}, {
    arg: "6",
    val: 6
}, {
    arg: "7",
    val: 7
}, {
    arg: "8",
    val: 8
}]

##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **RangeSelector** is a widget that allows a user to select a range of values on a scale.

---
This widget represents a scale (numeric or date-time) and two sliders. A user selects the required range by moving the sliders.

<img style="margin:0px auto;display:block" src="/Content/images/doc/16_1/ChartJS/RangeSelector_new.gif" alt="RangeSelector" />

You can create a widget using one of the following approaches.

- **jQuery**  
 Use the `dxRangeSelector` jQuery plug-in.

        <!--HTML--><div id="rangeSelectorContainer"></div>

    <!---->

        <!--JavaScript-->$("#rangeSelectorContainer").dxRangeSelector({
			scale: {
				startValue: new Date(2011, 1, 1),
				endValue: new Date(2011, 6, 1),
				tickInterval: { days: 7 }
			}
		});

- **Knockout**  
 Add a div element and apply the `dxRangeSelector` binding to this element.

        <!--HTML-->
        <div data-bind="dxRangeSelector: {
			scale: {
				startValue: new Date(2011, 1, 1),
				endValue: new Date(2011, 6, 1),
				tickInterval: { days: 7 }
			}
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-range-selector` directive to this element.

        <!--HTML-->
        <div dx-range-selector="{
			scale: {
				startValue: new Date(2011, 1, 1),
				endValue: new Date(2011, 6, 1),
				tickInterval: { days: 7 }
			}
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/20%20Data%20Visualization/05%20Basics/01%20Installation '/Documentation/Guide/Data_Visualization/Basics/Installation/') article.

A chart can be displayed in the [background](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/background '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/background/') of the **RangeSelector** widget. This allows end users to select the required range in a chart series. You can also integrate the **RangeSelector** widget with a stand-alone [Chart](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/') widget to emulate chart [zooming and scrolling](/concepts/20%20Data%20Visualization/10%20Charts/80%20End-User%20Interaction/6%20Zooming%20and%20Scrolling/01%20Using%20dxRangeSelector.md '/Documentation/Guide/Data_Visualization/Charts/End-User_Interaction/#Zooming_and_Scrolling/Using_dxRangeSelector').

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposerangeselectorrangeselectornumericscale/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=0x_VmMwxigA&index=52&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

#####See Also#####
- [Data Visualization Guides](/Documentation/Howto#datavisualization)