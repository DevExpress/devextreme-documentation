---
id: GridBase.Options.columnChooser.position
type: PositionConfig | undefined
default: undefined
---
---
##### shortDescription
Configures the column chooser's position.

---
You can specify the [my](/api-reference/50%20Common/Object%20Structures/positionConfig/my '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/my/'), [at](/api-reference/50%20Common/Object%20Structures/positionConfig/at '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/at/'), and [of](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/#of') properties to position a column chooser. Set the **position** property to *undefined* to display the column chooser at the bottom right corner (default position).

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#{widgetName}").dx{WidgetName}({
            // ...
            columnChooser: {
                // ...
                position: { 
                    my: "right top", 
                    at: "right bottom", 
                    of: ".dx-{widgetname}-column-chooser-button" 
                }
            },
        })
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-column-chooser ... >
            <dxo-position
                my="right top"
                at="right bottom"
                of=".dx-{widgetname}-column-chooser-button">
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
                    my="right top"
                    at="right bottom"
                    of=".dx-{widgetname}-column-chooser-button"
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
                    my="right top"
                    at="right bottom"
                    of=".dx-{widgetname}-column-chooser-button"
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
                        my="right top"
                        at="right bottom"
                        of=".dx-{widgetname}-column-chooser-button"
                    />
                </ColumnChooser>
            </{WidgetName}>        
        ); 
    } 

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnChooser/"        
}
