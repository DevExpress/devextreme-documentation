This article describes how to bind a DevExtreme widget to JSON data in jQuery, Angular, Vue, and React. For information on data binding in ASP.NET MVC Controls, refer to <a href="https://docs.devexpress.com/AspNetCore/401021/devextreme-based-controls/concepts/bind-controls-to-data/read-only-data-in-json-format" target="_blank">docs.devexpress.com</a>.

#include data-binding-specify-data-fields-note

To bind a widget to JSON data, pass the data URL to the widget's [dataSource](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource') option. We recommend that you also use the [keyExpr](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#keyExpr') option (if the widget has it) to specify the key field.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            dataSource: "https://jsonplaceholder.typicode.com/posts",
            keyExpr: "id"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid
        [dataSource]="jsonUrl"
        keyExpr="id">
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
        <dx-data-grid
            :data-source="jsonUrl"
            key-expr="id"
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
                    keyExpr="id"
                />
            );
        }
    }
    export default App;

---

This configuration is sufficient for the widget to make a request for data objects. If you need to customize the request or process response data, use a [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'). It [requires thorough configuration](/concepts/Common/25%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Any%20Other%20Data%20Source.md '/Documentation/Guide/Common/Data_Binding/Specify_a_Data_Source/#Any_Other_Data_Source') if data is shaped on the server. However, to customize a GET request, you only need to implement the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function and enable the raw [loadMode](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/loadMode.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#loadMode') (except in the **DataGrid**, **TreeList**, **PivotGrid**, and **Scheduler** widgets).

This configuration enables the widget to request data objects. To customize the request or process response data, use a [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'). Implement its [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function and enable the raw [loadMode](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/loadMode.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#loadMode') (except in the **DataGrid**, **TreeList**, **PivotGrid**, and **Scheduler** widgets).

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
        <dx-list
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
