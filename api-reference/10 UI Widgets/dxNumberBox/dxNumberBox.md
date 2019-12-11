---
module: ui/number_box
export: default
inherits: ..\dxTextEditor\dxTextEditor.md
---
---
##### widgettree

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **NumberBox** is a widget that displays a numeric value and allows a user to modify it by typing in a value, and incrementing or decrementing it using the keyboard or mouse.

---
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#numberBox").dxNumberBox({
            value: 20,
            min: 16,
            max: 100,
            placeholder: 'Enter your age'
        });
    });

    <!--HTML-->
    <div id="numberBox"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-number-box
        [value]="20"
        [min]="16"
        [max]="100"
        placeholder="Enter your age">
    </dx-number-box>

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-number-box="{
        value: 20,
        min: 16,
        max: 100,
        placeholder: 'Enter your age'
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxNumberBox: {
        value: 20,
        min: 16,
        max: 100,
        placeholder: 'Enter your age'
    }"></div>

#####[**ASP.NET MVC Controls**](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget')
    
    <!--Razor C#-->@(Html.DevExtreme().NumberBox()
        .ID("numberBox")
        .Value(20)
        .Min(16)
        .Max(100)
        .Placeholder("Enter your age")
    )

    <!--Razor VB-->@(Html.DevExtreme().NumberBox() _
        .ID("numberBox") _
        .Value(20) _
        .Min(16) _
        .Max(100) _
        .Placeholder("Enter your age")
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsnumberboxnumberboxnumberbox/"
}

#####See Also#####
- [NumberBox - Overview](/concepts/05%20Widgets/NumberBox/00%20Overview.md '/Documentation/Guide/Widgets/NumberBox/Overview/')