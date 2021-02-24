The **List** supports single and multiple selection modes. Use the [selectionMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode) property to specify a selection mode.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list1').dxList({
            dataSource: new DevExpress.data.DataSource({
                store: products,
            }),
            displayExpr: 'Name',
        });
            // ...
            selectionMode: 'single',
    });
    
---