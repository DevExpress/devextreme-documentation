---
module: ui/slider
export: default
inherits: ..\dxSliderBase\dxSliderBase.md
---
---
##### widgettree

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Slider** is a widget that allows an end user to set a numeric value on a continuous range of possible values.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#slider").dxSlider({
            min: 0, max: 100,
            value: 25
        });
    });

    <!--HTML-->
    <div id="slider"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-slider
        [min]="0"
        [max]="100"
        [value]="25">
    </dx-slider>

    <!--TypeScript-->
    import { DxSliderModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSliderModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-slider="{
        min: 0, max: 100,
        value: 25
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxSlider: {
        min: 0, max: 100,
        value: 25
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Slider()
        .ID("slider")
        .Min(0).Max(100)
        .Value(25)
    )

    <!--Razor VB-->@(Html.DevExtreme().Slider() _
        .ID("slider") _
        .Min(0).Max(100) _
        .Value(25)
    )

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeslidersliderslider/"
}

#####See Also#####
- [Slider - Overview](/concepts/05%20Widgets/Slider/00%20Overview.md '/Documentation/Guide/Widgets/Slider/Overview/')