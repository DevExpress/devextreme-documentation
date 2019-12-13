Set the [allowColumnReordering](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/allowColumnReordering.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#allowColumnReordering') option to **true** to allow a user to reorder columns. 
If a specific column should not be moved, set its [allowReordering](/api-reference/_hidden/GridBaseColumn/allowReordering.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowReordering') option to **false**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            allowColumnReordering: true,
            columns: [
                { dataField: "CompanyName", allowReordering: false },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        [allowColumnReordering]="true">
        <dxi-column dataField="CompanyName" [allowReordering]="false"></dxi-column>
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/Reordering/"
}
