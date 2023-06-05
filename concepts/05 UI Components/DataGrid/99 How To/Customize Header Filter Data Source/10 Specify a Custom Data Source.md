To define a data source, set the **dataSource** property to an array of objects. Each object configures one header filter item and should have the following fields:

 - `text`         
A text string that represents the item in the header filter.
 
 - `value`        
A filter that the item applies. It can be a single value (for example, 0) or a filter expression. Refer to the [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') help topic for information on the filter expression syntax.

The following code shows how to specify a custom data source:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                // ...
                headerFilter: {
                    dataSource: [{
                        text: "Zero",
                        value: 0
                    }, {
                        text: "Less than $3000",
                        value: ["SaleAmount", "<", 3000]
                    }, {
                        text: "More than $3000",
                        value: ["SaleAmount", ">", 3000]
                    }]
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

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        headerFilterData: any;
        constructor() {
            this.headerFilterData = [{
                text: "Zero",
                value: 0
            }, {
                text: "Less than $3000",
                value: ["SaleAmount", "<", 3000]
            }, {
                text: "More than $3000",
                value: ["SaleAmount", ">", 3000]
            }];
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
    import 'devextreme/dist/css/dx.light.css';

    import {
        Dx{WidgetName},
        DxColumn,
        DxHeaderFilter
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxHeaderFilter
        },
        data() {
            return {
                headerFilterData: [{
                    text: 'Zero',
                    value: 0
                }, {
                    text: 'Less than $3000',
                    value: ['SaleAmount', '<', 3000]
                }, {
                    text: 'More than $3000',
                    value: ['SaleAmount', '>', 3000]
                }]
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column, HeaderFilter } from 'devextreme-react/{widget-name}';

    const headerFilterData = [{
        text: 'Zero',
        value: 0
    }, {
        text: 'Less than $3000',
        value: ['SaleAmount', '<', 3000]
    }, {
        text: 'More than $3000',
        value: ['SaleAmount', '>', 3000]
    }];

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

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/"
}
