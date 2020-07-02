When a sankey node or link is hovered over or pressed, it applies the appearance specified in the **node**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/node/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/node/hoverStyle/') or **link**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/link/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/link/hoverStyle/') object. In the following code, these objects are used to make nodes half-opaque and make the links' border visible:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            node: {
                hoverStyle: {
                    opacity: 0.5
                }
                
            },
            link: {
                hoverStyle: {
                    border: {
                        visible: true
                    }
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey ... >
        <dxo-node>
            <dxo-hover-style
                [opacity]="0.5">
            </dxo-hover-style>
        </dxo-node>
        <dxo-link>
            <dxo-hover-style>
                <dxo-border [visible]="true"></dxo-border>
            </dxo-hover-style>
        </dxo-link>
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSankey ... >
            <DxNode>
                <DxHoverStyle :opacity="0.5" />
            </DxNode>
            <DxLink>
                <DxHoverStyle>
                    <DxBorder :visible="true" />
                </DxHoverStyle>
            </DxLink>
        </DxSankey>
    </template>

    <script>
    import DxSankey, {
        DxNode,
        DxHoverStyle,
        DxLink,
        DxBorder
    } from 'devextreme-vue/sankey';

    export default {
        components: {
            DxSankey,
            DxNode,
            DxHoverStyle,
            DxLink,
            DxBorder
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Sankey, {
        Node,
        Link,
        Border,
        HoverStyle
    } from 'devextreme-react/sankey';

    class App extends React.Component {
        render() {
            return (
                <Sankey ... >
                    <Node ... >
                        <HoverStyle opacity={0.5} />
                    </Node>
                    <Link>
                        <HoverStyle>
                            <Border visible={true} />
                        </HoverStyle>
                    </Link>
                </Sankey>
            );
        }
    }

    export default App;

---

Set [hoverEnabled](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/hoverEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#hoverEnabled') to **false** if nodes and links should not react when they are hovered over or pressed:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            hoverEnabled: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey ...
        [hoverEnabled]="false">
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSankey :hover-enabled="false" />
    </template>

    <script>
    import DxSankey from 'devextreme-vue/sankey';

    export default {
        components: {
            DxSankey
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Sankey from 'devextreme-react/sankey';

    class App extends React.Component {
        render() {
            return (
                <Sankey hoverEnabled={false} />
            );
        }
    }

    export default App;

---