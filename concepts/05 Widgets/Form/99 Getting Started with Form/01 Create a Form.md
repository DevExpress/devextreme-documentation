---
    ##### jQuery

        Add DevExtreme to your jQuery application and use the following code to create a DataGrid:
        
        <!-- tab: index.js -->
        $(function() {
            $("#{widgetName}Container").dx{WidgetName}({
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name}>
        </dx-{widget-name}>

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            constructor() {
                
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
                
            </Dx{WidgetName}>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import Dx{WidgetName}, {
            !!DxNestedComponents
        } from 'devextreme-vue/{widget-name}';

        export default {
            components: {
                Dx{WidgetName},
                !!DxNestedComponents
            },
            data() {
                return {
                    
                }
            },
            methods: {
                
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';

        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import {WidgetName}, {
            !!NestedComponents
        } from 'devextreme-react/{widget-name}';

        export default function App() {
            return (
                <{WidgetName}>
                    
                </{WidgetName}>
            );
        }

    ---