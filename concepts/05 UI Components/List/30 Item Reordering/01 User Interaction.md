If you want to allow the user to reorder items on the **List**, set the [allowItemReordering](/Documentation/ApiReference/UI_Components/dxList/Configuration/#allowItemReordering) property to **true**. This setting supplies each **List** item with a button that enables the user to move the item with drag and drop on mouse-equipped platforms or with touch-and-drag on touch-enabled devices.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            allowItemReordering: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...
        [allowItemReordering]="true">
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