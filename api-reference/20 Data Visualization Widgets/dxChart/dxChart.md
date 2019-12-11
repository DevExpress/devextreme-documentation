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
The **Chart** is a widget that visualizes data from a local or remote storage using a great variety of [series types](/concepts/05%20Widgets/Chart/11%20Series%20Types '/Documentation/Guide/Widgets/Chart/Series_Types/') along with different interactive elements, such as [tooltips](/concepts/05%20Widgets/Chart/30%20Tooltips/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Tooltips/Overview/'), [crosshair pointer](/concepts/05%20Widgets/Chart/80%20Crosshair.md '/Documentation/Guide/Widgets/Chart/Crosshair/'), [legend](/concepts/05%20Widgets/Chart/35%20Legend/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Legend/Overview/'), etc.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

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

    <!--HTML--><div id="chart"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-chart [dataSource]="fruits">
        <dxo-common-series-settings
            argumentField="fruit"
            type="bar">
        </dxo-common-series-settings>
        <dxi-series valueField="yield"></dxi-series>
        <dxi-series valueField="consumed"></dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = [
            { fruit: 'Oranges', yield: 10, consumed: 7 },
            { fruit: 'Apples', yield: 15, consumed: 14 },
            { fruit: 'Bananas', yield: 9, consumed: 9 }  
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

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
                { fruit: 'Oranges', yield: 10, consumed: 7 },
                { fruit: 'Apples', yield: 15, consumed: 14 },
                { fruit: 'Bananas', yield: 9, consumed: 9 } 
            ];
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

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
            { fruit: 'Oranges', yield: 10, consumed: 7 },
            { fruit: 'Apples', yield: 15, consumed: 14 },
            { fruit: 'Bananas', yield: 9, consumed: 9 }
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Chart()
        .ID("chart")
        .DataSource(new[] {
            new { Fruit = "Oranges", Yield = 10, Consumed = 7 },
            new { Fruit = "Apples", Yield = 15, Consumed = 14 },
            new { Fruit = "Bananas", Yield = 9, Consumed = 9 }
        })
        .CommonSeriesSettings(c => c
            .ArgumentField("Fruit")
            .Type(SeriesType.Bar)
        )
        .Series(series => {
            series.Add().ValueField("Yield");
            series.Add().ValueField("Consumed");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Chart() _
        .ID("chart") _
        .DataSource({
            New With { .Fruit = "Oranges", .Yield = 10, .Consumed = 7 },
            New With { .Fruit = "Apples", .Yield = 15, .Consumed = 14 },
            New With { .Fruit = "Bananas", .Yield = 9, .Consumed = 9 }
        }) _
        .CommonSeriesSettings(Sub(c)
            c.ArgumentField("Fruit") _
                .Type(SeriesType.Bar)
        End Sub) _
        .Series(Sub(series)
            series.Add().ValueField("Yield")
            series.Add().ValueField("Consumed")
        End Sub)
    )

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsbarseriessimplestsingle/"
}

#####See Also#####
- [Chart - Overview](/concepts/05%20Widgets/Chart/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Overview/')
- [Chart - Series Types](/concepts/05%20Widgets/Chart/11%20Series%20Types '/Documentation/Guide/Widgets/Chart/Series_Types/')
- [Chart - Data Binding](/concepts/05%20Widgets/Chart/03%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/')
- [ASP.NET MVC Controls - Data Binding](/concepts/35%20ASP.NET%20MVC%20Controls/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/')