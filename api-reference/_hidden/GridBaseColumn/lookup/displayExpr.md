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

- Values in a lookup column are sorted by the **valueExpr** field. Implement the column's [calculateSortValue](/api-reference/_hidden/GridBaseColumn/calculateSortValue.md '{basewidgetpath}/Configuration/columns/#calculateSortValue') function if you want to sort by the **displayExpr** field instead:

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
            <dxi-column ...
                [calculateSortValue]="calculateSortValue">
                <dxo-lookup ... ></dxo-lookup>
            </dxi-column>
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

- When [headerFilter](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/headerFilter/) and **columns**.[lookup](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/) are enabled at the same time, the component executes the **displayExpr** method of lookup columns an additional time with a `null` parameter. To avoid errors, check that **data** is not `null` before accessing its properties in the **displayExpr** method:

        <!-- tab: JavaScript -->
        displayExpr: (data) => { return data ? `${data.ID} ${data.Name}` : '' }

    The `null` value adds a "(Blanks)" item to column header filters. To avoid displaying this "(Blanks)" item, implement **DataSource**.[postProcess](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#postProcess) in the **columns**.**headerFilter**.[dataSource](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/headerFilter/#dataSource) method of lookup columns:

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
            <dxo-header-filter [visible]="true"></dxo-header-filter>
            <dxi-column ... >
                <dxo-header-filter ... 
                    [dataSource]="calculateDataSource"
                ></dxo-header-filter>
                <dxo-lookup ... ></dxo-lookup>
            </dxi-column>
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