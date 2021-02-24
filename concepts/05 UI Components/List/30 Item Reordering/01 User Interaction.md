If you want to allow the user to reorder items on the List, define the the [itemDragging](/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemDragging) property, and within it set the [allowReordering](/Documentation/ApiReference/UI_Components/dxSortable/Configuration/#allowReordering) property to **true**. This setting supplies each List item with a button that enables the user to move the item with drag and drop on mouse-equipped platforms or with touch-and-drag on touch-enabled devices.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            itemDragging: {
                allowReordering: true,
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...>
        <dxo-item-dragging...
            [allowReordering]="true"
        </dxo-item-dragging>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-configurewidget