---
id: GridBase.Options.columnChooser.position
type: PositionConfig
default: undefined
---
---
##### shortDescription
Configures the column chooser's position.

---
You can specify the [my](/Documentation/ApiReference/Common/Object_Structures/PositionConfig/my/), [at](/Documentation/ApiReference/Common/Object_Structures/PositionConfig/at/), and [of](/Documentation/ApiReference/Common/Object_Structures/PositionConfig/#of) properties to position a column chooser. 

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}").dx{WidgetName}({
            // ...
            columnChooser: {
                // ...
                position: {
                    my: "left",
                    at: "right",
                    of: ".dx-datagrid-column-chooser-button"
                }
            },
        })
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-column-chooser ... >
            <dxo-position
                my="left"
                at="right"
                of=".dx-datagrid-column-chooser-button">
            </dxo-position>
        </dxo-column-chooser>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core'; 

    @Component({ 
        selector: 'app-root', 
        templateUrl: './app.component.html', 
        styleUrls: ['./app.component.css'] 
    }) 

    export class AppComponent {}

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
                <DxPosition
                    my="left"
                    at="right"
                    of=".dx-datagrid-column-chooser-button"
                />
            </DxColumnChooser>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import Dx{WidgetName}, {
        DxColumnChooser, 
        DxPosition
        // ... 
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}, 
            DxColumnChooser, 
            DxPosition
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumnChooser ... >
                <DxPosition
                    my="left"
                    at="right"
                    of=".dx-datagrid-column-chooser-button"
                />
            </DxColumnChooser>
        </Dx{WidgetName}>
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';
    import Dx{WidgetName}, {
        DxColumnChooser, 
        DxPosition
        // ... 
    } from 'devextreme-vue/{widget-name}';

    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';  
    import 'devextreme/dist/css/dx.light.css'; 

    import {WidgetName}, {
        ColumnChooser, 
        Position, 
        // ...
    } from 'devextreme-react/data-grid';

    export default function App() { 
        return ( 
            <{WidgetName} ... > 
                <ColumnChooser ... >
                    <Position
                        my="left"
                        at="right"
                        of=".dx-datagrid-column-chooser-button"
                    />
                </ColumnChooser>
            </{WidgetName}>        
        ); 
    } 

---
