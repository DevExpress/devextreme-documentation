For an example of hierarchical data, see the following code snippet. 

    <!--JavaScript-->var hierarchicalData = [{
        id: '1',
        text: 'Fruits',
        items: [
            { id: '1_1', text: 'Apples' },
            { id: '1_2', text: 'Oranges' }
        ]
    }, {
        id: '2',
        text: 'Vegetables',
        items: [
            { id: '2_1', text: 'Cucumbers' },
            { id: '2_2', text: 'Tomatoes' }
        ]
    }];

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/HierarchicalDataStructure/"
}

As you can see, all items in a hierarchical data source have the **id** and **text** fields, and items with children have the **items** field. Those are [conventional field names](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/'). To use other names, change the [keyExpr](/api-reference/10%20UI%20Components/HierarchicalCollectionWidget/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#keyExpr'), [displayExpr](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#displayExpr') and [itemsExpr](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/itemsExpr.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#itemsExpr') options, respectively.

---
##### jQuery

    <!--JavaScript-->var hierarchicalData = [{
        key: '1',
        name: 'Fruits',
        children: [
            { key: '1_1', name: 'Apples' },
            { key: '1_2', name: 'Oranges' }
        ]
    }, {
        key: '2',
        name: 'Vegetables',
        children: [
            { key: '2_1', name: 'Cucumbers' },
            { key: '2_2', name: 'Tomatoes' }
        ]
    }];

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: hierarchicalData,
            keyExpr: 'key',
            displayExpr: 'name',
            itemsExpr: 'children'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="hierarchicalData"
        keyExpr="key"
        displayExpr="name"
        itemsExpr="children">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        hierarchicalData = [{
            key: '1',
            name: 'Fruits',
            children: [
                { key: '1_1', name: 'Apples' },
                { key: '1_2', name: 'Oranges' }
            ]
        }, {
            key: '2',
            name: 'Vegetables',
            children: [
                { key: '2_1', name: 'Cucumbers' },
                { key: '2_2', name: 'Tomatoes' }
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
            items-expr="children"        
            :data-source="hierarchicalData" 
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeView } from 'devextreme-vue/tree-view';

    const hierarchicalData = [{
        key: '1',
        name: 'Fruits',
        children: [
            { key: '1_1', name: 'Apples' },
            { key: '1_2', name: 'Oranges' }
        ]
    }, {
        key: '2',
        name: 'Vegetables',
        children: [
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

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TreeView from 'devextreme-react/tree-view';

    const hierarchicalData = [{
        key: '1',
        name: 'Fruits',
        children: [
            { key: '1_1', name: 'Apples' },
            { key: '1_2', name: 'Oranges' }
        ]
    }, {
        key: '2',
        name: 'Vegetables',
        children: [
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
                    itemsExpr="children"                   
                    dataSource={hierarchicalData} />
            );
        }
    }

    export default App;

---

Frequently, the **id** of an item is also its **text**. In this case, set both the **keyExpr** and **displayExpr** options to a single value.

---
##### jQuery

    <!--JavaScript-->var hierarchicalData = [{
        name: 'Fruits',
        items: [
            { name: 'Apples' },
            { name: 'Oranges' }
        ]
    }, {
        name: 'Vegetables',
        items: [
            { name: 'Cucumbers' },
            { name: 'Tomatoes' }
        ]
    }];

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: hierarchicalData,
            keyExpr: 'name',
            displayExpr: 'name'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="hierarchicalData"
        keyExpr="name"
        displayExpr="name">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        hierarchicalData = [{
            name: 'Fruits',
            items: [
                { name: 'Apples' },
                { name: 'Oranges' }
            ]
        }, {
            name: 'Vegetables',
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
            :data-source="hierarchicalData" 
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeView } from 'devextreme-vue/tree-view';

    const hierarchicalData = [{
        name: 'Fruits',
        items: [
            { name: 'Apples' },
            { name: 'Oranges' }
        ]
    }, {
        name: 'Vegetables',
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
        items: [
            { name: 'Apples' },
            { name: 'Oranges' }
        ]
    }, {
        name: 'Vegetables',
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
                    dataSource={hierarchicalData} />
            );
        }
    }

    export default App;

---

#####See Also#####
- [TreeView - Use Plain Data](/concepts/05%20UI%20Components/TreeView/07%20Use%20Plain%20Data.md '/Documentation/Guide/UI_Components/TreeView/Use_Plain_Data')
- [TreeView - Access a Node](/concepts/05%20UI%20Components/TreeView/10%20Access%20a%20Node '/Documentation/Guide/UI_Components/TreeView/Access_a_Node')
- [TreeView - Customize Node Appearance](/concepts/05%20UI%20Components/TreeView/30%20Customize%20Node%20Appearance.md '/Documentation/Guide/UI_Components/TreeView/Customize_Node_Appearance')
- [TreeView API Reference](/api-reference/10%20UI%20Components/dxTreeView '/Documentation/ApiReference/UI_Components/dxTreeView/')

[tags]treeview, tree view, hierarchical data, tree-like data, tree data structure, keyExpr, displayExpr, itemsExpr