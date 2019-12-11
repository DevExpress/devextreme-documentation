---
module: ui/data_grid
export: default
inherits: ..\GridBase\GridBase.md
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
The **DataGrid** is a widget that represents data from a local or remote source in the form of a grid. This widget offers such basic features as [sorting](/concepts/05%20Widgets/DataGrid/25%20Sorting '/Documentation/Guide/Widgets/DataGrid/Sorting/'), [grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/'), [filtering](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/'), as well as more advanced capabilities, like [state storing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/stateStoring '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/'), [export to Excel](/concepts/05%20Widgets/DataGrid/70%20Client-Side%20Exporting '/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/'), [master-detail interface](/concepts/05%20Widgets/DataGrid/60%20Master-Detail%20Interface '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/'), and many others.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#dataGrid").dxDataGrid({
            dataSource: [{
                ID: 1,
                CompanyName: "Super Mart of the West",
                City: "Bentonville",
                State: "Arkansas"
            }, {
                ID: 2,
                CompanyName: "Electronics Depot",
                City: "Atlanta",
                State: "Georgia"
            }],
            keyExpr: "ID",
            columns: ["CompanyName", "City", "State"]
        });
    });

    <!--HTML--><div id="dataGrid"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-data-grid 
        [dataSource]="customers"
        keyExpr="ID">            
        <dxi-column dataField="CompanyName"></dxi-column>
        <dxi-column dataField="City"></dxi-column>
        <dxi-column dataField="State"></dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customers = [{
            ID: 1,
            CompanyName: "Super Mart of the West",
            City: "Bentonville",
            State: "Arkansas"
        }, {
            ID: 2,
            CompanyName: "Electronics Depot",
            City: "Atlanta",
            State: "Georgia"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-data-grid="{
            dataSource: customers,
            keyExpr: 'ID',
            columns: ['CompanyName', 'City', 'State']
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.customers = [{
                ID: 1,
                CompanyName: "Super Mart of the West",
                City: "Bentonville",
                State: "Arkansas"
            }, {
                ID: 2,
                CompanyName: "Electronics Depot",
                City: "Atlanta",
                State: "Georgia"
            }];
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML--><div data-bind="dxDataGrid: {
        dataSource: customers,
        keyExpr: 'ID',
        columns: ['CompanyName', 'City', 'State']
    }"></div>

    <!--JavaScript-->var viewModel = {
        customers: [{
            ID: 1,
            CompanyName: "Super Mart of the West",
            City: "Bentonville",
            State: "Arkansas"
        }, {
            ID: 2,
            CompanyName: "Electronics Depot",
            City: "Atlanta",
            State: "Georgia"
        }]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().DataGrid()
        .ID("dataGrid")
        .DataSource(new object[] {
            new { 
                ID = 1,
                CompanyName = "Super Mart of the West",
                City = "Bentonville",
                State = "Arkansas" 
            }, 
            new {
                ID = 2,
                CompanyName = "Electronics Depot",
                City = "Atlanta",
                State = "Georgia"
            }
        }, "ID")
        .Columns(columns => {
            columns.Add().DataField("CompanyName");
            columns.Add().DataField("City");
            columns.Add().DataField("State");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().DataGrid() _
        .ID("dataGrid") _
        .DataSource({
            New With { 
                .ID= 1,
                .CompanyName = "Super Mart of the West",
                .City = "Bentonville",
                .State = "Arkansas" 
            }, 
            New With {
                .ID = 2,
                .CompanyName = "Electronics Depot",
                .City = "Atlanta",
                .State = "Georgia"
            }
        }, "ID") _
        .Columns(Sub(columns)
            columns.Add().DataField("CompanyName")
            columns.Add().DataField("City")
            columns.Add().DataField("State")
        End Sub)
    )

---

 

#####See Also#####
- [DataGrid - Data Binding](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding '/Documentation/Guide/Widgets/DataGrid/Data_Binding/')
- [ASP.NET MVC Controls - Data Binding](/concepts/35%20ASP.NET%20MVC%20Controls/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/DataGridGallery/#chart/datagridspagingandscrollingpager"
}
<a href="http://www.youtube.com/watch?v=KJpS2Iwrrg8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=5" class="button orange small fix-width-155" target="_blank">Watch Video</a>