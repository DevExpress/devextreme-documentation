To reorder grid columns, change their order in the **columns** array. Users also can reorder columns if you enable the [allowColumnReordering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnReordering) option.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            columns: [{
                dataField: "FullName"
            }, {
                dataField: "Position"
            }, {
                dataField: "BirthDate", 
                dataType: "date",
            }, {
                dataField: "HireDate", 
                dataType: "date",
            }, {
                dataField: "City"
            }, {
                dataField: "Country"
            },
            "Address",
            "HomePhone",
            {
                dataField: "PostalCode",
            }],
            allowColumnReordering: true,
        });
    });

---