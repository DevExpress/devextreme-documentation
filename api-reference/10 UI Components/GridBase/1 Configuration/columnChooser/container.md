---
id: GridBase.Options.columnChooser.container
type: String | UserDefinedElement | undefined
default: undefined
---
---
##### shortDescription
Specifies a container in which the column chooser should be rendered.

---
Use this property if you need to change the element in which the column chooser is rendered. For example, if your component is inside the Popup, set this property to 'popup container'.

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#{widgetName}").dx{WidgetName}({
            // ...
            columnChooser: {
                // ...
                container: "#popupContainer"
            },
        })
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-column-chooser container="#popupContainer" >
        </dxo-column-chooser>
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumnChooser container="#popupContainer" />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import Dx{WidgetName}, {
        DxColumnChooser
        // ... 
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}, 
            DxColumnChooser
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumnChooser container="#popupContainer" />
        </Dx{WidgetName}>
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';
    import Dx{WidgetName}, {
        DxColumnChooser
        // ... 
    } from 'devextreme-vue/{widget-name}';

    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';  
    import 'devextreme/dist/css/dx.light.css'; 

    import {WidgetName}, {
        ColumnChooser 
        // ...
    } from 'devextreme-react/data-grid';

    export default function App() { 
        return ( 
            <{WidgetName} ... > 
                <ColumnChooser container="#popupContainer" />
            </{WidgetName}>        
        ); 
    } 

---