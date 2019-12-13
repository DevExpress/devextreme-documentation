---
id: ODataContext.Options.entities
type: Object
---
---
##### shortDescription
Specifies entity collections to be accessed.

---
The **ODataContext** creates an **ODataStore** per entity collection, so you need to use [ODataStore options](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/') for configuring access to entity collections. In the following code, access to the `Employees` and `Customers` entity collections is configured, but only `Customers` is loaded using the [load()](/api-reference/30%20Data%20Layer/Store/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/ODataStore/Methods/#load') method:

---
#####jQuery

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        url: "https://js.devexpress.com/Demos/DevAV/odata/",
        entities: { 
            // Configures access to "https://js.devexpress.com/Demos/DevAV/odata/Employees"
            Employees: { 
                key: "Employee_ID", 
                keyType: "Int32" 
            },
            // Configures access to "https://js.devexpress.com/Demos/DevAV/odata/Customers"
            Clients: {              // The collection alias
                name: "Customers",  // The collection name
                key: "Customer_ID", 
                keyType: "Int32" 
            }
        }
    });
    context.Clients.load();

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
                    // Configures access to "https://js.devexpress.com/Demos/DevAV/odata/Employees"
                    Employees: { 
                        key: "Employee_ID", 
                        keyType: "Int32" 
                    },
                    // Configures access to "https://js.devexpress.com/Demos/DevAV/odata/Customers"
                    Clients: {              // The collection alias
                        name: "Customers",  // The collection name
                        key: "Customer_ID", 
                        keyType: "Int32" 
                    }
                }
            });
            this.context.Clients.load();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ODataContext from 'devextreme/data/odata/context';

    const context = new ODataContext({
        url: 'https://js.devexpress.com/Demos/DevAV/odata/',
        entities: { 
            // Configures access to "https://js.devexpress.com/Demos/DevAV/odata/Employees"
            Employees: { 
                key: 'Employee_ID', 
                keyType: 'Int32' 
            },
            // Configures access to "https://js.devexpress.com/Demos/DevAV/odata/Customers"
            Clients: {              // The collection alias
                name: 'Customers',  // The collection name
                key: 'Customer_ID', 
                keyType: 'Int32' 
            }
        }
    });

    export default {
        mounted: {
            context.Clients.load();
        },
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
            // Configures access to "https://js.devexpress.com/Demos/DevAV/odata/Employees"
            Employees: { 
                key: 'Employee_ID', 
                keyType: 'Int32' 
            },
            // Configures access to "https://js.devexpress.com/Demos/DevAV/odata/Customers"
            Clients: {              // The collection alias
                name: 'Customers',  // The collection name
                key: 'Customer_ID', 
                keyType: 'Int32' 
            }
        }
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            context.Clients.load();
        }
    }
    export default App;

---