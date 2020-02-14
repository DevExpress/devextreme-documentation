If only a single node should be in the selected state at a time, set the [selectByClick](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectByClick') option to **true**. In this case, an end user can click a node to select it.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            // ...
            selectByClick: true
        });
    });

##### Angular

    <!--HTML--><dx-tree-view ...
        [selectByClick]="true">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
            :select-by-click=true 
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
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
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TreeView from 'devextreme-react/tree-view';

    const data = [ ... ];

    class App extends React.Component {
        render() {
            return (
                <TreeView
                    dataSource={data} 
                    selectByClick={true} />
            );
        }
    }

    export default App;

---

To select several nodes simultaneously, set the [showCheckBoxesMode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxesMode') option to *"normal"*. This adds a check box to each node that enables you to select these nodes. You can also set the **showCheckBoxesMode** option to *"selectAll"* to allow a user to select all nodes.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            // ...
            showCheckBoxesMode: 'normal' // or 'selectAll'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view ...
        showCheckBoxesMode="normal"> <!-- or "selectAll" -->
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
            show-check-boxes-mode="normal" /> <!-- or "selectAll" -->
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    import { DxTreeView } from 'devextreme-vue/tree-view';

    const data = [...];

    export default {
        components: {
            DxTreeView
        },
        data() {
            return {
                data
            };
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    import TreeView from 'devextreme-react/tree-view';

    const data = [...];

    class App extends React.Component {
        render() {
            return (
                <TreeView
                    dataSource={data} 
                    showCheckBoxesMode="normal" /> // or 'selectAll'
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/ItemSelectionAndCustomization/"
}
