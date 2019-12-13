The selection capability is not provided out of the box, but it can be implemented using the [onItemClick](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/onItemClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onItemClick') event handler. The following code gives an example for the scenario when a click on a funnel item selects it, and a subsequent click on the same item clears the selection. To check whether the funnel item is already selected, its [isSelected()](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item/3%20Methods/isSelected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/Methods/#isSelected') method is called.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            onItemClick: function (e) {
                e.item.select(!e.item.isSelected())
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel
        (onItemClick)="onItemClick($event)">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onItemClick (e) {
            e.item.select(!e.item.isSelected())
        };
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

In the previous code example, selection was cleared of a specific item. If you need to clear selection of all items, call the **Funnel**'s [clearSelection()](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/3%20Methods/clearSelection().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Methods/#clearSelection') method.

---
##### jQuery

    <!--JavaScript-->$("#funnelContainer").dxFunnel("clearSelection");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxFunnelModule, DxFunnelComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxFunnelComponent, { static: false }) funnel: DxFunnelComponent;
        // Prior to Angular 8
        // @ViewChild(DxFunnelComponent) funnel: DxFunnelComponent;
        clearSelection() {
            this.funnel.instance.clearSelection();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-handleevents
#include common-link-callmethods
- [Access a Funnel Item Using the API](/concepts/05%20Widgets/Funnel/14%20Funnel%20Items/25%20Access%20a%20Funnel%20Item%20Using%20the%20API.md '/Documentation/Guide/Widgets/Funnel/Funnel_Items/Access_a_Funnel_Item_Using_the_API/')
