---
id: GridBaseColumn.calculateCellValue
type: function(rowData)
---
---
##### shortDescription
Calculates custom cell values. Use this function to create an unbound data column.

##### param(rowData): Object
The data of the row to which the cell belongs.

##### return: any
A cell's custom value.

---
Unlike data columns bound to a [data field](/api-reference/_hidden/GridBaseColumn/dataField.md '{basewidgetpath}/Configuration/columns/#dataField'), unbound columns display custom values returned from the **calculateCellValue** function. It is called each time a new row is rendered.

In the following code, the **calculateCellValue** function is used to create an unbound column that displays a calculated sales amount. Data objects contain the `Price` and `UnitsSold` fields used in the calculation:

---
##### jQuery

    <!-- tab: index.js -->
    var products = [{
        ProductID: 1,
        ProductName: "Fabrikam SLR Camera 35\" X358 Blue",
        Price: 168,
        UnitsSold: 4
    },
    // ...
    ];

    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: products,
            columns: [{
                caption: "Sales Amount",
                calculateCellValue: function(rowData) {
                    return rowData.Price * rowData.UnitsSold;
                }
            },
            // ...
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        [dataSource]="products">
        <dxi-column
            caption="Sales Amount"
            [calculateCellValue]="calculateSalesAmount">
        </dxi-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Product, Service } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        products: Product[];
        constructor(service: Service) {
            this.products = service.getProducts();
        }

        calculateSalesAmount(rowData) {
            return rowData.Price * rowData.UnitsSold;
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Product {
        ProductID: number,
        ProductName: string,
        Price: number,
        UnitsSold: number
    }

    let products: Product[] = [{
        ProductID: 1,
        ProductName: "Fabrikam SLR Camera 35\" X358 Blue",
        Price: 168,
        UnitsSold: 4
    },
    // ...
    ];

    @Injectable()
    export class Service {
        getProducts(): Product[] {
            return products;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';
    import { Service } from './app.service';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [
            Service
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-{widget-name}
            :data-source="products">
            <dx-column
                caption="Sales Amount"
                :calculate-cell-value="calculateSalesAmount">
            </dx-column>
        </dx-{widget-name}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn
    } from 'devextreme-vue/{widget-name}';

    import service from './data.js';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn
        },
        data() {
            const products = service.getProducts();
            return {
                products
            }
        },
        methods: {
            calculateSalesAmount(rowData) {
                return rowData.Price * rowData.UnitsSold;
            }
        }
    }
    </script>

    <!-- tab: data.js -->
    const products = [{
        ProductID: 1,
        ProductName: "Fabrikam SLR Camera 35\" X358 Blue",
        Price: 168,
        UnitsSold: 4
    },
    // ...
    ];

    export default {
        getProducts() {
            return products;
        }
    };

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column 
    } from 'devextreme-react/{widget-name}';

    import service from './data.js';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.products = service.getProducts();
        }

        calculateSalesAmount(rowData) {
            return rowData.Price * rowData.UnitsSold;
        }

        render() {
            return (
                <{WidgetName}
                    dataSource={this.products}>
                    <Column
                        caption="Sales Amount"
                        calculateCellValue={this.calculateSalesAmount}
                    />
                </{WidgetName}>
            );
        }
    }
    export default App;

    <!-- tab: data.js -->
    const products = [{
        ProductID: 1,
        ProductName: "Fabrikam SLR Camera 35\" X358 Blue",
        Price: 168,
        UnitsSold: 4
    },
    // ...
    ];

    export default {
        getProducts() {
            return products;
        }
    };

---

The following features are disabled in an unbound column, but you can enable them as described in this table:

<div class="simple-table">
    <table>
        <tr>
          <th style="width:30%">Feature</th>
          <th>Action that enables it</th>
        </tr>
        <tr>
          <td>Editing</td>
          <td>Implement the <a href="{basewidgetpath}/Configuration/columns/#setCellValue">setCellValue</a> function.</td>
        </tr>
        <tr>
          <td>Sorting</td>
          <td>Set the <a href="{basewidgetpath}/Configuration/columns/#allowSorting">allowSorting</a> option to <b>true</b>.</td>
        </tr>
        <tr>
          <td>Filtering</td>
          <td>Set the <a href="{basewidgetpath}/Configuration/columns/#allowFiltering">allowFiltering</a> option to <b>true</b>.</td>
        </tr>
        <tr>
          <td>Searching</td>
          <td>Set the <a href="{basewidgetpath}/Configuration/columns/#allowSearch">allowSearch</a> option to <b>true</b>.</td>
        </tr>
        <tr>
          <td>Grouping (<b>DataGrid</b> only)</td>
          <td>Set the <a href="/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping">allowGrouping</a> option to <b>true</b>.</td>
        </tr>
    </table>
</div>

[note]

To invoke the default behavior, call the **this.defaultCalculateCellValue(rowData)** function and return its result.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                calculateCellValue: function(rowData) {
                    // ...
                    return this.defaultCalculateCellValue(rowData);
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        calculateCellValue(rowData) {
            // ...
            let column = this as any;
            return column.defaultCalculateCellValue(rowData);
        }
    }

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column ...
            [calculateCellValue]="calculateCellValue">
        </dxi-column>
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-{widget-name} ... >
            <dx-column ...
                :calculate-cell-value="calculateCellValue">
            </dx-column>
        </dx-{widget-name}>
    </template>

    <script>
    // ...
    export default {
        // ...
        methods: {
            calculateCellValue(rowData) {
                // ...
                let column = this as any;
                return column.defaultCalculateCellValue(rowData);
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    class App extends React.Component {
        calculateCellValue(rowData) {
            // ...
            let column = this as any;
            return column.defaultCalculateCellValue(rowData);
        }

        render() {
            return (
                <{WidgetName} ... >
                    <Column ...
                        calculateCellValue={this.calculateCellValue}
                    />
                </{WidgetName}>
            );
        }
    }
    export default App;

---

[/note]

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}

#####See Also#####
- **columns[]**.[customizeText](/api-reference/_hidden/GridBaseColumn/customizeText.md '{basewidgetpath}/Configuration/columns/#customizeText')
- **columns[]**.[calculateDisplayValue](/api-reference/_hidden/GridBaseColumn/calculateDisplayValue.md '{basewidgetpath}/Configuration/columns/#calculateDisplayValue')