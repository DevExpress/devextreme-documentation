---
module: ui/menu
export: default
inherits: ..\dxMenuBase\dxMenuBase.md
---
---
##### widgettree
dataSource: [
    { text: "Video Players" },
    { text: "Televisions" },
    {
        text: "Monitors",
        items: [
            { text: "DesktopLCD 19" },
            { text: "DesktopLCD 21" },
            { text: "DesktopLED 21" }
        ]
    }
]

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Menu** widget is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->
    $(function () {
        $("#menu").dxMenu({
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
            ]
        });
    });

    <!--HTML-->
    <div id="menu"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-menu [items]="menuItems"></dx-menu>

    <!--TypeScript-->
    import { DxMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        menuItems = [
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
            DxMenuModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-menu="{
            items: menuItems
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.menuItems = [
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

    <!--HTML-->
    <div data-bind="dxMenu: {
        items: menuItems
    }"></div>

    <!--JavaScript-->var viewModel = {
        menuItems: [
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

    <!--Razor C#-->@(Html.DevExtreme().Menu()
        .ID("menu")
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

    <!--Razor VB-->@(Html.DevExtreme().Menu() _
        .ID("menu") _
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

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationmenumenumenu/"
}
<a href="https://www.youtube.com/watch?v=XR3HePJDa70" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

#####See Also#####
- [Menu - Overview](/concepts/05%20Widgets/Menu/00%20Overview.md '/Documentation/Guide/Widgets/Menu/Overview/')