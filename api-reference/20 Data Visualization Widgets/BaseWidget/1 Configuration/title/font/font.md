---
type: Object
inherits: ..\..\..\..\Font\Font.md
---
---
##### shortDescription
Specifies font options for the title.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            title: {
                font: {
                    color: "black"
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-title ... >
            <dxo-font
                color="black">
            </dxo-font>
        </dxo-title>
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

    import { DxChartModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxChartModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: DxComponent.vue -->
    <template>
        <dx-{widget-name} ... >
            <dx-title ... >
                <dx-font
                    color="black"
                />
            </dx-title>
        </dx-{widget-name}>
    </template>

    <script>
    import Dx{WidgetName}, {
        DxTitle,
        DxFont
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxTitle,
            DxFont
        },
        // ...
    }
    </script>

##### React

    <!-- tab: DxComponent.js -->
    import React from 'react';

    import {WidgetName}, {
        Title,
        Font
    } from 'devextreme-react/{widget-name}';

    class DxComponent extends React.Component {
        render() {
            return (
                <{WidgetName} ... >
                    <Title ... >
                        <Font color="black" />
                    </Title>
                </{WidgetName}>
            );
        }
    }
    export default DxComponent;

---