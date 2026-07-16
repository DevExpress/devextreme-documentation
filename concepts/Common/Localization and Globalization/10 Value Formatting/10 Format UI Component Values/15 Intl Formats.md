<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> is the ECMAScript Internationalization API. DevExtreme supports Intl value formatting out of the box.

The UI component **format** property is compatible with `options` objects accepted by <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat#parameters" target="_blank">Intl.NumberFormat</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#parameters" target="_blank">Intl.DateTimeFormat</a>. To apply an Intl format, assign these option fields to the **format** property:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "OrderDate",
                format: { year: "2-digit", month: "narrow", day: "2-digit" }
            }, {
                dataField: "SaleAmount",
                format: { style: "currency", currency: "EUR", useGrouping: true, minimumSignificantDigits: 3 }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid [dataSource]="orders" keyExpr="ID">
        <dxi-data-grid-column
            dataField="OrderDate"
            [format]="orderDateFormat">
        </dxi-data-grid-column>
        <dxi-data-grid-column
            dataField="SaleAmount"
            [format]="saleAmountFormat">
        </dxi-data-grid-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDataGridModule } from 'devextreme-angular';

    type Order = {
        ID: number;
        OrderDate: Date;
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
            OrderDate: new Date(2021, 6, 15),
            SaleAmount: 1234.567
        }];

        orderDateFormat = { year: '2-digit', month: 'narrow', day: '2-digit' };
        saleAmountFormat = { style: 'currency', currency: 'EUR', useGrouping: true, minimumSignificantDigits: 3 };
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid :data-source="orders" key-expr="ID">
            <DxColumn
                data-field="OrderDate"
                :format="orderDateFormat"
            />
            <DxColumn
                data-field="SaleAmount"
                :format="saleAmountFormat"
            />
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DxDataGrid, { DxColumn } from 'devextreme-vue/data-grid';

    type Order = {
        ID: number;
        OrderDate: Date;
        SaleAmount: number;
    };

    const orders: Order[] = [{
        ID: 1,
        OrderDate: new Date(2021, 6, 15),
        SaleAmount: 1234.567
    }];

    const orderDateFormat = { year: '2-digit', month: 'narrow', day: '2-digit' };
    const saleAmountFormat = { style: 'currency', currency: 'EUR', useGrouping: true, minimumSignificantDigits: 3 };
    </script>

##### React

    <!-- tab: App.tsx -->
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DataGrid, { Column } from 'devextreme-react/data-grid';

    type Order = {
        ID: number;
        OrderDate: Date;
        SaleAmount: number;
    };

    const orders: Order[] = [{
        ID: 1,
        OrderDate: new Date(2021, 6, 15),
        SaleAmount: 1234.567
    }];

    const orderDateFormat = { year: '2-digit', month: 'narrow', day: '2-digit' };
    const saleAmountFormat = { style: 'currency', currency: 'EUR', useGrouping: true, minimumSignificantDigits: 3 };

    export default function App() {
        return (
            <DataGrid dataSource={orders} keyExpr="ID">
                <Column
                    dataField="OrderDate"
                    format={orderDateFormat}
                />
                <Column
                    dataField="SaleAmount"
                    format={saleAmountFormat}
                />
            </DataGrid>
        );
    }

---