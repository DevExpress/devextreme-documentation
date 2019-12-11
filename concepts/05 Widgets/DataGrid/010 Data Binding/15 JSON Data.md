To bind the **DataGrid** to data in the JSON format, assign a URL leading to data to the [dataSource](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource') option.  

    <!--JavaScript-->$(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: "https://jsonplaceholder.typicode.com/posts"
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/AjaxRequest/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

Note that you can also use a JSONP callback parameter supported by [jQuery.ajax()](https://api.jquery.com/jQuery.ajax).

    <!--JavaScript-->$(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?"
        });
    });

If you need to process data after obtaining it, implement the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'). For details, see the [Custom Sources](/concepts/05%20Widgets/DataGrid/010%20Data%20Binding/25%20Custom%20Sources '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/') topic.