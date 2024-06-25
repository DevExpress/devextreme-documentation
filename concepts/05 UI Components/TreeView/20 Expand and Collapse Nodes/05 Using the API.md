The TreeView provides the following API to expand and collapse nodes: 

- **All nodes**     
You can use the [expandAll()](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/expandAll().md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#expandAll') and [collapseAll()](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/collapseAll().md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#collapseAll') methods to expand and collapse nodes at once. Note that the **expandAll()** method expands only the loaded nodes if [data is loaded on demand](/concepts/05%20UI%20Components/TreeView/32%20Enhance%20Performance%20on%20Large%20Datasets.md '/Documentation/Guide/UI_Components/TreeView/Enhance_Performance_on_Large_Datasets/').

    ---
    ##### jQuery

        <!--JavaScript-->$("#treeViewContainer").dxTreeView("expandAll");
        // $("#treeViewContainer").dxTreeView("collapseAll");

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
            // Prior to Angular 8
            // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
            expandAllNodes () {
                this.treeView.instance.expandAll();
            }
            collapseAllNodes () {
                this.treeView.instance.collapseAll();
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
                :ref="treeViewRef"
                :items="data" 
            />
        </template>
        <script>
        import 'devextreme/dist/css/dx.light.css';

        import { DxTreeView } from 'devextreme-vue/tree-view';

        const treeViewRef = 'treeView';
        const data = [ ... ];

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
                expandAllNodes() {
                    this.treeView.expandAll();
                },
                collapseAllNodes() {
                    this.treeView.collapseAll();
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
            constructor() {
                super();
                this.treeViewRef = React.createRef();
                this.expandAllNodes = this.expandAllNodes.bind(this);
                this.collapseAllNodes = this.collapseAllNodes.bind(this);                
            }
            render() {
                return (
                    <TreeView
                        items={data}
                        ref={this.treeViewRef} />
                );
            }
            expandAllNodes() {
                this.treeView.expandAll();
            }
            collapseAllNodes() {
                this.treeView.collapseAll();
            }
            get treeView() {
                return this.treeViewRef.current.instance();
            }    
        }

        export default App;

    ---

- **Individual nodes**  
Call the [expandItem(key)](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/expandItem(key).md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#expandItemkey') or [collapseItem(key)](/api-reference/10%20UI%20Components/dxTreeView/3%20Methods/collapseItem(key).md '/Documentation/ApiReference/UI_Components/dxTreeView/Methods/#collapseItemkey') method and pass a node key as an argument:

    ---
    ##### jQuery

        <!--JavaScript-->$("#treeViewContainer").dxTreeView("expandItem", nodeKey);
        // $("#treeViewContainer").dxTreeView("collapseItem", nodeKey);

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
            // Prior to Angular 8
            // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent;
            expandNode (key) {
                this.treeView.instance.expandItem(key);
            }
            collapseNode (key) {
                this.treeView.instance.collapseItem(key);
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
                :ref="treeViewRef"
                :items="data" 
            />
        </template>
        <script>
        import 'devextreme/dist/css/dx.light.css';

        import { DxTreeView } from 'devextreme-vue/tree-view';

        const treeViewRef = 'treeView';
        const data = [ ... ];

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
                expandNode(key) {
                    this.treeView.expandItem(key);
                },
                collapseNode(key) {
                    this.treeView.collapseItem(key);
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
            constructor() {
                super();
                this.treeViewRef = React.createRef();
                this.expandNode = this.expandNode.bind(this);
                this.collapseNode = this.collapseNode.bind(this);
            }
            render() {
                return (
                    <TreeView
                        items={data}
                        ref={this.treeViewRef} />
                );
            }
            expandNode(key) {
                this.treeView.expandItem(key);
            }
            collapseNode(key) {
                this.treeView.collapseItem(key);
            }
            get treeView() {
                return this.treeViewRef.current.instance();
            }    
        }

        export default App;

    ---
