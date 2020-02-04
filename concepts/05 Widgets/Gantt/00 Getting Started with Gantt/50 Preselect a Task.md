Use the [selectedRowKey](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/selectedRowKey.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#selectedRowKey/') option to specify a key of the task that should be selected in the **Gantt**. 

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            selectedRowKey: 1,
            // ...
        });
    });