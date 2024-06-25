---
id: GridBase.cellValue(rowIndex, visibleColumnIndex, value)
---
---
##### shortDescription
Sets a new value to a cell with specific row and column indexes.

##### param(rowIndex): Number
The index of the row to which the cell belongs. Refer to [Column and Row Indexes](/concepts/05%20UI%20Components/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Column_and_Row_Indexes/') for more information.

##### param(visibleColumnIndex): Number
The visible index of the column to which the cell belongs.

##### param(value): any
The cell's new value.

---
Call [saveEditData()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/saveEditData().md '{basewidgetpath}/Methods/#saveEditData') after this method to save the changes:

---
#####jQuery

    <!--JavaScript-->
    var {widgetName} = $("#{widgetName}Container").dx{WidgetName}("instance");
    {widgetName}.cellValue(0, 1, "newValue");
    {widgetName}.saveEditData();

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { Dx{WidgetName}Module, Dx{WidgetName}Component } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(Dx{WidgetName}Component, { static: false }) {widgetName}: Dx{WidgetName}Component;
        // Prior to Angular 8
        // @ViewChild(Dx{WidgetName}Component) {widgetName}: Dx{WidgetName}Component;
        updateCell(rowIndex, columnIndex, value) {
            this.{widgetName}.instance.cellValue(rowIndex, columnIndex, value);
            this.{widgetName}.instance.saveEditData();
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :ref="{widgetName}RefKey"> 
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';

    const {widgetName}RefKey = 'my-{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                {widgetName}RefKey
            };
        },
        methods: {
            updateCell(rowIndex, columnIndex, value) {
                this.{widgetName}.cellValue(rowIndex, columnIndex, value);
                this.{widgetName}.saveEditData();
            }
        },
        computed: {
            {widgetName}: function() {
                return this.$refs[{widgetName}RefKey].instance;
            }
        }
    }
    </script>

##### React
    
    <!-- tab: App.js -->
    import React, { useRef } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    export default function App() {
        const {widgetName} = useRef(null);
        const updateCell = (rowIndex, columnIndex, value) => {
            {widgetName}.current.instance().cellValue(rowIndex, columnIndex, value);
            {widgetName}.current.instance().saveEditData();
        };
        return (
            <{WidgetName} ...
                ref={{widgetName}}>
            </{WidgetName}>
        );
    }

---

#####See Also#####
#include common-link-callmethods