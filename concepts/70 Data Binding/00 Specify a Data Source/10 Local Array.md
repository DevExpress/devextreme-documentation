[note] This article describes how to bind a DevExtreme widget to a local array in jQuery, Angular, Vue, and React. For information on data binding in ASP.NET MVC Controls, refer to <a href="https://docs.devexpress.com/AspNetCore/401019/devextreme-based-controls/concepts/bind-controls-to-data/clr-objects" target="_blank">docs.devexpress.com</a>.

To bind a widget to a local array, pass this array to the widget's [dataSource](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource') option. We recommend that you also use the [keyExpr](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#keyExpr') option (if the widget has it) to specify the key field.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var employees = [
            { ID: 1, FirstName: "Sandra", LastName: "Johnson" },
            { ID: 2, FirstName: "James", LastName: "Scott" },
            { ID: 3, FirstName: "Nancy", LastName: "Smith" }
        ];

        $("#dataGridContainer").dxDataGrid({
            dataSource: employees,
            keyExpr: "ID"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid
        [dataSource]="employees"
        keyExpr="ID">
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Employee, Service } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        employees: Employee[];
        constructor(service: Service) {
            this.employees = service.getEmployees();
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Employee {
        ID: Number,
        FirstName: String,
        LastName: String
    }

    let employees: Employee[] = [
        { ID: 1, FirstName: 'Sandra', LastName: 'Johnson' },
        { ID: 2, FirstName: 'James', LastName: 'Scott' },
        { ID: 3, FirstName: 'Nancy', LastName: 'Smith' }
    ];

    @Injectable()
    export class Service {
        getEmployees(): Employee[] {
            return employees;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDataGridModule } from 'devextreme-angular';
    import { Service } from './app.service';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule
        ],
        providers: [
            Service
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-data-grid
            :data-source="employees"
            key-expr="ID"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    import service from './data.js';

    export default {
        components: {
            DxDataGrid
        },
        data() {
            const employees = service.getEmployees();
            return {
                employees
            }
        }
    }
    </script>

    <!-- tab: data.js -->
    const employees = [
        { ID: 1, FirstName: 'Sandra', LastName: 'Johnson' },
        { ID: 2, FirstName: 'James', LastName: 'Scott' },
        { ID: 3, FirstName: 'Nancy', LastName: 'Smith' }
    ];

    export default {
        getEmployees() {
            return employees;
        }
    }

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    import service from './data.js';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.employees = service.getEmployees();
        }

        render() {
            return (
                <DataGrid
                    dataSource={this.employees}
                    keyExpr="ID"
                />
            );
        }
    }
    export default App;

    <!-- tab: data.js -->
    const employees = [
        { ID: 1, FirstName: 'Sandra', LastName: 'Johnson' },
        { ID: 2, FirstName: 'James', LastName: 'Scott' },
        { ID: 3, FirstName: 'Nancy', LastName: 'Smith' }
    ];

    export default {
        getEmployees() {
            return employees;
        }
    }

---

If you plan to update the data or need to handle data-related events, wrap the array in an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'). You can use the store's [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') option instead of the widget's **keyExpr** to specify the key field. You can further wrap the **ArrayStore** in a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') if you need to filter, sort, group, and otherwise shape the data.

The following example declares an **ArrayStore**, wraps it in a **DataSource**, and binds the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview) widget to this **DataSource**:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...
        var employeesStore = new DevExpress.data.ArrayStore({
            data: employees,
            key: "ID",
            onLoaded: function() {
                // ...
            }
        });

        var employeesDataSource = new DevExpress.data.DataSource({
            store: employeesStore,
            sort: "LastName"
        });

        $("#dataGridContainer").dxDataGrid({
            dataSource: employeesDataSource
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid
        [dataSource]="employeesDataSource">
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Service } from './app.service';

    import ArrayStore from 'devextreme/data/array_store';
    import DataSource from 'devextreme/data/data_source';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor(service: Service) {
            const employeesStore = new ArrayStore({
                data: service.getEmployees(),
                key: 'ID',
                onLoaded: function() {
                    // ...
                }
            });

            this.employeesDataSource = new DataSource({
                store: employeesStore,
                sort: 'LastName'
            });
        }
        employeesStore: ArrayStore;
        employeesDataSource: DataSource;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-data-grid
            :data-source="employeesDataSource"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';
    import ArrayStore from 'devextreme/data/array_store';
    import DataSource from 'devextreme/data/data_source';

    import service from './data.js';

    const employeesStore = new ArrayStore({
        data: service.getEmployees(),
        key: 'ID',
        onLoaded: function() {
            // ...
        }
    });

    const employeesDataSource = new DataSource({
        store: employeesStore,
        sort: 'LastName'
    });

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                employeesDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';
    import ArrayStore from 'devextreme/data/array_store';
    import DataSource from 'devextreme/data/data_source';

    import service from './data.js';

    const employeesStore = new ArrayStore({
        data: service.getEmployees(),
        key: 'ID',
        onLoaded: function() {
            // ...
        }
    });

    const employeesDataSource = new DataSource({
        store: employeesStore,
        sort: 'LastName'
    });

    class App extends React.Component {
        render() {
            return (
                <DataGrid
                    dataSource={employeesDataSource}
                />
            );
        }
    }
    export default App;

---

[note] If you pass a JavaScript array to a widget's **dataSource** option, the widget automatically places it in an **ArrayStore** that is wrapped in a **DataSource**. You can then call the [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getDataSource') method to get this **DataSource**.
