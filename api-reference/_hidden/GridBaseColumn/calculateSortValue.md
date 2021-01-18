---
id: GridBaseColumn.calculateSortValue
type: String | function(rowData)
---
---
##### shortDescription
Calculates custom values to be used in sorting of the column values.

##### param(rowData): Object
The data of the row to which the cell belongs.

##### return: any
The value to be used in sorting.

---
This option accepts the name of the [data source field](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') that provides values by which to sort the column's data...

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

To apply the sorting, users have to click the specified column header. If you need to sort data when the UI component loads, set the **columns[]**.[sortOrder]({basewidgetpath}/Configuration/columns/#sortOrder) property in addition.

[note]

- The `this` keyword refers to the column's configuration.

- If the DataGrid data is [grouped](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/'), this option does not apply. To sort group rows, use the [calculateGroupValue](/api-reference/_hidden/dxDataGridColumn/calculateGroupValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateGroupValue') and [groupCellTemplate](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupCellTemplate) properties. Refer to this <a href="https://github.com/DevExpress-Examples/DataGrid---How-to-apply-custom-sorting-to-a-grouped-column" target="_blank">Github repository</a> for an example. 

[/note]

#####See Also#####
- [sortingMethod](/api-reference/_hidden/GridBaseColumn/sortingMethod.md '{basewidgetpath}/Configuration/columns/#sortingMethod')