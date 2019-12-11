---
module: ui/action_sheet
export: default
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: [
        { text: "Call" },
        { text: "Send message" },
        { text: "Edit" },
        { text: "Delete" }
    ],
    title: "Choose action",
    visible: true

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **ActionSheet** widget is a sheet containing a set of buttons located one under the other. These buttons usually represent several choices relating to a single task.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#actionSheet").dxActionSheet({
            dataSource: [
                { text: "Command 1" },
                { text: "Command 2" },
                { text: "Command 3" },
                { text: "Command 4" }
            ],
            visible: true,
            onItemClick: function (e) {
                alert("The " + e.itemData.text + " button was clicked");
            }
        });
    });

    <!--HTML-->
    <div id="actionSheet"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-action-sheet
        [dataSource]="actionSheetData"
        [visible]="true"
        (onItemClick)="showAlert($event)">
    </dx-action-sheet>

    <!--TypeScript-->
    import { DxActionSheetModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        actionSheetData = [
            { text: "Command 1" },
            { text: "Command 2" },
            { text: "Command 3" },
            { text: "Command 4" }
        ];
        showAlert (e) {
            alert("The " + e.itemData.text + " button was clicked");
        }
    }
    @NgModule({
        imports: [
            // ...
            DxActionSheetModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-action-sheet="{
            dataSource: actionSheetData,
            visible: true,
            onItemClick: showAlert
        }"></div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.actionSheetData = [
                { text: "Command 1" },
                { text: "Command 2" },
                { text: "Command 3" },
                { text: "Command 4" }
            ];
            $scope.showAlert = function (e) {
                alert("The " + e.itemData.text + " button was clicked");
            };
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxActionSheet: {
        dataSource: actionSheetData,
        visible: true,
        onItemClick: function (e) {
            alert('The ' + e.itemData.text + ' button was clicked');
        }
    }"></div>

    <!--JavaScript-->
    var viewModel = {
        actionSheetData: [
            { text: "Command 1" },
            { text: "Command 2" },
            { text: "Command 3" },
            { text: "Command 4" }
        ]
    };

    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().ActionSheet()
        .ID("actionSheet")
        .DataSource(new[] {
            new { text = "Command 1" },
            new { text = "Command 2" },
            new { text = "Command 3" },
            new { text = "Command 4" }
        })
        .Visible(true)
        .OnItemClick(@<text>
            function (e) {
                alert("The " + e.itemData.text + " button was clicked");
            }
        </text>)
    )

    <!--Razor VB-->@(Html.DevExtreme().ActionSheet() _
        .ID("actionSheet") _
        .DataSource({
            New With { .text = "Command 1" },
            New With { .text = "Command 2" },
            New With { .text = "Command 3" },
            New With { .text = "Command 4" }
        }) _
        .Visible(True) _
        .OnItemClick("button_click")
    )
    <script>
        function button_click (e) {
            alert("The " + e.itemData.text + " button was clicked");
        }
    </script>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistsactionsheetactionsheetactionsheet/iphone/ios7/default/default"
}

#####See Also#####
- [ActionSheet - Overview](/concepts/05%20Widgets/ActionSheet/00%20Overview.md '/Documentation/Guide/Widgets/ActionSheet/Overview/')