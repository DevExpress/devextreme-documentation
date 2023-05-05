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
                                mode: 'text' 
                            },
                            enabled: true,
                            timeout: 900,
                            searchExpr: ['City', 'State'],
                            mode: 'equals',
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
                    [enabled]="true"
                    [timeout]="900"
                    [searchExpr]="searchFields"
                    mode="equals" 
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
        searchFields;
        constructor() {
            this.searchEditorOptions = { 
                placeholder: 'Search city or state', 
                mode: 'text' 
            };
            this.searchFields = ['City', 'State'];
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
                        :enabled="true"
                        :timeout="900"
                        :searchExpr="searchFields"
                        mode="equals"
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
                    mode: 'text' 
                },
                searchFields: ['City', 'State']
            };
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
                        :enabled="true"
                        :timeout="900"
                        :searchExpr="searchFields"
                        mode="equals"
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

    const searchFields = ['City', 'State'];
    const searchEditorOptions = { 
        placeholder: 'Search city or state', 
        mode: 'text' 
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

    const searchFields = ['City', 'State'];
    const searchEditorOptions = { 
        placeholder: 'Search city or state', 
        mode: 'text' 
    };

    export default function App() { 
        return ( 
            <{WidgetName} ... >
                <Column ... > 
                    <HeaderFilter ... >
                        <Search
                            editorOptions={searchEditorOptions}
                            enabled={true}
                            timeout={700}
                            searchExpr={searchFields}
                            mode="equals"
                        />
                    </HeaderFilter>
                </Column>
            </{WidgetName}>        
        ); 
    } 

---