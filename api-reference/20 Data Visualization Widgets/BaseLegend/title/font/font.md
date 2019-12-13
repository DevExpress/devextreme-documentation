---
id: BaseLegend.title.font
type: Object
inherits: Font
---
---
##### shortDescription
Specifies the legend title's font options.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            legend: {
                title: {
                    font: {
                        color: "black"
                    }
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-legend>
            <dxo-title ... >
                <dxo-font
                    color="black">
                </dxo-font>
            </dxo-title>
        </dxo-legend>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
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
        <dx-{widget-name} ... >
            <dx-legend>
                <dx-title ... >
                    <dx-font
                        color="black"
                    />
                </dx-title>
            </dx-legend>
        </dx-{widget-name}>
    </template>

    <script>
    import Dx{WidgetName}, {
        DxLegend,
        DxTitle,
        DxFont
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxLegend,
            DxTitle,
            DxFont
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import {WidgetName}, {
        Legend,
        Title,
        Font
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ... >
                    <Legend ... >
                        <Title ... >
                            <Font color="black" />
                        </Title>
                    </Legend>
                </{WidgetName}>
            );
        }
    }
    export default App;

---