---
module: viz/bullet
export: default
inherits: ..\BaseSparkline\BaseSparkline.md
---
---
##### widgettree
target: 30,
value: 20

##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Bullet** widget is useful when you need to compare a single measure to a target value. The widget comprises a horizontal bar indicating the measure and a vertical line indicating the target value.

---
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#bullet").dxBullet({
            startScaleValue: 0,
            endScaleValue: 35,
            value: 27,
            target: 24 
        });
    });

    <!--HTML--><div id="bullet"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-bullet
        [startScaleValue]="0"
        [endScaleValue]="35"
        [value]="27"
        [target]="24">
    </dx-bullet>

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-bullet="{
        startScaleValue: 0,
        endScaleValue: 35,
        value: 27,
        target: 24
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxBullet: {
        startScaleValue: 0,
        endScaleValue: 35,
        value: 27,
        target: 24 
    }"></div>

#####[**ASP.NET MVC Controls**](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget')
    
    <!--Razor C#-->@(Html.DevExtreme().Bullet()
        .ID("bullet")
        .StartScaleValue(0)
        .EndScaleValue(35)
        .Value(27)
        .Target(24)
    )

    <!--Razor VB-->@(Html.DevExtreme().Bullet() _
        .ID("bullet") _
        .StartScaleValue(0) _
        .EndScaleValue(35) _
        .Value(27) _
        .Target(24)
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/chartsbulletbulletssimplebullets/"
}
<a href="http://www.youtube.com/watch?v=Ax5kgKvFKvs&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=22" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Bullet - Visual Elements](/concepts/05%20Widgets/Bullet/10%20Visual%20Elements '/Documentation/Guide/Widgets/Bullet/Visual_Elements/')