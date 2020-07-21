---
id: dxTreeMap.Options.onClick
type: function(e) | String
default: null
EventForAction: dxTreeMap.click
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a node is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.node): dxTreeMapNode
The clicked node; described in the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') section.

---
This function is often used to implement item selection as shown in the following code:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#treeMapContainer").dxTreeMap({
            // ...
            onClick: function (e) {
                e.node.select(!e.node.isSelected());
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-map ...
        (onClick)="selectItem($event)">
    </dx-tree-map>

    <!--TypeScript-->
    import { DxTreeMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectItem (e) {
            e.node.select(!e.node.isSelected());
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeMapModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeMap ...
            @click="selectItem">
        </DxTreeMap>
    </template>

    <script>
    import DxTreeMap from 'devextreme-vue/tree-map';

    export default {
        components: {
            DxTreeMap
        },
        methods: {
            selectItem (e) {
                e.node.select(!e.node.isSelected())
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import TreeMap from 'devextreme-react/tree-map';

    class App extends React.Component {
        render() {
            return (
                <TreeMap ...
                    onClick={this.selectItem}>
                </TreeMap>
            );
        }

        selectItem (e) {
            e.node.select(!e.node.isSelected())
        }
    }

    export default App;

---

To identify whether the clicked node is a single tile or a group of tiles, use the node's [isLeaf()](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/isLeaf().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isLeaf') method.
