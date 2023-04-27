---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}").dx{WidgetName}({
            // ...
            headerFilter: {
                // ...
                search: {
                    editorOptions: { 
                        placeholder: 'Search value',
                        mode: 'text',
                        onOptionChanged: (e) => {
                            if(e.name === 'onValueChanged') {
                                // handle the option change here
                            }
                        }  
                    },
                    // ...     
                },
            },
        })
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-header-filter ... >
            <dxo-search
                [editorOptions]="searchEditorOptions"
                // ...
            ></dxo-search>
        </dxo-header-filter>
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
                placeholder: 'Search value', 
                mode: 'text',
                onOptionChanged: (e) => {
                    if(e.name === 'onValueChanged') {
                        // handle the option change here
                    }
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
            <DxHeaderFilter ... >
                <DxSearch
                    :editor-options="searchEditorOptions"
                    // ...
                />
            </DxHeaderFilter>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import Dx{WidgetName}, {
        DxHeaderFilter, 
        DxSearch,
        // ... 
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}, 
            DxHeaderFilter, 
            DxSearch,
            // ...
        },
        data() {
            return {
                searchEditorOptions: { 
                    placeholder: 'Search value', 
                    mode: 'text',
                    onOptionChanged: this.handleOptionChange   
                }
            };
        },
        methods: {
            handleOptionChange(e) {
                if(e.name === 'onValueChanged') {
                    // handle the option change here
                }
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <Dx{WidgetName} ... >
            <DxHeaderFilter ... >
                <DxSearch
                    :editor-options="searchEditorOptions"
                    // ...
                />
            </DxHeaderFilter>
        </Dx{WidgetName}>
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';
    import Dx{WidgetName}, {
        DxHeaderFilter, 
        DxSearch,
        // ... 
    } from 'devextreme-vue/{widget-name}';

    const searchEditorOptions = { 
        placeholder: 'Search value', 
        mode: 'text',
        onOptionChanged: (e) => {
            if(e.name === 'onValueChanged') {
                // handle the option change here
            }
        }   
    };

    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';  
    import 'devextreme/dist/css/dx.light.css'; 

    import {WidgetName}, {
        HeaderFilter, 
        Search, 
        // ...
    } from 'devextreme-react/data-grid';

    const searchEditorOptions = { 
        placeholder: 'Search value', 
        mode: 'text',
        onOptionChanged: (e) => {
            if(e.name === 'onValueChanged') {
                // handle the option change here
            }
        }   
    };

    export default function App() { 
        return ( 
            <{WidgetName} ... > 
                <HeaderFilter ... >
                    <Search
                        editorOptions={searchEditorOptions}
                        // ...
                    />
                </HeaderFilter>
            </{WidgetName}>        
        ); 
    } 

---
