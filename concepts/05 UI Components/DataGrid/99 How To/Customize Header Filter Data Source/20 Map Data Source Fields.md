Header filter data objects should have the `text` and `value` fields. However, data objects fetched from a server may not have these fields. In this case, map the original data source to the `text` + `value` structure. A mapped data source should also include key fields from the original data source.

[note] We recommend that you keep the [allowSearch](/api-reference/_hidden/GridBaseColumn/headerFilter/allowSearch.md '{basewidgetpath}/Configuration/columns/headerFilter/#allowSearch') property set to **false** because searching produces incorrect results when data source fields are mapped.

In the following code, the `categoryName` and `categoryId` fields are mapped to the `text` and `value` fields. The mapped objects also contain the `categoryId` and `categoryCode` key fields:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const categoriesStore = new DevExpress.data.ArrayStore({
            data: [
                { categoryName: "...", categoryId: 1, categoryCode: "..." },
                // ...
            ],
            key: ["categoryId", "categoryCode"]
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
                                categoryCode: item.categoryCode
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
        <dxi-column>
            <dxo-header-filter
                [dataSource]="headerFilterData">
            </dxo-header-filter>
        </dxi-column>
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
                    { categoryName: "...", categoryId: 1, categoryCode: "..." },
                    // ...
                ],
                key: ["categoryId", "categoryCode"]
            });

            this.headerFilterData = {
                store: categoriesStore,
                map: (item) => {
                    return {
                        text: item.categoryName,
                        value: item.categoryId,
                        categoryId: item.categoryId,
                        categoryCode: item.categoryCode
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
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Dx{WidgetName},
        DxColumn,
        DxHeaderFilter
    } from 'devextreme-vue/{widget-name}';
    import ArrayStore from 'devextreme/data/array_store';

    const categoriesStore = new ArrayStore({
        data: [
            { categoryName: "...", categoryId: 1, categoryCode: "..." },
            // ...
        ],
        key: ["categoryId", "categoryCode"]
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
                            categoryCode: item.categoryCode
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
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column, HeaderFilter } from 'devextreme-react/{widget-name}';
    import ArrayStore from 'devextreme/data/array_store';

    const categoriesStore = new ArrayStore({
        data: [
            { categoryName: "...", categoryId: 1, categoryCode: "..." },
            // ...
        ],
        key: ["categoryId", "categoryCode"]
    });

    const headerFilterData = {
        store: categoriesStore,
        map: (item) => {
            return {
                text: item.categoryName,
                value: item.categoryId,
                categoryId: item.categoryId,
                categoryCode: item.categoryCode
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
