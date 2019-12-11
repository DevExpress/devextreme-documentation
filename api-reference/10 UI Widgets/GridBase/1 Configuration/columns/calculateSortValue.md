---
type: String | function(rowData)
---
---
##### shortDescription
Calculates custom values to be used in sorting.

##### param(rowData): Object
The data of the row to which the cell belongs.

##### return: any
The value to be used in sorting.

---
This option accepts the name of the [data source field](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') that provides values to be used in sorting...

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: "Position", // provides values for the column
                calculateSortValue: "isOnVacation" // provides values to be used in sorting 
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
    import { Dx{WidgetName}Module } from 'devextreme-angular';
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

... or a function that returns such a value.

---
##### jQuery

    <!--JavaScript-->$(function() {
        var {widgetName} = $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: 'Position',
                sortOrder: "asc",
                calculateSortValue: function (rowData) {
                    if (rowData.Position == "CEO")
                        return {widgetName}.columnOption('Position', 'sortOrder') == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top
                    else
                        return rowData.Position; // Others are sorted as usual
                }
            }]
        }).dx{WidgetName}("instance");
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        customSortingFunction (rowData) {
            if (rowData.Position == "CEO")
                return this.sortOrder == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top
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

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}