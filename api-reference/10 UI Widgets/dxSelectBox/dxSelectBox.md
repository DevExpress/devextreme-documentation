---
module: ui/select_box
export: default
inherits: ..\dxDropDownList\dxDropDownList.md
---
---
##### widgettree
dataSource: [
    "HD Video Player",
    "SuperHD Video Player",
    "SuperPlasma 50",
    "SuperLED 50",
    "SuperLED 42",
    "SuperLCD 55",
    "SuperLCD 42",
    "SuperPlasma 65",
    "SuperLCD 70",
    "Projector Plus",
    "Projector PlusHT",
    "ExcelRemote IR",
    "ExcelRemote BT",
    "ExcelRemote IP"
]

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **SelectBox** widget is an editor that allows an end user to select an item from a drop-down list.

---
You can create the widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div id="selectBox"></div>

        <!--JavaScript-->
        var states = [
            { id: 1, state: "Alabama", capital: "Montgomery" },
            { id: 2, state: "Alaska", capital: "Juneau" },
            { id: 3, state: "Arizona", capital: "Phoenix" },
            // ...
        ];
        $(function() {
            $("#selectBox").dxSelectBox({
                dataSource: states,
                valueExpr: 'id',
                displayExpr: 'state'
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-select-box
            [dataSource]="states"
            valueExpr="id"
            displayExpr="state">
        </dx-select-box>

        <!--JavaScript-->
        export class AppComponent {
            states = [
                // ...   
            ];
        }

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-select-box="{
                dataSource: states,
                valueExpr: 'id',
                displayExpr: 'state'
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.states = [
                    // ...   
                ];
            });

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div data-bind="dxSelectBox: {
            dataSource: states,
            valueExpr: 'id',
            displayExpr: 'state'
        }"></div>

        <!--JavaScript-->var viewModel = {
            states: [
                // ...
            ]
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')

        <!--Razor C#-->@(Html.DevExtreme().SelectBox()
            .ID("selectBox")
            .DataSource(States)
            .DisplayExpr("state")
            .ValueExpr("id")
        )

        <!--Razor VB-->@(Html.DevExtreme().SelectBox() _
            .ID("selectBox") _
            .DataSource(States) _
            .DisplayExpr("state") _
            .ValueExpr("id")
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsselectboxselectboxmainfeatures/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [SelectBox - Overview](/concepts/05%20Widgets/SelectBox/00%20Overview.md '/Documentation/Guide/Widgets/SelectBox/Overview/')
- [ASP.NET MVC Wrappers - Data Binding](/concepts/35%20ASP.NET%20MVC%20Wrappers/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Wrappers/Data_Binding/')