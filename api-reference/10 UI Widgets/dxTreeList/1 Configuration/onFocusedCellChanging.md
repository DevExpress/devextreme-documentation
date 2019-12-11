---
EventForAction: ..\4 Events\focusedCellChanging.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed before the focused cell changes.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.cellElement): dxElement
The container of the cell that should be focused. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.prevColumnIndex): Number
The index of the previously focused cell's column.

##### field(e.prevRowIndex): Number
The index of the previously focused cell's row.

##### field(e.newColumnIndex): Number
The index of the column the cell that should be focused belongs to.

##### field(e.newRowIndex): Number
The index of the row the cell that should be focused belongs to.

##### field(e.event): event
The event that caused the function's execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

##### field(e.rows): Array<dxTreeListRowObject>
The visible rows' properties.

##### field(e.columns): Array<dxTreeListColumn>
The visible columns' properties.

##### field(e.cancel): Boolean
Allows you to cancel focusing a new cell.

##### field(e.isHighlighted): Boolean
**true** if the cell is highlighted; otherwise **false**, even if the cell's row is highlighted.

---
In the following code, the **onFocusedCellChanging** function is used to customize keyboard navigation within a row. The cell navigation is looped in a single row because focus moves to the row's first cell after reaching the last cell and vice versa:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            onFocusedCellChanging: function (e) {
                if (e.newColumnIndex == e.prevColumnIndex) {
                    e.newColumnIndex = (e.newColumnIndex == 0 ? e.columns.length - 1 : 0)
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onFocusedCellChanging (e) { 
            if (e.newColumnIndex == e.prevColumnIndex) {
                e.newColumnIndex = (e.newColumnIndex == 0 ? e.columns.length - 1 : 0)
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
        (onFocusedCellChanging)="onFocusedCellChanging($event)">
    </dx-tree-list>
    
---

#####See Also#####
- [focusedRowIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowIndex.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowIndex') | [focusedRowKey](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowKey.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowKey')
- [focusedColumnIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedColumnIndex.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedColumnIndex')