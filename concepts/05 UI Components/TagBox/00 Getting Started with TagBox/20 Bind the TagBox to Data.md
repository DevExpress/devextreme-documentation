#include tutorials-editors-data-binding

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#tagBox").dxTagBox({
            dataSource: products,
            valueExpr: "ID",
            displayExpr: "Name"
        });
    });

    <!-- tab: data.js -->
    const products = [{
        "ID": 1,
        "Name": "HD Video Player",
        "Category": "Video Players"
    }, {
        "ID": 2,
        "Name": "SuperHD Player",
        "Category": "Video Players"
    }, {
        "ID": 3,
        "Name": "SuperPlasma 50",
        "Category": "Televisions"
    }, {
        "ID": 4,
        "Name": "SuperLED 50",
        "Category": "Televisions"
    }, {
        "ID": 7,
        "Name": "SuperLCD 42",
        "Category": "Televisions"
    }, {
        "ID": 8,
        "Name": "SuperPlasma 65",
        "Category": "Televisions"
    }, {
        "ID": 10,
        "Name": "DesktopLED 21",
        "Category": "Monitors"
    }, {
        "ID": 11,
        "Name": "DesktopLED 19",
        "Category": "Monitors"
    }, {
        "ID": 12,
        "Name": "DesktopLCD 21",
        "Category": "Monitors"
    }, {
        "ID": 13,
        "Name": "DesktopLCD 19",
        "Category": "Monitors"
    }, {
        "ID": 14,
        "Name": "Projector Plus",
        "Category": "Projectors"
    }, {
        "ID": 15,
        "Name": "Projector PlusHD",
        "Category": "Projectors"
    }, {
        "ID": 16,
        "Name": "Projector PlusHT",
        "Category": "Projectors"
    }, {
        "ID": 17,
        "Name": "ExcelRemote IR",
        "Category": "Automation"
    }, {
        "ID": 18,
        "Name": "ExcelRemote BT",
        "Category": "Automation"
    }];


##### Angular

    <!-- tab: app.component.html -->
    <dx-tag-box
        [dataSource]="data"
        valueExpr="ID"
        displayExpr="Name">
    </dx-tag-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { AppService, Item } from './app.service';

    // ...
    export class AppComponent {
        data: Product[];

        constructor(service: AppService) {
            this.data = service.getProducts();
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Product {
        ID: number;
        Name: string;
        Category: string;
    }

    const products: Product[] = [{
        "ID": 1,
        "Name": "HD Video Player",
        "Category": "Video Players"
    }, {
        "ID": 2,
        "Name": "SuperHD Player",
        "Category": "Video Players"
    }, {
        "ID": 3,
        "Name": "SuperPlasma 50",
        "Category": "Televisions"
    }, {
        "ID": 4,
        "Name": "SuperLED 50",
        "Category": "Televisions"
    }, {
        "ID": 7,
        "Name": "SuperLCD 42",
        "Category": "Televisions"
    }, {
        "ID": 8,
        "Name": "SuperPlasma 65",
        "Category": "Televisions"
    }, {
        "ID": 10,
        "Name": "DesktopLED 21",
        "Category": "Monitors"
    }, {
        "ID": 11,
        "Name": "DesktopLED 19",
        "Category": "Monitors"
    }, {
        "ID": 12,
        "Name": "DesktopLCD 21",
        "Category": "Monitors"
    }, {
        "ID": 13,
        "Name": "DesktopLCD 19",
        "Category": "Monitors"
    }, {
        "ID": 14,
        "Name": "Projector Plus",
        "Category": "Projectors"
    }, {
        "ID": 15,
        "Name": "Projector PlusHD",
        "Category": "Projectors"
    }, {
        "ID": 16,
        "Name": "Projector PlusHT",
        "Category": "Projectors"
    }, {
        "ID": 17,
        "Name": "ExcelRemote IR",
        "Category": "Automation"
    }, {
        "ID": 18,
        "Name": "ExcelRemote BT",
        "Category": "Automation"
    }];

    @Injectable({
        providedIn: 'root'
    })

    export class AppService {
        getProducts(): Product[] {
            return products;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTagBox
            :data-source="products"
            value-expr="ID"
            display-expr="Name"
        />
    </template>

    <script>
    // ...
    import { products } from './data';

    export default {
        components: {
            DxSelectBox
        },
        data() {
            return {
                products
            }
        }
    }
    </script>

    <!-- tab: data.js -->
    export const products = [{
        "ID": 1,
        "Name": "HD Video Player",
        "Category": "Video Players"
    }, {
        "ID": 2,
        "Name": "SuperHD Player",
        "Category": "Video Players"
    }, {
        "ID": 3,
        "Name": "SuperPlasma 50",
        "Category": "Televisions"
    }, {
        "ID": 4,
        "Name": "SuperLED 50",
        "Category": "Televisions"
    }, {
        "ID": 7,
        "Name": "SuperLCD 42",
        "Category": "Televisions"
    }, {
        "ID": 8,
        "Name": "SuperPlasma 65",
        "Category": "Televisions"
    }, {
        "ID": 10,
        "Name": "DesktopLED 21",
        "Category": "Monitors"
    }, {
        "ID": 11,
        "Name": "DesktopLED 19",
        "Category": "Monitors"
    }, {
        "ID": 12,
        "Name": "DesktopLCD 21",
        "Category": "Monitors"
    }, {
        "ID": 13,
        "Name": "DesktopLCD 19",
        "Category": "Monitors"
    }, {
        "ID": 14,
        "Name": "Projector Plus",
        "Category": "Projectors"
    }, {
        "ID": 15,
        "Name": "Projector PlusHD",
        "Category": "Projectors"
    }, {
        "ID": 16,
        "Name": "Projector PlusHT",
        "Category": "Projectors"
    }, {
        "ID": 17,
        "Name": "ExcelRemote IR",
        "Category": "Automation"
    }, {
        "ID": 18,
        "Name": "ExcelRemote BT",
        "Category": "Automation"
    }];

##### React

    <!-- tab: App.js -->
    // ...
    import { products } from './data';

    function App() {
        return (
            <TagBox
                dataSource={products}
                valueExpr="ID"
                displayExpr="Name"
            />
        );
    }

    export default App;

    <!-- tab: data.js -->
    export const products = [{
        "ID": 1,
        "Name": "HD Video Player",
        "Category": "Video Players"
    }, {
        "ID": 2,
        "Name": "SuperHD Player",
        "Category": "Video Players"
    }, {
        "ID": 3,
        "Name": "SuperPlasma 50",
        "Category": "Televisions"
    }, {
        "ID": 4,
        "Name": "SuperLED 50",
        "Category": "Televisions"
    }, {
        "ID": 7,
        "Name": "SuperLCD 42",
        "Category": "Televisions"
    }, {
        "ID": 8,
        "Name": "SuperPlasma 65",
        "Category": "Televisions"
    }, {
        "ID": 10,
        "Name": "DesktopLED 21",
        "Category": "Monitors"
    }, {
        "ID": 11,
        "Name": "DesktopLED 19",
        "Category": "Monitors"
    }, {
        "ID": 12,
        "Name": "DesktopLCD 21",
        "Category": "Monitors"
    }, {
        "ID": 13,
        "Name": "DesktopLCD 19",
        "Category": "Monitors"
    }, {
        "ID": 14,
        "Name": "Projector Plus",
        "Category": "Projectors"
    }, {
        "ID": 15,
        "Name": "Projector PlusHD",
        "Category": "Projectors"
    }, {
        "ID": 16,
        "Name": "Projector PlusHT",
        "Category": "Projectors"
    }, {
        "ID": 17,
        "Name": "ExcelRemote IR",
        "Category": "Automation"
    }, {
        "ID": 18,
        "Name": "ExcelRemote BT",
        "Category": "Automation"
    }];

---

