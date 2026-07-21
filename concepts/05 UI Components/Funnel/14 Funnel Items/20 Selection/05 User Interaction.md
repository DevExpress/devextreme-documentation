When a user selects funnel items, they change their style to the one specified by the **item**.[selectionStyle](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/item/selectionStyle '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/item/selectionStyle/') object.

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
        <dxo-funnel-item>
            <dxo-funnel-selection-style>
                <dxo-funnel-hatching direction="left"></dxo-funnel-hatching>
            </dxo-funnel-selection-style>
        </dxo-funnel-item>
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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxFunnel ... >
            <DxItem ... >
                <DxSelectionStyle>
                    <DxHatching direction="left" />
                </DxSelectionStyle>
            </DxItem>
        </DxFunnel>
    </template>

    <script>
    import DxFunnel, {
        DxItem,
        DxSelectionStyle,
        DxHatching
    } from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel,
            DxItem,
            DxSelectionStyle,
            DxHatching
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Funnel, {
        Item,
        SelectionStyle,
        Hatching
    } from 'devextreme-react/funnel';

    export default function App() {
        return (
            <Funnel ... >
                <Item ... >
                    <SelectionStyle>
                        <Hatching direction="left" />
                    </SelectionStyle>
                </Item>
            </Funnel>
        );
    }

---