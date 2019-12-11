Command columns are used for interaction. The **TreeList** provides the following command columns.

- **Editing Column**        
Contains editing controls. Appears when [editing](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/editing '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/') is allowed and depends on the [editing mode](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode').

- **Adaptive Column**       
Contains buttons that expand adaptive detail rows. Appears if [columnHidingEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnHidingEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#columnHidingEnabled') is **true** or [hidingPriority](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/hidingPriority.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#hidingPriority') is set for at least one column and only when certain columns do not fit into the screen or container size.

![DevExtreme HTML5 JavaScript TreeList CommandColumns EditingColumn AdaptiveColumn](/images/treelist/visual_elements/column-types_command.png)

You can relocate or resize the command columns by changing their **visibleIndex** and **width** options. For this, call the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_optionName_optionValue') method as shown by the following code.

---
##### jQuery

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    // places the editing column before all others
    treeList.columnOption("command:edit", "visibleIndex", -2);

    // changes the width of the editing column to 200 pixels
    treeList.columnOption("command:edit", "width", 200);

    // places the adaptive column before all data columns, but after the editing column
    treeList.columnOption("command:adaptive", "visibleIndex", -1);

    // changes the width of the adaptive column to 80 pixels
    treeList.columnOption("command:adaptive", "width", 80);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        modifyEditingColumn () {
            // places the editing column before all others
            this.treeList.instance.columnOption("command:edit", "visibleIndex", -2);

            // changes the width of the editing column to 200 pixels
            this.treeList.instance.columnOption("command:edit", "width", 200);
        }
        modifyAdaptiveColumn () {
            // places the adaptive column before all data columns, but after the editing column
            this.treeList.instance.columnOption("command:adaptive", "visibleIndex", -1);

            // changes the width of the adaptive column to 80 pixels
            this.treeList.instance.columnOption("command:adaptive", "width", 80);
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

You can also customize cells of command columns using the [onCellPrepared](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellPrepared.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellPrepared') function. To distinguish cells of a command column from others, check the argument's **column.command** field for the *"edit"* or *"adaptive"* value.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            onCellPrepared: function(e) {
                if (e.rowType == "data") {
                    var cell = e.cellElement;
                    switch (e.column.command) {
                        case "edit":
                            // ...
                            break;
                        case "adaptive":
                            // ...
                            break;
                    }
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onCellPrepared (e) {
            if (e.rowType == "data") {
                let cell = e.cellElement;
                switch (e.column.command) {
                    case "edit":
                        // ...
                        break;
                    case "adaptive":
                        // ...
                        break;
                }
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ...
        (onCellPrepared)="onCellPrepared($event)">
    </dx-tree-list>
    
---

#####See Also#####
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/Adaptability/jQuery/Light)

[tags] treelist, tree list, column types, command columns, editing column, adaptive column