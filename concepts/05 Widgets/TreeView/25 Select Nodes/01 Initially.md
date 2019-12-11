If a node is supposed to be selected initially, set its [selected](/api-reference/10%20UI%20Widgets/dxTreeView/5%20Default%20Item%20Template/selected.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Default_Item_Template/#selected') field to *true*. This is a conventional field name defined by the [Default Item Template](/api-reference/10%20UI%20Widgets/dxTreeView/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxTreeView/Default_Item_Template/') pattern. If another field specifies whether a node is selected or not, assign its name to the [selectedExpr](/api-reference/10%20UI%20Widgets/HierarchicalCollectionWidget/1%20Configuration/selectedExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectedExpr') option as shown in the following code.

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