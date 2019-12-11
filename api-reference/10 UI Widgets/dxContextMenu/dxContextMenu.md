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
            { text: "Copy text" },
            { text: "Clear text" },
            { text: "Paste text" }
        ]
    }
],
visible: true

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **ContextMenu** widget displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.

---
You can create the widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML--><div id="targetElement"></div>
        <div id="contextMenu"></div>

        <!--JavaScript-->var contextMenuItems = [
            { text: "Hide" },
            { text: "Delete" },
            {
                text: "Clipboard",
                items: [
                    { text: "Copy text" },
                    { text: "Clear text" },
                    { text: "Paste text" }
                ]
            }
        ];
        $(function () {
            $("#contextMenu").dxContextMenu({
                items: contextMenuItems,
                target: "#targetElement"
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div id="targetElement"></div>
        <dx-context-menu
            [items]="contextMenuItems"
            target="#targetElement">
        </dx-context-menu>

        <!--JavaScript-->
        export class AppComponent {
            contextMenuItems = [
                // ...   
            ];
        }

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML--><div ng-controller="DemoController">
            <div id="targetElement"></div>
            <div dx-context-menu="{
                items: contextMenuItems,
                target: '#targetElement'
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.contextMenuItems = [
                    // ...   
                ];
            });

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML--><div id="targetElement"></div>
        <div data-bind="dxContextMenu: {
            items: contextMenuItems,
            target: '#targetElement'
        }"></div>

        <!--JavaScript-->var viewModel = {
            contextMenuItems: [
                // ...
            ]
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')
        
        <!--Razor C#-->@(Html.DevExtreme().ContextMenu()
            .ID("contextMenu")
            .Target("#targetElement")
            .Items(items => {
                items.Add().Text("Hide");
                items.Add().Text("Delete");
                items.Add().Text("Clipboard").Items(clipboardItems => {
                    clipboardItems.Add().Text("Copy text");
                    clipboardItems.Add().Text("Clear text");
                    clipboardItems.Add().Text("Paste text");
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
                    clipboardItems.Add().Text("Copy text")
                    clipboardItems.Add().Text("Clear text")
                    clipboardItems.Add().Text("Paste text")
                End Sub)
            End Sub)
        )
        <div id="targetElement"></div>


Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistscontextmenucontextmenucontextmenu/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [ContextMenu - Overview](/concepts/05%20Widgets/ContextMenu/00%20Overview.md '/Documentation/Guide/Widgets/ContextMenu/Overview/')