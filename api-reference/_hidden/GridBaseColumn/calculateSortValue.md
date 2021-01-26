---
id: GridBaseColumn.calculateSortValue
type: String | function(rowData)
---
---
##### shortDescription
Calculates custom values used to sort this column.

##### param(rowData): Object
The data of the row to which the cell belongs.

##### return: any
The value to be used in sorting.

---
This property accepts the name of the [data source field](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') that provides values by which to sort this column...

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: "Position", // provides values for the column
                calculateSortValue: "isOnVacation" // provides values for sorting of the `Position` column
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="Position" <!--provides values for the column -->
            calculateSortValue="isOnVacation"> <!-- provides values to be used in sorting -->
        </dxi-column>
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

... or a function that returns such values:

---
##### jQuery

    <!--JavaScript-->$(function() {
        var {widgetName} = $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: "Position",
                sortOrder: "asc",
                calculateSortValue: function (rowData) {
                    if (rowData.Position == "CEO")
                        return {widgetName}.columnOption("Position", "sortOrder") == "asc" ? "aaa" : "zzz"; // CEOs are always displayed at the top
                    else
                        return rowData.Position; // Others are sorted as usual
                }
            }]
        }).dx{WidgetName}("instance");
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        customSortingFunction (rowData) {
            let column = this as any;
            if (rowData.Position == "CEO")
                return column.sortOrder == "asc" ? "aaa" : "zzz"; // CEOs are always displayed at the top
            else
                return rowData.Position; // Others are sorted as usual
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="Position"
            sortOrder="asc"
            [calculateSortValue]="customSortingFunction">
        </dxi-column>
    </dx-{widget-name}>
    
---

[note]

- The `this` keyword refers to the column's configuration.

- **calculateSortValue** does not affect group rows. To sort them, implement the [calculateGroupValue](/api-reference/_hidden/dxDataGridColumn/calculateGroupValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateGroupValue') in addition to **calculateSortValue**. You should also define the [groupCellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupCellTemplate) to apply a custom template for group rows. Refer to the following GitHub repository for an example: <a href="https://github.com/DevExpress-Examples/DataGrid---How-to-apply-custom-sorting-to-a-grouped-column" target="_blank">DataGrid - How to apply custom sorting to a grouped column</a>. 

[/note]

#####See Also#####
- [sortingMethod](/api-reference/_hidden/GridBaseColumn/sortingMethod.md '{basewidgetpath}/Configuration/columns/#sortingMethod')
- columns[].[sortOrder]({basewidgetpath}/Configuration/columns/#sortOrder)