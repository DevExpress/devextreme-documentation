---
module: ui/color_box
export: default
inherits: ..\dxDropDownEditor\dxDropDownEditor.md
---
---
##### widgettree
opened: true

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **ColorBox** is a widget that allows an end user to enter a color or pick it out from the drop-down editor.

---
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#colorBox").dxColorBox({
            value: 'rgba(255, 144, 0, 0.3)',
            editAlphaChannel: true
        });
    });

    <!--HTML--><div id="colorBox"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-color-box
        value="rgba(255, 144, 0, 0.3)"
        [editAlphaChannel]="true">
    </dx-color-box>

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div dx-color-box="{
        value: 'rgba(255, 144, 0, 0.3)',
        editAlphaChannel: true
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML--><div data-bind="dxColorBox: {
        value: 'rgba(255, 144, 0, 0.3)',
        editAlphaChannel: true
    }"></div>

#####[**ASP.NET MVC Controls**](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget')

    <!--Razor C#-->@(Html.DevExtreme().ColorBox()
        .ID("colorBox")
        .Value("rgba(255, 144, 0, 0.3)")
        .EditAlphaChannel(true)
    )

    <!--Razor VB-->@(Html.DevExtreme().ColorBox() _
        .ID("colorBox") _
        .Value("rgba(255, 144, 0, 0.3)") _
        .EditAlphaChannel(True)
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/editorscolorboxcolorboxcolorbox/"
}

#####See Also#####
- [ColorBox - Overview](/concepts/05%20Widgets/ColorBox/00%20Overview.md '/Documentation/Guide/Widgets/ColorBox/Overview/')