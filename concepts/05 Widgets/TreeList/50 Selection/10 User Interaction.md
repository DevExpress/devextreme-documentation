The **TreeList** widget supports single and multiple row selection. Use the **selection**.[mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/selection/#mode') option to change the current mode.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            selection: {
                mode: "single" // or "multiple" | "none"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-selection
            mode="single"> <!-- "multiple" | "none" -->
        </dxo-selection>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
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

In the single mode, only one row can be selected at a time. In the multiple mode, rows are supplied with check boxes for multiple selection. A check box in the header of the first column allows a user to select all rows at once. Clicking this check box selects only those rows that meet filtering conditions if a filter is applied.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Sorting](/images/treelist/selection.png)

You can disable the latter capability by setting the **selection**.[allowSelectAll](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/selection/allowSelectAll.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/selection/#allowSelectAll') option to *false*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            selection: {
                mode: "multiple",
                allowSelectAll: false
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-selection
            mode="multiple"
            [allowSelectAll]="false">
        </dxo-selection>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
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

Note that selection in any mode is **non-recursive**, which means that when a user selects a row, its nested rows remain unselected.

<a href="/Demos/WidgetsGallery/Demo/Tree_List/SingleRowSelection/jQuery/Light/" class="button orange small fix-width-155" target="_blank">Single Selection Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Tree_List/MultipleRowSelection/jQuery/Light/" class="button orange small fix-width-155" target="_blank">Multiple Selection Demo</a>