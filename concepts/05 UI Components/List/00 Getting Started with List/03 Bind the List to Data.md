The **List** can load data from different data source types. To use a local array, assign it to the [dataSource](Documentation/ApiReference/UI_Components/dxList/Configuration/#dataSource) property and use the [displayExpr](/Documentation/ApiReference/UI_Components/dxList/Configuration/#displayExpr) property to specify the name of the data field whose values you would like to display. For information on data binding with other data source types, refer to the following articles:

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

    <!-- tab: data.js -->
    var products = [{
        ID: 1,
        Name: 'HD Video Player',
        Price: 330,
        Current_Inventory: 225,
        Backorder: 0,
        Manufacturing: 10,
        Category: 'Video Players',
        ImageSrc: 'images/products/1.png',
    },
    {
        ID: 3,
        Name: 'SuperPlasma 50',
        Price: 2400,
        Current_Inventory: 0,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Televisions',
        ImageSrc: 'images/products/3.png',
    },
    {
        ID: 4,
        Name: 'SuperLED 50',
        Price: 1600,
        Current_Inventory: 77,
        Backorder: 0,
        Manufacturing: 55,
        Category: 'Televisions',
        ImageSrc: 'images/products/4.png',
    },
    {
        ID: 5,
        Name: 'SuperLED 42',
        Price: 1450,
        Current_Inventory: 445,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Televisions',
        ImageSrc: 'images/products/5.png',
    },
    {
        ID: 6,
        Name: 'SuperLCD 55',
        Price: 1350,
        Current_Inventory: 345,
        Backorder: 0,
        Manufacturing: 5,
        Category: 'Televisions',
        ImageSrc: 'images/products/6.png',
    },
    {
        ID: 7,
        Name: 'SuperLCD 42',
        Price: 1200,
        Current_Inventory: 210,
        Backorder: 0,
        Manufacturing: 20,
        Category: 'Televisions',
        ImageSrc: 'images/products/7.png',
    },
    {
        ID: 8,
        Name: 'SuperPlasma 65',
        Price: 3500,
        Current_Inventory: 0,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Televisions',
        ImageSrc: 'images/products/8.png',
    },
    {
        ID: 9,
        Name: 'SuperLCD 70',
        Price: 4000,
        Current_Inventory: 95,
        Backorder: 0,
        Manufacturing: 5,
        Category: 'Televisions',
        ImageSrc: 'images/products/9.png',
    },
    {
        ID: 10,
        Name: 'DesktopLED 21',
        Price: 175,
        Current_Inventory: null,
        Backorder: 425,
        Manufacturing: 75,
        Category: 'Monitors',
        ImageSrc: 'images/products/10.png',
    },
    {
        ID: 12,
        Name: 'DesktopLCD 21',
        Price: 170,
        Current_Inventory: 210,
        Backorder: 0,
        Manufacturing: 60,
        Category: 'Monitors',
        ImageSrc: 'images/products/12.png',
    },
    {
        ID: 13,
        Name: 'DesktopLCD 19',
        Price: 160,
        Current_Inventory: 150,
        Backorder: 0,
        Manufacturing: 210,
        Category: 'Monitors',
        ImageSrc: 'images/products/13.png',
    },
    {
        ID: 14,
        Name: 'Projector Plus',
        Price: 550,
        Current_Inventory: null,
        Backorder: 55,
        Manufacturing: 10,
        Category: 'Projectors',
        ImageSrc: 'images/products/14.png',
    },
    {
        ID: 15,
        Name: 'Projector PlusHD',
        Price: 750,
        Current_Inventory: 110,
        Backorder: 0,
        Manufacturing: 90,
        Category: 'Projectors',
        ImageSrc: 'images/products/15.png',
    },
    {
        ID: 17,
        Name: 'ExcelRemote IR',
        Price: 150,
        Current_Inventory: 650,
        Backorder: 0,
        Manufacturing: 190,
        Category: 'Automation',
        ImageSrc: 'images/products/17.png',
    },
    {
        ID: 18,
        Name: 'ExcelRemote BT',
        Price: 180,
        Current_Inventory: 310,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Automation',
        ImageSrc: 'images/products/18.png',
    },
    {
        ID: 19,
        Name: 'ExcelRemote IP',
        Price: 200,
        Current_Inventory: 0,
        Backorder: 325,
        Manufacturing: 225,
        Category: 'Automation',
        ImageSrc: 'images/products/19.png',
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

    export interface Employee {
        ID: Number,
        Name: String,
        Price: Number,
        Current_Inventory: Number,
        Backorder: Number,
        Manufacturing: Number,
        Category: String,
        ImageSrc: String,
    }

    const products: Product[] = [{
        ID: 1,
        Name: 'HD Video Player',
        Price: 330,
        Current_Inventory: 225,
        Backorder: 0,
        Manufacturing: 10,
        Category: 'Video Players',
        ImageSrc: 'images/products/1.png',
    },
    {
        ID: 3,
        Name: 'SuperPlasma 50',
        Price: 2400,
        Current_Inventory: 0,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Televisions',
        ImageSrc: 'images/products/3.png',
    },
    {
        ID: 4,
        Name: 'SuperLED 50',
        Price: 1600,
        Current_Inventory: 77,
        Backorder: 0,
        Manufacturing: 55,
        Category: 'Televisions',
        ImageSrc: 'images/products/4.png',
    },
    {
        ID: 5,
        Name: 'SuperLED 42',
        Price: 1450,
        Current_Inventory: 445,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Televisions',
        ImageSrc: 'images/products/5.png',
    },
    {
        ID: 6,
        Name: 'SuperLCD 55',
        Price: 1350,
        Current_Inventory: 345,
        Backorder: 0,
        Manufacturing: 5,
        Category: 'Televisions',
        ImageSrc: 'images/products/6.png',
    },
    {
        ID: 7,
        Name: 'SuperLCD 42',
        Price: 1200,
        Current_Inventory: 210,
        Backorder: 0,
        Manufacturing: 20,
        Category: 'Televisions',
        ImageSrc: 'images/products/7.png',
    },
    {
        ID: 8,
        Name: 'SuperPlasma 65',
        Price: 3500,
        Current_Inventory: 0,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Televisions',
        ImageSrc: 'images/products/8.png',
    },
    {
        ID: 9,
        Name: 'SuperLCD 70',
        Price: 4000,
        Current_Inventory: 95,
        Backorder: 0,
        Manufacturing: 5,
        Category: 'Televisions',
        ImageSrc: 'images/products/9.png',
    },
    {
        ID: 10,
        Name: 'DesktopLED 21',
        Price: 175,
        Current_Inventory: null,
        Backorder: 425,
        Manufacturing: 75,
        Category: 'Monitors',
        ImageSrc: 'images/products/10.png',
    },
    {
        ID: 12,
        Name: 'DesktopLCD 21',
        Price: 170,
        Current_Inventory: 210,
        Backorder: 0,
        Manufacturing: 60,
        Category: 'Monitors',
        ImageSrc: 'images/products/12.png',
    },
    {
        ID: 13,
        Name: 'DesktopLCD 19',
        Price: 160,
        Current_Inventory: 150,
        Backorder: 0,
        Manufacturing: 210,
        Category: 'Monitors',
        ImageSrc: 'images/products/13.png',
    },
    {
        ID: 14,
        Name: 'Projector Plus',
        Price: 550,
        Current_Inventory: null,
        Backorder: 55,
        Manufacturing: 10,
        Category: 'Projectors',
        ImageSrc: 'images/products/14.png',
    },
    {
        ID: 15,
        Name: 'Projector PlusHD',
        Price: 750,
        Current_Inventory: 110,
        Backorder: 0,
        Manufacturing: 90,
        Category: 'Projectors',
        ImageSrc: 'images/products/15.png',
    },
    {
        ID: 17,
        Name: 'ExcelRemote IR',
        Price: 150,
        Current_Inventory: 650,
        Backorder: 0,
        Manufacturing: 190,
        Category: 'Automation',
        ImageSrc: 'images/products/17.png',
    },
    {
        ID: 18,
        Name: 'ExcelRemote BT',
        Price: 180,
        Current_Inventory: 310,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Automation',
        ImageSrc: 'images/products/18.png',
    },
    {
        ID: 19,
        Name: 'ExcelRemote IP',
        Price: 200,
        Current_Inventory: 0,
        Backorder: 325,
        Manufacturing: 225,
        Category: 'Automation',
        ImageSrc: 'images/products/19.png',
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
                :data-source="employees"
                display-expr="Name">
            </DxList>
        </div>
    </template>

    <script>
    // ...
    import service from './products.service';

    export default {
        // ...
        data() {
            return {
                products: service.getProducts(),
            }
        },
    }
    </script>

    <!-- tab: products.service.js -->
    const [products] = [{
        ID: 1,
        Name: 'HD Video Player',
        Price: 330,
        Current_Inventory: 225,
        Backorder: 0,
        Manufacturing: 10,
        Category: 'Video Players',
        ImageSrc: 'images/products/1.png',
    },
    {
        ID: 3,
        Name: 'SuperPlasma 50',
        Price: 2400,
        Current_Inventory: 0,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Televisions',
        ImageSrc: 'images/products/3.png',
    },
    {
        ID: 4,
        Name: 'SuperLED 50',
        Price: 1600,
        Current_Inventory: 77,
        Backorder: 0,
        Manufacturing: 55,
        Category: 'Televisions',
        ImageSrc: 'images/products/4.png',
    },
    {
        ID: 5,
        Name: 'SuperLED 42',
        Price: 1450,
        Current_Inventory: 445,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Televisions',
        ImageSrc: 'images/products/5.png',
    },
    {
        ID: 6,
        Name: 'SuperLCD 55',
        Price: 1350,
        Current_Inventory: 345,
        Backorder: 0,
        Manufacturing: 5,
        Category: 'Televisions',
        ImageSrc: 'images/products/6.png',
    },
    {
        ID: 7,
        Name: 'SuperLCD 42',
        Price: 1200,
        Current_Inventory: 210,
        Backorder: 0,
        Manufacturing: 20,
        Category: 'Televisions',
        ImageSrc: 'images/products/7.png',
    },
    {
        ID: 8,
        Name: 'SuperPlasma 65',
        Price: 3500,
        Current_Inventory: 0,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Televisions',
        ImageSrc: 'images/products/8.png',
    },
    {
        ID: 9,
        Name: 'SuperLCD 70',
        Price: 4000,
        Current_Inventory: 95,
        Backorder: 0,
        Manufacturing: 5,
        Category: 'Televisions',
        ImageSrc: 'images/products/9.png',
    },
    {
        ID: 10,
        Name: 'DesktopLED 21',
        Price: 175,
        Current_Inventory: null,
        Backorder: 425,
        Manufacturing: 75,
        Category: 'Monitors',
        ImageSrc: 'images/products/10.png',
    },
    {
        ID: 12,
        Name: 'DesktopLCD 21',
        Price: 170,
        Current_Inventory: 210,
        Backorder: 0,
        Manufacturing: 60,
        Category: 'Monitors',
        ImageSrc: 'images/products/12.png',
    },
    {
        ID: 13,
        Name: 'DesktopLCD 19',
        Price: 160,
        Current_Inventory: 150,
        Backorder: 0,
        Manufacturing: 210,
        Category: 'Monitors',
        ImageSrc: 'images/products/13.png',
    },
    {
        ID: 14,
        Name: 'Projector Plus',
        Price: 550,
        Current_Inventory: null,
        Backorder: 55,
        Manufacturing: 10,
        Category: 'Projectors',
        ImageSrc: 'images/products/14.png',
    },
    {
        ID: 15,
        Name: 'Projector PlusHD',
        Price: 750,
        Current_Inventory: 110,
        Backorder: 0,
        Manufacturing: 90,
        Category: 'Projectors',
        ImageSrc: 'images/products/15.png',
    },
    {
        ID: 17,
        Name: 'ExcelRemote IR',
        Price: 150,
        Current_Inventory: 650,
        Backorder: 0,
        Manufacturing: 190,
        Category: 'Automation',
        ImageSrc: 'images/products/17.png',
    },
    {
        ID: 18,
        Name: 'ExcelRemote BT',
        Price: 180,
        Current_Inventory: 310,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Automation',
        ImageSrc: 'images/products/18.png',
    },
    {
        ID: 19,
        Name: 'ExcelRemote IP',
        Price: 200,
        Current_Inventory: 0,
        Backorder: 325,
        Manufacturing: 225,
        Category: 'Automation',
        ImageSrc: 'images/products/19.png',
    }];

    export default {
        getProducts() {
            return products;
        }
    }

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
        Name: 'HD Video Player',
        Price: 330,
        Current_Inventory: 225,
        Backorder: 0,
        Manufacturing: 10,
        Category: 'Video Players',
        ImageSrc: 'images/products/1.png',
    },
    {
        ID: 3,
        Name: 'SuperPlasma 50',
        Price: 2400,
        Current_Inventory: 0,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Televisions',
        ImageSrc: 'images/products/3.png',
    },
    {
        ID: 4,
        Name: 'SuperLED 50',
        Price: 1600,
        Current_Inventory: 77,
        Backorder: 0,
        Manufacturing: 55,
        Category: 'Televisions',
        ImageSrc: 'images/products/4.png',
    },
    {
        ID: 5,
        Name: 'SuperLED 42',
        Price: 1450,
        Current_Inventory: 445,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Televisions',
        ImageSrc: 'images/products/5.png',
    },
    {
        ID: 6,
        Name: 'SuperLCD 55',
        Price: 1350,
        Current_Inventory: 345,
        Backorder: 0,
        Manufacturing: 5,
        Category: 'Televisions',
        ImageSrc: 'images/products/6.png',
    },
    {
        ID: 7,
        Name: 'SuperLCD 42',
        Price: 1200,
        Current_Inventory: 210,
        Backorder: 0,
        Manufacturing: 20,
        Category: 'Televisions',
        ImageSrc: 'images/products/7.png',
    },
    {
        ID: 8,
        Name: 'SuperPlasma 65',
        Price: 3500,
        Current_Inventory: 0,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Televisions',
        ImageSrc: 'images/products/8.png',
    },
    {
        ID: 9,
        Name: 'SuperLCD 70',
        Price: 4000,
        Current_Inventory: 95,
        Backorder: 0,
        Manufacturing: 5,
        Category: 'Televisions',
        ImageSrc: 'images/products/9.png',
    },
    {
        ID: 10,
        Name: 'DesktopLED 21',
        Price: 175,
        Current_Inventory: null,
        Backorder: 425,
        Manufacturing: 75,
        Category: 'Monitors',
        ImageSrc: 'images/products/10.png',
    },
    {
        ID: 12,
        Name: 'DesktopLCD 21',
        Price: 170,
        Current_Inventory: 210,
        Backorder: 0,
        Manufacturing: 60,
        Category: 'Monitors',
        ImageSrc: 'images/products/12.png',
    },
    {
        ID: 13,
        Name: 'DesktopLCD 19',
        Price: 160,
        Current_Inventory: 150,
        Backorder: 0,
        Manufacturing: 210,
        Category: 'Monitors',
        ImageSrc: 'images/products/13.png',
    },
    {
        ID: 14,
        Name: 'Projector Plus',
        Price: 550,
        Current_Inventory: null,
        Backorder: 55,
        Manufacturing: 10,
        Category: 'Projectors',
        ImageSrc: 'images/products/14.png',
    },
    {
        ID: 15,
        Name: 'Projector PlusHD',
        Price: 750,
        Current_Inventory: 110,
        Backorder: 0,
        Manufacturing: 90,
        Category: 'Projectors',
        ImageSrc: 'images/products/15.png',
    },
    {
        ID: 17,
        Name: 'ExcelRemote IR',
        Price: 150,
        Current_Inventory: 650,
        Backorder: 0,
        Manufacturing: 190,
        Category: 'Automation',
        ImageSrc: 'images/products/17.png',
    },
    {
        ID: 18,
        Name: 'ExcelRemote BT',
        Price: 180,
        Current_Inventory: 310,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Automation',
        ImageSrc: 'images/products/18.png',
    },
    {
        ID: 19,
        Name: 'ExcelRemote IP',
        Price: 200,
        Current_Inventory: 0,
        Backorder: 325,
        Manufacturing: 225,
        Category: 'Automation',
        ImageSrc: 'images/products/19.png',
    }];



---
