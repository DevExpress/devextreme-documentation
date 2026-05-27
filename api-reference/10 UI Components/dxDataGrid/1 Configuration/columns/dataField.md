---
id: dxDataGrid.Options.columns.dataField
type: String | undefined
default: undefined
---
---
##### shortDescription
Binds the column to a [dataSource](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') field.

---

---
##### jQuery

To specify only the **dataField** property in a column, you can add data field names as strings to the **columns** array. The following code snippet uses this approach for four columns:

    <!-- tab: index.js -->
    $("#{widget-name}-container").dx{WidgetName}({
        columns: [
            "CustomerID",
            { dataField: "EmployeeID", width: 200 },
            "OrderDate",
            { dataField: "Freight", format: "fixedPoint" },
            "ShipName",
            "ShipCity",
        ]
    });

##### Angular

The following code snippet configures six columns:
    
    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-{widget-name}-column dataField="CustomerID"></dxi-{widget-name}-column>
        <dxi-{widget-name}-column dataField="EmployeeID" [width]="200"></dxi-{widget-name}-column>
        <dxi-{widget-name}-column dataField="OrderDate"></dxi-{widget-name}-column>
        <dxi-{widget-name}-column dataField="Freight" format="fixedPoint"></dxi-{widget-name}-column>
        <dxi-{widget-name}-column dataField="ShipName"></dxi-{widget-name}-column>
        <dxi-{widget-name}-column dataField="ShipCity"></dxi-{widget-name}-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    @NgModule({
        imports: [
            Dx{WidgetName}Module
        ],
    })

##### Vue

The following code snippet configures six columns:

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
    import { Dx{WidgetName}, DxColumn } from 'devextreme-vue/{widget-name}';

    </script>

##### React

The following code snippet configures six columns:

    <!-- tab: App.tsx -->
    import { {WidgetName}, Column } from 'devextreme-react/{widget-name}';

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

- Data field names cannot be `this` or contain the following characters: `.`, `:`, `[`, and `]`.

- The column caption is generated from the **dataField** value. If you want to use a custom caption, specify it in the [caption](/api-reference/_hidden/GridBaseColumn/caption.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#caption') property. Unlike **dataField**, **caption** can contain any characters.

- [Grouping](/Documentation/Guide/UI_Components/DataGrid/Grouping/#API) operations use **dataField** values as unique column identifiers (instead of [name]({basewidgetpath}/Configuration/columns/#name) values).

[/note]

#####See Also#####
- [Columns - Overview](/concepts/05%20UI%20Components/DataGrid/15%20Columns/00%20Overview.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Overview/')
