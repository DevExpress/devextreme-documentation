The **DataGrid** supports single and mutliple record selection modes. To specify the mode, set the **selection**.[mode]() option.

You can access the selected record's data in the [onSelectionChanged]() function. In the code below, this function displays the selected employee under the **DataGrid**:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            selection: { mode: "single" },
            onSelectionChanged: function(e) {
                e.component.byKey(e.currentSelectedRowKeys[0]).done(employee => {
                    if(employee) {
                        $("#selected-employee").text(`Selected employee: ${employee.FullName}`);
                    }
                });
            },
        });
    });

    <!-- tab: index.html -->
    <html>
        <!-- ... -->
        <body class="dx-viewport">
            <div id="dataGrid"></div>
            <p id="selected-employee"></p>
        </body>
    </html>

---

In the next step, we will add a summary to count grid records.