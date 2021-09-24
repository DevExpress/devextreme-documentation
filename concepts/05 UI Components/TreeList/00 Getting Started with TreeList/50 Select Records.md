The TreeList supports single and multiple record selection modes. Use the **selection**.[mode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#mode) property to specify the mode.

You can obtain the selected record's data in the [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onSelectionChanged) function. In the code below, this function displays the selected employee under the TreeList:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeList({
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
                <div id="treeList"></div>
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
        <dx-tree-list ...
            (onSelectionChanged)="selectEmployee($event)">
            <!-- ... -->
            <dxo-selection mode="single"></dxo-selection>
        </dx-tree-list>
        <p id="selected-employee" *ngIf="selectedEmployee">
            Selected employee: {{ selectedEmployee.FullName }}
        </p>
    </div>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Employee, EmployeesService } from './employees.service';

    #include angular-component-decorator
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
            <DxTreeList ...
                @selection-changed="selectEmployee">
                <!-- ... -->
                <DxSelection mode="single" />
            </DxTreeList>
            <p id="selected-employee" v-if="selectedEmployee">
                Selected employee: {{ selectedEmployee.FullName }}
            </p>
        </div>
    </template>

    <script>
    import {
        DxTreeList,
        // ...
        DxSelection
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
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
    import React, { useState } from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import './App.css';

    import {
        TreeList,
        Column,
        // ...
        Selection
    } from 'devextreme-react/tree-list';

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
                <TreeList ...
                    onSelectionChanged={selectEmployee}>
                    {/* ... */}
                    <Selection mode="single" />
                </TreeList>
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