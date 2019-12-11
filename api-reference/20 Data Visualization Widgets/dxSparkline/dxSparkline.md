---
module: viz/sparkline
export: default
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
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->var temperature = [
        { month: "January", day: 6, night: 2 },
        { month: "February", day: 7, night: 2 },
        { month: "March", day: 10, night: 3 },
        { month: "April", day: 14, night: 5 },
        { month: "May", day: 18, night: 8 },
        { month: "June", day: 21, night: 11 },
        { month: "July", day: 22, night: 13 },
        { month: "August", day: 22, night: 13 },
        { month: "September", day: 19, night: 11 },
        { month: "October", day: 15, night: 8 },
        { month: "November", day: 10, night: 5 },
        { month: "December", day: 7, night: 3 }
    ];
    $(function () {
        $("#daySparkline").dxSparkline({
            dataSource: temperature,
            argumentField: 'month',
            valueField: 'day',
            type: 'bar'
        });
        $("#nightSparkline").dxSparkline({
            dataSource: temperature,
            argumentField: 'month',
            valueField: 'night',
            type: 'bar'
        });
    });

    <!--HTML--><div id="daySparkline"></div>
    <div id="nightSparkline"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-sparkline
        [dataSource]="temperature"
        argumentField="month"
        valueField="day"
        type="bar">
    </dx-sparkline>
    <dx-sparkline
        [dataSource]="temperature"
        argumentField="month"
        valueField="night"
        type="bar">
    </dx-sparkline>

    <!--TypeScript-->
    import { DxSparklineModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        temperature = [
            { month: "January", day: 6, night: 2 },
            { month: "February", day: 7, night: 2 },
            { month: "March", day: 10, night: 3 }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxSparklineModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-sparkline="{
        dataSource: temperature,
        argumentField: 'month',
        valueField: 'day',
        type: 'bar'
    }"></div>
    <div dx-sparkline="{
        dataSource: temperature,
        argumentField: 'month',
        valueField: 'night',
        type: 'bar'
    }"></div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.temperature = [
                { month: "January", day: 6, night: 2 },
                { month: "February", day: 7, night: 2 },
                { month: "March", day: 10, night: 3 }
            ];
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxSparkline: {
        dataSource: temperature,
        argumentField: 'month',
        valueField: 'day',
        type: 'bar'
    }"></div>
    <div data-bind="dxSparkline: {
        dataSource: temperature,
        argumentField: 'month',
        valueField: 'night',
        type: 'bar'
    }"></div>

    <!--JavaScript-->var viewModel = {
        temperature: [
            { month: "January", day: 6, night: 2 },
            { month: "February", day: 7, night: 2 },
            { month: "March", day: 10, night: 3 }
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Sparkline()
        .ID("daySpakline")
        .DataSource(new JS ("temperature"))
        .ArgumentField("month")
        .ValueField("day")
        .Type(SparklineType.Bar)
    )
    @(Html.DevExtreme().Sparkline()
        .ID("nightSpakline")
        .DataSource(new JS("temperature"))
        .ArgumentField("month")
        .ValueField("night")
        .Type(SparklineType.Bar)
    )
    <script> 
        var temperature = [
            { month: "January", day: 6, night: 2 },
            { month: "February", day: 7, night: 2 },
            { month: "March", day: 10, night: 3 }
        ];
    </script>


    <!--Razor VB-->@(Html.DevExtreme().Sparkline() _
        .ID("daySpakline") _
        .DataSource(New JS("temperature")) _
        .ArgumentField("month") _
        .ValueField("day") _
        .Type(SparklineType.Bar)
    )
    @(Html.DevExtreme().Sparkline() _
        .ID("nightSpakline") _
        .DataSource(New JS("temperature")) _
        .ArgumentField("month") _
        .ValueField("night") _
        .Type(SparklineType.Bar)
    )
    <script>
        var temperature = [
            { month: "January", day: 6, night: 2 },
            { month: "February", day: 7, night: 2 },
            { month: "March", day: 10, night: 3 }
        ];
    </script>

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/chartssparklinessparklinesline/"
}
<a href="http://www.youtube.com/watch?v=0c9bcWgpxho&index=27&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Sparkline - Visual Elements](/concepts/05%20Widgets/Sparkline/10%20Visual%20Elements '/Documentation/Guide/Widgets/Sparkline/Visual_Elements/')
- [Sparkline - Series Types](/concepts/05%20Widgets/Sparkline/20%20Series%20Types '/Documentation/Guide/Widgets/Sparkline/Series_Types/')
- [Charts - Data Binding](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/85%20Charts%20-%20Data%20Binding/10%20Provide%20Data '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/')
- [ASP.NET MVC Controls - Data Binding](/concepts/35%20ASP.NET%20MVC%20Controls/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/')