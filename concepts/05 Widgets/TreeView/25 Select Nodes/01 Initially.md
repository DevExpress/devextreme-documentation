If a node is supposed to be selected initially, set its [selected](/api-reference/_hidden/dxTreeViewItem/selected.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/items/#selected') field to **true**. If another field specifies whether a node is selected or not, assign its name to the [selectedExpr](/api-reference/10%20UI%20Widgets/HierarchicalCollectionWidget/1%20Configuration/selectedExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectedExpr') option as shown in the following code.

---
##### jQuery

    <!--HTML--><div id="treeViewContainer"></div>

    <!--JavaScript-->var hierarchicalData = [{
        name: 'Fruits',
        isSelected: true,
        items: [
            { name: 'Apples' },
            { name: 'Oranges' }
        ]
    }, {
        name: 'Vegetables',
        isSelected: true,
        items: [
            { name: 'Cucumbers' },
            { name: 'Tomatoes' }
        ]
    }];

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: hierarchicalData,
            keyExpr: 'name',
            displayExpr: 'name',
            selectedExpr: 'isSelected',
            showCheckBoxesMode: 'normal'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="hierarchicalData"
        keyExpr="name"
        displayExpr="name"
        selectedExpr="isSelected"
        showCheckBoxesMode="normal">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        hierarchicalData = [{
            name: 'Fruits',
            isSelected: true,
            items: [
                { name: 'Apples' },
                { name: 'Oranges' }
            ]
        }, {
            name: 'Vegetables',
            isSelected: true,
            items: [
                { name: 'Cucumbers' },
                { name: 'Tomatoes' }
            ]
        }];
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
            key-expr="name"
            display-expr="name"
            show-check-boxes-mode="normal"
            selected-expr="isSelected"
            :items="hierarchicalData" 
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    import { DxTreeView } from 'devextreme-vue/tree-view';

    const hierarchicalData = [{
        name: 'Fruits',
        isSelected: true,
        items: [
            { name: 'Apples' },
            { name: 'Oranges' }
        ]
    }, {
        name: 'Vegetables',
        isSelected: true,
        items: [
            { name: 'Cucumbers' },
            { name: 'Tomatoes' }
        ]
    }];

    export default {
        components: {
            DxTreeView
        },
        data() {
            return {
                hierarchicalData
            };
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TreeView from 'devextreme-react/tree-view';

    const hierarchicalData = [{
        name: 'Fruits',
        isSelected: true,
        items: [
            { name: 'Apples' },
            { name: 'Oranges' }
        ]
    }, {
        name: 'Vegetables',
        isSelected: true,
        items: [
            { name: 'Cucumbers' },
            { name: 'Tomatoes' }
        ]
    }];

    class App extends React.Component {
        render() {
            return (
                <TreeView
                    keyExpr="name"
                    displayExpr="name"
                    showCheckBoxesMode="normal"
                    selectedExpr="isSelected"
                    items={hierarchicalData} />
            );
        }
    }

    export default App;

---