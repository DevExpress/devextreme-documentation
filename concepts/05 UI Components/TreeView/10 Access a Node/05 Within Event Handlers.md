Usually, you need to access a **TreeView** node when an action was made on it, for example, when it was clicked or selected. This action raises an event, and you can access the node subjected to the action within the event handler. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: data,
            onItemClick: function (e) {
                var node = e.node;
                // ...
            }
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="data"
        (onItemClick)="onItemClick($event)">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        data = [ ... ];
        onItemClick (e) {
            var node = e.node;
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeView
            :data-source="data"
            @item-click="onItemClick" 
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';
        
    import { DxTreeView } from 'devextreme-vue/tree-view';

    const data = [ ... ];

    export default {
        components: {
            DxTreeView
        },
        data() {
            return {
                data
            };
        },
        methods: {
            onItemClick(e) {
                const node = e.node;
                // ...
            }
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';
        
    import TreeView from 'devextreme-react/tree-view';

    const data = [ ... ];

    class App extends React.Component {
        render() {
            return (
                <TreeView
                    onItemClick={this.onItemClick}
                    dataSource={data} />
            );
        }

        onItemClick(e) {
            const node = e.node;
            // ...            
        }
    }

    export default App;

---

Not every event handler provides access to the node, only those whose name starts with **onItem...**. They are described in the [TreeView Configuration](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/').
