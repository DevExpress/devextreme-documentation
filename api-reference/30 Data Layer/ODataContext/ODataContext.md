---
id: ODataContext
module: data/odata/context
export: default
type: Object
---
---
##### shortDescription
The **ODataContent** is an object that provides access to an entire OData service.

##### lib
dx.web.js, dx.viz.js, dx.all.js

---
This object creates several [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') instances. Each instance accesses an individual entity collection.

---
##### jQuery  

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        url: "http://www.example.com/Northwind.svc",
        entities: {
            Categories: {
                key: "CategoryID",
                keyType: "Int32"
            },
            // An entity collection alias
            Clients: {
                name: "Customers",
                key: "CustomerID",
                keyType: "String"
            },
            Products: {
                // A composite key
                key: ["ProductID", "ProductCode"],
                keyType: {
                    ProductID: "Guid",
                    ProductCode: "Int32" 
                }
            }
        }
    });

##### Angular  

    <!--TypeScript-->
    import ODataContext from "devextreme/data/odata/context";
    // ...
    export class AppComponent {
        context: ODataContext;
        constructor () {
            this.context = new ODataContext({
                url: "http://www.example.com/Northwind.svc",
                entities: {
                    Categories: {
                        key: "CategoryID",
                        keyType: "Int32"
                    },
                    // An entity collection alias
                    Clients: {
                        name: "Customers",
                        key: "CustomerID",
                        keyType: "String"
                    },
                    Products: {
                        // A composite key
                        key: ["ProductID", "ProductCode"],
                        keyType: {
                            ProductID: "Guid",
                            ProductCode: "Int32" 
                        }
                    }
                }
            });
        }
    }

##### AngularJS  

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.context = new DevExpress.data.ODataContext({
                url: "http://www.example.com/Northwind.svc",
                entities: {
                    Categories: {
                        key: "CategoryID",
                        keyType: "Int32"
                    },
                    // An entity collection alias
                    Clients: {
                        name: "Customers",
                        key: "CustomerID",
                        keyType: "String"
                    },
                    Products: {
                        // A composite key
                        key: ["ProductID", "ProductCode"],
                        keyType: {
                            ProductID: "Guid",
                            ProductCode: "Int32" 
                        }
                    }
                }
            })
        });

##### Knockout  

    <!--JavaScript-->  
    var viewModel = {
        context: new DevExpress.data.ODataContext({
            url: "http://www.example.com/Northwind.svc",
            entities: {
                Categories: {
                    key: "CategoryID",
                    keyType: "Int32"
                },
                // An entity collection alias
                Clients: {
                    name: "Customers",
                    key: "CustomerID",
                    keyType: "String"
                },
                Products: {
                    // A composite key
                    key: ["ProductID", "ProductCode"],
                    keyType: {
                        ProductID: "Guid",
                        ProductCode: "Int32" 
                    }
                }
            }
        })
    };

    ko.applyBindings(viewModel);

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ODataContext from 'devextreme/data/odata/context';

    const context = new ODataContext({
        url: 'http://www.example.com/Northwind.svc',
        entities: {
            Categories: {
                key: 'CategoryID',
                keyType: 'Int32'
            },
            // An entity collection alias
            Clients: {
                name: 'Customers',
                key: 'CustomerID',
                keyType: 'String'
            },
            Products: {
                // A composite key
                key: ['ProductID', 'ProductCode'],
                keyType: {
                    ProductID: 'Guid',
                    ProductCode: 'Int32' 
                }
            }
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
        url: 'http://www.example.com/Northwind.svc',
        entities: {
            Categories: {
                key: 'CategoryID',
                keyType: 'Int32'
            },
            // An entity collection alias
            Clients: {
                name: 'Customers',
                key: 'CustomerID',
                keyType: 'String'
            },
            Products: {
                // A composite key
                key: ['ProductID', 'ProductCode'],
                keyType: {
                    ProductID: 'Guid',
                    ProductCode: 'Int32' 
                }
            }
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---

#include datalayer-store-note-immutable with { name: "ODataContext" }

#####See Also#####
- [DataSource Examples - OData](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Binding/Data_Source_Examples/#OData')