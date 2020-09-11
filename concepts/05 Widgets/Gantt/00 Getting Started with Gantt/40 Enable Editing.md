Set the [enabled](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/editing/enabled.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/editing/#enabled/') option to **true** to allow users to edit tasks in the **Gantt**. 

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            ...
            editing: {
                enabled: true
            },
            ...
        });
    });
