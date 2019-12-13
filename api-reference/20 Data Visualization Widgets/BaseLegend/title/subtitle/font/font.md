---
id: BaseLegend.title.subtitle.font
type: Object
inherits: Font
---
---
##### shortDescription
Specifies the legend subtitle's font options.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            legend: {
                title: {
                    // ...
                    subtitle: {
                        // ...
                        font: {
                            color: "black"
                        }
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
                <dxo-subtitle ... >
                    <dxo-font
                        color="black">
                    </dxo-font>
                </dxo-subtitle>
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
                    <dx-subtitle ... >
                        <dx-font
                            color="black"
                        />
                    </dx-subtitle>
                </dx-title>
            </dx-legend>
        </dx-{widget-name}>
    </template>

    <script>
    import Dx{WidgetName}, {
        DxLegend,
        DxTitle,
        DxSubtitle,
        DxFont
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxLegend,
            DxTitle,
            DxSubtitle,
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
        Subtitle,
        Font
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ... >
                    <Legend ... >
                        <Title ... >
                            <Subtitle ... >
                                <Font color="black" />
                            </Subtitle>
                        </Title>
                    </Legend>
                </{WidgetName}>
            );
        }
    }
    export default App;

---