---
id: GridBaseColumn.lookup.displayExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the data source field whose values must be displayed.

##### param(data): Object
A row's data.

##### return: String
The displayed value.

---
This property accepts a string - the name of the data field that provides displayed values, or a function that returns the displayed value.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CascadingLookups/"
}

[note]

Values in a lookup column are sorted by the **valueExpr** field. Implement the column's [calculateSortValue](/api-reference/_hidden/GridBaseColumn/calculateSortValue.md '{basewidgetpath}/Configuration/columns/#calculateSortValue') function if you want to sort by the **displayExpr** field instead:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                // ...
                lookup: {
                    // ...
                },
                calculateSortValue: function (data) {
                    const value = this.calculateCellValue(data);
                    return this.lookup.calculateCellValue(value);
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column ...
            [calculateSortValue]="calculateSortValue">
            <dxo-lookup ... ></dxo-lookup>
        </dxi-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    #include angular-component-decorator
    export class AppComponent {
        calculateSortValue (data) {
            const column = this as any;
            const value = column.calculateCellValue(data);
            return column.lookup.calculateCellValue(value);
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn ...
                :calculate-sort-value="calculateSortValue">
                <DxLookup ... />
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn,
        DxLookup
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxLookup
        },
        data() {
            return {
                calculateSortValue (data) {
                    const column = this;
                    const value = column.calculateCellValue(data);
                    return column.lookup.calculateCellValue(value);
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column,
        Lookup
    } from 'devextreme-react/{widget-name}';

    function calculateSortValue (data) {
        const column = this;
        const value = column.calculateCellValue(data);
        return column.lookup.calculateCellValue(value);
    }

    export default function App() {
        return (
            <{WidgetName} ... >
                <Column ...
                    calculateSortValue={calculateSortValue}>
                    <Lookup ... />
                </Column>
            </{WidgetName}>
        );
    }

---

[/note]