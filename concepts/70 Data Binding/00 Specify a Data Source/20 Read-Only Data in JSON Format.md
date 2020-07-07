[note] This article describes how to bind a DevExtreme widget to JSON data in jQuery, Angular, Vue, and React. For information on data binding in ASP.NET MVC Controls, refer to <a href="https://docs.devexpress.com/AspNetCore/401021/devextreme-based-controls/concepts/bind-controls-to-data/read-only-data-in-json-format" target="_blank">docs.devexpress.com</a>.

To bind a widget to JSON data, pass the data URL to the widget's [dataSource](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource') option.

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
        jsonUrl: String = 'https://jsonplaceholder.typicode.com/posts'
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
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                jsonUrl: 'https://jsonplaceholder.typicode.com/posts'
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

    const jsonUrl = 'https://jsonplaceholder.typicode.com/posts';

    class App extends React.Component {
        render() {
            return (
                <DataGrid
                    dataSource={jsonUrl}
                />
            );
        }
    }
    export default App;

---

This configuration enables the widget to request data objects. To specify the key field, customize the request, or process response data, use a [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'). Implement its [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function and enable the raw [loadMode](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/loadMode.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#loadMode') (except in the **DataGrid**, **TreeList**, **PivotGrid**, and **Scheduler** widgets, in which this mode is already enabled).

The following code shows a **CustomStore** configuration in which the **load** function sends custom parameters with the request:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.CustomStore({
                key: "id",
                loadMode: "raw", // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
                load: function() {
                    var d = $.Deferred();
                    return $.getJSON("https://mydomain.com/MyDataService", { 
                            "param1": "value1",
                            "param2": "value2"
                        })
                        .done(function(result) {
                            // You can process the response here
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
                loadMode: 'raw', // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
                load: () => {
                    let params: HttpParams = new HttpParams();
                    params.set('param1', 'value1')
                          .set('param2', 'value2');
                    return this.http.get('https://mydomain.com/MyDataService', { 
                            params: params
                        })
                        .toPromise()
                        .then(result => {
                            // You can process the response here
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

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxList from 'devextreme-vue/list';
    import CustomStore from 'devextreme/data/custom_store';
    import 'whatwg-fetch';

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    const jsonDataSource = new CustomStore({
        key: 'id',
        loadMode: 'raw', // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
        load: () => {
            let params = '?param1=value1&param2=value2';
            return fetch('https://mydomain.com/MyDataService' + params)
                .then(handleErrors)
                .then(response => response.json())
                .then(result => {
                    // You can process the response here
                    return result;
                })
                .catch(() => { throw 'Network error' });
        }
    });

    export default {
        components: {
            DxList
        },
        data() {
            return {
                jsonDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import List from 'devextreme-react/list';
    import CustomStore from 'devextreme/data/custom_store';
    import 'whatwg-fetch';

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    const jsonDataSource = new CustomStore({
        key: 'id',
        loadMode: 'raw', // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
        load: () => {
            let params = '?param1=value1&param2=value2';
            return fetch('https://mydomain.com/MyDataService' + params)
                .then(handleErrors)
                .then(response => response.json())
                .then(result => {
                    // You can process the response here
                    return result;
                })
                .catch(() => { throw 'Network error' });
        }
    });

    class App extends React.Component {
        render() {
            return (
                <List
                    dataSource={jsonDataSource}
                />
            );
        }
    }
    export default App;

---
