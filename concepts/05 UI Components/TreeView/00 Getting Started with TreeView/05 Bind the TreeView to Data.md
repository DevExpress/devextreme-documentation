To bind the TreeView to a local array, use the [dataSource](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataSource') property. Refer to the articles listed below for instructions on how to do this for other storage types:

- [Read-Only Data in JSON Format](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/20%20Read-Only%20Data%20in%20JSON%20Format.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/')
- [Web API, PHP, MongoDB](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/')
- [OData](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/40%20OData.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/')
- [Custom Data Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')

The TreeView supports plain and hierarchical data structures. To use plain data, set the [dataStructure](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataStructure') property to *"plain"*. In this case, each data object should contain the [id](/api-reference/_hidden/dxTreeViewItem/id.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#id'), [text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#text'), and [parentId](/api-reference/_hidden/dxTreeViewItem/parentId.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#parentId') fields. If objects use custom field names, use the [keyExpr](/api-reference/10%20UI%20Components/HierarchicalCollectionWidget/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#keyExpr'), [displayExpr](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#displayExpr'), and [parentIdExpr](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/parentIdExpr.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#parentIdExpr') properties to specify them:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeView").dxTreeView({
            // ...
            dataSource: products,
            dataStructure: "plain",
            keyExpr: "ID",
            displayExpr: "name",
            parentIdExpr: "categoryId",
        });
    });

    <!-- tab: products.js -->
    const IMAGE_URL = "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/";

    const products = [
        {
            ID: "1",
            name: "Stores"
        }, {
            ID: "1_1",
            categoryId: "1",
            name: "Super Mart of the West"
        }, {
            ID: "1_1_1",
            categoryId: "1_1",
            name: "Video Players"
        }, {
            ID: "1_1_1_1",
            categoryId: "1_1_1",
            name: "HD Video Player",
            image: IMAGE_URL + "1.png",
            price: 220
        }, {
            ID: "1_1_1_2",
            categoryId: "1_1_1",
            name: "SuperHD Video Player",
            image: IMAGE_URL + "2.png",
            price: 270
        }, {
            ID: "1_1_2",
            categoryId: "1_1",
            name: "Televisions"
        }, {
            ID: "1_1_2_1",
            categoryId: "1_1_2",
            name: "SuperLCD 42",
            image: IMAGE_URL + "7.png",
            price: 1200
        }, {
            ID: "1_1_2_2",
            categoryId: "1_1_2",
            name: "SuperLED 42",
            image: IMAGE_URL + "5.png",
            price: 1450
        }, {
            ID: "1_1_2_3",
            categoryId: "1_1_2",
            name: "SuperLED 50",
            image: IMAGE_URL + "4.png",
            price: 1600
        }, {
            ID: "1_1_2_4",
            categoryId: "1_1_2",
            name: "SuperLCD 55",
            image: IMAGE_URL + "6.png",
            price: 1750
        }, {
            ID: "1_1_2_5",
            categoryId: "1_1_2",
            name: "SuperLCD 70",
            image: IMAGE_URL + "9.png",
            price: 4000
        }, {
            ID: "1_1_3",
            categoryId: "1_1",
            name: "Monitors"
        }, {
            ID: "1_1_3_1",
            categoryId: "1_1_3",
            name: "19\"",
        }, {
            ID: "1_1_3_1_1",
            categoryId: "1_1_3_1",
            name: "DesktopLCD 19",
            image: IMAGE_URL + "10.png",
            price: 160
        }, {
            ID: "1_1_4",
            categoryId: "1_1",
            name: "Projectors"
        }, {
            ID: "1_1_4_1",
            categoryId: "1_1_4",
            name: "Projector Plus",
            image: IMAGE_URL + "14.png",
            price: 550
        }, {
            ID: "1_1_4_2",
            categoryId: "1_1_4",
            name: "Projector PlusHD",
            image: IMAGE_URL + "15.png",
            price: 750
        }
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-view ...
        [dataSource]="products"
        dataStructure="plain"
        keyExpr="ID"
        displayExpr="name"
        parentIdExpr="categoryId">
    </dx-tree-view>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Product, ProductsService } from './products.service';

    #include angular-component-decorator
    export class AppComponent {
        products: Product[];

        constructor(service: ProductsService) {
            this.products = service.getProducts();
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Product {
        ID: string;
        name: string;
        categoryId?: string;
        image?: string;
        price?: number;
    }

    const IMAGE_URL = "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/";

    const products: Product[] = [
        {
            ID: "1",
            name: "Stores"
        }, {
            ID: "1_1",
            categoryId: "1",
            name: "Super Mart of the West"
        }, {
            ID: "1_1_1",
            categoryId: "1_1",
            name: "Video Players"
        }, {
            ID: "1_1_1_1",
            categoryId: "1_1_1",
            name: "HD Video Player",
            image: IMAGE_URL + "1.png",
            price: 220
        }, {
            ID: "1_1_1_2",
            categoryId: "1_1_1",
            name: "SuperHD Video Player",
            image: IMAGE_URL + "2.png",
            price: 270
        }, {
            ID: "1_1_2",
            categoryId: "1_1",
            name: "Televisions"
        }, {
            ID: "1_1_2_1",
            categoryId: "1_1_2",
            name: "SuperLCD 42",
            image: IMAGE_URL + "7.png",
            price: 1200
        }, {
            ID: "1_1_2_2",
            categoryId: "1_1_2",
            name: "SuperLED 42",
            image: IMAGE_URL + "5.png",
            price: 1450
        }, {
            ID: "1_1_2_3",
            categoryId: "1_1_2",
            name: "SuperLED 50",
            image: IMAGE_URL + "4.png",
            price: 1600
        }, {
            ID: "1_1_2_4",
            categoryId: "1_1_2",
            name: "SuperLCD 55",
            image: IMAGE_URL + "6.png",
            price: 1750
        }, {
            ID: "1_1_2_5",
            categoryId: "1_1_2",
            name: "SuperLCD 70",
            image: IMAGE_URL + "9.png",
            price: 4000
        }, {
            ID: "1_1_3",
            categoryId: "1_1",
            name: "Monitors"
        }, {
            ID: "1_1_3_1",
            categoryId: "1_1_3",
            name: "19\"",
        }, {
            ID: "1_1_3_1_1",
            categoryId: "1_1_3_1",
            name: "DesktopLCD 19",
            image: IMAGE_URL + "10.png",
            price: 160
        }, {
            ID: "1_1_4",
            categoryId: "1_1",
            name: "Projectors"
        }, {
            ID: "1_1_4_1",
            categoryId: "1_1_4",
            name: "Projector Plus",
            image: IMAGE_URL + "14.png",
            price: 550
        }, {
            ID: "1_1_4_2",
            categoryId: "1_1_4",
            name: "Projector PlusHD",
            image: IMAGE_URL + "15.png",
            price: 750
        }
    ];

    @Injectable({
        providedIn: 'root'
    })
    export class ProductsService {
        getProducts(): Product[] {
            return products;
        }
    }


##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeView ...
            :data-source="products"
            data-structure="plain"
            key-expr="ID"
            display-expr="name"
            parent-id-expr="categoryId"
        >
        </DxTreeView>
    </template>

    <script>
    // ...
    import products from './products';

    export default {
        // ...
        data() {
            return {
                products: products,
            }
        },
    }
    </script>

    <!-- tab: products.js -->
    const IMAGE_URL = "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/";

    const products = [{
        ID: "1",
        name: "Stores"
    }, {
        ID: "1_1",
        categoryId: "1",
        name: "Super Mart of the West"
    }, {
        ID: "1_1_1",
        categoryId: "1_1",
        name: "Video Players"
    }, {
        ID: "1_1_1_1",
        categoryId: "1_1_1",
        name: "HD Video Player",
        image: IMAGE_URL + "1.png",
        price: 220
    }, {
        ID: "1_1_1_2",
        categoryId: "1_1_1",
        name: "SuperHD Video Player",
        image: IMAGE_URL + "2.png",
        price: 270
    }, {
        ID: "1_1_2",
        categoryId: "1_1",
        name: "Televisions"
    }, {
        ID: "1_1_2_1",
        categoryId: "1_1_2",
        name: "SuperLCD 42",
        image: IMAGE_URL + "7.png",
        price: 1200
    }, {
        ID: "1_1_2_2",
        categoryId: "1_1_2",
        name: "SuperLED 42",
        image: IMAGE_URL + "5.png",
        price: 1450
    }, {
        ID: "1_1_2_3",
        categoryId: "1_1_2",
        name: "SuperLED 50",
        image: IMAGE_URL + "4.png",
        price: 1600
    }, {
        ID: "1_1_2_4",
        categoryId: "1_1_2",
        name: "SuperLCD 55",
        image: IMAGE_URL + "6.png",
        price: 1750
    }, {
        ID: "1_1_2_5",
        categoryId: "1_1_2",
        name: "SuperLCD 70",
        image: IMAGE_URL + "9.png",
        price: 4000
    }, {
        ID: "1_1_3",
        categoryId: "1_1",
        name: "Monitors"
    }, {
        ID: "1_1_3_1",
        categoryId: "1_1_3",
        name: "19\"",
    }, {
        ID: "1_1_3_1_1",
        categoryId: "1_1_3_1",
        name: "DesktopLCD 19",
        image: IMAGE_URL + "10.png",
        price: 160
    }, {
        ID: "1_1_4",
        categoryId: "1_1",
        name: "Projectors"
    }, {
        ID: "1_1_4_1",
        categoryId: "1_1_4",
        name: "Projector Plus",
        image: IMAGE_URL + "14.png",
        price: 550
    }, {
        ID: "1_1_4_2",
        categoryId: "1_1_4",
        name: "Projector PlusHD",
        image: IMAGE_URL + "15.png",
        price: 750
    }];

    export default products;



##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeView from 'devextreme-react/tree-view';
    import products from './products';

    function App() {
        return (
            <TreeView ...
                dataSource={products}
                dataStructure="plain"
                keyExpr="ID"
                displayExpr="name"
                parentIdExpr="categoryId"
            />
        );
    }

    export default App;

    <!-- tab: products.js -->
    const IMAGE_URL = "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/";

    const products = [
        {
            ID: "1",
            name: "Stores"
        }, {
            ID: "1_1",
            categoryId: "1",
            name: "Super Mart of the West"
        }, {
            ID: "1_1_1",
            categoryId: "1_1",
            name: "Video Players"
        }, {
            ID: "1_1_1_1",
            categoryId: "1_1_1",
            name: "HD Video Player",
            image: IMAGE_URL + "1.png",
            price: 220
        }, {
            ID: "1_1_1_2",
            categoryId: "1_1_1",
            name: "SuperHD Video Player",
            image: IMAGE_URL + "2.png",
            price: 270
        }, {
            ID: "1_1_2",
            categoryId: "1_1",
            name: "Televisions"
        }, {
            ID: "1_1_2_1",
            categoryId: "1_1_2",
            name: "SuperLCD 42",
            image: IMAGE_URL + "7.png",
            price: 1200
        }, {
            ID: "1_1_2_2",
            categoryId: "1_1_2",
            name: "SuperLED 42",
            image: IMAGE_URL + "5.png",
            price: 1450
        }, {
            ID: "1_1_2_3",
            categoryId: "1_1_2",
            name: "SuperLED 50",
            image: IMAGE_URL + "4.png",
            price: 1600
        }, {
            ID: "1_1_2_4",
            categoryId: "1_1_2",
            name: "SuperLCD 55",
            image: IMAGE_URL + "6.png",
            price: 1750
        }, {
            ID: "1_1_2_5",
            categoryId: "1_1_2",
            name: "SuperLCD 70",
            image: IMAGE_URL + "9.png",
            price: 4000
        }, {
            ID: "1_1_3",
            categoryId: "1_1",
            name: "Monitors"
        }, {
            ID: "1_1_3_1",
            categoryId: "1_1_3",
            name: "19\"",
        }, {
            ID: "1_1_3_1_1",
            categoryId: "1_1_3_1",
            name: "DesktopLCD 19",
            image: IMAGE_URL + "10.png",
            price: 160
        }, {
            ID: "1_1_4",
            categoryId: "1_1",
            name: "Projectors"
        }, {
            ID: "1_1_4_1",
            categoryId: "1_1_4",
            name: "Projector Plus",
            image: IMAGE_URL + "14.png",
            price: 550
        }, {
            ID: "1_1_4_2",
            categoryId: "1_1_4",
            name: "Projector PlusHD",
            image: IMAGE_URL + "15.png",
            price: 750
        }
    ];

    export default products;

---

If your dataset has a hierarchical structure, refer to the following demo for details: [Hierarchical Data Structure](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/HierarchicalDataStructure/).
