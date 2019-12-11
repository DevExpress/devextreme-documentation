---
module: ui/progress_bar
export: default
inherits: ..\dxTrackBar\dxTrackBar.md
---
---
##### widgettree

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **ProgressBar** is a widget that shows current progress.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#progressBar").dxProgressBar({
            min: 0,
            max: 100,
            value: 49
        });
    });

    <!--HTML-->
    <div id="progressBar"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-progress-bar
        [min]="0"
        [max]="100"
        [value]="49">
    </dx-progress-bar>

    <!--TypeScript-->
    import { DxProgressBarModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxProgressBarModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-progress-bar="{
        min: 0,
        max: 100,
        value: 49
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxProgressBar: {
        min: 0,
        max: 100,
        value: 49
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().ProgressBar()
        .ID("progressBar")
        .Min(0)
        .Max(100)
        .Value(49)
    )

    <!--Razor VB-->@(Html.DevExtreme().ProgressBar() _
        .ID("progressBar") _
        .Min(0) _
        .Max(100) _
        .Value(49)
    )

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsprogressbarprogressbarprogressbar/"
}

#####See Also#####
- [ProgressBar - Overview](/concepts/05%20Widgets/ProgressBar/00%20Overview.md '/Documentation/Guide/Widgets/ProgressBar/Overview/')