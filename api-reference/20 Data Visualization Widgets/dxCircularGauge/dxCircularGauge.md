---
module: viz/circular_gauge
export: default
inherits: ..\BaseGauge\BaseGauge.md
---
---
##### widgettree
value: 48

##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **CircularGauge** is a widget that indicates values on a circular numeric scale.

---
You can create the widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML--><div id="circularGauge"></div>

        <!--JavaScript-->$(function () {
            $("#circularGauge").dxCircularGauge({
                scale: {
                    startValue: 50,
                    endValue: 150
                },    
                rangeContainer: {
                    ranges: [
                        { startValue: 50, endValue: 90 },
                        { startValue: 90, endValue: 130 },
                        { startValue: 130, endValue: 150 }
                    ]
                },
                value: 105
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-circular-gauge [value]="105">
            <dxo-scale
                [startValue]="50"
                [endValue]="150">
            </dxo-scale>
            <dxo-rangeContainer>
                <dxi-range 
                    [startValue]="50"
                    [endValue]="90">
                </dxi-range>
                <dxi-range 
                    [startValue]="90"
                    [endValue]="130">
                </dxi-range>
                <dxi-range 
                    [startValue]="130"
                    [endValue]="150">
                </dxi-range>
            </dxo-rangeContainer>
        </dx-circular-gauge>

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div dx-circular-gauge="{
            scale: {
                startValue: 50,
                endValue: 150
            },    
            rangeContainer: {
                ranges: [
                    { startValue: 50, endValue: 90 },
                    { startValue: 90, endValue: 130 },
                    { startValue: 130, endValue: 150 }
                ]
            },
            value: 105
        }"></div>

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div data-bind="dxCircularGauge: {
            scale: {
                startValue: 50,
                endValue: 150
            },    
            rangeContainer: {
                ranges: [
                    { startValue: 50, endValue: 90 },
                    { startValue: 90, endValue: 130 },
                    { startValue: 130, endValue: 150 }
                ]
            },
            value: 105
        }"></div>

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')
        
        <!--Razor C#-->@(Html.DevExtreme().CircularGauge()
            .ID("circularGauge")
            .Scale(scale => scale
                .StartValue(50)
                .EndValue(50)
            )
            .RangeContainer(rc => rc
                .Ranges(ranges => {
                    ranges.Add().StartValue(50).EndValue(90);
                    ranges.Add().StartValue(90).EndValue(130);
                    ranges.Add().StartValue(130).EndValue(150);
                })
            )
        )

        <!--Razor VB-->@(Html.DevExtreme().CircularGauge() _
            .ID("circularGauge") _
            .Scale(Sub(scale)
                scale.StartValue(50) _
                     .EndValue(50)
            End Sub) _
            .RangeContainer(Sub(rc)
                rc.Ranges(Sub(ranges)
                    ranges.Add().StartValue(50).EndValue(90)
                    ranges.Add().StartValue(90).EndValue(130)
                    ranges.Add().StartValue(130).EndValue(150)
                End Sub)
            End Sub)
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/gaugescirculargaugescirculargaugebasicelementspaletteforranges/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=8rIBaB2RKvE&index=19&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [CircularGauge - Visual Elements](/concepts/05%20Widgets/CircularGauge/10%20Visual%20Elements '/Documentation/Guide/Widgets/CircularGauge/Visual_Elements/')