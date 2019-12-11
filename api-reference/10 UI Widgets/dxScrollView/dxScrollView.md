---
module: ui/scroll_view
export: default
inherits: ..\dxScrollable\dxScrollable.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **ScrollView** is a widget that enables a user to scroll its content.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function() {
        $("#scrollView").dxScrollView({
            height: 500,
            width: 500,
            direction: "both"
        });
    });

    <!--HTML-->
    <div id="scrollView">
        <div id="content"></div>
    </div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-scroll-view
        [height]="500"
        [width]="500"
        direction="both">
            <div id="content"></div>
    </dx-scroll-view>

    <!--TypeScript-->
    import { DxScrollViewModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxScrollViewModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-scroll-view="{
        height: 500,
        width: 500,
        direction: 'both'
    }">
        <div id="content"></div>
    </div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxScrollView: {
        height: 500,
        width: 500,
        direction: 'both'
    }">
        <div id="content"></div>
    </div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().ScrollView()
        .ID("scrollView")
        .Height(500)
        .Width(500)
        .Direction(ScrollDirection.Both)
        .Content(@<text>
            <div id="content"></div>
        </text>)
    )

    <!--Razor VB-->@Code
        Html.DevExtreme().ScrollView() _
            .ID("scrollView") _
            .Height(500) _
            .Width(500) _
            .Direction(ScrollDirection.Both) _
            .Content(Sub()
                @<text>
                    <div id="content"></div>
                </text>
            End Sub).Render()
    End Code

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposescrollviewscrollviewscrollview/"
}

#####See Also#####
- [ScrollView - Overview](/concepts/05%20Widgets/ScrollView/00%20Overview.md '/Documentation/Guide/Widgets/ScrollView/Overview/')