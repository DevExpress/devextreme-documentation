---
id: dxTreeList.addRow()
---
---
##### shortDescription
Adds an empty data row to the highest hierarchical level and switches it to the editing state.

---
Use this method if you want to add an empty row. If you need to add a row with data, do the following:    

- For a remote data source, [insert](/api-reference/30%20Data%20Layer/Store/3%20Methods/insert(values).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#insertvalues') a new row with data into it and [reload](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/reload().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload') the data source:

    ---
    ##### jQuery

        <!--JavaScript-->
        $(function(){
            var treeList = $("#treeListContainer").dxTreeList({
                // ...
            }).dxTreeList("instance");

            var dataSource = treeList.getDataSource();

            dataSource.store().insert(data).then(function() {
                dataSource.reload();
            })
        });

    ##### Angular

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            constructor() {
                this.dataSource = new DataSource({
                    // ...
                })
            }
            // ...
            insertRowRemote: function(dataObj) {
                this.dataSource.store().insert(data).then(function() {
                    this.dataSource.reload();
                })
            }
        }

        <!-- tab: app.module.ts -->
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';

        import { DxTreeListModule } from 'devextreme-angular';

        @NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                DxTreeListModule
            ],
            bootstrap: [AppComponent]
        })
        export class AppModule { }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <dx-tree-list
                :data-source="dataSource"
            />
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import DxTreeList from 'devextreme-vue/tree-list';
        import DataSource from 'devextreme/data/data_source';

        const ds = new DataSource({
            // ...
        });

        export default {
            components: {
                DxTreeList
            },
            data() {
                return {
                    dataSource: ds
                }
            },
            methods: {
                insertRowRemote: function(dataObj) {
                    ds.store().insert(dataObj).then(() => ds.reload());
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';

        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import TreeList from 'devextreme-react/tree-list';
        import DataSource from 'devextreme/data/data_source';

        const ds = new DataSource({
            // ...
        });

        class App extends React.Component {
            insertRowRemote(dataObj) {
                ds.store().insert(dataObj).then(() => ds.reload());
            }
            render() {
                return (
                    <TreeList
                        dataSource={ds}
                    />
                );
            }
        }
        export default App;

    ---

- For a local data source, [push](/api-reference/30%20Data%20Layer/Store/3%20Methods/push(changes).md '/Documentation/ApiReference/Data_Layer/LocalStore/Methods/#pushchanges') a new row into it.    

    ---
    ##### jQuery

        <!--JavaScript-->
        $(function(){
            var treeList = $("#treeListContainer").dxTreeList({
                // ...
            }).dxTreeList("instance");

            var dataSource = treeList.getDataSource();

            dataSource.store().push([
                { type: "insert", data: data }
            ])
        });

    ##### Angular

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            constructor() {
                this.dataSource = new DataSource({
                    // ...
                })
            }
            // ...
            insertRowLocal: function(dataObj) {
                this.dataSource.store().push([
                    { type: "insert", data: dataObj }
                ])
            }
        }

        <!-- tab: app.module.ts -->
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';

        import { DxTreeListModule } from 'devextreme-angular';

        @NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                DxTreeListModule
            ],
            bootstrap: [AppComponent]
        })
        export class AppModule { }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <dx-tree-list
                :data-source="dataSource"
            />
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import DxTreeList from 'devextreme-vue/tree-list';
        import DataSource from 'devextreme/data/data_source';

        const ds = new DataSource({
            // ...
        });

        export default {
            components: {
                DxTreeList
            },
            data() {
                return {
                    dataSource: ds
                }
            },
            methods: {
                insertRowLocal: function(dataObj) {
                    ds.store().push([
                        { type: "insert", data: dataObj }
                    ]);
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';

        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import TreeList from 'devextreme-react/tree-list';
        import DataSource from 'devextreme/data/data_source';

        const ds = new DataSource({
            // ...
        });

        class App extends React.Component {
            insertRowLocal(dataObj) {
                ds.store().push([
                    { type: "insert", data: dataObj }
                ]);
            }
            render() {
                return (
                    <TreeList
                        dataSource={ds}
                    />
                );
            }
        }
        export default App;

    ---

This method works only when **paging**.[enabled](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/paging/enabled.md '{basewidgetpath}/Configuration/paging/#enabled') is **false** or when **dataSource**.[reshapeOnPush](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/reshapeOnPush.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#reshapeOnPush') is **true** and [remoteOperations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/remoteOperations '{basewidgetpath}/Configuration/remoteOperations/') is **false**.

#####See Also#####
#include common-link-callmethods
- [TreeList - Add a Row](/concepts/05%20Widgets/TreeList/20%20Editing/20%20API/10%20Add.md '/Documentation/Guide/Widgets/TreeList/Editing/#API/Add')
- **editing**.[allowUpdating](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/editing/allowAdding.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#allowAdding')
