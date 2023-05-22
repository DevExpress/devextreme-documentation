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
                            // ...
                            searchExpr: ['City', 'State'],
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
                <dxo-search ...
                    [searchExpr]="searchFields"
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
        searchFields;
        constructor() {
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
                    <DxSearch ...
                        :searchExpr="searchFields"
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
                    <DxSearch ...
                        :searchExpr="searchFields""
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

    export default function App() { 
        return ( 
            <{WidgetName} ... >
                <Column ... > 
                    <HeaderFilter ... >
                        <Search ...
                            searchExpr={searchFields}
                        />
                    </HeaderFilter>
                </Column>
            </{WidgetName}>        
        ); 
    } 

---