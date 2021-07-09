To enable node selection, set the [selectByClick](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectByClick) property to **true**. If you want to add checkboxes for each node, set the [showCheckBoxesMode](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#showCheckBoxesMode) property to *"normal"* or *"selectAll"*. The latter mode additionally displays the "Select All" checkbox at the top of the TreeView.

The default selection mode is multiple. As an alternative, you can set the [selectionMode](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/selectionMode) property to *"single"*.

To obtain the selected node's data, use the [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#onSelectionChanged) function. In the code below, this function displays the selected book and its author:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeView({
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
            <DxTreeView ...
                @selection-changed="selectEmployee">
                <!-- ... -->
                <DxSelection mode="single" />
            </DxTreeView>
            <p id="selected-employee" v-if="selectedEmployee">
                Selected employee: {{ selectedEmployee.FullName }}
            </p>
        </div>
    </template>

    <script>
    import {
        DxTreeView,
        // ...
        DxSelection
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeView,
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
        TreeView,
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
                <TreeView ...
                    onSelectionChanged={selectEmployee}>
                    {/* ... */}
                    <Selection mode="single" />
                </TreeView>
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