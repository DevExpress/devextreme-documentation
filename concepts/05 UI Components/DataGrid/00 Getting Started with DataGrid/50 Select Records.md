#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/DataGrid/Selection/", name: "DataGrid - Selection" }

DataGrid supports single and multiple row selection. To activate this capability, configure the **selection**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#mode') property.

To obtain selected records at runtime, define [onSelectionChanged](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onSelectionChanged'). This tutorial configures **onSelectionChanged** to display selected employee names in an element outside of the component:

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGrid").dxDataGrid({
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
                <div id="dataGrid"></div>
                <p id="selected-employee"></p>
            </div>
        </body>
    </html>

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    <div id="app-container">
        @(Html.DevExtreme().DataGrid<Employee>()
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
        <dx-data-grid (onSelectionChanged)="selectEmployee($event)">
            <dxo-data-grid-selection mode="single"></dxo-data-grid-selection>
            <!-- ... -->
        </dx-data-grid>
        @if (selectedEmployee) {
            <p id="selected-employee">
                Selected employee: {{ selectedEmployee.FullName }}
            </p>
        }
    </div>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
    import { Employee, EmployeesService } from './employees.service';

    // ...
    export class AppComponent {
        selectedEmployee: Employee;

        constructor(service: EmployeesService) {
            this.selectEmployee = this.selectEmployee.bind(this);
        }
        
        selectEmployee(e: DxDataGridTypes.SelectionChangedEvent) {
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
            <DxDataGrid @selection-changed="selectEmployee">
                <DxSelection mode="single" />
                <!-- ... -->
            </DxDataGrid>
            <p id="selected-employee" v-if="selectedEmployee">
                Selected employee: {{ selectedEmployee.FullName }}
            </p>
        </div>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxDataGrid, DxSelection, type DataGridTypes } from 'devextreme-vue/data-grid';
    import { type Employee } from '../employees.service';

    const selectedEmployee = ref<Employee | undefined>();

    function selectEmployee(e: DataGridTypes.SelectionChangedEvent): void {
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
    import { DataGrid, Selection, type DataGridTypes } from 'devextreme-react/data-grid';
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
        const selectEmployee = useCallback((e: DataGridTypes.SelectionChangedEvent): void => {
            e.component.byKey(e.currentSelectedRowKeys[0]).then((employee: Employee) => {
                setSelectedEmployee(employee);
            }).catch(() => {});
        }, []);

        return (
            <div className="App">
                <DataGrid onSelectionChanged={selectEmployee}>
                    <Selection mode="single" />
                    {/* ... */}
                </DataGrid>
                <SelectedEmployee employee={selectedEmployee} />
            </div>
        );
    }

---
