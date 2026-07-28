A custom function is useful when advanced formatting is required. The value to be formatted is passed to the function as an argument. In the following example, a custom function formats a DataGrid column value as an absolute value and a percentage of the maximum sale amount.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        const orders = [{
            ID: 1,
            SaleAmount: 6
        }, {
            ID: 2,
            SaleAmount: 8.5
        }, {
            ID: 3,
            SaleAmount: 10
        }];

        const maxSaleAmount = Math.max(...orders.map((item) => item.SaleAmount));

        $("#dataGridContainer").dxDataGrid({
            dataSource: orders,
            keyExpr: "ID",
            columns: [{
                dataField: "SaleAmount",
                format: function (value) {
                    return value + " | " + ((value / maxSaleAmount) * 100).toFixed(1) + "%";
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid [dataSource]="orders" keyExpr="ID">
        <dxi-data-grid-column
            dataField="SaleAmount"
            [format]="formatSaleAmount">
        </dxi-data-grid-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDataGridModule } from 'devextreme-angular';

    type Order = {
        ID: number;
        SaleAmount: number;
    };

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        standalone: true,
        imports: [DxDataGridModule]
    })
    export class AppComponent {
        orders: Order[] = [{
            ID: 1,
            SaleAmount: 6
        }, {
            ID: 2,
            SaleAmount: 8.5
        }, {
            ID: 3,
            SaleAmount: 10
        }];

        maxSaleAmount = Math.max(...this.orders.map((item) => item.SaleAmount));

        formatSaleAmount = (value: number): string => {
            return `${value} | ${((value / this.maxSaleAmount) * 100).toFixed(1)}%`;
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid :data-source="orders" key-expr="ID">
            <DxColumn
                data-field="SaleAmount"
                :format="formatSaleAmount"
            />
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DxDataGrid, { DxColumn } from 'devextreme-vue/data-grid';

    type Order = {
        ID: number;
        SaleAmount: number;
    };

    const orders: Order[] = [{
        ID: 1,
        SaleAmount: 6
    }, {
        ID: 2,
        SaleAmount: 8.5
    }, {
        ID: 3,
        SaleAmount: 10
    }];

    const maxSaleAmount = Math.max(...orders.map((item) => item.SaleAmount));

    const formatSaleAmount = (value: number): string => {
        return `${value} | ${((value / maxSaleAmount) * 100).toFixed(1)}%`;
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DataGrid, { Column } from 'devextreme-react/data-grid';
    import { useCallback } from 'react';

    type Order = {
        ID: number;
        SaleAmount: number;
    };

    const orders: Order[] = [{
        ID: 1,
        SaleAmount: 6
    }, {
        ID: 2,
        SaleAmount: 8.5
    }, {
        ID: 3,
        SaleAmount: 10
    }];

    const maxSaleAmount = Math.max(...orders.map((item) => item.SaleAmount));

    export default function App() {
        const formatSaleAmount = useCallback((value: number): string => {
            return `${value} | ${((value / maxSaleAmount) * 100).toFixed(1)}%`;
        }, []);

        return (
            <DataGrid dataSource={orders} keyExpr="ID">
                <Column
                    dataField="SaleAmount"
                    format={formatSaleAmount}
                />
            </DataGrid>
        );
    }

---
