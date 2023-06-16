The DataGrid supports single and multiple record selection modes. Use the **selection**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#mode') property to specify the mode.

You can obtain the selected record's data in the [onSelectionChanged](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onSelectionChanged') function. In the code below, this function displays the selected employee under the DataGrid:

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
            <div id="app-container">
                <div id="dataGrid"></div>
                <p id="selected-employee"></p>
            </div>
        </body>
    </html>

    <!-- tab: index.css -->
    /* ... */
    #app-container {
        width: 900px;
        position: relative;
    }

    #selected-employee {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }

##### Angular

    <!-- tab: app.component.html -->
    <div id="app-container">
        <dx-data-grid ...
            (onSelectionChanged)="selectEmployee($event)">
            <!-- ... -->
            <dxo-selection mode="single"></dxo-selection>
        </dx-data-grid>
        <p id="selected-employee" *ngIf="selectedEmployee">
            Selected employee: {{ selectedEmployee.FullName }}
        </p>
    </div>

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
    /* ... */
    #app-container {
        width: 900px;
        position: relative;
    }

    #selected-employee {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid ...
                @selection-changed="selectEmployee">
                <!-- ... -->
                <DxSelection mode="single" />
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
    /* ... */
    #app-container {
        width: 900px;
        position: relative;
    }

    #selected-employee {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }
    </style>

##### React

    <!-- tab: App.js -->
    import React, { useCallback, useState } from 'react';
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
        const selectEmployee = useCallback((e) => {
            e.component.byKey(e.currentSelectedRowKeys[0]).done(employee => {
                setSelectedEmployee(employee);
            });
        }, []);

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
    /* ... */
    .App {
        width: 900px;
        position: relative;
    }

    #selected-employee {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }

---