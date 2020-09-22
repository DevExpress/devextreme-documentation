[note] This article describes how to bind a DevExtreme widget to a local array in jQuery, Angular, Vue, and React. For information on data binding in ASP.NET MVC Controls, refer to <a href="https://docs.devexpress.com/AspNetCore/401019/devextreme-based-controls/concepts/bind-controls-to-data/clr-objects" target="_blank">docs.devexpress.com</a>.

To bind a widget to a local array, pass this array to the widget's [dataSource](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource') option. We recommend that you also set the [keyExpr](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#keyExpr') option OR the [valueExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#valueExpr') and [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#displayExpr') options, depending on your widget:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const employees = [
            { ID: 1, FirstName: "Sandra", LastName: "Johnson" },
            { ID: 2, FirstName: "James", LastName: "Scott" },
            { ID: 3, FirstName: "Nancy", LastName: "Smith" }
        ];

        $("#dataGridContainer").dxDataGrid({
            dataSource: employees,
            keyExpr: "ID"
        });

        $("#selectBoxContainer").dxSelectBox({
            dataSource: employees,
            valueExpr: "ID",
            displayExpr: (item) => item && item.FirstName + ' ' + item.LastName
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid
        [dataSource]="employees"
        keyExpr="ID">
    </dx-data-grid>
    <dx-select-box
        [dataSource]="employees"
        valueExpr="ID"
        [displayExpr]="getDisplayExpr">
    </dx-select-box>

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
        getDisplayExpr(item) {
            return item && item.FirstName + ' ' + item.LastName;
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Employee {
        ID: Number,
        FirstName: String,
        LastName: String
    }

    const employees: Employee[] = [
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

    import { DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
    import { Service } from './app.service';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule,
            DxSelectBoxModule
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
        <div>
            <DxDataGrid
                :data-source="employees"
                key-expr="ID"
            />
            <DxSelectBox
                :data-source="employees"
                value-expr="ID"
                :display-expr="getDisplayExpr"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';
    import DxSelectBox from 'devextreme-vue/select-box';

    import service from './data.js';

    export default {
        components: {
            DxDataGrid,
            DxSelectBox
        },
        data() {
            const employees = service.getEmployees();
            return {
                employees
            }
        },
        methods: {
            getDisplayExpr(item) {
                return item && item.FirstName + ' ' + item.LastName;
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
    import SelectBox from 'devextreme-react/select-box';

    import service from './data.js';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.employees = service.getEmployees();
        }

        getDisplayExpr(item) {
            return item && item.FirstName + ' ' + item.LastName;
        }

        render() {
            return (
                <React.Fragment>
                    <DataGrid
                        dataSource={this.employees}
                        keyExpr="ID"
                    />
                    <SelectBox
                        dataSource={this.employees}
                        valueExpr="ID"
                        displayExpr={this.getDisplayExpr}
                    />
                </React.Fragment>
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

If you plan to update the data or need to handle data-related events, wrap the array in an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'). You can use the store's [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') option instead of the widget's **keyExpr** or **valueExpr**. You can further wrap the **ArrayStore** in a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') if you need to filter, sort, group, and otherwise shape the data.

The following example declares an **ArrayStore**, wraps it in a **DataSource**, and binds the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview) and [SelectBox](https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview) widgets to this **DataSource**:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...
        const employeesStore = new DevExpress.data.ArrayStore({
            data: employees,
            key: "ID",
            onLoaded: function() {
                // ...
            }
        });

        const employeesDataSource = new DevExpress.data.DataSource({
            store: employeesStore,
            sort: "LastName"
        });

        $("#dataGridContainer").dxDataGrid({
            dataSource: employeesDataSource
        });

        $("#selectBoxContainer").dxSelectBox({
            dataSource: employeesDataSource,
            displayExpr: (item) => item && item.FirstName + ' ' + item.LastName
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid
        [dataSource]="employeesDataSource">
    </dx-data-grid>
    <dx-select-box
        [dataSource]="employeesDataSource"
        [displayExpr]="getDisplayExpr">
    </dx-select-box>

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
        employeesDataSource: DataSource;
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
        getDisplayExpr(item) {
            return item && item.FirstName + ' ' + item.LastName;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxDataGrid
                :data-source="employeesDataSource"
            />
            <DxSelectBox
                :data-source="employeesDataSource"
                :display-expr="getDisplayExpr"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';
    import DxSelectBox from 'devextreme-vue/select-box';
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
        },
        methods: {
            getDisplayExpr(item) {
                return item && item.FirstName + ' ' + item.LastName;
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
    import SelectBox from 'devextreme-react/select-box';
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
        getDisplayExpr(item) {
            return item && item.FirstName + ' ' + item.LastName;
        }
        
        render() {
            return (
                <React.Fragment>
                    <DataGrid
                        dataSource={employeesDataSource}
                    />
                    <SelectBox
                        dataSource={this.employees}
                        displayExpr={this.getDisplayExpr}
                    />
                </React.Fragment>
            );
        }
    }
    export default App;

---

[note] If you pass a JavaScript array to a widget's **dataSource** option, the widget automatically places it in an **ArrayStore** that is wrapped in a **DataSource**. You can then call the [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getDataSource') method to get this **DataSource**.
