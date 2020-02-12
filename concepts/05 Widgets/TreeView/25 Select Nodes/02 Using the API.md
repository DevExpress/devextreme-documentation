To retrieve the keys of all selected nodes, call the [getSelectedNodeKeys()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/getSelectedNodeKeys().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#getSelectedNodeKeys').

---
##### jQuery

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("instance").getSelectedNodeKeys();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        getSelectedNodeKeys() {
            return this.treeView.instance.getSelectedNodeKeys();
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

    <template>
        <dx-tree-view
            :ref="treeViewRef"
            :items="data" />
    </template>
    <script>
        import { DxTreeView } from 'devextreme-vue';

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
            getSelectedNodeKeys(){
                return this.treeView.getSelectedNodeKeys();
            }
        }
    };
    </script>

##### React

    import React from 'react';
    import TreeView from 'devextreme-react/tree-view';

    class App extends React.Component {
        constructor() {
            super();
            this.treeViewRef = React.createRef();
        }

        render() {
            return (
                <TreeView
                    items={data}
                    ref={this.treeViewRef} />
            );
        }

        getSelectedNodeKeys(){
            return this.treeView.getSelectedNodeKeys();
        }

        get treeView() {
            return this.treeViewRef.current.instance;
        }    
    }

    export default App;

---


To retrieve all selected nodes, call the [getSelectedNodes()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/getSelectedNodes().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#getSelectedNodes').

---
##### jQuery

    <!--JavaScript-->$("#treeViewContainer").dxTreeView("instance").getSelectedNodes();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
        getSelectedNodes() {
            return this.treeView.instance.getSelectedNodes();
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

    <template>
        <dx-tree-view
            :ref="treeViewRef"
            :items="data" />
    </template>
    <script>
        import { DxTreeView } from 'devextreme-vue';

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
                getSelectedNodes(){
                    return this.treeView.getSelectedNodes();
                }
            }
        };
    </script>

##### React

    import React from 'react';
    import TreeView from 'devextreme-react/tree-view';

    class App extends React.Component {
        constructor() {
            super();
            this.treeViewRef = React.createRef();
        }

        render() {
            return (
                <TreeView
                    items={data}
                    ref={this.treeViewRef} />
            );
        }

        getSelectedNodes(){
            return this.treeView.getSelectedNodes();
        }

        get treeView() {
            return this.treeViewRef.current.instance;
        }    
    }

    export default App;

---

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

    <template>
        <dx-tree-view
            :ref="treeViewRef"
            :items="data" />
    </template>
    <script>
        import { DxTreeView } from 'devextreme-vue';

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

    import React from 'react';
    import TreeView from 'devextreme-react/tree-view';

    class App extends React.Component {
        constructor() {
            super();
            this.treeViewRef = React.createRef();
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

    <template>
        <dx-tree-view
            :ref="treeViewRef"
            :items="data" />
    </template>
    <script>
        import { DxTreeView } from 'devextreme-vue';

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

    import React from 'react';
    import TreeView from 'devextreme-react/tree-view';

    class App extends React.Component {
        constructor() {
            super();
            this.treeViewRef = React.createRef();
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

[!!!In this topic we need the same note about virtual/createchildren/searchenabled!!!](/Documentation/20_1/ApiReference/UI_Widgets/dxTreeView/Methods/#selectAll).

#####See Also#####
- [selectByClick](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectByClick')