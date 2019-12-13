The filter row allows a user to filter data by individual columns' values.  Usually, the filter row's cells are text boxes, but the cells of columns that hold date or Boolean values contain other filtering controls (calendars or select boxes). 

![DevExtreme HTML5 JavaScript jQuery Knockout Angular TreeList Filtering FilterRow](/images/treelist/visual_elements/filter_row.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/UsingFilterRow/"
}

To make the filter row visible, assign **true** to the [filterRow](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/filterRow/').**visible** option. You can set a column's [allowFiltering](/api-reference/_hidden/GridBaseColumn/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowFiltering') option to **false** if data should never be filtered by it.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxi-column [allowFiltering]="false" ... ></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

A user-specified filter is automatically applied with a delay by default. Alternatively, it can be applied by a click on the *"Apply Filter"* button if you set the **filterRow**.[applyFilter](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterRow/applyFilter.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/filterRow/#applyFilter') option to *"onClick"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            filterRow: {
                visible: true,
                applyFilter: "onClick"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-filter-row
            [visible]="true"
            applyFilter="onClick">
        </dxo-filter-row>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

Each cell in the filter row contains a magnifying glass icon. Hovering the mouse pointer over it opens a drop-down list with the column's available filter operations.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular TreeList Filtering FilterRow](/images/treelist/visual_elements/filter_row_operation_chooser.png)

The set of available filter operations can be restricted using the [filterOperations](/api-reference/_hidden/GridBaseColumn/filterOperations.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#filterOperations') option. You can also preselect a filter operation and specify the initial filter value with the [selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#selectedFilterOperation') and [filterValue](/api-reference/_hidden/GridBaseColumn/filterValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#filterValue') options. Call the [columnOption](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_options).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_options') method at runtime to change these options:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            filterRow: { visible: true },
            columns: [{
                dataField: "Status",
                filterOperations: ["contains", "="],
                selectedFilterOperation: "contains",
                filterValue: "Pending"
            }]
        });
    });

<!---->

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("columnOption", "Status", {
        selectedFilterOperation: "=",
        filterValue: "Finished"
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxi-column 
            dataField="Status"
            [filterOperations]="['contains', '=']"
            [(selectedFilterOperation)]="selectedOperation"
            [(filterValue)]="filterValue">
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
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
            DxTreeListModule
        ],
        // ...
    })
    
---

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20Widgets/TreeList/40%20Filtering%20and%20Searching/6%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/')
