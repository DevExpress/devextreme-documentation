---
EventForAction: ..\4 Events\contextMenuPreparing.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **contextMenuPreparing** event. Executed before a context menu is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.items): Array
Items to be displayed in the context menu. The structure of items is described in the [Default Item Template](/api-reference/10%20UI%20Widgets/dxContextMenu/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template/') section.

##### field(e.target): String
The name of the element on which the context menu is invoked: 'header', 'content' or 'footer'. This field is read-only.

##### field(e.targetElement): jQuery
This element's container.

##### field(e.columnIndex): Number
The index of the column on which the context menu is invoked.

##### field(e.column): Object
[Configuration](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') of this column.

##### field(e.rowIndex): Number
The visible index of the row on which the context menu is invoked.

##### field(e.row): dxTreeListRowObject
The row properties.

---
This handler allows you to customize the context menu.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ... 
            onContextMenuPreparing: function(e) { 
                if (e.target == "header" && e.columnIndex == 0) {
                    e.items.push({
                        text: "Item Text",
                        onItemClick: function() {
                            // ...
                        }
                    });
                } 
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onContextMenuPreparing (e) { 
            if (e.target == "header" && e.columnIndex == 0) {
                e.items.push({
                    text: "Item Text",
                    onItemClick: function() {
                        // ...
                    }
                });
            } 
        }
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
        (onContextMenuPreparing)="onContextMenuPreparing($event)">
    </dx-tree-list>
    
---