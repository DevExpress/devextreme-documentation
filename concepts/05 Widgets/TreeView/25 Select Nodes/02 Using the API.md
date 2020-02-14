To select or cancel the selection of a node programmatically, call the [selectItem(itemElement)](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/selectItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectItemitemElement') or [unselectItem(itemElement)](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/unselectItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectItemitemElement') method passing the key of the node as a parameter.

---
##### jQuery

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("selectItem", nodeKey);
    // $("#treeViewContainer").dxTreeView("unselectItem", nodeKey);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        selectNode (key) {
            this.treeView.instance.selectItem(key);
        }
        unselectNode (key) {
            this.treeView.instance.unselectItem(key);
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
            selectNode(key){
                this.treeView.selectItem(key);
            },
            unselectNode(key){
                this.treeView.unselectItem(key);
            } 
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import TreeView from 'devextreme-react/tree-view';

    class App extends React.Component {
        constructor() {
            super();
            this.treeViewRef = React.createRef();
            this.selectNode = this.selectNode.bind(this);
            this.unselectNode = this.unselectNode.bind(this);            
        }

        render() {
            return (
                <TreeView
                    items={data}
                    ref={this.treeViewRef} />
            );
        }

        selectNode(key){
            this.treeView.selectItem(key);
        }
        
        unselectNode(key){
            this.treeView.unselectItem(key);
        }  

        get treeView() {
            return this.treeViewRef.current.instance;
        }    
    }

    export default App;

---

To select or cancel the selection of all nodes programmatically, call the [selectAll()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/selectAll().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectAll') or [unselectAll()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/unselectAll().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectAll') method.

---
##### jQuery

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("selectAll");
    // $("#treeViewContainer").dxTreeView("unselectAll");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        selectAllNodes () {
            this.treeView.instance.selectAll();
        }
        unselectAllNodes () {
            this.treeView.instance.unselectAll();
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
            unselectAllNodes(){
                this.treeView.selectAll();
            },
            unselectAllNodes(){
                this.treeView.unselectAll();
            } 
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import TreeView from 'devextreme-react/tree-view';

    class App extends React.Component {
        constructor() {
            super();
            this.treeViewRef = React.createRef();
            this.selectAllNodes = this.selectAllNodes.bind(this);
            this.unselectAllNodes = this.unselectAllNodes.bind(this);                
        }

        render() {
            return (
                <TreeView
                    items={data}
                    ref={this.treeViewRef} />
            );
        }

        selectAllNodes(e){
            this.treeView.selectAll();
        }
        
        unselectAllNodes(e){
            this.treeView.unselectAll();
        }  

        get treeView() {
            return this.treeViewRef.current.instance;
        }    
    }

    export default App;

---

[note]If the [showCheckBoxesMode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxesMode') is *"none"*, nodes selected using the API do not differ from unselected nodes in appearance.