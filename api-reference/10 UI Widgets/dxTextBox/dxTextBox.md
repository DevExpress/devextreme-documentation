---
module: ui/text_box
export: default
inherits: ..\dxTextEditor\dxTextEditor.md
---
---
##### widgettree

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **TextBox** is a widget that enables a user to enter and edit a single line of text.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->
    $("#textBox").dxTextBox({
        placeholder: "Type a text here..."
    });

    <!--HTML-->
    <div id="textBox"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-text-box placeholder="Type a text here..."></dx-text-box>

    <!--TypeScript-->
    import { DxTextBoxModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-text-box="{
        placeholder: 'Type a text here...'
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxTextBox: {
        placeholder: 'Type a text here...'
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TextBox()
        .ID("textBox")
        .Placeholder("Type a text here...")
    )

    <!--Razor VB-->@(Html.DevExtreme().TextBox() _
        .ID("textBox") _
        .Placeholder("Type a text here...")
    )

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/editorstextboxtextboxtextbox/"
}

#####See Also#####
- [TextBox - Overview](/concepts/05%20Widgets/TextBox/00%20Overview.md '/Documentation/Guide/Widgets/TextBox/Overview/')