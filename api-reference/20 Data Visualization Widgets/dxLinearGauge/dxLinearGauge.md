---
module: viz/linear_gauge
export: default
inherits: ..\BaseGauge\BaseGauge.md
---
---
##### widgettree
value: 50

##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **LinearGauge** is a widget that indicates values on a linear numeric scale.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#linearGauge").dxLinearGauge({
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

    <!--HTML--><div id="linearGauge"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-linear-gauge [value]="105">
        <dxo-scale
            [startValue]="50"
            [endValue]="150">
        </dxo-scale>
        <dxo-range-container>
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
        </dxo-range-container>
    </dx-linear-gauge>

    <!--TypeScript-->
    import { DxLinearGaugeModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxLinearGaugeModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-linear-gauge="{
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

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxLinearGauge: {
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

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
    
    <!--Razor C#-->@(Html.DevExtreme().LinearGauge()
        .ID("linearGauge")
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
        .Value(105)
    )

    <!--Razor VB-->@(Html.DevExtreme().LinearGauge() _
        .ID("linearGauge") _
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
        End Sub) _
        .Value(105)
    )

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/gaugeslineargaugeslineargaugebasicelementsscalecustomtickinterval/"
}
<a href="http://www.youtube.com/watch?v=8rIBaB2RKvE&index=19&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [LinearGauge - Visual Elements](/concepts/05%20Widgets/LinearGauge/10%20Visual%20Elements '/Documentation/Guide/Widgets/LinearGauge/Visual_Elements/')