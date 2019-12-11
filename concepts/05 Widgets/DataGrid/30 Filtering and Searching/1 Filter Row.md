The filter row allows a user to filter data by values of individual columns. Usually, cells in the filter row are text boxes, but in columns that hold date or Boolean values, those cells contain controls more suitable for filtering, like calendars or select boxes.  

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Filtering FilterRow](/images/DataGrid/visual_elements/filter_row.png)

To make the filter row visible, assign **true** to the [filterRow](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/').**visible** option. You can set a column's [allowFiltering](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering') option to **false** if data should never be filtered by it.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
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
    import { DxDataGridModule } from 'devextreme-angular';
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

A user-specified filter applies automatically with a delay by default. Alternatively, it can be applied by a click on the *"Apply Filter"* button if you set the **filterRow**.[applyFilter](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow/applyFilter.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/#applyFilter') option to *"onClick"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
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
    import { DxDataGridModule } from 'devextreme-angular';
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

Each cell in the filter row contains a magnifying glass icon, pausing on which opens a drop-down list with filters available for the column.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Filtering FilterRow](/images/DataGrid/visual_elements/filter_row_operation_chooser.png)

The set of available filters can be restricted using the [filterOperations](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/filterOperations.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterOperations') option. You can also preselect a filter with the [selectedFilterOperation](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/selectedFilterOperation.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#selectedFilterOperation') option. Combining these two options, you can preselect a filter and disallow a user to change it, for example:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            filterRow: { visible: true },
            columns: [{
                // ...
                selectedFilterOperation: "contains",
                filterOperations: []
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxi-column ...
            selectedFilterOperation="contains"
            [filterOperations]="[]">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
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

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/5%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/jQuery/Light)
