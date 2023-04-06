---
id: ODataContext
module: data/odata/context
export: default
---
---
##### shortDescription
The **ODataContext** is an object that provides access to an entire OData service.

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

[note]

If you target .NET for your backend API, be sure to check out <a href="https://docs.devexpress.com/eXpressAppFramework/403394/backend-web-api-service?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatacontext" target="_blank">Web API Service</a> and register your <a href="https://www.devexpress.com/security-api-free?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatacontext" target="_blank">free copy today</a>. The Solution Wizard scaffolds an OData v4 Web API Service (.NET 6+) with integrated authorization & CRUD operations powered by EF Core and our XPO ORM library. You can use OAuth2, JWT or custom authentication strategies alongside tools like Postman or Swagger (OpenAPI) for API testing.

The built-in Web API Service also filters out secured server data based on permissions granted to users. Advanced/enterprise functions include audit trail, endpoints to download reports, file attachments, check validation, obtain localized captions, etc. 

To use the free Solution Wizard (which creates the Web API Service) run the Universal Component Installer from the <a href="https://www.devexpress.com/ClientCenter/DownloadManager/?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatacontext" target="_blank">DevExpress Download Manager</a>.

[/note]

#####See Also#####
- [DataSource Examples - OData](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Binding/Data_Source_Examples/#OData')
