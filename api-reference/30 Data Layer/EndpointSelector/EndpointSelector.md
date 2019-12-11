---
module: data/endpoint_selector
type: object
---
---
##### shortDescription
An object used to manage OData endpoints in your application.

---
This object selects local data service URL or production data service URL depending on the application execution mode. The endpoint options are passed to the **EndpointSelector** constructor.

    <!--JavaScript-->
    var endpointSelector = new DevExpress.data.EndpointSelector({
        db1: {
            local: "http://localhost:55555/service1.svc/"
            production: "http://services.example.com/service1.svc/"
        },
        db2: {
            local: "http://localhost:55555/service2.svc/"
            production: "http://services.example.com/service2.svc/"
        },
        . . .
    });

Note that the EndpointSelector can hold several endpoints. You can access the required one by its key using the [urlFor(key)](/api-reference/30%20Data%20Layer/EndpointSelector/3%20Methods/urlFor(key).md '/Documentation/ApiReference/Data_Layer/EndpointSelector/Methods/#urlForkey') method.