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
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->var fruits = [
        { fruit: "Oranges", yield: 10, consumed: 7 },
        { fruit: "Apples", yield: 15, consumed: 14 },
        { fruit: "Bananas", yield: 9, consumed: 9 }
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

    <!--HTML--><div id="pieChart"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-pie-chart [dataSource]="fruits">
        <dxo-common-series-settings argumentField="fruit"></dxo-common-series-settings>
        <dxi-series valueField="yield"></dxi-series>
        <dxi-series valueField="consumed"></dxi-series>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = [
            { fruit: "Oranges", yield: 10, consumed: 7 },
            { fruit: "Apples", yield: 15, consumed: 14 },
            { fruit: "Bananas", yield: 9, consumed: 9 }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

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
                { fruit: "Oranges", yield: 10, consumed: 7 },
                { fruit: "Apples", yield: 15, consumed: 14 },
                { fruit: "Bananas", yield: 9, consumed: 9 }   
            ];
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

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
            { fruit: "Oranges", yield: 10, consumed: 7 },
            { fruit: "Apples", yield: 15, consumed: 14 },
            { fruit: "Bananas", yield: 9, consumed: 9 }
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().PieChart()
        .ID("pieChart")
        .DataSource(new[] {
            new { Fruit = "Oranges", Yield = 10, Consumed = 7 },
            new { Fruit = "Apples", Yield = 15, Consumed = 14 },
            new { Fruit = "Bananas", Yield = 9, Consumed = 9 }
        })
        .CommonSeriesSettings(c => c
            .ArgumentField("Fruit")
        )
        .Series(series => {
            series.Add().ValueField("Yield");
            series.Add().ValueField("Consumed");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().PieChart() _
        .ID("pieChart") _
        .DataSource({
            New With { .Fruit = "Oranges", .Yield = 10, .Consumed = 7 },
            New With { .Fruit = "Apples", .Yield = 15, .Consumed = 14 },
            New With { .Fruit = "Bananas", .Yield = 9, .Consumed = 9 }
        }) _
        .CommonSeriesSettings(Sub(c)
            c.ArgumentField("Fruit")
        End Sub) _
        .Series(Sub(series)
            series.Add().ValueField("Yield")
            series.Add().ValueField("Consumed")
        End Sub)
    

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartspieseriespie/"
}
<a href="http://www.youtube.com/watch?v=qYkkyOzR9jc&index=14&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">Watch Video</a>

#####See Also#####
- [PieChart Overview](/concepts/05%20Widgets/PieChart/00%20Overview.md '/Documentation/Guide/Widgets/PieChart/Overview/')
- [Data Binding](/concepts/05%20Widgets/PieChart/03%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/PieChart/Data_Binding/Simple_Array/Array_Only/')
- [ASP.NET MVC Controls - Data Binding](/concepts/35%20ASP.NET%20MVC%20Controls/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/')