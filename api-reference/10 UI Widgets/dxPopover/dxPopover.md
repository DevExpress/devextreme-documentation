---
module: ui/popover
export: default
inherits: ..\dxPopup\dxPopup.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Popover** is a widget that shows notifications within a box with an arrow pointing to a specified UI element.

---
You can create the widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML--><div id="targetElement"></div>
        <div id="popover">
            <p>Popover content</p>
        </div>

        <!--JavaScript-->$(function () {
            $("#popover").dxPopover({
                target: "#targetElement",
                showEvent: 'dxhoverstart',
                hideEvent: 'dxhoverend'
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div id="targetElement"></div>
        <dx-popover
            target="#targetElement"
            showEvent="dxhoverstart"
            hideEvent="dxhoverend">
                <p>Popover content</p>
        </dx-popover>

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML--><div id="targetElement"></div>
        <div dx-popover="{
            target: '#targetElement',
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend'
        }">
            <p>Popover content</p>
        </div>

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML--><div id="targetElement"></div>
        <div data-bind="dxPopover: {
            target: '#targetElement',
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend'
        }">
            <p>Popover content</p>
        </div>

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')
        
        <!--Razor C#-->@(Html.DevExtreme().Popover()
            .ID("popover")
            .Target("#targetElement")
            .ShowEvent("dxhoverstart")
            .HideEvent("dxhoverend")
            .ContentTemplate(@<text>
                <p>Popover content</p>
            </text>)
        )
        <div id="targetElement"></div>

        <!--Razor VB-->@Code
            Html.DevExtreme().Popover() _
                .ID("popover") _
                .Target("#targetElement") _
                .ShowEvent("dxhoverstart") _
                .HideEvent("dxhoverend") _
                .ContentTemplate(Sub()
                    @<text>
                        <p>Popover content</p>
                    </text>
                End Sub).Render()
        End Code
        <div id="targetElement"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationspopoverpopoverpopover/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=JZHRrQxqs7Y&index=9&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Popover - Overview](/concepts/05%20Widgets/Popover/00%20Overview.md '/Documentation/Guide/Widgets/Popover/Overview/')