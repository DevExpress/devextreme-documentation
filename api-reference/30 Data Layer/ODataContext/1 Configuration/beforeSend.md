---
id: ODataContext.Options.beforeSend
type: function(options)
---
---
##### shortDescription
Specifies a function that customizes the request before it is sent to the server.

##### param(options): Object
The request parameters.

##### field(options.async): Boolean
Indicates whether the request is asynchronous or synchronous.

##### field(options.headers): Object
The request headers.

##### field(options.method): String
The request method ("GET", "POST", "PATCH", or "MERGE").

##### field(options.params): Object
Additional parameters.

##### field(options.payload): Object
The request body; for example, when updating an item, this property holds an object with new values.        
Unavailable if the request method is "GET".

##### field(options.timeout): Number
The request timeout.

##### field(options.url): String
The request URL.

---
---
#####jQuery

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        url: "https://js.devexpress.com/Demos/DevAV/odata/",
        entities: { 
            Employees: { 
                key: "Employee_ID", 
                keyType: "Int32" 
            },
            Customers: { 
                key: "Customer_ID", 
                keyType: "Int32" 
            }
        },
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
    import ODataContext from "devextreme/data/odata/context";
    // ...
    export class AppComponent {
        context: ODataContext;
        constructor() {
            this.context = new ODataContext({
                url: "https://js.devexpress.com/Demos/DevAV/odata/",
                entities: { 
                    Employees: { 
                        key: "Employee_ID", 
                        keyType: "Int32" 
                    },
                    Customers: { 
                        key: "Customer_ID", 
                        keyType: "Int32" 
                    }
                },
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
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ODataContext from 'devextreme/data/odata/context';

    const context = new ODataContext({
        url: 'https://js.devexpress.com/Demos/DevAV/odata/',
        entities: { 
            Employees: { 
                key: 'Employee_ID', 
                keyType: 'Int32' 
            },
            Customers: { 
                key: 'Customer_ID', 
                keyType: 'Int32' 
            }
        },
        beforeSend: (e) => {  
            e.params = {
                'param1': 'value1',
                'param2': 'value2'
            };
            e.headers = {
                'Custom Header': 'value'
            };
        }
    });

    export default {
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import ODataContext from 'devextreme/data/odata/context';

    const context = new ODataContext({
        url: 'https://js.devexpress.com/Demos/DevAV/odata/',
        entities: { 
            Employees: { 
                key: 'Employee_ID', 
                keyType: 'Int32' 
            },
            Customers: { 
                key: 'Customer_ID', 
                keyType: 'Int32' 
            }
        },
        beforeSend: (e) => {  
            e.params = {
                'param1': 'value1',
                'param2': 'value2'
            };
            e.headers = {
                'Custom Header': 'value'
            };
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---