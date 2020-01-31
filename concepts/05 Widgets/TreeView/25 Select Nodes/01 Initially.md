If a node is supposed to be selected initially, set its [selected](/api-reference/_hidden/dxTreeViewItem/selected.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/items/#selected') field to **true**. If another field specifies whether a node is selected or not, assign its name to the [selectedExpr](/api-reference/10%20UI%20Widgets/HierarchicalCollectionWidget/1%20Configuration/selectedExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectedExpr') option as shown in the following code.

---
##### jQuery

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

---

You can also specify selected items via [selectItemKeys](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectedItemKeys.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectedItemKeys') option. In this case, priority will be given to the values specified in the selected field. And the the selectedItemKeys option values will be replaced by keys from the selected data source items.


---
##### jQuery

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
            selectedItemKeys: ['Apples', 'Tomatoes' ],
            showCheckBoxesMode: 'normal'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="hierarchicalData"
        keyExpr="name"
        displayExpr="name"
        [selectedItemKeys]: ['Apples', 'Tomatoes' ]
        showCheckBoxesMode="normal">
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

---

[important] If you you use the remote data source, [virtual mode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/virtualModeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#virtualModeEnabled') or the [createChildren](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/createChildren.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren') option it is recommends to use the [selected](/api-reference/_hidden/dxTreeViewItem/selected.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/items/#selected') field.
