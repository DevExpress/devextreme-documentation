The following code example demonstrates how to bind the DataGrid to the [OData service](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Binding/Data_Source_Examples/#OData') and enable remote filtering. To make this solution work, make sure that your OData service supports the **Any** filtering operator (see [Support for Any and All](https://www.odata.org/blog/support-for-any-and-all/)). This concept is also described in the following topic: [Azure: OData Collection Operators](https://learn.microsoft.com/en-us/azure/search/search-query-odata-collection-operators).

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

You need to specify the [calculateFilterExpression](/api-reference/_hidden/GridBaseColumn/calculateFilterExpression.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateFilterExpression') property and pass the `"Products/any(o: substringof("filterValue",o/ProductName) eq true)"` expression to the [EdmLiteral](/api-reference/30%20Data%20Layer/EdmLiteral '/Documentation/ApiReference/Data_Layer/EdmLiteral/') method. In addition, you need to handle the [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateCellValue') property and create a comma-separated string from ProductNames. This string will be displayed in column cells.

The DataGrid sends a filter expression to the backend and expects relevant data as a result. The solution for filtering depends on the backend type. However, a common requirement is that the backend should implement the corresponding filtering operation.
