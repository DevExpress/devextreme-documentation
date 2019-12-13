The **DataGrid** provides the following API for expanding and collapsing groups:

- **All groups**    
    You can expand and collapse all groups at once by calling the [expandAll(groupIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/expandAll(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex') and [collapseAll(groupIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/collapseAll(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAllgroupIndex') methods without arguments. Groups appear already expanded, a behavior you can change by setting the **grouping**.[autoExpandAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/autoExpandAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll') option to **false**.
    
    ---

    #####jQuery 

        <!--JavaScript-->
        $(function () {
            var dataGrid = $("#dataGridContainer").dxDataGrid({
                // ...
                grouping: { 
                    autoExpandAll: false
                }
            }).dxDataGrid("instance");
            function expandAll () {
                dataGrid.expandAll();
            }
            function collapseAll () {
                dataGrid.collapseAll();
            }
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-grouping 
                [autoExpandAll]="false">
            </dxo-grouping>
        </dx-data-grid>

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
            // Prior to Angular 8
            // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
            collapseAll () {
                this.dataGrid.instance.collapseAll();
            }
            expandAll () {
                this.dataGrid.instance.expandAll();
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

- **Groups of a specific level**    
    The same **expandAll(groupIndex)** and **collapseAll(groupIndex)** methods expand and collapse groups of a specific level if you pass a non-negative integer as the **groupIndex** parameter to them. It is the same **groupIndex** that a column gets when it participates in grouping. The column's [autoExpandGroup](/api-reference/_hidden/dxDataGridColumn/autoExpandGroup.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#autoExpandGroup') option specifies the initial state of groups of this level.

    ---

    #####jQuery

        <!--JavaScript-->
        $(function () {
            var dataGrid = $("#dataGridContainer").dxDataGrid({
                // ...
                columns: [
                    { dataField: 'firstName', groupIndex: 0 },
                    { dataField: 'lastName', groupIndex: 1, autoExpandGroup: false },
                    // ...
                ]
            }).dxDataGrid("instance");
            function expandDataGroupedByLastName () {
                dataGrid.expandAll(1);
            }
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxi-column 
                dataField="firstName"
                [groupIndex]="0">
            </dxi-column>
            <dxi-column 
                dataField="lastName"
                [groupIndex]="1"
                [autoExpandGroup]="false">
            </dxi-column>
        </dx-data-grid>

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
            // Prior to Angular 8
            // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
            expandDataGroupedByLastName () {
                this.dataGrid.instance.expandAll(1);
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

- **Individual groups**     
    The [expandRow(key)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/expandRow(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandRowkey') and [collapseRow(key)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/collapseRow(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseRowkey') methods expand and collapse an individual group. You can check the group's current state using the [isRowExpanded(key)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/isRowExpanded(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#isRowExpandedkey')  method.

    ---

    #####jQuery

        <!--JavaScript-->
        function toggleGroup (groupKey) {
            var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
            if (dataGrid.isRowExpanded(groupKey)) {
                dataGrid.collapseRow(groupKey);
            } else {
                dataGrid.expandRow(groupKey);
            }
        }

    #####Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
            // Prior to Angular 8
            // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
            toggleGroup (groupKey) {
                if (this.dataGrid.instance.isRowExpanded(groupKey)) {
                    this.dataGrid.instance.collapseRow(groupKey);
                } else {
                    this.dataGrid.instance.expandRow(groupKey);
                }
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
- [Group Index and Key](/concepts/05%20Widgets/DataGrid/45%20Grouping/20%20API/05%20Group%20Index%20and%20Key.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Group_Index_and_Key')
- [User Interaction - Expand and Collapse Groups](/concepts/05%20Widgets/DataGrid/45%20Grouping/10%20User%20Interaction/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#User_Interaction/Expand_and_Collapse_Groups')
