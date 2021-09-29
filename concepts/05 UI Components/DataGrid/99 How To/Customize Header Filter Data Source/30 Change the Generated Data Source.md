To change the generated data source, set the **dataSource** property to a function. This function accepts an object whose `dataSource` field contains a [DataSource configuration](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/). Define the **DataSource**'s [postProcess](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/postProcess.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#postProcess') function in which you can change header filter items.

[note] Keep the [allowSearch](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/headerFilter/#allowSearch) property set to **false** because searching produces incorrect results when the **postProcess** function is applied.

In the following code, the **postProcess** function adds a custom item to the generated data source:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                // ...
                headerFilter: {
                    dataSource: function (options) {
                        options.dataSource.postProcess = function (results) {
                            results.push({
                                text: "Weekends",
                                value: [
                                    ['OrderDay', "=", 0],
                                        "or",
                                    ['OrderDay', "=", 6]
                                ]
                            });
                            return results;
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
                [dataSource]="customizeHeaderFilterData">
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
        customizeHeaderFilterData(options) {
            options.dataSource.postProcess = (results) => {
                results.push({
                    text: "Weekends",
                    value: [
                        ['OrderDay', "=", 0], 
                            "or", 
                        ['OrderDay', "=", 6]
                    ]
                });
                return results;
            }
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
                    :data-source="customizeHeaderFilterData"
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

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxHeaderFilter
        },
        methods: {
            customizeHeaderFilterData(options) {
                options.dataSource.postProcess = (results) => {
                    results.push({
                        text: 'Weekends',
                        value: [
                            ['OrderDay', '=', 0],
                                'or',
                            ['OrderDay', '=', 6]
                        ]
                    });
                    return results;
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column, HeaderFilter } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName}>
                    <Column>
                        <HeaderFilter
                            dataSource={this.customizeHeaderFilterData}
                        />
                    </Column>
                </{WidgetName}>
            );
        }

        customizeHeaderFilterData(options) {
            options.dataSource.postProcess = function(results) {
                results.push({
                    text: 'Weekends',
                    value: [
                        ['OrderDay', '=', 0],
                            'or',
                        ['OrderDay', '=', 6]
                    ]
                });
                return results;
            };
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/"
}
