When a user presses or hovers over funnel items, they change their style to the one specified by the **item**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/item/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/item/hoverStyle/') object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            item: {
                hoverStyle: {
                    hatching: { direction: "left" }
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel ... >
        <dxo-item>
            <dxo-hover-style>
                <dxo-hatching direction="left"></dxo-hatching>
            </dxo-hover-style>
        </dxo-item>
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

If you need to disable this feature, set the [hoverEnabled](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/hoverEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#hoverEnabled') option to **false**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            hoverEnabled: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel ...
        [hoverEnabled]="false">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---
