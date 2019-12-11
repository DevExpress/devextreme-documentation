---
module: ui/resizable
export: default
inherits: ..\DOMComponent\DOMComponent.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Resizable** widget enables its content to be resizable in the UI.

---
The **Resizable** widget is an element that can be resized by an end user. It displays data located inside the HTML element of the widget. You can specify minimum and maximum size using the [minHeight](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/minHeight.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#minHeight'), [minWidth](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/minWidth.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#minWidth'), [maxHeight](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/maxHeight.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#maxHeight') and [maxWidth](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/maxWidth.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#maxWidth') options. The [handles](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/handles.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#handles') option enables you to specify which element borders are used as a handle for resizing.

You can create the widget using one of the following approaches.

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function() {
        $("#resizable").dxResizable({
            width: 200,
            height: 200,
            minWidth: 30,
            minHeight: 30,
            maxWidth: 500,
            maxHeight: 500 
        });
    });

    <!--HTML-->
    <div id="resizable">
        <div id="content"></div>
    </div>

    <!--CSS-->#content {
        height: 100%;
        width: 100%
    }

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-resizable
        [width]="200"
        [height]="200"
        [minWidth]="30"
        [minHeight]="30"
        [maxWidth]="500"
        [maxHeight]="500">
            <div id="content"></div>
    </dx-resizable>

    <!--CSS-->#content {
        height: 100%;
        width: 100%
    }


#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-resizable="{
        width: 200,
        height: 200,
        minWidth: 30,
        minHeight: 30,
        maxWidth: 500,
        maxHeight: 500 
    }">
        <div id="content"></div>
    </div>

    <!--CSS-->#content {
        height: 100%;
        width: 100%
    }

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxResizable: {
        width: 200,
        height: 200,
        minWidth: 30,
        minHeight: 30,
        maxWidth: 500,
        maxHeight: 500 
    }">
        <div id="content"></div>
    </div>

    <!--CSS-->#content {
        height: 100%;
        width: 100%
    }

#####[**ASP.NET MVC Controls**](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget')

    <!--Razor C#-->@(Html.DevExtreme().Resizable()
        .ID("resizable")
        .Width(200)
        .Height(200)
        .MinWidth(30)
        .MinHeight(30)
        .MaxWidth(500)
        .MaxHeight(500)
        .Content(@<text>
            <div id="content"></div>
        </text>)
    )

    <!--Razor VB-->@Code
        Html.DevExtreme().Resizable() _
            .ID("resizable") _
            .Width(200) _
            .Height(200) _
            .MinWidth(30) _
            .MinHeight(30) _
            .MaxWidth(500) _
            .MaxHeight(500) _
            .Content(Sub()
                @<text>
                    <div id="content"></div>
                </text>
            End Sub).Render()
    End Code

    <!--CSS-->#content {
        height: 100%;
        width: 100%
    }

---

Note that DevExtreme widgets require linking the jQuery library to your application. The Knockout or AngularJS library is also needed if you use the Knockout or AngularJS approach. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#####See Also#####
- [Resizable - Overview](/concepts/05%20Widgets/Resizable/00%20Overview.md '/Documentation/Guide/Widgets/Resizable/Overview/')