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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxFunnel ... >
            <DxItem ... >
                <DxHoverStyle>
                    <DxHatching direction="left" />
                </DxHoverStyle>
            </DxItem>
        </DxFunnel>
    </template>

    <script>
    import DxFunnel, {
        DxItem,
        DxHoverStyle,
        DxHatching
    } from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel,
            DxItem,
            DxHoverStyle,
            DxHatching
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Funnel, {
        Item,
        HoverStyle,
        Hatching
    } from 'devextreme-react/funnel';

    class App extends React.Component {
        render() {
            return (
                <Funnel ... >
                    <Item ... >
                        <HoverStyle>
                            <Hatching direction="left" />
                        </HoverStyle>
                    </Item>
                </Funnel>
            );
        }
    }

    export default App;

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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxFunnel :hover-enabled="false" />
    </template>

    <script>
    import DxFunnel from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Funnel from 'devextreme-react/funnel';

    class App extends React.Component {
        render() {
            return (
                <Funnel hoverEnabled={false} />
            );
        }
    }

    export default App;

---
