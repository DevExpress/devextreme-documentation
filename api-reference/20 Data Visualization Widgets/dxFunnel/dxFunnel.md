---
module: viz/funnel
export: default
inherits: ..\BaseWidget\BaseWidget.md
---
---
##### widgettree
dataSource: [
    { action: "Visited the Website", users: 9152 },
    { action: "Downloaded a Trial", users: 6879 },
    { action: "Contacted Support", users: 5121 },
    { action: "Subscribed", users: 2224 },
    { action: "Renewed", users: 1670 }
],
argumentField: "action",
valueField: "users",
label: {
    backgroundColor: "none",
    customizeText: function(e) { return e.item.argument + '<br />' + e.item.value; },
    position: "inside"
}

##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Funnel** is a widget that visualizes a value at different stages. It helps assess value changes throughout these stages and identify potential issues. The **Funnel** widget conveys information using different interactive elements ([tooltips](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/tooltip '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/tooltip/'), [labels](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/'), [legend](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/legend '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/legend/')) and enables you to create not only a [funnel](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FunnelChart/jQuery/Light), but also a [pyramid chart](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PyramidChart/jQuery/Light).

---
#include common-ref-roottopic-introduction

---
##### jQuery

    <!--JavaScript-->var userStatistics = [
        { action: "Visited the Website", users: 9152 },
        { action: "Downloaded a Trial", users: 6879 },
        { action: "Contacted Support", users: 5121 },
        { action: "Subscribed", users: 2224 },
        { action: "Renewed", users: 1670 }
    ];

    $(function() {
        $("#funnel").dxFunnel({
            dataSource: userStatistics,
            argumentField: "action",
            valueField: "users"
        });
    });

    <!--HTML--><div id="funnel"></div>

##### Angular

    <!--HTML-->
    <dx-funnel
        [dataSource]="userStatistics"
        argumentField="action"
        valueField="users">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        userStatistics = [
            { action: "Visited the Website", users: 9152 },
            { action: "Downloaded a Trial", users: 6879 },
            { action: "Contacted Support", users: 5121 },
            { action: "Subscribed", users: 2224 },
            { action: "Renewed", users: 1670 }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

##### AngularJS

    <!--HTML--><div ng-controller="DemoController">
        <div dx-funnel="{
            dataSource: userStatistics,
            argumentField: 'action',
            valueField: 'users'
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.userStatistics = [
                { action: "Visited the Website", users: 9152 },
                { action: "Downloaded a Trial", users: 6879 },
                { action: "Contacted Support", users: 5121 },
                { action: "Subscribed", users: 2224 },
                { action: "Renewed", users: 1670 }
            ];
        });

##### Knockout

    <!--HTML-->
    <div data-bind="dxFunnel: {
        dataSource: userStatistics,
        argumentField: 'action',
        valueField: 'users'
    }"></div>

    <!--JavaScript-->var viewModel = {
        userStatistics: [
            { action: "Visited the Website", users: 9152 },
            { action: "Downloaded a Trial", users: 6879 },
            { action: "Contacted Support", users: 5121 },
            { action: "Subscribed", users: 2224 },
            { action: "Renewed", users: 1670 }
        ]
    };

    ko.applyBindings(viewModel);

##### ASP.NET MVC Controls

    <!--Razor C#-->@(Html.DevExtreme().Funnel()
        .ID("funnel")
        .DataSource(new List<object> {
            new { Action = "Visited the Website", Users = 9152 },
            new { Action = "Downloaded a Trial", Users = 6879 },
            new { Action = "Contacted Support", Users = 5121 },
            new { Action = "Subscribed", Users = 2224 },
            new { Action = "Renewed", Users = 1670 }
        })
        .ArgumentField("Action")
        .ValueField("Users")
    )

    <!--Razor VB-->@(Html.DevExtreme().Funnel() _
        .ID("funnel") _
        .DataSource(New List(Of Object) From {
            New With { .Action = "Visited the Website", .Users = 9152 },
            New With { .Action = "Downloaded a Trial", .Users = 6879 },
            New With { .Action = "Contacted Support", .Users = 5121 },
            New With { .Action = "Subscribed", .Users = 2224 },
            New With { .Action = "Renewed", .Users = 1670 }
        }) _
        .ArgumentField("Action") _
        .ValueField("Users")
    )

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FunnelChart/jQuery/Light/"
}

#####See Also#####
- [ASP.NET MVC Controls - Data Binding](/concepts/35%20ASP.NET%20MVC%20Controls/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/')