To bind the **List** to data in a JSON format, assign the URL leading to data to the [dataSource](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#dataSource') option.  
    
    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: "https://jsonplaceholder.typicode.com/posts",
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<i>").text(data.id + " | "),
                    $("<b>").text(data.title), $("<br />"),
                    $("<p>").text(data.body).css({
                        "margin-top": 10,
                        "white-space": "normal"
                    })
                )
            }
        });
    });

Note that you can also use a JSONP callback parameter supported by [jQuery.ajax()](https://api.jquery.com/jQuery.ajax).

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?",
            // ...
        });
    });

If you need to process data after obtaining it, implement the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'). For details, see the [Custom Sources](/concepts/05%20Widgets/List/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/List/Data_Binding/Custom_Sources/') topic.

#####See Also#####
- [List - Access the DataSource](/concepts/05%20Widgets/List/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/List/Data_Binding/Access_the_DataSource/')
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, data binding, provide data, json, jsonp