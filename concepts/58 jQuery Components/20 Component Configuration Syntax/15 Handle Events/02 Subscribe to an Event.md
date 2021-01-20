You can subscribe to an event using a configuration property. All event handling properties are given names that begin with *on*.

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid({
        onCellClick: function (e) {
            // Handles the "cellClick" event
        },
        onSelectionChanged: function (e) {
            // Handles the "selectionChanged" event
        }
    });

 As a more flexible solution, you can use the **on()** method. It allows you to subscribe to events at runtime and attach several handlers to a single event.

    <!--JavaScript-->
    var dataGridInstance = $("#dataGridContainer").dxDataGrid("instance");
    // Subscribes to the "cellClick" and "selectionChanged" events
    dataGridInstance
        .on({
            "cellClick": cellClickHandler,
            "selectionChanged": selectionChangedHandler
        });

<!-------------->

    <!--JavaScript-->
    var dataGridInstance = $("#dataGridContainer").dxDataGrid("instance");
    // Attaches several handlers to the "cellClick" event
    dataGridInstance
        .on("cellClick", cellClickHandler1)
        .on("cellClick", cellClickHandler2);