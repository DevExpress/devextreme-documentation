---
id: GridBaseColumn.dataField
type: String
default: undefined
---
---
##### shortDescription
Binds the column to a field of the [dataSource](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource').

---
The **columns** array can contain only the names of data source fields, which is sufficient if you do not need to specify any other column options. But if you do, then this array should contain objects that configure columns. To bind the columns to data source fields, use the **dataField** option. Note that you can combine both declarations in a single array as shown in the following code.

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

#####See Also#####
- [Columns - Overview](/concepts/05%20Widgets/DataGrid/15%20Columns/00%20Overview.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Overview/')