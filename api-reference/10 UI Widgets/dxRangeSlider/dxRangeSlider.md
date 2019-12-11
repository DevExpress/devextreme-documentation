---
module: ui/range_slider
export: default
inherits: ..\dxSliderBase\dxSliderBase.md
---
---
##### widgettree

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **RangeSlider** is a widget that allows an end user to choose a range of numeric values.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#rangeSlider").dxRangeSlider({
            min: 0, max: 100,
            start: 20, end: 60
        });
    });

    <!--HTML-->
    <div id="rangeSlider"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-range-slider
        [min]="0" [max]="100"
        [start]="20 [end]="60">
    </dx-range-slider>

    <!--TypeScript-->
    import { DxRangeSliderModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxRangeSliderModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-range-slider="{
        min: 0, max: 100,
        start: 20, end: 60
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxRangeSlider: {
        min: 0, max: 100,
        start: 20, end: 60
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().RangeSlider()
        .ID("rangeSlider")
        .Min(0).Max(100)
        .Start(20).End(60)
    )

    <!--Razor VB-->@(Html.DevExtreme().RangeSlider() _
        .ID("rangeSlider") _
        .Min(0).Max(100) _
        .Start(20).End(60)
    )

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposerangesliderrangesliderrangeslider/"
}

#####See Also#####
- [RangeSlider - Overview](/concepts/05%20Widgets/RangeSlider/00%20Overview.md '/Documentation/Guide/Widgets/RangeSlider/Overview/')