Call the [getAllItems()](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/3%20Methods/getAllItems().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Methods/#getAllItems') method to access funnel items. It returns a collection of objects whose fields and methods are described in the [Item](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/') section.

---
##### jQuery

    <!--JavaScript-->
    var funnelItems = $("#funnelContainer").dxFunnel("getAllItems");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxFunnelModule, DxFunnelComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxFunnelComponent, { static: false }) funnel: DxFunnelComponent;
        // Prior to Angular 8
        // @ViewChild(DxFunnelComponent) funnel: DxFunnelComponent;
        funnelItems: any = [];
        getFunnelItems() {
            this.funnelItems = this.funnel.instance.getAllItems();
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

You can also access a funnel item in the event handlers. For example, the [onItemClick](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/onItemClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onItemClick') event handler gets the clicked item in the argument.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            onItemClick: function (e) {
                var item = e.item;
                // ...
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
            let item = e.item;
            // ...
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

#####See Also#####
#include common-link-callmethods