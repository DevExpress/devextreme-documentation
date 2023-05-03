Use the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') to bind the Lookup to data provided by an OData service.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.ODataStore({
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
            }),
            valueExpr: "Product_Cost",
            displayExpr: "Product_Name"
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="Product_Cost"
        displayExpr="Product_Name">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        lookupDataSource = new ODataStore({
            url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
            key: "Product_ID"
        });
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLookup
            :data-source="products"
            value-expr="Product_Cost"
            display-expr="Product_Name"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';
    import ODataStore from "devextreme/data/odata/store";

    export default {
        components: {
            DxLookup
        },
        data() {
            return {
                products: new ODataStore({
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                    key: "Product_ID"
                })
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';
    import ODataStore from "devextreme/data/odata/store";

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.products = new ODataStore({
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
            });
        }

        render() {
            return (
                <Lookup
                    dataSource={this.products}
                    valueExpr="Product_Cost"
                    displayExpr="Product_Name"
                />
            );
        }
    }

    export default App;

---

Data kept in the **ODataStore** can be processed in a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). For example, the **DataSource** can filter data.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                    key: "Product_ID"
                },
                filter: ["Product_Available", "=", true]
            }),
            valueExpr: "Product_Cost",
            displayExpr: "Product_Name"
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="Product_Cost"
        displayExpr="Product_Name">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        lookupDataSource = new DataSource({
            store: {
                type: "odata",
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
            },
            filter: ["Product_Available", "=", true]
        });
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLookup
            :data-source="products"
            value-expr="Product_Cost"
            display-expr="Product_Name"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';
    import DataSource from "devextreme/data/data_source";

    export default {
        components: {
            DxLookup
        },
        data() {
            return {
                products: new DataSource({
                    store: {
                        type: "odata",
                        url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                        key: "Product_ID"
                    },
                    filter: ["Product_Available", "=", true]
                })
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';
    import DataSource from "devextreme/data/data_source";

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.products = new DataSource({
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                    key: "Product_ID"
                },
                filter: ["Product_Available", "=", true]
            });
        }

        render() {
            return (
                <Lookup
                    dataSource={this.products}
                    valueExpr="Product_Cost"
                    displayExpr="Product_Name"
                />
            );
        }
    }

    export default App;

---

### A 1-Click Solution for CRUD Web API Services with Role-based Access Control via EF Core & XPO

If you target .NET for your backend API, be sure to check out <a href="https://docs.devexpress.com/eXpressAppFramework/403394/backend-web-api-service?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=lookup-odata-service" target="_blank">Web API Service</a> and register your <a href="https://www.devexpress.com/security-api-free?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=lookup-odata-service" target="_blank">free copy today</a>. The Solution Wizard scaffolds an OData v4 Web API Service (.NET 6+) with integrated authorization & CRUD operations powered by EF Core and our XPO ORM library. You can use OAuth2, JWT or custom authentication strategies alongside tools like Postman or Swagger (OpenAPI) for API testing.

The built-in Web API Service also filters out secured server data based on permissions granted to users. Advanced/enterprise functions include audit trail, endpoints to download reports, file attachments, check validation, obtain localized captions, etc. 

To use the free Solution Wizard (which creates the Web API Service) run the Universal Component Installer from the <a href="https://www.devexpress.com/ClientCenter/DownloadManager/?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=lookup-odata-service" target="_blank">DevExpress Download Manager</a>.

#####See Also#####
- [Data Layer - What Are Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores')
- [Data Layer - Data Source Examples | OData](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Binding/Data_Source_Examples/#OData')
- [Access the DataSource](/concepts/05%20UI%20Components/Lookup/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/UI_Components/Lookup/Data_Binding/Access_the_DataSource/')
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)

[tags]Lookup, data binding, provide data, odata, ODataStore, DataSource, process data