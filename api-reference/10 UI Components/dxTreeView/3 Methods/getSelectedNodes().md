---
id: dxTreeView.getSelectedNodes()
---
---
##### shortDescription
Gets selected nodes.

##### return: Array<dxTreeViewNode>
Selected nodes.

---
---
##### jQuery

    <!-- tab: index.js -->
    const selectedNodes = $("#treeViewContainer").dxTreeView("getSelectedNodes");

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxTreeViewComponent } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild('treeViewRef', { static: false }) treeView: DxTreeViewComponent;
        // Prior to Angular 8
        // @ViewChild('treeViewRef') treeView: DxTreeViewComponent;

        selectedNodes = [];

        getSelectedNodes() {
            this.selectedNodes = this.treeView.instance.getSelectedNodes();
        }
    }

    <!-- tab: app.component.html -->
    <dx-tree-view ...
        #treeViewRef>
    </dx-tree-view>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxTreeViewModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTreeViewModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeView ...
            :ref="treeViewRef">
        </DxTreeView>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeView from 'devextreme-vue/tree-view';

    export default {
        components: {
            DxTreeView
        },
        data() {
            return {
                treeViewRef,
                selectedNodes: []
            }
        },
        computed: {
            treeView: function() {
                return this.$refs[treeViewRef].instance;
            }
        },
        methods: {
            getSelectedNodes() {
                this.selectedNodes = this.treeView.getSelectedNodes();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TreeView from 'devextreme-react/tree-view';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.treeViewRef = React.createRef();
            this.selectedNodes = [];
            this.getSelectedNodes = () => {
                this.selectedNodes = this.treeView.getSelectedNodes();
            }
        }

        get treeView() {
            return this.treeViewRef.current.instance;
        }

        render() {
            return (
                <TreeView ...
                    ref={this.treeViewRef}>
                </TreeView>
            );
        }
    }
    export default App;

---

#####See Also#####
- [selectByClick](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectByClick')
- [showCheckBoxesMode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#showCheckBoxesMode')
#include common-link-callmethods