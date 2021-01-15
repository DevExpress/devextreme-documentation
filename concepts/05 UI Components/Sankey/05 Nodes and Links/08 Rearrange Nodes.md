The **Sankey**'s algorithm distributes nodes between columns. This distribution ensures a proper node-to-node flow direction. You cannot move nodes from one column to another because this alters the flow direction.

However, you can sort nodes within a column. Configure the [sortData](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/sortData.md '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/#sortData') object so that its fields correspond to nodes. The field values should be node weights: the heavier the node, the lower it is in its column. Refer to the **sortData** description for an example.

Nodes in a column are separated by a space. You can use the **node**.[padding](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/node/padding.md '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/node/#padding') property to specify this space. In the following code, this distance is reduced to 1 pixel:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            node: {
                padding: 1
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey ... >
        <dxo-node [padding]="1"></dxo-node>
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
            <DxNode :padding="1" />
        </DxSankey>
    </template>

    <script>
    import DxSankey, { DxNode } from 'devextreme-vue/sankey';

    export default {
        components: {
            DxSankey,
            DxNode
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Sankey, { Node } from 'devextreme-react/sankey';

    class App extends React.Component {
        render() {
            return (
                <Sankey ... >
                    <Node padding={1} />
                </Sankey>
            )
        }
    }

    export default App;

---

Each column can be aligned vertically. You can find an example in the [alignment](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/alignment.md '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/#alignment') property's description.

#####See Also#####
- [Colorize Nodes and Links](/concepts/05%20UI%20Components/Sankey/05%20Nodes%20and%20Links/05%20Colorize%20Nodes%20and%20Links.md '/Documentation/Guide/UI_Components/Sankey/Nodes_and_Links/Colorize_Nodes_and_Links/')
