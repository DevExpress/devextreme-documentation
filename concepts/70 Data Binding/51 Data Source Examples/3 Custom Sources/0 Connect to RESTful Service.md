Assume that you have a web service published at a certain URL, for example *http://www.example.com/service/entity1*. This web service implements CRUD operations on data (Create, Read, Update, Delete) and follows the HTTP request conventions listed below.

- **GET http://www.example.com/service/entity1** request returns a list of all entities
- **GET http://www.example.com/service/entity1/123** request returns a single entity identified by the **123** key
- **POST http://www.example.com/service/entity1** adds a new entity built from the values passed in HTTP request body
- **PUT http://www.example.com/service/entity1/123** updates an entity identified by the **123** key with the values passed in HTTP request body
- **DELETE http://www.example.com/service/entity1/123** deletes an entity identified by the **123** key

Such services can have their own URL conventions and additional query-string parameters, they can use different HTTP methods, and different implementation of HTTP request body handlers. That is why the DevExtreme data layer does not provide a ready-to-use component to communicate with these services. However, the CustomStore class enables you to easily utilize any service.

For the service type described above, you can apply the following simple custom DataSource implementation.

    <!--JavaScript-->
    new DevExpress.data.CustomStore({

        load: function(loadOptions) {
            return $.getJSON(SERVICE_URL);
        },

        byKey: function(key) {
            return $.getJSON(SERVICE_URL + "/" + encodeURIComponent(key));
        },

        insert: function(values) {
            return $.post(SERVICE_URL, values);
        },

        update: function(key, values) {
            return $.ajax({
                url: SERVICE_URL + "/" + encodeURIComponent(key),
                method: "PUT",
                data: values
            });
        },

        remove: function(key) {
            return $.ajax({
                url: SERVICE_URL + "/" + encodeURIComponent(key),
                method: "DELETE",
            });
        }

    });
    
Note that all user functions return the result of the jQuery AJAX call, which is compatible with the **jQuery.Deferred** promise. In fact, you may use any promise-compatible object to connect to any asynchronous data storage; for example - to an HTML5 File API, and not necessarily to HTTP endpoints.

The **load** function accepts a number of **loadOptions** (sorting, filtering, paging, etc.). Send them to a remote storage where you can generate the resulting dataset based on these properties.

Note that certain UI components have peculiarities in the **CustomStore** implemenation. For example, in case of the [DataGrid](/api-reference/10%20UI%20Components/dxDataGrid '/Documentation/ApiReference/UI_Components/dxDataGrid/'), the **load** function should also return the total count of received records.

#####See Also#####
- [DataGrid - Use CustomStore](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')
- [PivotGrid - Use CustomStore](/concepts/05%20UI%20Components/PivotGrid/035%20Use%20CustomStore '/Documentation/Guide/UI_Components/PivotGrid/Use_CustomStore/')
