---
id: ODataStore
module: data/odata/store
export: default
inherits: Store
---
---
##### shortDescription
The **ODataStore** is a store that provides an interface for loading and editing data from an individual OData entity collection and handling related events.

##### lib
dx.web.js, dx.viz.js, dx.all.js

---
---
##### jQuery  

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "http://www.example.com/Northwind.svc/Products",
        key: "ProductID",
        keyType: "Int32",
        // Other ODataStore properties go here
    });

    // ===== or inside the DataSource =====
    var dataSource = new DevExpress.data.DataSource({
        store: {
            type: "odata",
            url: "http://www.example.com/Northwind.svc/Products",
            key: "ProductID",
            keyType: "Int32",
            // Other ODataStore properties go here
        },
        // Other DataSource properties go here
    });

##### Angular  

    <!--TypeScript-->
    import ODataStore from "devextreme/data/odata/store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        store: ODataStore;
        dataSource: DataSource;
        constructor () {
            this.store = new ODataStore({
                url: "http://www.example.com/Northwind.svc/Products",
                key: "ProductID",
                keyType: "Int32",
                // Other ODataStore properties go here
            });

            // ===== or inside the DataSource =====
            this.dataSource = new DataSource({
                store: new ODataStore({
                    url: "http://www.example.com/Northwind.svc/Products",
                    key: "ProductID",
                    keyType: "Int32",
                    // Other ODataStore properties go here
                }),
                // Other DataSource properties go here
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ODataStore from 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';

    const store = new ODataStore({
        url: 'http://www.example.com/Northwind.svc/Products',
        key: 'ProductID',
        keyType: 'Int32',
        // Other ODataStore properties go here
    });

    // ===== or inside the DataSource =====
    const dataSource = new DataSource({
        store: new ODataStore({
            url: 'http://www.example.com/Northwind.svc/Products',
            key: 'ProductID',
            keyType: 'Int32',
            // Other ODataStore properties go here
        }),
        // Other DataSource properties go here
    });

    export default {
        // ...
        data() {
            return {
                store,
                // ===== or =====
                dataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import ODataStore from 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';

    const store = new ODataStore({
        url: 'http://www.example.com/Northwind.svc/Products',
        key: 'ProductID',
        keyType: 'Int32',
        // Other ODataStore properties go here
    });

    // ===== or inside the DataSource =====
    const dataSource = new DataSource({
        store: new ODataStore({
            url: 'http://www.example.com/Northwind.svc/Products',
            key: 'ProductID',
            keyType: 'Int32',
            // Other ODataStore properties go here
        }),
        // Other DataSource properties go here
    });

    class App extends React.Component {
        // ...
    }
    export default App;

##### AngularJS  

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.store = new DevExpress.data.ODataStore({
                url: "http://www.example.com/Northwind.svc/Products",
                key: "ProductID",
                keyType: "Int32",
                // Other ODataStore properties go here
            });

            // ===== or inside the DataSource =====
            $scope.dataSource = new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "http://www.example.com/Northwind.svc/Products",
                    key: "ProductID",
                    keyType: "Int32",
                    // Other ODataStore properties go here
                },
                // Other DataSource properties go here
            });
        });

##### Knockout  

    <!--JavaScript-->    
    var viewModel = {
        store: new DevExpress.data.ODataStore({
            url: "http://www.example.com/Northwind.svc/Products",
            key: "ProductID",
            keyType: "Int32",
            // Other ODataStore properties go here
        })

        // ===== or inside the DataSource =====
        dataSource: new DevExpress.data.DataSource({
            store: {
                type: "odata",
                url: "http://www.example.com/Northwind.svc/Products",
                key: "ProductID",
                keyType: "Int32",
                // Other ODataStore properties go here
            },
            // Other DataSource properties go here
        })
    };

    ko.applyBindings(viewModel);

##### ASP.NET MVC Controls

    <!--Razor C#-->@(Html.DevExtreme().WidgetName()
        .DataSource(ds => ds.OData()
            .Url("http://www.example.com/Northwind.svc/Products")
            .Key("ProductID")
            .KeyType(EdmType.Int32)
            // Other ODataStore properties go here
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .DataSource(Function(ds)
            Return ds.OData() _
                     .Url("http://www.example.com/Northwind.svc/Products") _
                     .Key("ProductID") _
                     .KeyType(EdmType.Int32) _
                     @* ... *@
                     @* Other ODataStore properties go here *@
                     @* ... *@
        End Function)
    )

---

To access an entire OData service, use the [ODataContext](/Documentation/ApiReference/Data_Layer/ODataContext/) instead.

#include datalayer-store-note-immutable with { name: "ODataStore" }

[note]

If you target .NET for your backend API, be sure to check out <a href="https://docs.devexpress.com/eXpressAppFramework/403394/backend-web-api-service?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatastore" target="_blank">Web API Service</a> and register your <a href="https://www.devexpress.com/security-api-free?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatastore" target="_blank">free copy today</a>. The Solution Wizard scaffolds an OData v4 Web API Service (.NET 6+) with integrated authorization & CRUD operations powered by EF Core and our XPO ORM library. You can use OAuth2, JWT or custom authentication strategies alongside tools like Postman or Swagger (OpenAPI) for API testing.

The built-in Web API Service also filters out secured server data based on permissions granted to users. Advanced/enterprise functions include audit trail, endpoints to download reports, file attachments, check validation, obtain localized captions, etc. 

To use the free Solution Wizard (which creates the Web API Service) run the Universal Component Installer from the <a href="https://www.devexpress.com/ClientCenter/DownloadManager/?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatastore" target="_blank">DevExpress Download Manager</a>.

[/note]

#####See Also#####
- [DataSource API Reference](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/')
- [DataSource Examples - OData](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Binding/Data_Source_Examples/#OData')
