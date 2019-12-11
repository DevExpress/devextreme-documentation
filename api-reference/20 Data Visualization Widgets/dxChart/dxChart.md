---
module: viz/chart
export: default
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
The **Chart** is a widget that visualizes data from a local or remote storage using a great variety of [series types](/concepts/05%20Widgets/Chart/20%20Series%20Types '/Documentation/Guide/Widgets/Chart/Series_Types/') along with different interactive elements, such as [tooltips](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/040%20Tooltips.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Tooltips'), [crosshair pointer](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/045%20Crosshair.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Crosshair'), [legend](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/120%20Legend.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Legend'), etc.

---
You can create the **Chart** widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML--><div id="chart"></div>

        <!--JavaScript-->var fruits = [
            { fruit: 'Oranges', yield: 10, consumed: 7 },
            { fruit: 'Apples', yield: 15, consumed: 14 },
            { fruit: 'Bananas', yield: 9, consumed: 9 }
        ];
        $(function() {
            $("#chart").dxChart({
                dataSource: fruits,
                commonSeriesSettings: {
                    argumentField: "fruit",
                    type: "bar"
                },
                series: [
                    { valueField: "yield" },
                    { valueField: "consumed" }
                ]
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-chart [dataSource]="fruits">
            <dxo-common-series-settings
                argumentField="fruit"
                type="bar">
            </dxo-common-series-settings>
            <dxi-series valueField="yeld"></dxi-series>
            <dxi-series valueField="consumed"></dxi-series>
        </dx-chart>

        <!--JavaScript-->
        export class AppComponent {
            fruits = [
                // ...   
            ];
        }

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-chart="{
                dataSource: fruits,
                commonSeriesSettings: {
                    argumentField: 'fruit',
                    type: 'bar'
                },
                series: [
                    { valueField: 'yield' },
                    { valueField: 'consumed' }
                ]
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.fruits = [
                    // ...   
                ];
            });

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div data-bind="dxChart: {
            dataSource: fruits,
            commonSeriesSettings: {
                argumentField: 'fruit',
                type: 'bar'
            },
            series: [
                { valueField: 'yield' },
                { valueField: 'consumed' }
            ]
        }"></div>

        <!--JavaScript-->var viewModel = {
            fruits: [
                // ...
            ]
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')

        <!--Razor C#-->@(Html.DevExtreme().Chart()
            .ID("chart")
            .DataSource(Fruits)
            .CommonSeriesSettings(c => c
                .ArgumentField("fruit")
                .Type(SeriesType.Bar)
            )
            .Series(series => {
                series.Add().ValueField("yield");
                series.Add().ValueField("consumed");
            })
        )

        <!--Razor VB-->@(Html.DevExtreme().Chart() _
            .ID("chart") _
            .DataSource(Fruits) _
            .CommonSeriesSettings(Sub(c)
                c.ArgumentField("fruit") _
                 .Type(SeriesType.Bar)
            End Sub) _
            .Series(Sub(series)
                series.Add().ValueField("yield")
                series.Add().ValueField("consumed")
            End Sub)
        )

All DevExtreme widgets require linking the jQuery library. Linking the Knockout or AngularJS library is optional. For detailed information on how to link the needed libraries, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsbarseriessimplestsingle/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Chart - Visual Elements](/concepts/05%20Widgets/Chart/10%20Visual%20Elements '/Documentation/Guide/Widgets/Chart/Visual_Elements/')
- [Chart - Series Types](/concepts/05%20Widgets/Chart/20%20Series%20Types '/Documentation/Guide/Widgets/Chart/Series_Types/')
- [Charts - Data Binding](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/85%20Charts%20-%20Data%20Binding/10%20Provide%20Data '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/')
- [ASP.NET MVC Wrappers - Data Binding](/concepts/35%20ASP.NET%20MVC%20Wrappers/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Wrappers/Data_Binding/')