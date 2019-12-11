---
module: viz/pie_chart
export: default
inherits: ..\BaseChart\BaseChart.md
---
---
##### widgettree
dataSource: [{
    arg: "Russia",
    val: 12
}, {
    arg: "Canada",
    val: 7
}, {
    arg: "USA",
    val: 7
}, {
    arg: "China",
    val: 7
}, {
    arg: "Brazil",
    val: 6
}, {
    arg: "Australia",
    val: 5
}, {
    arg: "India",
    val: 2
}, {
    arg: "Others",
    val: 55
}]

##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **PieChart** is a widget that visualizes data as a circle divided into sectors that each represents a portion of the whole.

---
You can create the widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML--><div id="pieChart"></div>

        <!--JavaScript-->var fruits = [
            { fruit: 'Oranges', yield: 10, consumed: 7 },
            { fruit: 'Apples', yield: 15, consumed: 14 },
            { fruit: 'Bananas', yield: 9, consumed: 9 }
        ];
        $(function() {
            $("#pieChart").dxPieChart({
                dataSource: fruits,
                commonSeriesSettings: {
                    argumentField: "fruit"
                },
                series: [
                    { valueField: "yield" },
                    { valueField: "consumed" }
                ]
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-pie-chart [dataSource]="fruits">
            <dxo-common-series-settings argumentField="fruit"></dxo-common-series-settings>
            <dxi-series valueField="yeld"></dxi-series>
            <dxi-series valueField="consumed"></dxi-series>
        </dx-pie-chart>

        <!--JavaScript-->
        export class AppComponent {
            fruits = [
                // ...   
            ];
        }

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-pie-chart="{
                dataSource: fruits,
                commonSeriesSettings: {
                    argumentField: 'fruit'
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
        <div data-bind="dxPieChart: {
            dataSource: fruits,
            commonSeriesSettings: {
                argumentField: 'fruit'
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

        <!--Razor C#-->@(Html.DevExtreme().PieChart()
            .ID("pieChart")
            .DataSource(Fruits)
            .CommonSeriesSettings(c => c
                .ArgumentField("fruit")
            )
            .Series(series => {
                series.Add().ValueField("yield");
                series.Add().ValueField("consumed");
            })
        )

        <!--Razor VB-->@(Html.DevExtreme().PieChart() _
            .ID("pieChart") _
            .DataSource(Fruits) _
            .CommonSeriesSettings(Sub(c)
                c.ArgumentField("fruit")
            End Sub) _
            .Series(Sub(series)
                series.Add().ValueField("yield")
                series.Add().ValueField("consumed")
            End Sub)
        

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartspieseriespie/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=qYkkyOzR9jc&index=14&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">Watch Video</a>

#####See Also#####
- [PieChart - Visual Elements](c:\content\05 Widgets\PieChart\10 Visual Elements\Visual Elements.htm '/Documentation/Guide/Widgets/PieChart/Visual_Elements/')
- [PieChart - Series Types](c:\content\05 Widgets\PieChart\20 Series Types\Series Types.htm '/Documentation/Guide/Widgets/PieChart/Series_Types/')
- [Charts - Data Binding](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/85%20Charts%20-%20Data%20Binding/10%20Provide%20Data '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/')
- [ASP.NET MVC Wrappers - Data Binding](/concepts/35%20ASP.NET%20MVC%20Wrappers/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Wrappers/Data_Binding/')