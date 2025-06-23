---
id: ColumnProperties.setFieldValue
type: function(newData, value, currentCardData)
---
---
##### shortDescription
Specifies a function to be invoked after the user has edited a field value, but before it is saved in the data source.

##### param(newData): Object
The data object where new data should be set.

##### param(value): any
The input value.

##### param(currentCardData): Object
Accesses the current card data in read-only mode.

##### return: void | Promise<void>
Return a promise for an asynchronous operation or return nothing.

##### context: Column
The `this` keyword refers to the column's configuration.

---
This function allows you to process user input before it is saved to the data source. It accepts the **newData**, **value**, and **currentCardData** parameters. **value** is the user input that you should assign to one of the **newData** fields. Fill the empty **newData** object with fields whose values should be saved in the current row's data object. You can use the read-only **currentCardData** parameter to access the current card's data.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [
                "Price",
                {
                    dataField: "Count",
                    dataType: "number",
                    setFieldValue: function(newData, value, currentCardData) {
                        newData.Count = value;
                        newData.TotalPrice = currentCardData.Price * value;
                    }
                },
                "TotalPrice",
                // ...
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-{widget-name}-column dataField="Price"></dxi-{widget-name}-column>
        <dxi-{widget-name}-column
            dataField="Count"
            dataType="number"
            [setFieldValue]="setFieldValue">
        </dxi-{widget-name}-column>
        <dxi--{widget-name}column dataField="TotalPrice"></dxi-{widget-name}-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        setFieldValue (newData, value, currentCardData) {
            newData.Count = value;
            newData.TotalPrice = currentCardData.Price * value;
        }
    }

#####Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn data-field="Price" />
            <DxColumn data-field="Count" data-type="number" :set-cell-value="setFieldValue" />
            <DxColumn data-field="TotalPrice" />
        </Dx{WidgetName}>
    </template>
    <script setup lang="ts">
    import 'devextreme/dist/css/dx.light.css';
    import { Dx{WidgetName}, DxColumn } from 'devextreme-vue/{widget-name}';

    const setFieldValue = (newData, value, currentCardData) => {
        newData.Count = value;
        newData.TotalPrice = currentCardData.Price * value;
    }
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import { {WidgetName}, Column } from 'devextreme-react/{widget-name}';

    const App = () => {
        setFieldValue(newData, value, currentCardData) {
            newData.Count = value;
            newData.TotalPrice = currentCardData.Price * value;
        }

        render() {
            return (
                <{WidgetName} ... >
                    <Column dataField="Price" />
                    <Column dataField="Count" dataType="numeric" setFieldValue={setFieldValue}/>
                    <Column dataField="TotalPrice" />
                </{WidgetName}>
            );
        }
    }
    export default App;

---