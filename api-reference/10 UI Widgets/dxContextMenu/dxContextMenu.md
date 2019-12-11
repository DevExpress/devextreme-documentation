---
module: ui/context_menu
export: default
inherits: ..\dxMenuBase\dxMenuBase.md
---
---
##### widgettree
dataSource: [
    { text: "Hide" },
    { text: "Delete" },
    {
        text: "Clipboard",
        items: [
            { text: "Copy" },
            { text: "Clear" },
            { text: "Paste" }
        ]
    }
],
visible: true

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **ContextMenu** widget displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->
    $(function () {
        $("#contextMenu").dxContextMenu({
            items: [
                { text: "Hide" },
                { text: "Delete" },
                {
                    text: "Clipboard",
                    items: [
                        { text: "Copy" },
                        { text: "Clear" },
                        { text: "Paste" }
                    ]
                }
            ],
            target: "#targetElement"
        });
    });

    <!--HTML--><div id="targetElement"></div>
    <div id="contextMenu"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div id="targetElement"></div>
    <dx-context-menu
        [items]="contextMenuItems"
        target="#targetElement">
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        contextMenuItems = [
            { text: "Hide" },
            { text: "Delete" },
            {
                text: "Clipboard",
                items: [
                    { text: "Copy" },
                    { text: "Clear" },
                    { text: "Paste" }
                ]
            }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxContextMenuModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div id="targetElement"></div>
        <div dx-context-menu="{
            items: contextMenuItems,
            target: '#targetElement'
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.contextMenuItems = [
                { text: "Hide" },
                { text: "Delete" },
                {
                    text: "Clipboard",
                    items: [
                        { text: "Copy" },
                        { text: "Clear" },
                        { text: "Paste" }
                    ]
                }
            ];
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML--><div id="targetElement"></div>
    <div data-bind="dxContextMenu: {
        items: contextMenuItems,
        target: '#targetElement'
    }"></div>

    <!--JavaScript-->var viewModel = {
        contextMenuItems: [
            { text: "Hide" },
            { text: "Delete" },
            {
                text: "Clipboard",
                items: [
                    { text: "Copy" },
                    { text: "Clear" },
                    { text: "Paste" }
                ]
            }
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
    
    <!--Razor C#-->@(Html.DevExtreme().ContextMenu()
        .ID("contextMenu")
        .Target("#targetElement")
        .Items(items => {
            items.Add().Text("Hide");
            items.Add().Text("Delete");
            items.Add().Text("Clipboard").Items(clipboardItems => {
                clipboardItems.Add().Text("Copy");
                clipboardItems.Add().Text("Clear");
                clipboardItems.Add().Text("Paste");
            });
        })
    )
    <div id="targetElement"></div>

    <!--Razor VB-->@(Html.DevExtreme().ContextMenu() _
        .ID("contextMenu") _
        .Target("#targetElement") _
        .Items(Sub(items)
            items.Add().Text("Hide")
            items.Add().Text("Delete")
            items.Add().Text("Clipboard").Items(Sub(clipboardItems)
                clipboardItems.Add().Text("Copy")
                clipboardItems.Add().Text("Clear")
                clipboardItems.Add().Text("Paste")
            End Sub)
        End Sub)
    )
    <div id="targetElement"></div>

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistscontextmenucontextmenucontextmenu/"
}

#####See Also#####
- [ContextMenu - Overview](/concepts/05%20Widgets/ContextMenu/00%20Overview.md '/Documentation/Guide/Widgets/ContextMenu/Overview/')