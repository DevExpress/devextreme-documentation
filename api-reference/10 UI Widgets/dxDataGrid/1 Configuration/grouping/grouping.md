---
type: Object
---
---
##### shortDescription
Specifies grouping settings and the behavior of [grouped](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/') grid records.

---
An end-user can group data using the group panel, the context menu appearing by a click on a column header, or both. The following list provides an overview of grouping settings that you can specify using the **grouping** object.

* **Enabling**      
To enable grouping using the context menu, assign **true** to the [contextMenuEnabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/contextMenuEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#contextMenuEnabled') option. Also, you can enable grouping using the group panel. For this purpose, assign **true** or *"auto"* to the **groupPanel**.[visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#visible') option.

    ---
    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                grouping: {
                    contextMenuEnabled: true 
                },
                groupPanel: {
                    visible: true 
                }
            });
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-grouping [contextMenuEnabled]="true"></dxo-grouping>
            <dxo-group-panel [visible]="true"></dxo-group-panel>
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
    
    If you need to disable grouping for an individual column, assign **false** to the [allowGrouping](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowGrouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping') property of this column.
* **Behavior**      
There are two modes defining how the user expands/collapses groups. The *"buttonClick"* mode is suitable for medium- and large-screen devices. The *"rowClick"* mode is designed for small-screen devices, though it performs perfectly on the others as well. For more information on these modes, see the [expandMode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/expandMode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#expandMode') option.

    ---
    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                grouping: {
                    // ...
                    expandMode: 'buttonClick' // or 'rowClick'
                }
            });
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-grouping [expandMode]="buttonClick"></dxo-grouping> <!-- or 'rowClick' -->
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

    A group can appear either expanded or collapsed initially. To specify that, use the [autoExpandAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/autoExpandAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll') option. Also, you can disallow the user to collapse groups. For this purpose, assign **false** to the [allowCollapsing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/allowCollapsing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#allowCollapsing') option.
    
    ---
    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                grouping: {
                    // ...
                    autoExpandAll: true, 
                    allowCollapsing: false 
                }
            });
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-grouping 
                [autoExpandAll]="true" 
                [allowCollapsing]="false">
            </dxo-grouping>
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

    Additionally, you can collapse/expand grid groups from code using the [collapseAll(groupIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/collapseAll(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAllgroupIndex') and [expandAll(groupIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/expandAll(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex') methods.

#####See Also#####
- [Grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/')
- [groupPanel](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/') - configures the group panel.
- [expandAll(groupIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/expandAll(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex') and [collapseAll(groupIndex)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/collapseAll(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAllgroupIndex') - expand/collapse groups in code.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridgroupinglocaldatagrouping/"
}