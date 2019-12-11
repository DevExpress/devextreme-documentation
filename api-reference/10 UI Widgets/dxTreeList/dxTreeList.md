---
module: ui/tree_list
export: default
inherits: ..\GridBase\GridBase.md
---
---
##### widgettree
dataSource: 
[{
      id:1, parentId: 0, fullName:"John Heart", position:"CEO", email:"jheart@dx-email.com"
    }, {
      id:2, parentId: 1, fullName:"Samantha Bright", position:"COO", email:"samanthab@dx-email.com"
    }, {
      id:3, parentId: 1, fullName:"Arthur Miller", position:"CTO", email:"arthurm@dx-email.com"
    }, {
      id:4, parentId: 1, fullName:"Robert Reagan", position:"CMO", email:"robertr@dx-email.com"
    }, {
      id:5, parentId: 2, fullName:"Greta Sims", position:"HR Manager", email:"gretas@dx-email.com"
}],
autoExpandAll: true,
showRowLines: true,
columns: ["position", "fullName", "email"]

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **TreeList** is a widget that represents data from a local or remote source in the form of a multi-column tree view. This widget offers such features as sorting, filtering, editing, selection, etc.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#treeList").dxTreeList({
            dataSource: [
                { key: "1", fullName: "John Heart", position: "CEO" }, 
                { key: "1_1", head: "1", fullName: "Samantha Bright", position: "COO" }, 
                { key: "2_1", head: "2", fullName: "Robert Reagan", position: "CMO" }, 
                { key: "2", fullName: "Greta Sims", position: "HR Manager" }
            ],
            keyExpr: "key",
            parentIdExpr: "head",
            columns: ["fullName", "position"]
        });
    });

    <!--HTML--><div id="treeList"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-tree-list 
        [dataSource]="employees"
        keyExpr="key"
        parentIdExpr="head">
        <dxi-column dataField="fullName"></dxi-column>
        <dxi-column dataField="position"></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    export class AppComponent {
        employees = [
            { key: "1", fullName: "John Heart", position: "CEO" }, 
            { key: "1_1", head: "1", fullName: "Samantha Bright", position: "COO" }, 
            { key: "2_1", head: "2", fullName: "Robert Reagan", position: "CMO" }, 
            { key: "2", fullName: "Greta Sims", position: "HR Manager" }
        ];
    }

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-tree-list="{
            dataSource: employees,
            keyExpr: 'key',
            parentIdExpr: 'head',
            columns: ['fullName', 'position']
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.employees = [
                { key: "1", fullName: "John Heart", position: "CEO" }, 
                { key: "1_1", head: "1", fullName: "Samantha Bright", position: "COO" }, 
                { key: "2_1", head: "2", fullName: "Robert Reagan", position: "CMO" }, 
                { key: "2", fullName: "Greta Sims", position: "HR Manager" }
            ];
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML--><div data-bind="dxTreeList: {
        dataSource: employees,
        keyExpr: 'key',
        parentIdExpr: 'head',
        columns: ['fullName', 'position']
    }"></div>

    <!--JavaScript-->var viewModel = {
        employees: [
            { key: "1", fullName: "John Heart", position: "CEO" }, 
            { key: "1_1", head: "1", fullName: "Samantha Bright", position: "COO" }, 
            { key: "2_1", head: "2", fullName: "Robert Reagan", position: "CMO" }, 
            { key: "2", fullName: "Greta Sims", position: "HR Manager" }
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TreeList()
        .ID("treeList")
        .DataSource(new object[] {
            new { key = "1", fullName = "John Heart", position = "CEO" },
            new { key = "1_1", head = "1", fullName = "Samantha Bright", position = "COO" },
            new { key = "2_1", head = "2", fullName = "Robert Reagan", position = "CMO" },
            new { key = "2", fullName = "Greta Sims", position = "HR Manager" }
        }, "key")
        .ParentIdExpr("head")
        .Columns(columns =>
        {
            columns.Add().DataField("fullName");
            columns.Add().DataField("position");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().TreeList() _
        .ID("treeList") _
        .DataSource({
            New With { .key = "1", .fullName = "John Heart", .position = "CEO" },
            New With { .key = "1_1", .head = "1", .fullName = "Samantha Bright", .position = "COO" },
            New With { .key = "2_1", .head = "2", .fullName = "Robert Reagan", .position = "CMO" },
            New With { .key = "2", .fullName = "Greta Sims", .position = "HR Manager" }
        }, "key") _
        .ParentIdExpr("head") _
        .Columns(Sub(columns)
            columns.Add().DataField("fullName")
            columns.Add().DataField("position")
        End Sub)
    )

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview/"
}
<a href="https://www.youtube.com/watch?v=jiqYFESy_Hw&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [TreeList - Overview](/concepts/05%20Widgets/TreeList/00%20Overview.md '/Documentation/Guide/Widgets/TreeList/Overview/')
- [TreeList - Data Binding](/concepts/05%20Widgets/TreeList/05%20Data%20Binding '/Documentation/Guide/Widgets/TreeList/Data_Binding/')
- [ASP.NET MVC Controls - Data Binding](/concepts/35%20ASP.NET%20MVC%20Controls/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/')