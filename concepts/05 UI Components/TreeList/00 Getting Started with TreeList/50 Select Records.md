#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/TreeList/Selection/", name: "TreeList - Selection" }

TreeList supports single- and multiple-row selection. To enable row selection, configure the **selection**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#mode') property.

Handle [onSelectionChanged](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onSelectionChanged') to obtain selected records at runtime. This tutorial uses **onSelectionChanged** to display selected employee names in an element outside the component:

---
##### jQuery

    <!-- tab: index.js -->
    $("#treeList").dxTreeList({
        selection: { mode: "single" },
        onSelectionChanged: function(e) {
            e.component.byKey(e.currentSelectedRowKeys[0]).done(employee => {
                if(employee) {
                    $("#selected-employee").text(`Selected employee: ${employee.FullName}`);
                }
            });
        },
        // ...
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

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    <div id="app-container">
        @(Html.DevExtreme().TreeList<Employee>()
            .Selection(s => s.Mode(SelectionMode.Single))
            .OnSelectionChanged("handleSelectionChanged")
            @* ... *@
        )
        <p id="selected-employee"></p>
    </div>

    <script>
        function handleSelectionChanged(e) {
            e.component.byKey(e.currentSelectedRowKeys[0]).done((employee) => {
                if (employee) {
                    $('#selected-employee').text(`Selected employee: ${employee.FullName}`);
                }
            });
        }
    </script>

##### Angular

    <!-- tab: app.component.html -->
    <div id="app-container">
        <dx-tree-list (onSelectionChanged)="selectEmployee($event)">
            <dxo-tree-list-selection mode="single"></dxo-tree-list-selection>
            <!-- ... -->
        </dx-tree-list>
        @if (selectedEmployee) {
            <p id="selected-employee">
                Selected employee: {{ selectedEmployee.FullName }}
            </p>
        }
    </div>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxTreeListTypes } from 'devextreme-angular/ui/tree-list';
    import { Employee, EmployeesService } from './employees.service';

    // ...
    export class AppComponent {
        selectedEmployee: Employee;

        constructor(service: EmployeesService) {
            this.selectEmployee = this.selectEmployee.bind(this);
        }
        
        selectEmployee(e: DxTreeListTypes.SelectionChangedEvent) {
            e.component.byKey(e.currentSelectedRowKeys[0]).done(employee => {
                if(employee) {
                    this.selectedEmployee = employee;
                }
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList @selection-changed="selectEmployee">
                <DxSelection mode="single" />
                <!-- ... -->
            </DxTreeList>
            <p id="selected-employee" v-if="selectedEmployee">
                Selected employee: {{ selectedEmployee.FullName }}
            </p>
        </div>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxTreeList, DxSelection, type TreeListTypes } from 'devextreme-vue/tree-list';
    import { type Employee } from '../employees.service';

    const selectedEmployee = ref<Employee | undefined>();

    function selectEmployee(e: TreeListTypes.SelectionChangedEvent): void {
        e.component.byKey(e.currentSelectedRowKeys[0]).done((employee: Employee) => {
            if (employee) {
                selectedEmployee.value = employee;
            }
        });
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useState } from 'react';
    import { TreeList, Selection, type TreeListTypes } from 'devextreme-react/tree-list';
    import { type Employee } from './employees';

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
        const selectEmployee = useCallback((e: TreeListTypes.SelectionChangedEvent): void => {
            e.component.byKey(e.currentSelectedRowKeys[0]).then((employee: Employee) => {
                setSelectedEmployee(employee);
            }).catch(() => {});
        }, []);

        return (
            <div className="App">
                <TreeList onSelectionChanged={selectEmployee}>
                    <Selection mode="single" />
                    {/* ... */}
                </TreeList>
                <SelectedEmployee employee={selectedEmployee} />
            </div>
        );
    }

---
