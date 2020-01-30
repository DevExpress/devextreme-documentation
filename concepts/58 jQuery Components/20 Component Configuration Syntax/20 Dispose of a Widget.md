To dispose of a DevExtreme widget, free up the allocated resources by calling the **dispose()** method. Then, remove the widget's associated DOM node:

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("dispose");
    $("#dataGridContainer").remove();
