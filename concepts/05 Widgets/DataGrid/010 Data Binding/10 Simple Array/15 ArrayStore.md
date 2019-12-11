If you want to extend the functionality of a JavaScript array, place it into an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'). It provides an interface for loading and editing data, and allows you to handle data-related events.

    <!--JavaScript-->$(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: new DevExpress.data.ArrayStore({
                data: books,
                onLoaded: function () {
                    // Event handling commands go here
                }
            })
        });
    });

Data kept in an ArrayStore can be processed in the DataSource whose purpose is similar to that of the Query; besides the **DataSource** provides wider capabilities.  For example, the **DataSource** can map objects from the array that underlies the **ArrayStore**, as shown in the following code.

    <!--JavaScript-->
    var customers = [{
        ID: 1,
        companyName: "Super Mart of the West",
        address: "702 SW 8th Street",
        city: "Bentonville"
    },
        // ...
    ];
    
    $(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: new DevExpress.data.DataSource({
                store: customers,
                map: function (item) {
                    return {
                        company: item.companyName,
                        fullAddress: item.city + ", " + item.address
                    }   
                }
            })
        });
    });

[note]Even if you have [passed a JavaScript array](/concepts/05%20Widgets/DataGrid/010%20Data%20Binding/10%20Simple%20Array/10%20Array%20Only.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Simple_Array/Array_Only/') to the **dataSource** option, the **DataGrid** automatically places it into an **ArrayStore** wrapped in the **DataSource** that you can get using the [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getDataSource') method.

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores)
- [Data Layer - DataSource Examples | In-memory Data](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/0%20In-memory%20Data.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data')