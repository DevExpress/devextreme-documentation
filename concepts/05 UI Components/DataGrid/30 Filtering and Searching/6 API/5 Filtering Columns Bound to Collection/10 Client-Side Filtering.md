The following code example demonstrates how to filter data on the client side. To implement data filtering on the client side, bind the DataGrid to a local array, and disable [remote filtering](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/#filtering).

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            remoteOperations: { filtering: false },
            columns: [
                {
                    dataField: 'Products',
                    dataType: "string",
                    calculateFilterExpression: (filterValue, selectedFilterOperation, target) => {
                        let column = this;
                        if (filterValue) {
                            let selector = (data) => {
                                let applyOperation = (arg1, arg2, op) => {
                                    if (op === "=") return arg1 === arg2;
                                    if (op === "contains") return arg1.includes(arg2);
                                    if (op === "startswith") return arg1.startsWith(arg2);
                                    if (op === "endswith") return arg1.endsWith(arg2);
                                };
                                let values = column.calculateCellValue(data);
                                return values && !!values.find(v => applyOperation(v, filterValue, selectedFilterOperation));
                            };
                            return [selector, "=", true];
                        }
                        return this.defaultCalculateFilterExpression.apply(this, arguments);
                    }
                },
                // ...
            ],
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid 
        [remoteOperations]="{ filtering: false }"
        // ...
    >
        <dxi-column
            dataField="Products"
            dataType="string"
            [calculateFilterExpression]="calculateFilterExpression">
        </dxi-column>
        // ...
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        // ...
        calculateFilterExpression(filterValue, selectedFilterOperation, target) {
            let column = this;
            if (filterValue) {
                let selector = (data) => {
                    let applyOperation = (arg1, arg2, op) => {
                        if (op === "=") return arg1 === arg2;
                        if (op === "contains") return arg1.includes(arg2);
                        if (op === "startswith") return arg1.startsWith(arg2);
                        if (op === "endswith") return arg1.endsWith(arg2);
                    };
                    let values = column.calculateCellValue(data);
                    return values && !!values.find(v => applyOperation(v, filterValue, selectedFilterOperation));
                };
                return [selector, "=", true];
            }
            return this.defaultCalculateFilterExpression.apply(this, arguments);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxRemoteOperations :filtering="false" />
            <DxColumn
                data-field="Products"
                data-type="string"
                :calculate-filter-expression="calculateFilterExpression"
            >
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn,
        DxRemoteOperations,
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxRemoteOperations,
        },
        data() {
            // ...
        },
        methods: {
            calculateFilterExpression(filterValue, selectedFilterOperation, target) {
                let column = this;
                if (filterValue) {
                    let selector = (data) => {
                        let applyOperation = (arg1, arg2, op) => {
                            if (op === "=") return arg1 === arg2;
                            if (op === "contains") return arg1.includes(arg2);
                            if (op === "startswith") return arg1.startsWith(arg2);
                            if (op === "endswith") return arg1.endsWith(arg2);
                        };
                        let values = column.calculateCellValue(data);
                        return values && !!values.find(v => applyOperation(v, filterValue, selectedFilterOperation));
                    };
                    return [selector, "=", true];
                }
                return this.defaultCalculateFilterExpression.apply(this, arguments);
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column, RemoteOperations, 
    } from 'devextreme-react/data-grid';

    const calculateFilterExpression = (filterValue, selectedFilterOperation, target) => {
        let column = this;
        if (filterValue) {
            let selector = (data) => {
                let applyOperation = (arg1, arg2, op) => {
                    if (op === "=") return arg1 === arg2;
                    if (op === "contains") return arg1.includes(arg2);
                    if (op === "startswith") return arg1.startsWith(arg2);
                    if (op === "endswith") return arg1.endsWith(arg2);
                };
                let values = column.calculateCellValue(data);
                return values && !!values.find(v => applyOperation(v, filterValue, selectedFilterOperation));
            };
            return [selector, "=", true];
        }
        return this.defaultCalculateFilterExpression.apply(this, arguments);
    }

    export default function App() { 
        return (
            <DataGrid ... >
                <RemoteOperations filtering={false} />
                <Column
                    dataField="Products"
                    dataType="string"
                    calculateFilterExpression={calculateFilterExpression}
                />
            </DataGrid>
        );
    }
  
---
