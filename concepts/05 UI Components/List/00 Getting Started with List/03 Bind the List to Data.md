The List can load data from different data source types. To use a local array, assign it to the [dataSource](Documentation/ApiReference/UI_Components/dxList/Configuration/#dataSource) property. If array elements are objects, use the [displayExpr](/Documentation/ApiReference/UI_Components/dxList/Configuration/#displayExpr) property to specify the data field that supplies values to the list. For information on other data source types, refer to the following articles:

- [Read-Only Data in JSON Format](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/)
- [OData](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/)
- [Web API, PHP, MongoDB](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/)
- [Custom Data Sources](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/)

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list').dxList({
            dataSource: products,
            displayExpr: 'Name',
        });
    });

    <!-- tab: products.js -->
    const products = [{
        ID: 1,
        Name: "HD Video Player",
        Category: "Video Players"
    },
    {
        ID: 3,
        Name: "SuperPlasma 50",
        Category: "Televisions"
    },
    {
        ID: 4,
        Name: "SuperLED 50",
        Category: "Televisions"
    },
    {
        ID: 5,
        Name: "SuperLED 42",
        Category: "Televisions"
    },
    {
        ID: 6,
        Name: "SuperLCD 55",
        Category: "Televisions"
    },
    {
        ID: 7,
        Name: "SuperLCD 42",
        Category: "Televisions"
    },
    {
        ID: 8,
        Name: "SuperPlasma 65",
        Category: "Televisions"
    },
    {
        ID: 9,
        Name: "SuperLCD 70",
        Category: "Televisions"
    },
    {
        ID: 10,
        Name: "DesktopLED 21",
        Category: "Monitors"
    },
    {
        ID: 12,
        Name: "DesktopLCD 21",
        Category: "Monitors"
    },
    {
        ID: 13,
        Name: "DesktopLCD 19",
        Category: "Monitors"
    },
    {
        ID: 14,
        Name: "Projector Plus",
        Category: "Projectors"
    },
    {
        ID: 15,
        Name: "Projector PlusHD",
        Category: "Projectors"
    },
    {
        ID: 17,
        Name: "ExcelRemote IR",
        Category: "Automation"
    },
    {
        ID: 18,
        Name: "ExcelRemote BT",
        Category: "Automation"
    },
    {
        ID: 19,
        Name: "ExcelRemote IP",
        Category: "Automation"
    }];
 
##### Angular

    <!-- tab: app.component.html -->
    <dx-list
        [dataSource]="products"
        displayExpr="Name">
    </dx-list>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Product, ProductsService } from './products.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        products: Product[] = [];

        constructor(service: ProductsService) {
            this.products = service.getProducts();
        }
    }

    <!-- tab: products.service.ts -->
    import { Injectable } from '@angular/core';

    export interface Product {
        ID: Number,
        Name: String,
        Category: String,
    }

    const products: Product[] = [{
        ID: 1,
        Name: "HD Video Player",
        Category: "Video Players"
    },
    {
        ID: 3,
        Name: "SuperPlasma 50",
        Category: "Televisions"
    },
    {
        ID: 4,
        Name: "SuperLED 50",
        Category: "Televisions"
    },
    {
        ID: 5,
        Name: "SuperLED 42",
        Category: "Televisions"
    },
    {
        ID: 6,
        Name: "SuperLCD 55",
        Category: "Televisions"
    },
    {
        ID: 7,
        Name: "SuperLCD 42",
        Category: "Televisions"
    },
    {
        ID: 8,
        Name: "SuperPlasma 65",
        Category: "Televisions"
    },
    {
        ID: 9,
        Name: "SuperLCD 70",
        Category: "Televisions"
    },
    {
        ID: 10,
        Name: "DesktopLED 21",
        Category: "Monitors"
    },
    {
        ID: 12,
        Name: "DesktopLCD 21",
        Category: "Monitors"
    },
    {
        ID: 13,
        Name: "DesktopLCD 19",
        Category: "Monitors"
    },
    {
        ID: 14,
        Name: "Projector Plus",
        Category: "Projectors"
    },
    {
        ID: 15,
        Name: "Projector PlusHD",
        Category: "Projectors"
    },
    {
        ID: 17,
        Name: "ExcelRemote IR",
        Category: "Automation"
    },
    {
        ID: 18,
        Name: "ExcelRemote BT",
        Category: "Automation"
    },
    {
        ID: 19,
        Name: "ExcelRemote IP",
        Category: "Automation"
    }];

    @Injectable({
        providedIn: 'root'
    })
    export class ProductsService {
        getProducts(): Products[] {
            return products;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxList
                :data-source="products"
                display-expr="Name">
            </DxList>
        </div>
    </template>

    <script>
    // ...
    import { products } from './products';

    export default {
        // ...
        data() {
            return {
                products
            }
        },
    }
    </script>

    <!-- tab: products.js -->
    export const products = [{
        ID: 1,
        Name: "HD Video Player",
        Category: "Video Players"
    },
    {
        ID: 3,
        Name: "SuperPlasma 50",
        Category: "Televisions"
    },
    {
        ID: 4,
        Name: "SuperLED 50",
        Category: "Televisions"
    },
    {
        ID: 5,
        Name: "SuperLED 42",
        Category: "Televisions"
    },
    {
        ID: 6,
        Name: "SuperLCD 55",
        Category: "Televisions"
    },
    {
        ID: 7,
        Name: "SuperLCD 42",
        Category: "Televisions"
    },
    {
        ID: 8,
        Name: "SuperPlasma 65",
        Category: "Televisions"
    },
    {
        ID: 9,
        Name: "SuperLCD 70",
        Category: "Televisions"
    },
    {
        ID: 10,
        Name: "DesktopLED 21",
        Category: "Monitors"
    },
    {
        ID: 12,
        Name: "DesktopLCD 21",
        Category: "Monitors"
    },
    {
        ID: 13,
        Name: "DesktopLCD 19",
        Category: "Monitors"
    },
    {
        ID: 14,
        Name: "Projector Plus",
        Category: "Projectors"
    },
    {
        ID: 15,
        Name: "Projector PlusHD",
        Category: "Projectors"
    },
    {
        ID: 17,
        Name: "ExcelRemote IR",
        Category: "Automation"
    },
    {
        ID: 18,
        Name: "ExcelRemote BT",
        Category: "Automation"
    },
    {
        ID: 19,
        Name: "ExcelRemote IP",
        Category: "Automation"
    }];

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        List
    } from 'devextreme-react/list';
    import { products } from './products';

    function App() {
        return (
            <div className="App">
                <List
                    dataSource={products}
                    displayExpr="Name">
                </List>
            </div>
        );
    }

    export default App;

    <!-- tab: products.js -->
    export const products = [{
        ID: 1,
        Name: "HD Video Player",
        Category: "Video Players"
    },
    {
        ID: 3,
        Name: "SuperPlasma 50",
        Category: "Televisions"
    },
    {
        ID: 4,
        Name: "SuperLED 50",
        Category: "Televisions"
    },
    {
        ID: 5,
        Name: "SuperLED 42",
        Category: "Televisions"
    },
    {
        ID: 6,
        Name: "SuperLCD 55",
        Category: "Televisions"
    },
    {
        ID: 7,
        Name: "SuperLCD 42",
        Category: "Televisions"
    },
    {
        ID: 8,
        Name: "SuperPlasma 65",
        Category: "Televisions"
    },
    {
        ID: 9,
        Name: "SuperLCD 70",
        Category: "Televisions"
    },
    {
        ID: 10,
        Name: "DesktopLED 21",
        Category: "Monitors"
    },
    {
        ID: 12,
        Name: "DesktopLCD 21",
        Category: "Monitors"
    },
    {
        ID: 13,
        Name: "DesktopLCD 19",
        Category: "Monitors"
    },
    {
        ID: 14,
        Name: "Projector Plus",
        Category: "Projectors"
    },
    {
        ID: 15,
        Name: "Projector PlusHD",
        Category: "Projectors"
    },
    {
        ID: 17,
        Name: "ExcelRemote IR",
        Category: "Automation"
    },
    {
        ID: 18,
        Name: "ExcelRemote BT",
        Category: "Automation"
    },
    {
        ID: 19,
        Name: "ExcelRemote IP",
        Category: "Automation"
    }];



---
