    <!--JavaScript-->
    var dataGridInstance = $("#dataGridContainer").dxDataGrid("instance");
    dataGridInstance.option("dataSource", []);
    dataGridInstance.option("editing.mode", "batch");

    // ---------- or ----------
    $("#dataGridContainer").dxDataGrid("option", "dataSource", []);
    $("#dataGridContainer").dxDataGrid("option", "editing.mode", "batch");

[note]If you perform several property changes, wrap them with the **beginUpdate()** and **endUpdate()** method calls. This prevents the UI component from being unnecessarily refreshed and from events being raised. Use an object instead if you need to change several properties at once.