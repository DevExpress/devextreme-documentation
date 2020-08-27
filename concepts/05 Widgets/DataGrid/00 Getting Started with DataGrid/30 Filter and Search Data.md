The **DataGrid** includes the following UI elements used to filter and search data:

- [filterRow]()
- [headerFilter]()
- [filterPanel]() with [filterBuilder]()
- [searchPanel]()

In this tutorial, we display the **filterRow** and **searchPanel**:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            filterRow: { visible: true },
            searchPanel: { visible: true },
        });
    });

---

Run the code and enter a value into a filter row cell or the search panel. Grid data will be filtered according to this value. In the next step, we will configure grouping.