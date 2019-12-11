---
module: viz/chart
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
The **Chart** is a widget that visualizes data from a local or remote storage using a great variety of [series types](/concepts/20%20Data%20Visualization/10%20Charts/20%20Chart%20Series%20Types '/Documentation/Guide/Data_Visualization/Charts/Chart_Series_Types/') along with different interactive elements, such as [tooltips](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/040%20Tooltips.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Tooltips'), [crosshair pointer](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/045%20Crosshair.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Crosshair'), [legend](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/120%20Legend.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Legend'), etc.

---
You can create the **Chart** widget using one of the following approaches.

- **jQuery**  
 Use the `dxChart` jQuery plug-in.

        <!--HTML--><div id="chartContainer"></div>

    <!---->

        <!--JavaScript-->$("#chartContainer").dxChart({
			dataSource: dataSource,
			commonSeriesSettings: {
				argumentField: "state",
				type: "bar"
			},
			series: [
				{ valueField: "year2004", name: "2004" },
				{ valueField: "year2001", name: "2001" },
				{ valueField: "year1998", name: "1998" }
			]
		});

- **Knockout**  
 Add a `<div>` element and apply the `dxChart` binding to this element.

        <!--HTML-->
        <div data-bind="dxChart: {
			dataSource: dataSource,
			commonSeriesSettings: {
				argumentField: 'state',
				type: 'bar'
			},
			series: [
				{ valueField: 'year2004', name: '2004' },
				{ valueField: 'year2001', name: '2001' },
				{ valueField: 'year1998', name: '1998' }
			]
        }"></div>

- **AngularJS**  
 Add a `<div>` element and apply the `dx-chart` directive to this element.

        <!--HTML-->
        <div dx-chart="{
			dataSource: dataSource,
			commonSeriesSettings: {
				argumentField: 'state',
				type: 'bar'
			},
			series: [
				{ valueField: 'year2004', name: '2004' },
				{ valueField: 'year2001', name: '2001' },
				{ valueField: 'year1998', name: '1998' }
			]
        }"></div>

All DevExtreme widgets require linking the jQuery library. Linking the Knockout or AngularJS library is optional. For detailed information on how to link the needed libraries, refer to the [Installation](/concepts/20%20Data%20Visualization/05%20Basics/01%20Installation '/Documentation/Guide/Data_Visualization/Basics/Installation/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsbarseriessimplestsingle/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Data Binding](/concepts/20%20Data%20Visualization/10%20Charts/40%20Data%20Binding '/Documentation/Guide/Data_Visualization/Charts/Data_Binding/') - shows how to provide data for the **Chart** widget.
- [Chart Elements](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/') - provides an overview of visual elements present in the **Chart** widget.