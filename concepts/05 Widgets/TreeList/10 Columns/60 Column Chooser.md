The column chooser allows a user to change the set of columns at runtime. It is configured using the [columnChooser](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnChooser '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columnChooser/') object and may operate in two [modes](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnChooser/mode.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columnChooser/#mode'): the default drag and drop mode and the select mode designed for touch devices.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columnChooser: {
                enabled: true,
                mode: "dragAndDrop" // or "select"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-column-chooser
            [enabled]="true"
            mode="dragAndDrop"> <!-- or "select" -->
        </dxo-column-chooser>
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

<img src="/Content/images/doc/20_2/treelist/visual_elements/column-chooser_draganddrop-mode.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList ColumnChooser" style="margin-right:60px" /> <img src="/Content/images/doc/20_2/treelist/visual_elements/column-chooser_select-mode.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList ColumnChooser" style="margin-right:90px" />

Set a column's [allowHiding](/api-reference/_hidden/GridBaseColumn/allowHiding.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowHiding') option to **false** if it should never be hidden. For columns whose headers should never appear in the column chooser, set the [showInColumnChooser](/api-reference/_hidden/GridBaseColumn/showInColumnChooser.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#showInColumnChooser') option to **false**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columnChooser: { enabled: true },
            columns: [{
                // ...
                allowHiding: false // cannot be hidden
            }, {
                // ...
                showInColumnChooser: false // does not appear in the column chooser even when hidden
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-column-chooser [enabled]="true"></dxo-column-chooser>
        <dxi-column ...
            [allowHiding]="false"> <!-- cannot be hidden -->
        </dxi-column>
        <dxi-column ...
            [showInColumnChooser]="false"> <!-- does not appear in the column chooser even when hidden -->
        </dxi-column>
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

Call the [showColumnChooser()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/showColumnChooser().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#showColumnChooser') or [hideColumnChooser()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/hideColumnChooser().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#hideColumnChooser') method to control the column chooser programmatically.

---
##### jQuery

    <!--JavaScript-->
    var treeList = $("#treeListContainer").dxTreeList("instance");
    treeList.showColumnChooser();
    treeList.hideColumnChooser();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        showColumnChooser () {
            this.treeList.instance.showColumnChooser();
        };
        hideColumnChooser () {
            this.treeList.instance.hideColumnChooser();
        };
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/ColumnChooser/"
}

#####See Also#####
- [Hide a Column Using the API](/concepts/05%20Widgets/TreeList/10%20Columns/35%20Hide%20a%20Column%20Using%20the%20API.md '/Documentation/Guide/Widgets/TreeList/Columns/Hide_a_Column_Using_the_API/')
- [Adaptability](/concepts/05%20Widgets/TreeList/10%20Columns/50%20Adaptability.md '/Documentation/Guide/Widgets/TreeList/Columns/Adaptability/')
- [Column Fixing](/concepts/05%20Widgets/TreeList/10%20Columns/30%20Column%20Fixing.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Fixing/')