<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> is the short name used to refer to a particular <a href="http://ecma-international.org/ecma-402/1.0/" target="_blank">ECMAScript Internationalization API</a> object. DevExtreme supports this API and its value formatting capabilities out of the box.

A widget's **format** option is compatible with the `options` parameter of the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat#Parameters" target="_blank">Intl.NumberFormat</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat#Parameters" target="_blank">Intl.DateTimeFormat</a>. To apply an Intl format, specify the `options` parameter's fields in the **format** option:

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
    <dx-data-grid ... >
        <dxi-column
            dataField="OrderDate"
            [format]="{ year: '2-digit', month: 'narrow', day: '2-digit' }">
        </dxi-column>
        <dxi-column
            dataField="SaleAmount"
            [format]="{ style: 'currency', currency: 'EUR', useGrouping: true, minimumSignificantDigits: 3 }">
        </dxi-column>
    </dx-data-grid>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDataGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-data-grid ... >
            <dx-column
                data-field="OrderDate"
                :format="orderDateFormat"
            />
            <dx-column
                data-field="SaleAmount"
                :format="saleAmountFormat">
            />
        </dx-data-grid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        data() {
            return {
                orderDateFormat: { year: '2-digit', month: 'narrow', day: '2-digit' },
                saleAmountFormat: { style: 'currency', currency: 'EUR', useGrouping: true, minimumSignificantDigits: 3 }
            }
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column 
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        orderDateFormat = { year: '2-digit', month: 'narrow', day: '2-digit' };
        saleAmountFormat = { style: 'currency', currency: 'EUR', useGrouping: true, minimumSignificantDigits: 3 };

        render() {
            return (
                <DataGrid ... >
                    <Column
                        dataField="OrderDate"
                        format={this.orderDateFormat}
                    />
                    <Column
                        dataField="SaleAmount"
                        format={this.saleAmountFormat}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

---