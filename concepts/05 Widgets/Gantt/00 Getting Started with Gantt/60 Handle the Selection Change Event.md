Assign a function to the [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#onSelectionChanged/) option. 

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onSelectionChanged: function (e) {
                if (e.selectedRowKey === 2)
                    console.log(`This task is overdue`); 
            }
        });
    }); 