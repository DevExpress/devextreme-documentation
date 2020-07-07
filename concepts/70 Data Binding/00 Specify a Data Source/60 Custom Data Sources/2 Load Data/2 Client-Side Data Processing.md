To process data on the client, load all data from the server in the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function. You should also switch the **CustomStore** to the raw [loadMode](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/loadMode.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#loadMode') in all widgets except **DataGrid**, **TreeList**, **PivotGrid**, and **Scheduler**, in which this mode is already enabled:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.CustomStore({
                key: "ID",
                loadMode: "raw", // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
                load: function() {
                    return $.getJSON("https://mydomain.com/MyDataService")
                        .fail(function() { throw "Data loading error" });
                }
            })
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-list
        [dataSource]="customDataSource">
    </dx-list>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    import CustomStore from 'devextreme/data/custom_store';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        customDataSource: CustomStore;

        constructor(private http: HttpClient) {
            this.customDataSource = new CustomStore({
                key: 'ID',
                loadMode: 'raw', // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
                load: () => {
                    return this.http.get('https://mydomain.com/MyDataService')
                        .toPromise()
                        .catch(() => { throw 'Data loading error' });
                }
            });
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { AppComponent } from './app.component';

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList
            :data-source="customDataSource"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxList from 'devextreme-vue/list';
    import 'whatwg-fetch';

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    const customDataSource = new CustomStore({
        key: 'ID',
        loadMode: 'raw', // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
        load: () => {
            return fetch('https://mydomain.com/MyDataService')
                .then(handleErrors)
                .then(response => response.json());
                .catch(() => { throw 'Network error' });
        }
    });

    export default {
        components: {
            DxList
        },
        data() {
            return {
                customDataSource
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
    import 'whatwg-fetch';

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    const customDataSource = new CustomStore({
        key: 'ID',
        loadMode: 'raw', // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
        load: () => {
            return fetch('https://mydomain.com/MyDataService')
                .then(handleErrors)
                .then(response => response.json());
                .catch(() => { throw 'Network error' });
        }
    });

    class App extends React.Component {
        render() {
            return (
                <List
                    dataSource={customDataSource}
                />
            );
        }
    }
    export default App;

---

[note] For performance reasons, we do not recommend that large datasets are processed on the client.