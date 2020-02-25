Call the [getNodes()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/getNodes().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#getNodes') method to get **TreeView** nodes at any point in the application flow.

---
##### jQuery

    <!--JavaScript-->var allNodes = $("#treeViewContainer").dxTreeView("getNodes");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        nodeCollection: Array<any> = [];
        getNodes () {
            this.nodeCollection = this.treeView.instance.getNodes();
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
        <dx-tree-view
            :ref="treeViewRef"
            :items="data" 
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
        
    import { DxTreeView } from 'devextreme-vue/tree-view';
    const treeViewRef = 'treeView';

    export default {
        components: {
            DxTreeView
        },
        data() {
            return {
                data,
                treeViewRef
            };
        },
        computed: {
            treeView: function() {
                return this.$refs[treeViewRef].instance;
            }
        },   
        methods: {
            getNodes() {
                return this.treeView.getNodes();
            }
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    import TreeView from 'devextreme-react/tree-view';

    class App extends React.Component {
        constructor() {
            super();
            this.treeViewRef = React.createRef();
            this.getNodes = this.getNodes.bind(this);
        }

        render() {
            return (
                <TreeView
                    items={data}
                    ref={this.treeViewRef} />
            );
        }

        getNodes(e) {
            this.treeView.getNodes();
        }

        get treeView() {
            return this.treeViewRef.current.instance;
        }    
    }

    export default App;

---

All node objects contain a similar set of fields, which are described in the [Node](/api-reference/10%20UI%20Widgets/dxTreeView/4%20Node '/Documentation/ApiReference/UI_Widgets/dxTreeView/Node/') documentation section.

#####See Also#####
- [TreeView - Search Nodes](/concepts/05%20Widgets/TreeView/15%20Search%20Nodes.md '/Documentation/Guide/Widgets/TreeView/Search_Nodes/')
- [TreeView - Expand and Collapse Nodes](/concepts/05%20Widgets/TreeView/20%20Expand%20and%20Collapse%20Nodes '/Documentation/Guide/Widgets/TreeView/Expand_and_Collapse_Nodes')
- [TreeView - Select Nodes](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes '/Documentation/Guide/Widgets/TreeView/Select_Nodes')
- [TreeView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/HierarchicalDataStructure)
- [TreeView API Reference](/api-reference/10%20UI%20Widgets/dxTreeView '/Documentation/ApiReference/UI_Widgets/dxTreeView/')
