The **DataGrid** supports single and multiple record selection modes. To specify the mode, set the **selection**.[mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#mode) option.

You can access the selected record's data in the [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onSelectionChanged) function. In the code below, this function displays the selected employee under the **DataGrid**:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            selection: { mode: "single" },
            onSelectionChanged: function(e) {
                e.component.byKey(e.currentSelectedRowKeys[0]).done(employee => {
                    if(employee) {
                        $("#selected-employee").text(`Selected employee: ${employee.FullName}`);
                    }
                });
            },
        });
    });

    <!-- tab: index.html -->
    <html>
        <!-- ... -->
        <body class="dx-viewport">
            <div id="dataGrid"></div>
            <p id="selected-employee"></p>
        </body>
    </html>

    <!-- tab: index.css -->
    #selected-employee {
        text-align: center;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        (onSelectionChanged)="selectEmployee($event)">
        <!-- ... -->
        <dxo-selection mode="multiple"></dxo-selection>
    </dx-data-grid>
    <p id="selected-employee" *ngIf="selectedEmployee">
        Selected employee: {{ selectedEmployee.FullName }}
    </p>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Employee, EmployeesService } from './employees.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
        selectedEmployee: Employee;

        constructor(service: EmployeesService) {
            // ...
            this.selectEmployee = this.selectEmployee.bind(this);
        }
        
        selectEmployee(e) {
            e.component.byKey(e.currentSelectedRowKeys[0]).done(employee => {
                if(employee) {
                    this.selectedEmployee = employee;
                }
            });
        }
    }

    <!-- tab: app.component.css -->
    #selected-employee {
        text-align: center;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app">
            <DxDataGrid ...
                @selection-changed="selectEmployee">
                <!-- ... -->
                <DxSelection mode="multiple" />
            </DxDataGrid>
            <p id="selected-employee" v-if="selectedEmployee">
                Selected employee: {{ selectedEmployee.FullName }}
            </p>
        </div>
    </template>

    <script>
    import {
        DxDataGrid,
        // ...
        DxSelection
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            // ...
            DxSelection
        },
        data() {
            return {
                // ...
                selectedEmployee: undefined,
            }
        },
        methods: {
            selectEmployee(e) {
                e.component.byKey(e.currentSelectedRowKeys[0]).done(employee => {
                    if(employee) {
                        this.selectedEmployee = employee;
                    }
                });
            }
        }
    }
    </script>

    <style>
    #selected-employee {
        text-align: center;
    }
    </style>

##### React

    <!-- tab: App.js -->
    import React, { useState } from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import './App.css';

    import {
        DataGrid,
        Column,
        // ...
        Selection
    } from 'devextreme-react/data-grid';

    function SelectedEmployee(props) {
        if(props.employee) {
            return (
                <p id="selected-employee">
                    Selected employee: {props.employee.FullName}
                </p>
            );
        }
        return null;
    }

    function App() {
        const [selectedEmployee, setSelectedEmployee] = useState();
        const selectEmployee = (e) => {
            e.component.byKey(e.currentSelectedRowKeys[0]).done(employee => {
                setSelectedEmployee(employee);
            });
        }

        return (
            <div className="App">
                <DataGrid ...
                    onSelectionChanged={selectEmployee}>
                    {/* ... */}
                    <Selection mode="single" />
                </DataGrid>
                <SelectedEmployee employee={selectedEmployee} />
            </div>
        );
    }

    export default App;

    <!-- tab: App.css -->
    #selected-employee {
        text-align: center;
    }

---

In the next step, we will add a summary to count grid records.