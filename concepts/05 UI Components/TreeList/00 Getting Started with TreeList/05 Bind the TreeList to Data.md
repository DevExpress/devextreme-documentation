TreeList supports plain and hierarchical data structures. To use a hierarchical data source, set [dataStructure](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataStructure') to *"tree"* and define [itemsExpr](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/itemsExpr.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#itemsExpr') to specify the data field that contains child nodes. TreeList automatically generates identifiers for all nodes and builds the node hierarchy. Refer to the following demo for more information:

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/SimpleArrayHierarchicalStructure/",
    name: "TreeList - Simple Array: Hierarchical Structure"
}

In a plain data structure, nodes must include unique identifiers and references to parent nodes. To specify data fields that store identifiers and references, use the [keyExpr](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#keyExpr') and [parentIdExpr](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/parentIdExpr.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#parentIdExpr') properties. Top-level nodes descend from the root node. To specify the root identifier, define [rootValue](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/rootValue.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#rootValue').

TreeList can load and update data from different data source types. To use a local array, assign the array to [dataSource](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataSource'). The following code snippet initializes a TreeList and creates columns for all data fields. All columns are equal width, and the column order follows the data source structure:

---
##### jQuery

    <!-- tab: index.js -->
    $("#treeList").dxTreeList({
        dataSource: employees,
        rootValue: -1,
        keyExpr: "ID",
        parentIdExpr: "HeadID"
    });

    <!-- tab: data.js -->
    const employees = [
        // ...
    ];

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @using ASP_NET_Core.Models

    @(Html.DevExtreme().TreeList<Employee>()
        .ID("tree-list")
        .DataSource(d => d
            .Mvc().Controller("EmployeeData")
            .LoadAction("Get")
            .InsertAction("Insert")
            .UpdateAction("Update")
            .DeleteAction("Delete")
            .Key("ID")
        )
        .RootValue(-1)
        .ParentIdExpr("HeadID")
    )

    <!-- tab: EmployeeDataController.cs -->
    using ASP_NET_Core.Models;
    using DevExtreme.AspNet.Data;
    using DevExtreme.AspNet.Mvc;
    using Microsoft.AspNetCore.Mvc;

    namespace ASP_NET_Core.Controllers;

    public class EmployeeDataController : Controller {

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(EmployeeData.Employees, loadOptions);
        }

        // ...

    }

    <!-- tab: Employee.cs -->
    namespace ASP_NET_Core.Models;
    public class Employee {
        public int ID { get; set; }
        public int HeadID { get; set; }
        public string FullName { get; set; }
        public string Position { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Email { get; set; }
        public string Skype { get; set; }
        public string MobilePhone { get; set; }
        public string BirthDate { get; set; }
        public string HireDate { get; set; }
    }

    <!-- tab: EmployeeData.cs -->
    namespace ASP_NET_Core.Models;
    static class EmployeeData {
        public static List<Employee> Employees = [
            // ...
        ];
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list
        [dataSource]="employees"
        [rootValue]="-1"
        keyExpr="ID"
        parentIdExpr="HeadID">
    </dx-tree-list>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { EmployeesService, type Employee } from './employees.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        employees: Employee[] = [];

        constructor(service: EmployeesService) {
            this.employees = service.getEmployees();
        }
    }

    <!-- tab: employees.service.ts -->
    import { Injectable } from '@angular/core';

    export interface Employee {
        ID: Number,
        HeadID: Number,
        FullName: String,
        Position: String,
        City: String,
        State: String,
        Email: String,
        Skype: String,
        MobilePhone: String,
        BirthDate: String,
        HireDate: String,
    }

    @Injectable({
        providedIn: 'root'
    })
    export class EmployeesService {
        private employees: Employee[] = [
            // ...
        ];

        getEmployees(): Employee[] {
            return employees;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList
                :data-source="employees"
                :root-value="-1"
                key-expr="ID"
                parent-id-expr="HeadID">
            </DxTreeList>
        </div>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxTreeList } from 'devextreme-vue/tree-list'; 
    import { employeesService, type Employee } from '../employeesService';

    const employees = ref<Employee[]>(employeesService.getEmployees());
    </script>

    <!-- tab: employeesService.ts -->
    export interface Employee {
        ID: number;
        HeadID: number;
        FullName: string;
        Position: string;
        City: string;
        State: string;
        Email: string;
        Skype: string;
        MobilePhone: string;
        BirthDate: string;
        HireDate: string;
    }

    const employees: Employee[] = [
        // ...
    ];

    let employeeData = [...employees];

    export const employeesService = {
        getEmployees: (): Employee[] => employeeData,

        // ...
    }

##### React

    <!-- tab: App.tsx -->
    import { TreeList } from 'devextreme-react/tree-list';
    import { employeesService, type Employee } from './employeesService';

    function App() {
        const [currentEmployees, setCurrentEmployees] = useState<Employee[]>(employeesService.getEmployees());

        return (
            <div className="App">
                <TreeList
                    dataSource={currentEmployees}
                    rootValue={-1}
                    keyExpr="ID"
                    parentIdExpr="HeadID">
                </TreeList>
            </div>
        );
    }

    <!-- tab: employeesService.ts -->
    export interface Employee {
        ID: number;
        HeadID: number;
        FullName: string;
        Position: string;
        City: string;
        State: string;
        Email: string;
        Skype: string;
        MobilePhone: string;
        BirthDate: string;
        HireDate: string;
    }

    const employees: Employee[] = [
        // ...
    ];

    let employeeData = [...employees];

    export const employeesService = {
        getEmployees: (): Employee[] => employeeData,

        // ...
    }

---

To use another data source type, refer to the following help topics:

- [Read-Only Data in JSON Format](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/20%20Read-Only%20Data%20in%20JSON%20Format.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/')
- [Web API and MongoDB](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%20and%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API_and_MongoDB/')
- [OData](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/40%20OData.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/')
- [Custom Data Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')
