Predefined formats are string literals for formatting numbers and dates. See the **format**.[type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/Format/#type') description for a full list.

Set the **format** UI component property to apply a predefined format. In the following examples, this property formats the `SaleAmount` column value in the DataGrid. The `precision` value of `2` displays two digits after the decimal separator.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            dataSource: [{
                ID: 1,
                SaleAmount: 1234.567
            }],
            keyExpr: "ID",
            columns: [{
                dataField: "SaleAmount",
                format: {
                    type: "fixedPoint",
                    precision: 2
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid [dataSource]="orders" keyExpr="ID">
        <dxi-data-grid-column dataField="SaleAmount">
            <dxo-data-grid-format
                type="fixedPoint"
                [precision]="2">
            </dxo-data-grid-format>
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
            SaleAmount: 1234.567
        }];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid :data-source="orders" key-expr="ID">
            <DxColumn data-field="SaleAmount">
                <DxFormat
                    type="fixedPoint"
                    :precision="2"
                />
            </DxColumn>
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DxDataGrid, { DxColumn, DxFormat } from 'devextreme-vue/data-grid';

    type Order = {
        ID: number;
        SaleAmount: number;
    };

    const orders: Order[] = [{
        ID: 1,
        SaleAmount: 1234.567
    }];
    </script>

##### React

    <!-- tab: App.tsx -->
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DataGrid, { Column, Format } from 'devextreme-react/data-grid';

    type Order = {
        ID: number;
        SaleAmount: number;
    };

    const orders: Order[] = [{
        ID: 1,
        SaleAmount: 1234.567
    }];

    export default function App() {
        return (
            <DataGrid dataSource={orders} keyExpr="ID">
                <Column dataField="SaleAmount">
                    <Format
                        type="fixedPoint"
                        precision={2}
                    />
                </Column>
            </DataGrid>
        );
    }

---

The previous example assigns an object to the **format** property, which allows you to specify `precision`. You can assign a string literal to **format** if additional options are not required.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/NumberBox/Formatting/"
}
