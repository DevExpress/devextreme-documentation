When a user selects funnel items, they change their style to the one specified by the **item**.[selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/item/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/item/selectionStyle/') object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            item: {
                selectionStyle: {
                    hatching: { direction: "left" }
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel ... >
        <dxo-item>
            <dxo-selection-style>
                <dxo-hatching direction="left"></dxo-hatching>
            </dxo-selection-style>
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