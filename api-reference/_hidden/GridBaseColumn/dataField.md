---
id: GridBaseColumn.dataField
type: String
default: undefined
---
---
##### shortDescription
Binds the column to a field of the [dataSource](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource').

---

The **columns** array can contain the names of data source fields, which is sufficient if you do not need to specify any other column properties. But if you do, then this array can also contain objects that configure columns. To bind a column object to a data source field, use the **dataField** property. 

In the example below, the **columns** array contains both names of data source fields and column objects:

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
    
---

[note]

Please review the following notes about data binding:

- If you create an unbound column (use the [calculateCellValue](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateCellValue) function), specify the **columns[]**.[name](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#name) property instead of **dataField**.

- Data field names cannot be equal to `this` and should not contain the following characters: `.`, `:`, `[`, and `]`.

[/note]

#####See Also#####
- [Columns - Overview](/concepts/05%20Widgets/DataGrid/15%20Columns/00%20Overview.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Overview/')
