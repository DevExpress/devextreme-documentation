    <!--JavaScript-->
    var dataGridInstance = $("#dataGridContainer").dxDataGrid("instance");
    var dataSource = dataGridInstance.option("dataSource");
    var editMode = dataGridInstance.option("editing.mode");

    // ---------- or ----------
    var dataSource = $("#dataGridContainer").dxDataGrid("option", "dataSource");
    var editMode = $("#dataGridContainer").dxDataGrid("option", "editing.mode");