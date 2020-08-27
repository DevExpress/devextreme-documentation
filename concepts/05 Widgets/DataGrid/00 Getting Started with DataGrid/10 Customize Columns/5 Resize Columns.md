Grid columns have equal widths by default. You can set a [width](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width) for individual columns or specify that all columns should adjust their widths to their contents ([columnAutoWidth](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnAutoWidth)). Users can resize columns if you enable the [allowColumnResizing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnResizing) option.


---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            columns: [
            // ...
            {
                dataField: "BirthDate", 
                dataType: "date",
                width: 150,
            }, {
                dataField: "HireDate", 
                dataType: "date",
                width: 150,
            },
            // ...
            ],
            allowColumnResizing: true,
            columnAutoWidth: true,
        });
    });

---