---
module: ui/radio_group
export: default
inherits: ..\Editor\Editor.md,..\DataExpressionMixin\DataExpressionMixin.md
---
---
##### widgettree
dataSource: [
        { text: "red", value: "#FF0000" },
        { text: "green", value: "#00AA00" },
        { text: "blue", value: "#0000FF" }
    ]

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **RadioGroup** is a widget that contains a set of radio buttons and allows an end user to make a single selection from the set.

---
You can create the widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div id="radioGroup"></div>

        <!--JavaScript-->var radioGroupItems = [
            { text: "Low", color: "grey" },
            { text: "Normal", color: "green" },
            { text: "Urgent", color: "yellow" },
            { text: "High", color: "red" }
        ];
        $(function () {
            $("#radioGroup").dxRadioGroup({
                dataSource: radioGroupItems,
                displayExpr: "text",
                valueExpr: "color",
                value: "green"
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-radio-group
            [dataSource]="radioGroupItems"
            displayExpr="text"
            valueExpr="color"
            value="green">
        </dx-radio-group>

        <!--JavaScript-->
        export class AppComponent {
            radioGroupItems = [
                // ...
            ];
        }

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-radio-group="{
                dataSource: radioGroupItems,
                displayExpr: 'text',
                valueExpr: 'color',
                value: 'green'
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller('DemoController', function DemoController($scope) {
                $scope.radioGroupItems = [
                    // ...
                ];
            });

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  


        <!--HTML-->
        <div data-bind="dxRadioGroup: {
            dataSource: radioGroupItems,
            displayExpr: 'text',
            valueExpr: 'color',
            value: 'green'
        }"></div>

        <!--JavaScript-->var viewModel = {
            radioGroupItems: [
                // ...
            ]
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')

        <!--Razor C#-->@(Html.DevExtreme().RadioGroup()
            .ID("radioGroup")
            .DisplayExpr("text")
            .ValueExpr("color")
            .Value("green")
            .DataSource(new object[] {
                new { text = "Low", color = "grey" },
                new { text = "Normal", color = "green" },
                new { text = "Urgent", color = "yellow" },
                new { text = "High", color = "red" }
            })
        )

        <!--Razor VB-->@(Html.DevExtreme().RadioGroup() _
            .ID("radioGroup") _
            .DisplayExpr("text") _
            .ValueExpr("color") _
            .Value("green") _
            .DataSource(New Object() {
                New With { .text = "Low", .color = "grey" },
                New With { .text = "Normal", .color = "green" },
                New With { .text = "Urgent", .color = "yellow" },
                New With { .text = "High", .color = "red" }
            })
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeradiogroupradiogroupradiogroup/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=VSr5aoDjtEk&index=6&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [RadioGroup - Overview](/concepts/05%20Widgets/RadioGroup/00%20Overview.md '/Documentation/Guide/Widgets/RadioGroup/Overview/')