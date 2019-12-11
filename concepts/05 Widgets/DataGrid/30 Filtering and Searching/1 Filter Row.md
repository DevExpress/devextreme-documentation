The filter row allows a user to filter data by individual columns' values.  Usually, the filter row's cells are text boxes, but the cells of columns that hold date or Boolean values contain other filtering controls (calendars or select boxes).

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Filtering FilterRow](/images/DataGrid/visual_elements/filter_row.png)

To make the filter row visible, assign **true** to the [filterRow](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/').**visible** option. You can set a column's [allowFiltering](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering') option to **false** if data should never be filtered by it.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            filterRow: { visible: true },
            columns: [{
                // ...
                allowFiltering: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxi-column [allowFiltering]="false" ... ></dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

A user-specified filter is automatically applied with a delay by default. Alternatively, it can be applied by a click on the *"Apply Filter"* button if you set the **filterRow**.[applyFilter](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow/applyFilter.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/#applyFilter') option to *"onClick"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            filterRow: {
                visible: true,
                applyFilter: "onClick"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-filter-row
            [visible]="true"
            applyFilter="onClick">
        </dxo-filter-row>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

Each cell in the filter row contains a magnifying glass icon. Hovering the mouse pointer over it opens a drop-down list with the column's available filter operations.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Filtering FilterRow](/images/DataGrid/visual_elements/filter_row_operation_chooser.png)

The set of available filter operations can be restricted using the [filterOperations](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/filterOperations.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterOperations') option. You can also preselect a filter operation and specify the initial filter value with the [selectedFilterOperation](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/selectedFilterOperation.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#selectedFilterOperation') and [filterValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/filterValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterValue') options. Call the [columnOption](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_options).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_options') method at runtime to change these options:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            filterRow: { visible: true },
            columns: [{
                dataField: "Status",
                filterOperations: ["contains", "="],
                selectedFilterOperation: "contains",
                filterValue: "Pending"
            }]
        })
    });

<!---->

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("columnOption", "Status", {
        selectedFilterOperation: "=",
        filterValue: "Finished"
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxi-column 
            dataField="Status"
            [filterOperations]="['contains', '=']"
            [(selectedFilterOperation)]="selectedOperation"
            [(filterValue)]="filterValue">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectedOperation: string = "contains";
        filterValue: any = "Pending";
        applyFilter (operation, value) {
            this.selectedOperation = operation;
            this.filterValue = value;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/6%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/')
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/jQuery/Light)
