---
id: ColumnProperties.customizeText
type: function(fieldInfo)
---
---
##### shortDescription
Customizes text displayed in field values.

##### return: String
The text the field value should display.

##### context: Column
The `this` keyword refers to the column's configuration.

##### param(fieldInfo): Object
Information on the current field.

##### field(fieldInfo.groupInterval): String | Number
Indicates how header filter values were combined into groups. Available if **target** is *"headerFilter"*.

##### field(fieldInfo.target): String
The UI element where the **customizeText** function was called: *"card"*, *"headerFilter"*, *"search"*, *"filterPanel"*, or *"filterBuilder"*.

##### field(fieldInfo.value): any
The field value.

##### field(fieldInfo.valueText): String
The [formatted](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/format.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/#format') value converted to a string.

---
---
#####jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                dataField: "Temperature",
                customizeText: function(fieldInfo) {
                    return fieldInfo.value + " °C";
                }
            }]
        });
    });

#####Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
       <dxi-{widget-name}-column
           dataField="Temperature"
           [customizeText]="customizeText"
       ></dxi-{widget-name}-column>
    </dx-{widget-name}>


    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        customizeText(fieldInfo) {
            return fieldInfo.value + " °C";
        }
    }

#####Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn
                data-field="Temperature" 
                :customize-text="customizeText"
            />
        </Dx{WidgetName}>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { Dx{WidgetName}, DxColumn } from "devextreme-vue/{widget-name}";

    function customizeText(fieldInfo) {
        return fieldInfo.value + " °C";
    }
    </script>

#####React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import {WidgetName}, { Column } from "devextreme-react/{widget-name}";
    
    const customizeText = (fieldInfo) => {
        return fieldInfo.value + " °C";
    }

    function App() {
        return (
            <{WidgetName} ... >
                <Column dataField="Temperature" customizeText={customizeText} />
            </{WidgetName}>
        );
    }
    export default App;

---
