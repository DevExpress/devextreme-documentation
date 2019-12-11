---
module: viz/bar_gauge
export: default
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

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML--><div id="barGauge"></div>

        <!--JavaScript-->$(function () {
            $("#barGauge").dxBarGauge({
                startValue: 0,
                endValue: 100,
                values: [21.3, 54.1, 30.9, 45.2, 89.41]
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-bar-gauge
            [startValue]="0"
            [endValue]="100"
            [values]="[21.3, 54.1, 30.9, 45.2, 89.41]">
        </dx-bar-gauge>

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div dx-bar-gauge="{
            startValue: 0,
            endValue: 100,
            values: [21.3, 54.1, 30.9, 45.2, 89.41]
        }"></div>

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div data-bind="dxBarGauge: {
            startValue: 0,
            endValue: 100,
            values: [21.3, 54.1, 30.9, 45.2, 89.41]
        }"></div>

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')
        
        <!--Razor C#-->@(Html.DevExtreme().BarGauge()
            .ID("barGauge")
            .StartValue(0)
            .EndValue(100)
            .Values(new [] { 21.3, 54.1, 30.9, 45.2, 89.41 })
        )

        <!--Razor VB-->@(Html.DevExtreme().BarGauge() _
            .ID("barGauge") _
            .StartValue(0) _
            .EndValue(100) _
            .Values({ 21.3, 54.1, 30.9, 45.2, 89.41 })
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/gaugesbargaugesbargaugebasicelementslabelscustomization/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=4pOpe70YkS0&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=24" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [BarGauge - Visual Elements](/concepts/05%20Widgets/BarGauge/10%20Visual%20Elements '/Documentation/Guide/Widgets/BarGauge/Visual_Elements/')