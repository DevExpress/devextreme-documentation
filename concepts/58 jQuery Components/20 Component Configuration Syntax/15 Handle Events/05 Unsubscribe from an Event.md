To detach a specific handler from an event, call the **off(eventName, handler)** method.

    <!--JavaScript-->
    var dataGridInstance = $("#dataGridContainer").dxDataGrid("instance");
    // Detaches the "cellClickHandler1" from the "cellClick" event leaving other handlers (if any) intact
    dataGridInstance.off("cellClick", cellClickHandler1)

You can also use this method to detach all handlers from a particular event.

    <!--JavaScript-->
    var dataGridInstance = $("#dataGridContainer").dxDataGrid("instance");
    // Detaches all handlers from the "cellClick" event
    dataGridInstance.off("cellClick")

If you subscribed to an event using an **on*EventName*** option, you can unsubscribe from it by setting this property to **undefined**.

    <!--JavaScript-->
    var dataGridInstance = $("#dataGridContainer").dxDataGrid("instance");
    dataGridInstance.option("onCellClick", undefined);

#####See Also#####
- **API Reference**.**WidgetName**.**Events**, for example, **API Reference**.[DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Components/dxDataGrid/').[Events](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events '/Documentation/ApiReference/UI_Components/dxDataGrid/Events/')