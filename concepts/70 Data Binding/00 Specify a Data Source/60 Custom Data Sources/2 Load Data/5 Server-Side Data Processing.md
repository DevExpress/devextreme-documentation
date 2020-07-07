The communication between the **CustomStore** and the server is organized as follows:

- The **CustomStore** sends [data processing settings](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/') to the server.
- The server processes data according to these settings and sends the processed dataset back.

Each setting carries information about data operation (sorting, filtering, etc.) and is present only if this operation is enabled or declared as remote. Configure **remoteOperations** in the [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/'), [TreeList](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/'), and [PivotGridDataSource](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/remoteOperations.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations') widgets or **remoteFiltering** in the [Scheduler](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/remoteFiltering.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#remoteFiltering') widget to declare remote operations. For other widgets, use [DataSource options](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/') to enable operations.

The following example shows a **CustomStore** that sends data processing settings to the server. The settings are passed as the **loadOptions** parameter to the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') function. **loadOptions** may contain empty settings if an operation is disabled or local. In this example, the `forEach` loop filters out such settings:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var customDataSource = new DevExpress.data.CustomStore({
            key: "ID",
            load: function(loadOptions) {
                var d = $.Deferred();
                var params = {};

                [
                    "filter",
                    "group", 
                    "groupSummary",
                    "parentIds",
                    "requireGroupCount",
                    "requireTotalCount",
                    "searchExpr",
                    "searchOperation",
                    "searchValue",
                    "select",
                    "sort",
                    "skip",     
                    "take",
                    "totalSummary", 
                    "userData"
                ].forEach(function(i) {
                    if(i in loadOptions && isNotEmpty(loadOptions[i])) {
                        params[i] = JSON.stringify(loadOptions[i]);
                    }
                });

                $.getJSON("https://mydomain.com/MyDataService", params)
                    .done(function(response) {
                        d.resolve(response.data, { 
                            totalCount: response.totalCount,
                            summary: response.summary,
                            groupCount: response.groupCount
                        });
                    })
                    .fail(function() { throw "Data loading error" });
                return d.promise();
            },
            // Needed to process selected value(s) in the SelectBox, Lookup, Autocomplete, and DropDownBox
            // byKey: function(key) {
            //     var d = new $.Deferred();
            //     $.get('https://mydomain.com/MyDataService?id=' + key)
            //         .done(function(result) {
            //             d.resolve(result);
            //         });
            //     return d.promise();
            // }
        });

        $("#dataGridContainer").dxDataGrid({
            dataSource: customDataSource,
            remoteOperations: { groupPaging: true }
        });
    });

    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }

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
        customDataSource: CustomStore;
        constructor(private http: HttpClient) {
            const isNotEmpty = (value) => value !== undefined && value !== null && value !== '';
            
            this.customDataSource = new CustomStore({
                key: 'ID',
                load: (loadOptions) => {
                    let params: HttpParams = new HttpParams();

                    [
                        'filter',
                        'group', 
                        'groupSummary',
                        'parentIds',
                        'requireGroupCount',
                        'requireTotalCount',
                        'searchExpr',
                        'searchOperation',
                        'searchValue',
                        'select',
                        'sort',
                        'skip',     
                        'take',
                        'totalSummary', 
                        'userData'
                    ].forEach(function(i) {
                        if(i in loadOptions && isNotEmpty(loadOptions[i])) {
                            params[i] = JSON.stringify(loadOptions[i]);
                        }
                    });

                    return this.http.get('https://mydomain.com/MyDataService', { params: params })
                        .toPromise()
                        .then(response => {
                            return {
                                data: response.data,
                                totalCount: response.totalCount,
                                summary: response.summary,
                                groupCount: response.groupCount
                            };
                        })
                        .catch(() => { throw 'Data loading error' });
                },
                // Needed to process selected value(s) in the SelectBox, Lookup, Autocomplete, and DropDownBox
                // byKey: (key) => {
                //     return this.http.get('https://mydomain.com/MyDataService?id=' + key)
                //         .toPromise();
                // }
            });
        }
    }

     <!-- tab: app.component.html -->
    <dx-data-grid
        [dataSource]="customDataSource">
        <dxo-remote-operations
            [groupPaging]="true">
        </dxo-remote-operations>
    </dx-data-grid>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { HttpClientModule } from '@angular/common/http';

    import { DxDataGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
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
            :data-source="customDataSource">
            <DxRemoteOperations :group-paging="true" />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxRemoteOperations
    } from 'devextreme-vue/data-grid';

    import CustomStore from 'devextreme/data/custom_store';
    import 'whatwg-fetch';

    const isNotEmpty = (value) => value !== undefined && value !== null && value !== '';

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    const customDataSource = new CustomStore({
        key: 'ID',
        load: (loadOptions) => {
            let params = '?';

            [
                'filter',
                'group', 
                'groupSummary',
                'parentIds',
                'requireGroupCount',
                'requireTotalCount',
                'searchExpr',
                'searchOperation',
                'searchValue',
                'select',
                'sort',
                'skip',     
                'take',
                'totalSummary', 
                'userData'
            ].forEach(function(i) {
                if(i in loadOptions && isNotEmpty(loadOptions[i])) {
                    params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                }
            });
            params = params.slice(0, -1);

            return fetch(`https://mydomain.com/MyDataService${params}`)
                .then(handleErrors)
                .then(response => response.json())
                .then(response => {
                    return {
                        data: response.data,
                        totalCount: response.totalCount,
                        summary: response.summary,
                        groupCount: response.groupCount
                    };
                })
                .catch(() => { throw 'Network error' });
        },
        // Needed to process selected value(s) in the SelectBox, Lookup, Autocomplete, and DropDownBox
        // byKey: (key) => {
        //     return fetch(`https://mydomain.com/MyDataService?id=${key}`)
        //         .then(handleErrors);
        // }
    });

    export default {
        components: {
            DxDataGrid,
            DxRemoteOperations
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

    import DataGrid, {
        RemoteOperations 
    } from 'devextreme-react/data-grid';

    import CustomStore from 'devextreme/data/custom_store';
    import 'whatwg-fetch';

    const isNotEmpty = (value) => value !== undefined && value !== null && value !== '';

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    const customDataSource = new CustomStore({
        key: 'ID',
        load: (loadOptions) => {
            let params = '?';

            [
                'filter',
                'group', 
                'groupSummary',
                'parentIds',
                'requireGroupCount',
                'requireTotalCount',
                'searchExpr',
                'searchOperation',
                'searchValue',
                'select',
                'sort',
                'skip',     
                'take',
                'totalSummary', 
                'userData'
            ].forEach(function(i) {
                if(i in loadOptions && isNotEmpty(loadOptions[i])) {
                    params += `${i}=${JSON.stringify(loadOptions[i])}&`;
                }
            });
            params = params.slice(0, -1);

            return fetch(`https://mydomain.com/MyDataService${params}`)
                .then(handleErrors)
                .then(response => response.json())
                .then(response => {
                    return {
                        data: response.data,
                        totalCount: response.totalCount,
                        summary: response.summary,
                        groupCount: response.groupCount
                    };
                })
                .catch(() => { throw 'Network error' });
        },
        // Needed to process selected value(s) in the SelectBox, Lookup, Autocomplete, and DropDownBox
        // byKey: (key) => {
        //     return fetch(`https://mydomain.com/MyDataService?id=${key}`)
        //         .then(handleErrors);
        // }
    });

    class App extends React.Component {
        render() {
            return (
                <DataGrid
                    dataSource={customDataSource}>
                    <RemoteOperations groupPaging={true}>
                </DataGrid>
            );
        }
    }
    export default App;

---

When the server receives the data processing settings, it should apply them to the dataset and send back an object with the following structure:

    {
        data: [{
            key: "Group 1",
            items: [ ... ],          // subgroups or data objects if there are no further subgroups (check isExpanded = true)
                                     // can be null if isExpanded = false 
            count: 3,                // count of items in this group; required only when items = null
            summary: [30, 20, 40]    // group summary results
        },
        ...
        ], 
        totalCount: 200,              // if requireTotalCount = true
        summary: [170, 20, 20, 1020], // total summary results
        groupCount: 35                // if requireGroupCount = true
    }

If the server did not receive the **group** setting, the structure should be different:

    {
        data: [ ... ],               // data objects
        totalCount: 200,             // if requireTotalCount = true
        summary: [170, 20, 20, 1020] // total summary results
    }
