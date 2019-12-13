If a node is supposed to be expanded initially, set its [expanded](/api-reference/_hidden/dxTreeViewItem/expanded.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/items/#expanded') field to **true**. If another field specifies whether a node is expanded or collapsed, assign its name to the [expandedExpr](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/expandedExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#expandedExpr') option as shown in the following code.

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

---