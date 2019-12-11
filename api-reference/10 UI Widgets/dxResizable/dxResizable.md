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
#include common-ref-roottopic-introduction

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

    <!--TypeScript-->
    import { DxResizableModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxResizableModule
        ],
        // ...
    })


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

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

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

#####See Also#####
- [Resizable - Overview](/concepts/05%20Widgets/Resizable/00%20Overview.md '/Documentation/Guide/Widgets/Resizable/Overview/')