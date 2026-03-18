Header filter data objects should have the `text` and `value` fields. If these fields are missing from data objects fetched from a server, map the original data source to the `text` + `value` structure. The mapped data source should also include key fields from the original data source.

[note] Keep the [allowSearch](/api-reference/40%20Common%20Types/15%20grids/ColumnHeaderFilter/allowSearch.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/headerFilter/#allowSearch') property set to **false** to avoid incorrect search results when mapping data source fields.

In the following code, the `categoryName` and `categoryId` fields are mapped to the `text` and `value` fields:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const categoriesStore = new DevExpress.data.ArrayStore({
            data: [
                { categoryName: "...", categoryId: 1 },
                // ...
            ],
            key: "categoryId"
        });

        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                // ...
                headerFilter: {
                    dataSource: {
                        store: categoriesStore,
                        map: function (item) {
                            return {
                                text: item.categoryName,
                                value: item.categoryId,
                                categoryId: item.categoryId,
                            }
                        }
                    }
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-{widget-name}-column>
            <dxo-{widget-name}-header-filter
                [dataSource]="headerFilterData">
            </dxo-{widget-name}-header-filter>
        </dxi-{widget-name}-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import ArrayStore from 'devextreme/data/array_store';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        headerFilterData;
        constructor() {
            const categoriesStore = new ArrayStore({
                data: [
                    { categoryName: "...", categoryId: 1 },
                    // ...
                ],
                key: "categoryId"
            });

            this.headerFilterData = {
                store: categoriesStore,
                map: (item) => {
                    return {
                        text: item.categoryName,
                        value: item.categoryId,
                        categoryId: item.categoryId,
                    }
                }
            };
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            <DxColumn>
                <DxHeaderFilter
                    :data-source="headerFilterData"
                />
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import {
        Dx{WidgetName},
        DxColumn,
        DxHeaderFilter
    } from 'devextreme-vue/{widget-name}';
    import ArrayStore from 'devextreme/data/array_store';

    const categoriesStore = new ArrayStore({
        data: [
            { categoryName: "...", categoryId: 1 },
            // ...
        ],
        key: "categoryId"
    });

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxHeaderFilter
        },
        data() {
            return {
                headerFilterData: {
                    store: categoriesStore,
                    map: (item) => {
                        return {
                            text: item.categoryName,
                            value: item.categoryId,
                            categoryId: item.categoryId,
                        }
                    }
                }
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { {WidgetName}, Column, HeaderFilter } from 'devextreme-react/{widget-name}';
    import ArrayStore from 'devextreme/data/array_store';

    const categoriesStore = new ArrayStore({
        data: [
            { categoryName: "...", categoryId: 1 },
            // ...
        ],
        key: "categoryId"
    });

    const headerFilterData = {
        store: categoriesStore,
        map: (item) => {
            return {
                text: item.categoryName,
                value: item.categoryId,
                categoryId: item.categoryId,
            }
        }
    };

    class App extends React.Component {
        render() {
            return (
                <{WidgetName}>
                    <Column>
                        <HeaderFilter
                            dataSource={headerFilterData}
                        />
                    </Column>
                </{WidgetName}>
            );
        }
    }

    export default App;

---
