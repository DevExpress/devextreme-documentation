---
type: function(options)
---
---
##### shortDescription
Specifies a function that customizes the request before it is sent to the server.

##### param(options): Object
The request parameters.

##### field(options.url): String
The request URL.

##### field(options.async): Boolean
Indicates whether the request is asynchronous or synchronous.

##### field(options.method): String
The request method ("GET", "POST", "PATCH", or "MERGE").

##### field(options.timeout): Number
The request timeout.

##### field(options.params): Object
Additional request parameters.

##### field(options.payload): Object
The request body; for example, when updating an item, this property holds an object with new values.        
Unavailable if the request method is "GET".

##### field(options.headers): Object
The request headers.

---
---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "https://js.devexpress.com/Demos/DevAV/odata/Products",  
        beforeSend: function (e) {  
            e.params = {
                "param1": "value1",
                "param2": "value2"
            };
            e.headers = {
                "Custom Header": "value"
            };
        }
    });

#####Angular

    <!--TypeScript-->
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        store: ODataStore;
        constructor() {
            this.store = new ODataStore({
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",  
                beforeSend: (e) => {  
                    e.params = {
                        "param1": "value1",
                        "param2": "value2"
                    };
                    e.headers = {
                        "Custom Header": "value"
                    };
                }
            });
        };
    }

---