DataGrid can load and update data from different data source types. To use a local array, assign the array to [dataSource](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource') and specify the key field in [keyExpr](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#keyExpr').

The following code snippet initializes a DataGrid with a column for each data field. All column widths are equal, and columns are ordered following the data source structure.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            dataSource: employees,
            keyExpr: "EmployeeID",
        });
    });

    <!-- tab: data.js -->
    const employees = [
        // ...
    ];

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @using ASP_NET_Core.Models

    @(Html.DevExtreme().DataGrid<Employee>()
        .ID("grid-container")
        .DataSource(d => d
            .Mvc().Controller("EmployeeData")
            .LoadAction("Get")
            .Key("EmployeeID")
        )
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

    }

    <!-- tab: Employee.cs -->
    namespace ASP_NET_Core.Models;
    public class Employee {
        public int EmployeeID { get; set; }
        public string FullName { get; set; }
        public string Position { get; set; }
        public string TitleOfCourtesy { get; set; }
        public string BirthDate { get; set; }
        public string HireDate { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string HomePhone { get; set; }
        public string Extension { get; set; }
        public string Photo { get; set; }
        public string Notes { get; set; }
        public int? ReportsTo { get; set; }
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
    <dx-data-grid
        [dataSource]="employees"
        keyExpr="EmployeeID">
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Employee, EmployeesService } from './employees.service';

    // ...
    export class AppComponent {
        employees: Employee[] = [];

        constructor(service: EmployeesService) {
            this.employees = service.getEmployees();
        }
    }

    <!-- tab: employees.service.ts -->
    import { Injectable } from '@angular/core';

    export interface Employee {
        EmployeeID: number;
        FullName: string;
        Position: string;
        TitleOfCourtesy: string;
        BirthDate: string;
        HireDate: string;
        Address: string;
        City: string;
        Region: string;
        PostalCode: string;
        Country: string;
        HomePhone: string;
        Extension: string;
        Photo: string;
        Notes: string;
        ReportsTo: number | null;
    }

    const employees: Employee[] = [
        // ...
    ];

    @Injectable({
        providedIn: 'root'
    })
    export class EmployeesService {
        getEmployees(): Employee[] {
            return employees;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid
                :data-source="employees"
                key-expr="EmployeeID">
            </DxDataGrid>
        </div>
    </template>

    <script setup lang="ts">
    // ...
    import { getEmployees } from './employees.service';

    const employees: getEmployees(),
    </script>

    <!-- tab: employees.service.ts -->
    export interface Employee {
        EmployeeID: number;
        FullName: string;
        Position: string;
        TitleOfCourtesy: string;
        BirthDate: string;
        HireDate: string;
        Address: string;
        City: string;
        Region: string | null;
        PostalCode: string;
        Country: string;
        HomePhone: string;
        Extension: string;
        Photo: string;
        Notes: string;
        ReportsTo: number | null;
    }

    const employees = [
        // ...
    ];

    export function getEmployees(): Employee[] {
        return employees;
    }

##### React

    <!-- tab: App.tsx -->
    // ...
    import { employees } from './employees';

    function App() {
        return (
            <div className="App">
                <DataGrid
                    dataSource={employees}
                    keyExpr="EmployeeID">
                </DataGrid>
            </div>
        );
    }

    <!-- tab: employees.ts -->
    export interface Employee {
        EmployeeID: number;
        FullName: string;
        Position: string;
        TitleOfCourtesy: string;
        BirthDate: string;
        HireDate: string;
        Address: string;
        City: string;
        Region: string | null;
        PostalCode: string;
        Country: string;
        HomePhone: string;
        Extension: string;
        Photo: string;
        Notes: string;
        ReportsTo: number | null;
    }

    export const employees = [
        // ...
    ];

---

To use another data source type, refer to the following help topics:

- [Read-Only Data in JSON Format](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/20%20Read-Only%20Data%20in%20JSON%20Format.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/')
- [Web API and MongoDB](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%20and%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API_and_MongoDB/')
- [OData](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/40%20OData.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/')
- [Custom Data Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')

[tags] data binding