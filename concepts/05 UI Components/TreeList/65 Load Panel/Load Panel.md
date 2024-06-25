The load panel is displayed while the UI component loads data. It consists of a loading indicator and text, both placed on a pane.

![DevExtreme HTML5/JavaScript TreeList Widget - Load Panel](/images/DataGrid/visual_elements/load_panel.png)

The load panel is shown only for remote data sources by default. To show it regardless of the data source type, assign **true** to the **loadPanel**.[enabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/loadPanel/enabled.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/loadPanel/#enabled') property. Setting the same property to **false** disables the load panel completely.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            loadPanel: {
                enabled: true
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-load-panel
            [enabled]="true">
        </dxo-load-panel>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxLoadPanel :enabled="true" />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxLoadPanel
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxLoadPanel
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        LoadPanel
    } from 'devextreme-react/tree-list';

    export default function App() {
        return (
            <TreeList ... >
                <LoadPanel enabled />
            </TreeList>
        );
    }
    
---

You can also control the load panel programmatically using the [beginCustomLoading(messageText)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/beginCustomLoading(messageText).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#beginCustomLoadingmessageText') and [endCustomLoading()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/endCustomLoading().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#endCustomLoading') methods.

---
##### jQuery

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    treeList.beginCustomLoading();
    // ...
    treeList.endCustomLoading();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        performLongOperation() {
            this.treeList.instance.beginCustomLoading();
            // ...
            this.treeList.instance.endCustomLoading();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ref="treeListRefKey">
            <!-- ... -->
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        // ...
    } from 'devextreme-vue/tree-list';

    const treeListRefKey = "my-tree-list";

    export default {
        components: {
            DxTreeList,
            // ...
        },
        data: function() {
            return {
                treeListRefKey
            };
        },
        methods: {
            performLongOperation: function() {
                this.treeList.beginCustomLoading();
                // ...
                this.treeList.endCustomLoading();
            }
        },
        computed: {
            treeList: function() {
                return this.$refs[treeListRefKey].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useRef, useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        // ...
    } from 'devextreme-react/tree-list';

    export default function App() {
        const treeList = useRef(null);
        const performLongOperation = useCallback(() => {
            treeList.current.instance().beginCustomLoading();
            // ...
            treeList.current.instance().endCustomLoading();
        }, []);

        return (
            <TreeList ref="treeList">
                {/* ... */}
            </TreeList>
        );
    }
    
---

Since the load panel is a DevExtreme [LoadPanel](/concepts/05%20UI%20Components/LoadPanel/00%20Overview.md '/Documentation/Guide/UI_Components/LoadPanel/Overview/') UI component, you can declare any [properties of this UI component](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/') in the TreeList's [loadPanel](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/loadPanel '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/loadPanel/') object. For example, you can change the panel's size with the [height](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#height') and [width](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#width') properties, or employ another loading indicator using the [indicatorSrc](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/indicatorSrc.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#indicatorSrc') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            loadPanel: {
                height: 100,
                width: 250,
                indicatorSrc: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-load-panel
            [height]="100"
            [width]="250"
            indicatorSrc="https://js.devexpress.com/Content/data/loadingIcons/rolling.svg">
        </dxo-load-panel>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxLoadPanel
                :height="100"
                :width="250"
                indicator-src="https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxLoadPanel
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxLoadPanel
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        LoadPanel
    } from 'devextreme-react/tree-list';

    export default function App() {
        return (
            <TreeList ... >
                <LoadPanel
                    height={100}
                    width={250}
                    indicatorSrc="https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
                />
            </TreeList>
        );
    }
    
---

#####See Also#####
- [LoadPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Load_Panel/Overview)
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview)
