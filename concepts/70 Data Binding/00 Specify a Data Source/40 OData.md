[note] This article describes how to bind a DevExtreme widget to an OData service in jQuery, Angular, Vue, and React. For information on data binding in ASP.NET MVC Controls, refer to <a href="https://docs.devexpress.com/AspNetCore/401022/devextreme-based-controls/concepts/bind-controls-to-data/odata" target="_blank">docs.devexpress.com</a>.

To access an OData service, implement the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'): specify the [url](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/url.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#url') of an OData entity collection, the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key') property, and the OData [version](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/version.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#version'). You can also handle data-related events:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var productsStore = new DevExpress.data.ODataStore({
            url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
            key: "Product_ID",
            version: 3,
            onLoaded: function() {
                // Event handling commands go here
            }
        });

        $("#dataGridContainer").dxDataGrid({
            dataSource: productsStore
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import ODataStore from 'devextreme/data/odata/store';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        productsStore: ODataStore;

        constructor() {
            this.productsStore = new ODataStore({
                url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
                key: 'Product_ID',
                version: 3,
                onLoaded: () => {
                    // Event handling commands go here
                }
            });
        }
    }

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
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.html -->
    <dx-data-grid
        [dataSource]="productsStore">
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid
            :data-source="productsStore"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';
    import ODataStore from 'devextreme/data/odata/store';

    const productsStore = new ODataStore({
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
        key: 'Product_ID',
        version: 3,
        onLoaded: () => {
            // Event handling commands go here
        }
    });

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                productsStore
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';
    import ODataStore from 'devextreme/data/odata/store';

    const productsStore = new ODataStore({
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
        key: 'Product_ID',
        version: 3,
        onLoaded: () => {
            // Event handling commands go here
        }
    });

    class App extends React.Component {
        render() {
            return (
                <DataGrid
                    dataSource={productsStore}
                />
            );
        }
    }
    export default App;

---

Data from the **ODataStore** can be shaped (filtered, sorted, grouped, etc.) in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

The following example declares an **ODataStore**, wraps it in a **DataSource**, and binds the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview) widget to this **DataSource**:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var productsStore = new DevExpress.data.ODataStore({
            // ...
        });

        var productsDataSource = new DevExpress.data.DataSource({
            store: productsStore,
            sort: "Product_Name"
        });

        $("#dataGridContainer").dxDataGrid({
            dataSource: productsDataSource
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import ODataStore from 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        productsDataSource: DataSource;

        constructor() {
            const productsStore = new ODataStore({
                // ...
            });

            this.productsDataSource = new DataSource({
                store: productsStore,
                sort: 'Product_Name'
            });
        }
    }

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
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.html -->
    <dx-data-grid
        [dataSource]="productsDataSource">
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid
            :data-source="productsDataSource"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';
    import ODataStore from 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';

    const productsStore = new ODataStore({
        // ...
    });

    const productsDataSource = new DataSource({
        store: productsStore,
        sort: 'Product_Name'
    });

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                productsDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';
    import ODataStore from 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';

    const productsStore = new ODataStore({
        // ...
    });

    const productsDataSource = new DataSource({
        store: productsStore,
        sort: 'Product_Name'
    });

    class App extends React.Component {
        render() {
            return (
                <DataGrid
                    dataSource={productsDataSource}
                />
            );
        }
    }
    export default App;

---
