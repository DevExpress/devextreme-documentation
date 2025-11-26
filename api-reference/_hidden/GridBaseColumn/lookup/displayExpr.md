---
id: GridBaseColumn.lookup.displayExpr
type: String | function(data) | undefined
default: undefined
---
---
##### shortDescription
Specifies the data source field whose values must be displayed.

##### param(data): Object
A row's data.

##### return: String
The displayed value.

---
This property accepts a string - the name of the data field that provides displayed values, or a function that returns the displayed value.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CascadingLookups/"
}

[note]

- Values in a lookup column are sorted by the **valueExpr** field. Implement the column's [calculateSortValue](/api-reference/_hidden/GridBaseColumn/calculateSortValue.md '{basewidgetpath}/Configuration/columns/#calculateSortValue') function to sort by the **displayExpr** field instead:

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $(function() {
            $("#{widgetName}Container").dx{WidgetName}({
                columns: [{
                    // ...
                    lookup: {
                        // ...
                    },
                    calculateSortValue: function (data) {
                        const value = this.calculateCellValue(data);
                        return this.lookup.calculateCellValue(value);
                    }
                }]
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... >
            <dxi-{widget-name}-column ...
                [calculateSortValue]="calculateSortValue">
                <dxo-{widget-name}-lookup ... ></dxo-{widget-name}-lookup>
            </dxi-{widget-name}-column>
        </dx-{widget-name}>

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            calculateSortValue (data) {
                const column = this as any;
                const value = column.calculateCellValue(data);
                return column.lookup.calculateCellValue(value);
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
            <Dx{WidgetName} ... >
                <DxColumn ...
                    :calculate-sort-value="calculateSortValue">
                    <DxLookup ... />
                </DxColumn>
            </Dx{WidgetName}>
        </template>

        <script setup>
        import 'devextreme/dist/css/dx.light.css';
        import Dx{WidgetName}, { DxColumn, DxLookup } from 'devextreme-vue/{widget-name}';

        const calculateSortValue = (data) => {
            const column = this;
            const value = column.calculateCellValue(data);
            return column.lookup.calculateCellValue(value);
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import 'devextreme/dist/css/dx.light.css';

        import {WidgetName}, {
            Column,
            Lookup
        } from 'devextreme-react/{widget-name}';

        function calculateSortValue (data) {
            const column = this;
            const value = column.calculateCellValue(data);
            return column.lookup.calculateCellValue(value);
        }

        export default function App() {
            return (
                <{WidgetName} ... >
                    <Column ...
                        calculateSortValue={calculateSortValue}>
                        <Lookup ... />
                    </Column>
                </{WidgetName}>
            );
        }

    ---

- When [headerFilter](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/headerFilter/') and **columns**.[lookup](/api-reference/_hidden/GridBaseColumn/lookup '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/') are both enabled, ensure **data** is not `null` before accessing its properties in the **displayExpr** method of lookup columns:

        <!-- tab: JavaScript -->
        displayExpr: (data) => { return data ? `${data.ID} ${data.Name}` : '' }

    The `null` value adds a "(Blanks)" item to column header filters. To avoid displaying this "(Blanks)" item, implement **DataSource**.[postProcess](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/postProcess.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#postProcess') in the **columns**.**headerFilter**.[dataSource](/api-reference/40%20Common%20Types/15%20grids/ColumnHeaderFilter/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/headerFilter/#dataSource') method of lookup columns:

    ---

    ##### jQuery

        <!-- tab: index.js -->
        $(function() {
            $("#{widgetName}Container").dx{WidgetName}({
                columns: [{
                    lookup: {
                        // ...
                    },
                    headerFilter: {
                        dataSource: function (options) {
                            options.dataSource.postProcess = function (results) {
                                return results.filter((item) => item.value !== null)
                            }
                        }
                    }
                }]
            })
        })

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... >
            <dxo-{widget-name}-header-filter [visible]="true"></dxo-{widget-name}-header-filter>
            <dxi-{widget-name}-column ... >
                <dxo-{widget-name}-header-filter ... 
                    [dataSource]="calculateDataSource"
                ></dxo-{widget-name}-header-filter>
                <dxo-{widget-name}-lookup ... ></dxo-{widget-name}-lookup>
            </dxi-{widget-name}-column>
        </dx-{widget-name}>

        <!-- tab: app.component.ts -->
        export class AppComponent {
            calculateDataSource (options) {
                options.dataSource.postProcess = function (results) {
                    return results.filter((item) => item.value !== null)
                }
            }
        }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <Dx{WidgetName} ... >
                <DxHeaderFilter :visible="true" />
                <DxColumn ... >
                    <DxHeaderFilter ...
                        :data-source="calculateDataSource"
                    />
                    <DxLookup ... />
                </DxColumn>
            </Dx{WidgetName}>
        </template>

        <script setup>
        import Dx{WidgetName}, { DxColumn, DxLookup, DxHeaderFilter } from 'devextreme-vue/{widget-name}';

        const calculateDataSource = (options) => {
            options.dataSource.postProcess = function (results) {
                return results.filter((item) => item.value !== null)
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import {WidgetName}, { Column, Lookup, HeaderFilter } from 'devextreme-react/{widget-name}';

        function calculateDataSource(options) {
            options.dataSource.postProcess = function (results) {
                return results.filter((item) => item.value !== null)
            }
        }

        export default function App() {
            return (
                <{WidgetName} ... >
                    <HeaderFilter visible={true} />
                    <Column ...
                        <HeaderFilter ...
                            dataSource={calculateDataSource}
                        />
                        <Lookup ... />
                    </Column>
                </{WidgetName}>
            );
        }

    ---

[/note]