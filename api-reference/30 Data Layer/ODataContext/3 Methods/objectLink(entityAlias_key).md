---
id: ODataContext.objectLink(entityAlias, key)
---
---
##### shortDescription
Gets a link to an entity with a specific key.

##### return: Object
An object that contains the link to the entity.

##### param(entityAlias): String
The alias of the entity's collection.

##### param(key): Object | String | Number
The entity's key value.

---
Call this method within the [insert()](/api-reference/30%20Data%20Layer/Store/3%20Methods/insert(values).md '/Documentation/ApiReference/Data_Layer/ODataStore/Methods/#insertvalues') or the [update()](/api-reference/30%20Data%20Layer/Store/3%20Methods/update(key_values).md '/Documentation/ApiReference/Data_Layer/ODataStore/Methods/#updatekey_values') method to change the relationships between entities. The following code links the order with ID `1` to the customer with ID `2`:

---
#####jQuery

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        url: "https://js.devexpress.com/Demos/DevAV/odata/",
        entities: { 
            Orders: {  
                key: "Order_ID", 
                keyType: "Int32" 
            },
            Customers: { 
                key: "Customer_ID", 
                keyType: "Int32" 
            }
        } 
    });  
    context.Orders.update(1, {
        Customer: context.objectLink("Customers", 2) 
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
                    Orders: {  
                        key: "Order_ID", 
                        keyType: "Int32" 
                    },
                    Customers: { 
                        key: "Customer_ID", 
                        keyType: "Int32" 
                    }
                }
            });
            this.context.Orders.update(1, {
                Customer: context.objectLink("Customers", 2) 
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
            Orders: {  
                key: 'Order_ID', 
                keyType: 'Int32' 
            },
            Customers: { 
                key: 'Customer_ID', 
                keyType: 'Int32' 
            }
        }
    });

    export default {
        mounted() {
            context.Orders.update(1, {
                Customer: context.objectLink('Customers', 2) 
            });
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
            Orders: {  
                key: 'Order_ID', 
                keyType: 'Int32' 
            },
            Customers: { 
                key: 'Customer_ID', 
                keyType: 'Int32' 
            }
        }
    });
    
    class App extends React.Component {
        constructor(props) {
            super(props);
            context.Orders.update(1, {
                Customer: context.objectLink('Customers', 2) 
            });
        }
    }
    export default App;

---

#####See Also#####
- [Associations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Data_Source_Examples_OData_Associations)