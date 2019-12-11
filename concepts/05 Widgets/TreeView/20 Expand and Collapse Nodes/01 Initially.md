If a node is supposed to be expanded initially, set its [expanded](/api-reference/10%20UI%20Widgets/dxTreeView/5%20Default%20Item%20Template/expanded.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Default_Item_Template/#expanded') field to *true*. This is a conventional field name defined by the [Default Item Template](/api-reference/10%20UI%20Widgets/dxTreeView/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxTreeView/Default_Item_Template/') pattern. If another field specifies whether a node is expanded or collapsed, assign its name to the [expandedExpr](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/expandedExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#expandedExpr') option as shown in the following code.

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