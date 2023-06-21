DevExtreme provides the following extensions for binding to Web API, PHP, and MongoDb services:

- <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a>
- <a href="https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md" target="_blank">DevExtreme-PHP-Data</a>
- <a href="https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md" target="_blank">devextreme-query-mongodb</a>

These extensions enable server-side filtering, sorting, grouping, and other data shaping operations according to the protocol that DevExtreme UI components use. Follow the links above for information on how to configure the extensions on the server.

To access the server from the client, configure the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') as described in the [Custom Data Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/') article or use the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">createStore</a> method. This method is part of DevExtreme.AspNet.Data, but it can also be used with the other extensions. The code below demonstrates how to use it.

[note] Configure **remoteOperations** in the [DataGrid](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/'), [TreeList](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/'), and [PivotGridDataSource](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/remoteOperations.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations') or **remoteFiltering** in the [Scheduler](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/remoteFiltering.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#remoteFiltering') to notify the UI components of the server's data shaping operations. Other DevExtreme UI components do not need this setting.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var serviceUrl = "https://mydomain.com/MyDataService";

        $("#dataGridContainer").dxDataGrid({
            dataSource: DevExpress.data.AspNet.createStore({
                key: "ID",
                loadUrl: serviceUrl + "/GetAction",
                insertUrl: serviceUrl + "/InsertAction",
                updateUrl: serviceUrl + "/UpdateAction",
                deleteUrl: serviceUrl + "/DeleteAction"
            }),
            remoteOperations: { groupPaging: true }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid
        [dataSource]="remoteDataSource">
        <dxo-remote-operations
            [groupPaging]="true">
        </dxo-remote-operations>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { createStore } from 'devextreme-aspnet-data-nojquery';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        remoteDataSource: any;

        constructor() {
            const serviceUrl: String = 'https://mydomain.com/MyDataService';
            this.remoteDataSource = createStore({
                key: 'ID',
                loadUrl: serviceUrl + '/GetAction',
                insertUrl: serviceUrl + '/InsertAction',
                updateUrl: serviceUrl + '/UpdateAction',
                deleteUrl: serviceUrl + '/DeleteAction'
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid
            :data-source="remoteDataSource">
            <DxRemoteOperations :group-paging="true" />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxRemoteOperations
    } from 'devextreme-vue/data-grid';

    import { createStore } from 'devextreme-aspnet-data-nojquery';

    const serviceUrl = 'https://mydomain.com/MyDataService';

    const remoteDataSource = createStore({
        key: 'ID',
        loadUrl: serviceUrl + '/GetAction',
        insertUrl: serviceUrl + '/InsertAction',
        updateUrl: serviceUrl + '/UpdateAction',
        deleteUrl: serviceUrl + '/DeleteAction'
    });

    export default {
        components: {
            DxDataGrid,
            DxRemoteOperations
        },
        data() {
            return {
                remoteDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        RemoteOperations
    } from 'devextreme-react/data-grid';

    import { createStore } from 'devextreme-aspnet-data-nojquery';

    const serviceUrl = 'https://mydomain.com/MyDataService';

    const remoteDataSource = createStore({
        key: 'ID',
        loadUrl: serviceUrl + '/GetAction',
        insertUrl: serviceUrl + '/InsertAction',
        updateUrl: serviceUrl + '/UpdateAction',
        deleteUrl: serviceUrl + '/DeleteAction'
    });

    class App extends React.Component {
        render() {
            return (
                <DataGrid
                    dataSource={remoteDataSource}>
                    <RemoteOperations groupPaging={true} />
                </DataGrid>
            );
        }
    }
    export default App;

---

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-pivotgrid-with-webapi"
}

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-datagrid-with-webapi"
}

#####See Also#####
- <a href="https://community.devexpress.com/blogs/oliver/archive/2017/03/24/devextreme-real-world-patterns.aspx" target="_blank">DevExtreme with MongoDB - Real World Patterns</a>
