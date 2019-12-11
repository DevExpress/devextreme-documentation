When you have a large amount of remote data and need to enable a user to [select all grid rows](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/allowSelectAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll') at once, consider using selection in deferred mode. In this mode, the **DataGrid** does not make requests for data until this is demanded from the API, for example, the [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData') or [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowKeys().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys') method is called. To switch selection to the deferred mode, assign *true* to the **selection** | [deferred](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/deferred.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred') option.

    <!--JavaScript-->
    $(function(){
        $("#gridContainer").dxDataGrid({
            // ...
            dataSource: {
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                    key: "Product_ID"
                }
            },
            selection: {
                mode: 'multiple',
                allowSelectAll: true,
                deferred: true
            }
        }); 
    });

[note]We strongly recommend specifying the **key** property for data to ensure that selection will work properly.

There are certain differences between selection in deferred and usual (instant) modes. These differences consider the API you are using with each of these modes.

- **Setting initial selection**  

    To set the initially selected rows, use [selectionFilter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selectionFilter.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#selectionFilter') instead of the [selectedRowKeys](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selectedRowKeys.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#selectedRowKeys') option. Pass a [filter expression](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') to define records that must be selected.

        <!--JavaScript-->
        $(function () {
            $("#gridContainer").dxDataGrid({
                // ...
                selectionFilter: ["Task_Status", "=", "Completed"]
            });
        });
    
    Each time a user selects a row, the **DataGrid** changes a value of the **selectionFilter** option internally. You can use the following code to obtain the current value of this option and send it to the server for later processing.

        <!--JavaScript-->
        function sendSelectedRows() {
            var selectionFilter = dataGridInstance.option("selectionFilter");
            $.ajax({
                method: "POST",
                url: "url/to/data/processing/method",
                data: { 
                    filter: (selectionFilter ? JSON.stringify(selectionFilter) : null)
                }
            });
        }

- **Checking whether a row is selected**  

    To find whether or not a specific row is selected, use the [isRowSelected(data)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/isRowSelected(data).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#isRowSelecteddata') method. 

- **Getting data of selected rows**  

    The [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData') and [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowKeys().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys') methods return a [Promise](https://api.jquery.com/deferred.promise) of the jQuery.Deferred object that should be resolved.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/DeferredSelection/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>