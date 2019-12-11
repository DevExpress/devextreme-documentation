---
module: ui/tabs
export: default
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: [
    { text: "Home", icon: "home" },
    { text: "About", icon: "info" }
]

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Tabs** is a tab strip used to switch between pages or views. This widget is included in the [TabPanel](/concepts/05%20Widgets/TabPanel/00%20Overview.md '/Documentation/Guide/Widgets/TabPanel/Overview/') widget, but you can use the **Tabs** separately as well.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->
    var tabs = [
        { text: "User", icon: "user" },
        { text: "Comment", icon: "comment" },
        { text: "Find", icon: "find", badge: "new" }
    ];
    $(function () {
        $("#tabs").dxTabs({
            items: tabs
        });
    });

    <!--HTML-->
    <div id="tabs"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-tabs [items]="tabs"></dx-tabs>

    <!--TypeScript-->
    import { DxTabsModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        tabs = [
            { text: "User", icon: "user" },
            { text: "Comment", icon: "comment" },
            { text: "Find", icon: "find", badge: "new" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTabsModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-tabs="{
            items: tabs
        }"></div>
    /div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.tabs = [
                { text: "User", icon: "user" },
                { text: "Comment", icon: "comment" },
                { text: "Find", icon: "find", badge: "new" }  
            ];
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxTabs: {
        items: tabs
    }"></div>

    <!--JavaScript-->var viewModel = {
        tabs: [
            { text: "User", icon: "user" },
            { text: "Comment", icon: "comment" },
            { text: "Find", icon: "find", badge: "new" }
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Tabs()
        .ID("tabs")
        .Items(items => {
            items.Add().Text("User").Icon("user");
            items.Add().Text("Comment").Icon("comment");
            items.Add().Text("Find").Icon("find").Badge("new");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Tabs() _
        .ID("tabs") _
        .Items(Sub(items)
            items.Add().Text("User").Icon("user")
            items.Add().Text("Comment").Icon("comment")
            items.Add().Text("Find").Icon("find").Badge("new")
        End Sub)
    )

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationtabstabstabs/"
}

#####See Also#####
- [Tabs - Overview](/concepts/05%20Widgets/Tabs/00%20Overview.md '/Documentation/Guide/Widgets/Tabs/Overview/')