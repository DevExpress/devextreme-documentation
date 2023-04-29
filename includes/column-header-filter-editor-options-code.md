---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}").dx{WidgetName}({
            // ...
            columns: [
                {
                    // ...
                    headerFilter: {
                        // ...
                        search: {
                            editorOptions: { 
                                placeholder: 'Search city or state',
                                mode: 'text',
                                onValueChanged: (e) => {
                                    // handle the value change here
                                } 
                            },
                            // ...
                        },
                    }
                }, 
                // ...
            ],
        })
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column ... >
            <dxo-header-filter ... >
                <dxo-search
                    [editorOptions]="searchEditorOptions"
                    // ... 
                ></dxo-search>
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
        searchEditorOptions;
        constructor() {
            this.searchEditorOptions = { 
                placeholder: 'Search city or state', 
                mode: 'text',
                onValueChanged: (e) => {
                    // handle the value change here
                } 
            };
            // ...
        } 
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

    <!-- tab: App.vue (Options API) -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn ... >
                <DxHeaderFilter ... >
                    <DxSearch
                        :editor-options="searchEditorOptions"
                        // ...
                    />
                </DxHeaderFilter>
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import Dx{WidgetName}, {
        DxColumn,
        DxHeaderFilter, 
        DxSearch,
        // ... 
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}, 
            DxColumn,
            DxHeaderFilter, 
            DxSearch,
            // ...
        },
        data() {
            return {
                searchEditorOptions: { 
                    placeholder: 'Search city or state', 
                    mode: 'text',
                    onValueChanged: this.handleValueChange
                }
            };
        },
        methods: {
            handleValueChange(e) {
                // handle the value change here
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn ... >
                <DxHeaderFilter ... >
                    <DxSearch
                        :editor-options="searchEditorOptions"
                        // ...
                    />
                </DxHeaderFilter>
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';
    import Dx{WidgetName}, {
        DxColumn,
        DxHeaderFilter, 
        DxSearch,
        // ... 
    } from 'devextreme-vue/{widget-name}';

    const searchEditorOptions = { 
        placeholder: 'Search city or state', 
        mode: 'text',
        onValueChanged: (e) => {
            // handle the value change here
        } 
    };

    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';  
    import 'devextreme/dist/css/dx.light.css'; 

    import {WidgetName}, {
        Column,
        HeaderFilter, 
        Search, 
        // ...
    } from 'devextreme-react/data-grid';

    const searchEditorOptions = { 
        placeholder: 'Search city or state', 
        mode: 'text',
        onValueChanged: (e) => {
            // handle the value change here
        } 
    };

    export default function App() { 
        return ( 
            <{WidgetName} ... >
                <Column ... >  
                    <HeaderFilter ... >
                        <Search
                            editorOptions={searchEditorOptions}
                            // ...
                        />
                    </HeaderFilter>
                </Column> 
            </{WidgetName}>        
        ); 
    } 

---
