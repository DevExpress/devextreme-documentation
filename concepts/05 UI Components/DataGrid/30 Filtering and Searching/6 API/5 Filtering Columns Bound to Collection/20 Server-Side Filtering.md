In the code below, you can see how to bind DataGrid to the [OData service](/Documentation/Guide/Data_Binding/Data_Source_Examples/#OData) and enable remote filtering. To make this solution work, your OData service should support the **Any** filtering operator (see [Support for Any and All](https://www.odata.org/blog/support-for-any-and-all/)). Also, this concept described at the [Azure: OData Collection Operators](https://learn.microsoft.com/en-us/azure/search/search-query-odata-collection-operators) topic. 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [
                {
                    dataField: 'Products',
                    dataType: "string",
                    calculateCellValue: (data) => {
                        var res = [];
                        for (var i = 0; i < data.Products.length; i++)
                            res.push(data.Products[i].ProductName);
                        return res.join(', ');
                    },
                    calculateFilterExpression: (filterValue, selectedFilterOperation, target) {
                        return [
                            [new DevExpress.data.EdmLiteral("Products/any(o: substringof('" + filterValue + "',o/ProductName) eq true)"), "=", true]
                        ];
                    }   
                },
                // ...
            ],
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column
            dataField="Products"
            dataType="string"
            [calculateFilterExpression]="calculateFilterExpression"
            [calculateCellValue]="calculateCellValue"
        >
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
        
        calculateFilterExpression(filterValue, selectedFilterOperation, target) {
            return [
                [new DevExpress.data.EdmLiteral("Products/any(o: substringof('" + filterValue + "',o/ProductName) eq true)"), "=", true]
            ];
        }

        calculateCellValue(data) {
            var res = [];
            for (var i = 0; i < data.Products.length; i++)
                res.push(data.Products[i].ProductName);
            return res.join(', ');
        }

        // ...
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            // ...
            <DxColumn
                data-field="Products"
                data-type="string"
                :calculate-filter-expression="calculateFilterExpression"
                :calculate-cell-value="calculateCellValue"
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
                return [
                    [new DevExpress.data.EdmLiteral("Products/any(o: substringof('" + filterValue + "',o/ProductName) eq true)"), "=", true]
                ];
            },
            calculateCellValue(data) {
                var res = [];
                for (var i = 0; i < data.Products.length; i++)
                    res.push(data.Products[i].ProductName);
                return res.join(', ');
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column, 
    } from 'devextreme-react/data-grid';

    const calculateFilterExpression = (filterValue, selectedFilterOperation, target) => {
        return [
            [new DevExpress.data.EdmLiteral("Products/any(o: substringof('" + filterValue + "',o/ProductName) eq true)"), "=", true]
        ];
    }

    const calculateCellValue = (data) => {
        var res = [];
        for (var i = 0; i < data.Products.length; i++)
            res.push(data.Products[i].ProductName);
        return res.join(', ');
    }

    export default function App() { 
        return (
            <DataGrid ... >
                // ...
                <Column
                    dataField="Products"
                    dataType="string"
                    calculateFilterExpression={calculateFilterExpression}
                    calculateCellValue={calculateCellValue}
                />
            </DataGrid>
        );
    }

---

You need to specify the [calculateFilterExpression](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateFilterExpression) property and put the `"Products/any(o: substringof("filterValue",o/ProductName) eq true)"` expression to the [EdmLiteral](/Documentation/ApiReference/Data_Layer/EdmLiteral/) method. Also, handle the [calculateCellValue](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateCellValue) property and create a comma-separated string from ProductNames. This string will be displayed in column cells.

The DataGrid sends a filter expression to the backend and expects relevant data as a result. The solution for filtering depends on the backend type. However, a common requirement is that the backend should supply the corresponding filtering operation.
