---
id: GridBaseColumn.dataField
type: String | undefined
default: undefined
---
---
##### shortDescription
Binds the column to a field of the [dataSource](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource').

---

The **columns** array can contain column objects and data field names as strings. If you use column objects, specify the **dataField** property to bind the object to a column from a data source:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [
                "CustomerID",
                { dataField: "EmployeeID", width: 200 },
                "OrderDate",
                { dataField: "Freight", format: "fixedPoint" },
                "ShipName",
                "ShipCity"
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column dataField="CustomerID"></dxi-column>
        <dxi-column dataField="EmployeeID" [width]="200"></dxi-column>
        <dxi-column dataField="OrderDate"></dxi-column>
        <dxi-column dataField="Freight" format="fixedPoint"></dxi-column>
        <dxi-column dataField="ShipName"></dxi-column>
        <dxi-column dataField="ShipCity"></dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
        <Dx{WidgetName} ... >
            <DxColumn data-field="CustomerID" />
            <DxColumn data-field="EmployeeID" :width="200" />
            <DxColumn data-field="OrderDate" />
            <DxColumn data-field="Freight" format="fixedPoint" />
            <DxColumn data-field="ShipName" />
            <DxColumn data-field="ShipCity" />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column
    } from 'devextreme-react/{widget-name}';

    export default function App() {
        return (
            <{WidgetName} ... >
                <Column dataField="CustomerID" />
                <Column dataField="EmployeeID" width={200} />
                <Column dataField="OrderDate" />
                <Column dataField="Freight" format="fixedPoint" />
                <Column dataField="ShipName" />
                <Column dataField="ShipCity" />
            </{WidgetName}>
        );
    }
    
---

[note]

Review the following notes about data binding:

- If you create an unbound column (use the [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateCellValue') function), specify the **columns[]**.[name](/api-reference/_hidden/GridBaseColumn/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#name') property instead of **dataField**.

- Data field names cannot be equal to `this` and should not contain the following characters: `.`, `:`, `[`, and `]`.

- Column caption is generated from the **dataField** value. If you want to use a custom caption, specify it in the [caption](/api-reference/_hidden/GridBaseColumn/caption.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#caption') property. Unlike **dataField**, **caption** can contain any characters.

[/note]

#####See Also#####
- [Columns - Overview](/concepts/05%20UI%20Components/DataGrid/15%20Columns/00%20Overview.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Overview/')
