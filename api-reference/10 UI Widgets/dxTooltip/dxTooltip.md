---
module: ui/tooltip
export: default
inherits: ..\dxPopover\dxPopover.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Tooltip** widget displays a tooltip for a specified element on the page.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div id="targetElement"></div>
    <div id="tooltip">
        <p>Tooltip content</p>
    </div>

    <!--JavaScript-->$(function () {
        $("#tooltip").dxTooltip({
            target: "#targetElement",
            showEvent: "dxhoverstart",
            hideEvent: "dxhoverend"
        });
    });

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div id="targetElement"></div>
    <dx-tooltip
        target="#targetElement"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend">
            <p>Tooltip content</p>
    </dx-tooltip>

    <!--TypeScript-->
    import { DxTooltipModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTooltipModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div id="targetElement"></div>
    <div dx-tooltip="{
        target: '#targetElement',
        showEvent: 'dxhoverstart',
        hideEvent: 'dxhoverend'
    }">
        <p>Tooltip content</p>
    </div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  


    <!--HTML-->
    <div id="targetElement"></div>
    <div data-bind="dxTooltip: {
        target: '#targetElement',
        showEvent: 'dxhoverstart',
        hideEvent: 'dxhoverend'
    }">
        <p>Tooltip content</p>
    </div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
    
    <!--Razor C#-->@(Html.DevExtreme().Tooltip()
        .ID("tooltip")
        .Target("#targetElement")
        .ShowEvent("dxhoverstart")
        .HideEvent("dxhoverend")
        .ContentTemplate(@<text>
            <p>Tooltip content</p>
        </text>)
    )
    <div id="targetElement"></div>

    <!--Razor VB-->@Code
        Html.DevExtreme().Tooltip() _
            .ID("tooltip") _
            .Target("#targetElement") _
            .ShowEvent("dxhoverstart") _
            .HideEvent("dxhoverend") _
            .ContentTemplate(Sub()
                @<text>
                    <p>Tooltip content</p>
                </text>
            End Sub).Render
    End Code
    <div id="targetElement"></div>

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationstooltiptooltiptooltip/"
}
<a href="http://www.youtube.com/watch?v=kb53tdJvcZA&index=32&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Tooltip - Overview](/concepts/05%20Widgets/Tooltip/00%20Overview.md '/Documentation/Guide/Widgets/Tooltip/Overview/')