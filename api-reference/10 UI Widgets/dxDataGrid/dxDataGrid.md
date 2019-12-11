---
module: ui/data_grid
export: default
inherits: ..\Widget\Widget.md,..\DataHelperMixin\DataHelperMixin.md
---
---
##### widgettree
dataSource: [{
    "ID": 1,
    "CompanyName": "Super Mart of the West",
    "City": "Bentonville",
    "State": "Arkansas"
}, {
    "ID": 2,
    "CompanyName": "Electronics Depot",
    "City": "Atlanta",
    "State": "Georgia"
}, {
    "ID": 3,
    "CompanyName": "K&S Music",
    "City": "Minneapolis",
    "State": "Minnesota"
}, {
    "ID": 4,
    "CompanyName": "Tom's Club",
    "City": "Issaquah",
    "State": "Washington"
}, {
    "ID": 5,
    "CompanyName": "E-Mart",
    "City": "Hoffman Estates",
    "State": "Illinois"
}]

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **DataGrid** is a widget that represents data from a local or remote source in the form of a grid. This widget offers such basic features as [sorting](/concepts/05%20Widgets/DataGrid/020%20Sorting/010%20Sorting.md '/Documentation/Guide/Widgets/DataGrid/Sorting/'), [grouping](/concepts/05%20Widgets/DataGrid/040%20Grouping/010%20Grouping.md '/Documentation/Guide/Widgets/DataGrid/Grouping/'), [filtering](/concepts/05%20Widgets/DataGrid/030%20Filtering '/Documentation/Guide/Widgets/DataGrid/Filtering/'), as well as more advanced capabilities, like [state storing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/stateStoring '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/'), [export to Excel](/concepts/05%20Widgets/DataGrid/090%20Client-Side%20Export '/Documentation/Guide/Widgets/DataGrid/Client-Side_Export/'), [master-detail interface](/concepts/05%20Widgets/DataGrid/080%20Master-Detail%20Interface '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/'), and many others.

---
You can create the widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML--><div id="dataGrid"></div>

        <!--JavaScript-->$(function () {
            $("#dataGrid").dxDataGrid({
                dataSource: customers,
                columns: ['CompanyName', 'City', 'State', 'Phone', 'Fax']
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-data-grid [dataSource]="customers">            
            <dxi-column dataField="CompanyName"></dxi-column>
            <dxi-column dataField="City"></dxi-column>
            <dxi-column dataField="State"></dxi-column>
            <dxi-column dataField="Phone"></dxi-column>
            <dxi-column dataField="Fax"></dxi-column>
        </dx-data-grid>

        <!--JavaScript-->
        export class AppComponent {
            customers = [
                // ...   
            ];
        }

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-data-grid="{
                dataSource: customers,
                columns: ['CompanyName', 'City', 'State', 'Phone', 'Fax']
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.customers = [
                    // ...   
                ];
            });

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML--><div data-bind="dxDataGrid: {
            dataSource: customers,
            columns: ['CompanyName', 'City', 'State', 'Phone', 'Fax']
        }"></div>

        <!--JavaScript-->var viewModel = {
            customers: [
                // ...
            ]
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')

        <!--Razor C#-->@(Html.DevExtreme().DataGrid()
            .ID("dataGrid")
            .DataSource(Customers)
            .Columns(columns => {
                columns.Add().DataField("CompanyName");
                columns.Add().DataField("City");
                columns.Add().DataField("State");
                columns.Add().DataField("Phone");
                columns.Add().DataField("Fax");
            })
        )

        <!--Razor VB-->@(Html.DevExtreme().DataGrid() _
            .ID("dataGrid") _
            .DataSource(Customers) _
            .Columns(Sub(columns)
                columns.Add().DataField("CompanyName")
                columns.Add().DataField("City")
                columns.Add().DataField("State")
                columns.Add().DataField("Phone")
                columns.Add().DataField("Fax")
            End Sub)
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#####See Also#####
- [DataGrid - Visual Elements](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/')
- [DataGrid - Data Binding](/concepts/05%20Widgets/DataGrid/010%20Data%20Binding '/Documentation/Guide/Widgets/DataGrid/Data_Binding/')
- [ASP.NET MVC Wrappers - Data Binding](/concepts/35%20ASP.NET%20MVC%20Wrappers/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Wrappers/Data_Binding/')

<a href="http://js.devexpress.com/Demos/DataGridGallery/#chart/datagridspagingandscrollingpager" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=KJpS2Iwrrg8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=5" class="button orange small fix-width-155" target="_blank">Watch Video</a>