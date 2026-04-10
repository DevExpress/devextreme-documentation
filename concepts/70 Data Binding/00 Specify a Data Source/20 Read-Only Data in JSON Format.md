To bind a UI component to JSON data, pass the data URL to the UI component's [dataSource](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource') property.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            dataSource: "https://jsonplaceholder.typicode.com/posts"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid
        [dataSource]="jsonUrl">
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        jsonUrl: string = 'https://jsonplaceholder.typicode.com/posts'
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid
            :data-source="jsonUrl"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { DxDataGrid } from 'devextreme-vue/data-grid';

    const jsonUrl: string = 'https://jsonplaceholder.typicode.com/posts';
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';

    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { DataGrid } from 'devextreme-react/data-grid';

    const jsonUrl: string = 'https://jsonplaceholder.typicode.com/posts';

    function App {
        return (
            <DataGrid
                dataSource={jsonUrl}
            />
        );
    }
    export default App;

---

[note] DevExtreme components do not support data shaping operations, such as filtering, when you assign JSON data directly to **dataSource**.

To shape data, configure a [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'). Specify the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') method and set [loadMode](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/loadMode.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#loadMode') to *"raw"* (default in DataGrid, TreeList, PivotGrid, and Scheduler).

The following code configures **CustomStore**.**load** to include custom parameters in each request:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.CustomStore({
                key: "id",
                loadMode: "raw", // Default in DataGrid, TreeList, PivotGrid, and Scheduler
                load: function() {
                    var d = $.Deferred();
                    return $.getJSON("https://mydomain.com/MyDataService", { 
                        "param1": "value1",
                        "param2": "value2"
                    })
                    .done(function(result) {
                        // Process the response here
                        d.resolve(result);
                    })
                    .fail(function() {
                        throw "Data loading error";
                    });
                }
            })
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient, HttpParams } from '@angular/common/http';
    import { lastValueFrom } from 'rxjs';

    import CustomStore from 'devextreme/data/custom_store';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        jsonDataSource: CustomStore;
        
        constructor(private http: HttpClient) {
            this.jsonDataSource = new CustomStore({
                key: 'id',
                loadMode: 'raw', // Default in DataGrid, TreeList, PivotGrid, and Scheduler
                load: () => {
                    let params: HttpParams = new HttpParams();
                    params.set('param1', 'value1')
                        .set('param2', 'value2');
                    return lastValueFrom(this.http.get('https://mydomain.com/MyDataService', { 
                        params: params
                    }))
                    .then(result => {
                        // Process the response here
                        return result;
                    })
                    .catch(() => { throw 'Data loading error' });
                }
            });
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { HttpClientModule } from '@angular/common/http';

    import { DxListModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            DxListModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.html -->
    <dx-list
        [dataSource]="jsonDataSource">
    </dx-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList
            :data-source="jsonDataSource"
        />
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { DxList } from 'devextreme-vue/list';
    import { CustomStore } from 'devextreme/data/custom_store';
    import 'whatwg-fetch';

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    const jsonDataSource = new CustomStore({
        key: 'id',
        loadMode: 'raw', // Default in DataGrid, TreeList, PivotGrid, and Scheduler
        load: () => {
            let params = '?param1=value1&param2=value2';
            return fetch('https://mydomain.com/MyDataService' + params)
                .then(handleErrors)
                .then(response => response.json())
                .then(result => {
                    // Process the response here
                    return result;
                })
                .catch(() => { throw 'Network error' });
        }
    });
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { List } from 'devextreme-react/list';
    import { CustomStore } from 'devextreme/data/custom_store';
    import 'whatwg-fetch';

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    const jsonDataSource = new CustomStore({
        key: 'id',
        loadMode: 'raw', // Default in DataGrid, TreeList, PivotGrid, and Scheduler
        load: () => {
            let params = '?param1=value1&param2=value2';
            return fetch('https://mydomain.com/MyDataService' + params)
                .then(handleErrors)
                .then(response => response.json())
                .then(result => {
                    // Process the response here
                    return result;
                })
                .catch(() => { throw 'Network error' });
        }
    });

    function App() {
        return (
            <List
                dataSource={jsonDataSource}
            />
        );
    }
    export default App;

---
