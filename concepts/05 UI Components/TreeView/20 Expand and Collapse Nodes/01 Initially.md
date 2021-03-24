If a node is supposed to be expanded initially, set its [expanded](/api-reference/_hidden/dxTreeViewItem/expanded.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#expanded') field to **true**. If another field specifies whether a node is expanded or collapsed, assign its name to the [expandedExpr](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/expandedExpr.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#expandedExpr') property as shown in the following code.

---
##### jQuery

    <!--JavaScript-->var hierarchicalData = [{
        name: 'Fruits',
        isExpanded: true,
        items: [
            { name: 'Apples' },
            { name: 'Oranges' }
        ]
    }, {
        name: 'Vegetables',
        isExpanded: true,
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
            expandedExpr: 'isExpanded'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="hierarchicalData"
        keyExpr="name"
        displayExpr="name"
        expandedExpr="isExpanded">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        hierarchicalData = [{
            name: 'Fruits',
            isExpanded: true,
            items: [
                { name: 'Apples' },
                { name: 'Oranges' }
            ]
        }, {
            name: 'Vegetables',
            isExpanded: true,
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
            key-expr="key"
            display-expr="name"
            expanded-expr="isExpanded"
            :items="hierarchicalData" 
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';
    
    import { DxTreeView } from 'devextreme-vue/tree-view';

    const hierarchicalData = [{
        key: '1',
        name: 'Fruits',
        isExpanded: true,
        items: [
            { key: '1_1', name: 'Apples' },
            { key: '1_2', name: 'Oranges' }
        ]
    }, {
        key: '2',
        name: 'Vegetables',
        isExpanded: true,
        items: [
            { key: '2_1', name: 'Cucumbers' },
            { key: '2_2', name: 'Tomatoes' }
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

    import 'devextreme/dist/css/dx.light.css';
    
    import TreeView from 'devextreme-react/tree-view';

    const hierarchicalData = [{
        key: '1',
        name: 'Fruits',
        isExpanded: true,
        items: [
            { key: '1_1', name: 'Apples' },
            { key: '1_2', name: 'Oranges' }
        ]
    }, {
        key: '2',
        name: 'Vegetables',
        isExpanded: true,
        items: [
            { key: '2_1', name: 'Cucumbers' },
            { key: '2_2', name: 'Tomatoes' }
        ]
    }];

    class App extends React.Component {
        render() {
            return (
                <TreeView
                    keyExpr="key"
                    displayExpr="name"
                    expandedExpr="isExpanded"
                    items={hierarchicalData} />
            );
        }
    }

    export default App;

---