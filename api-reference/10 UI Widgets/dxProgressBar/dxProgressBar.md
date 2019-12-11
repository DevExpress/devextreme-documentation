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
You can create the widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div id="progressBar"></div>

        <!--JavaScript-->$(function () {
            $("#progressBar").dxProgressBar({
                min: 0,
                max: 100,
                value: 49
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-progress-bar
            [min]="0"
            [max]="100"
            [value]="49">
        </dx-progress-bar>

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div dx-progress-bar="{
            min: 0,
            max: 100,
            value: 49
        }"></div>

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div data-bind="dxProgressBar: {
            min: 0,
            max: 100,
            value: 49
        }"></div>

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')

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

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsprogressbarprogressbarprogressbar/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [ProgressBar - Overview](/concepts/05%20Widgets/ProgressBar/00%20Overview.md '/Documentation/Guide/Widgets/ProgressBar/Overview/')