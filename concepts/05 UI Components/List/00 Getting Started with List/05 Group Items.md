The **List** can display items as a two-level hierarchy: parent and child items. To group items, set the [grouped](/Documentation/ApiReference/UI_Components/dxList/Configuration/#grouped) property to **true** and ensure that data is structured as a hierarchical array of objects. Each object must contain a **key** property (parent) and an **items** property (child items). Refer to the following help topic for more information: [Grouping in the Data Source](/Documentation/Guide/UI_Components/List/Grouping/In_the_Data_Source/).

An alternative to the **key** + **items** structure is a flat array grouped using the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) component. Wrap your array in a [store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/) as shown below and use the DataSource's [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) property to specify a data field to group data by.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list').dxList({
            dataSource: new DevExpress.data.DataSource({
                store: products,
                group: 'Category',
            }),
            grouped: true,
        });    
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-list...
        [dataSource]="dataSource"
        [grouped]="true">
    </dx-list>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import DataSource from "devextreme/data/data_source";
    import { Product, ProductsService } from './products.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        dataSource: DataSource;
        products: Product[] = [];

        constructor(service: ProductsService) {
            this.products = service.getProducts();
            this.dataSource = new DataSource({
                store: this.products,
                group: "Category"
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxList...
                :data-source="dataSource"
                :grouped="true">
            </DxList>
        </div>
    </template>

    <script>
    // ...
    import { prdocuts } from './products';
    import DataSource from "devextreme/data/data_source";

    export default {
        // ...
        data() {
            return {
                dataSource: new DataSource({
                    store: products,
                    group: "Category"
                }),
            }
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    // ...    
    import { products } from './products';
    import DataSource from "devextreme/data/data_source";

    const dataSource = new DataSource({
        store: products,
        group: "Category"
    });

    function App() {
        return (
            <div className="App">
                <List...
                    dataSource={dataSource}
                    grouped={true}>
                </List>
            </div>
        );
    }

    export default App;


    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/GroupedList/"
}
