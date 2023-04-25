---
id: GridBase.Options.columnChooser.search
type: ColumnChooserSearchConfig
inheritsType: ColumnChooserSearchConfig
---
---
##### shortDescription
Configures the column chooser's search.

---
---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}").dx{WidgetName}({
            // ...
            columnChooser: {
                // ...
                search: {
                    editorOptions: { 
                        placeholder: 'Search column',
                        mode: 'text' 
                    },
                    enabled: true,
                    timeout: 800      
                },
            },
        })
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-column-chooser ... >
            <dxo-search
                [editorOptions]="searchEditorOptions"
                [enabled]="true"
                [timeout]="800"
            ></dxo-search>
        </dxo-column-chooser>
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
                placeholder: 'Search column', 
                mode: 'text' 
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
            <DxColumnChooser ... >
                <DxColumnChooserSearch
                    :editor-options="searchEditorOptions"
                    :enabled="true"
                    :timeout="800"
                />
            </DxColumnChooser>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import Dx{WidgetName}, {
        DxColumnChooser, 
        DxColumnChooserSearch,
        // ... 
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}, 
            DxColumnChooser, 
            DxColumnChooserSearch,
        },
        data() {
            return {
                searchEditorOptions: { 
                    placeholder: 'Search column', 
                    mode: 'text' 
                }
            };
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumnChooser ... >
                <DxColumnChooserSearch
                    :editor-options="searchEditorOptions"
                    :enabled="true"
                    :timeout="800"
                />
            </DxColumnChooser>
        </Dx{WidgetName}>
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';
    import Dx{WidgetName}, {
        DxColumnChooser, 
        DxColumnChooserSearch,
        // ... 
    } from 'devextreme-vue/{widget-name}';

    const searchEditorOptions = { 
        placeholder: 'Search column', 
        mode: 'text' 
    };

    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';  
    import 'devextreme/dist/css/dx.light.css'; 

    import {WidgetName}, {
        ColumnChooser, 
        ColumnChooserSearch, 
        // ...
    } from 'devextreme-react/data-grid';

    const searchEditorOptions = { 
        placeholder: 'Search column', 
        mode: 'text' 
    };

    export default function App() { 
        return ( 
            <{WidgetName} ... > 
                <ColumnChooser ... >
                    <ColumnChooserSearch
                        editorOptions={searchEditorOptions}
                        enabled={true}
                        timeout={800}
                    />
                </ColumnChooser>
            </{WidgetName}>        
        ); 
    } 

---

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnChooser/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/ColumnChooser/",
    name: "TreeList"
}