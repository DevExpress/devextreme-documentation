Use the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') to bind the TagBox to data an OData service provides.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.ODataStore({
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
            }),
            valueExpr: "Product_Cost",
            displayExpr: "Product_Name"
        });
    });

##### Angular

    <!--HTML--><dx-tag-box
        [dataSource]="productsStore"
        valueExpr="Product_Cost"
        displayExpr="Product_Name">
    </dx-tag-box>

    <!--TypeScript-->
    import ODataStore from "devextreme/data/odata/store";
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        productsStore: ODataStore = new ODataStore({
            url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
            key: "Product_ID"
        });
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxTagBox
            :data-source="dataSource"
            value-expr="Product_Cost"
            display-expr="Product_Name"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';
    import ODataStore from "devextreme/data/odata/store";

    export default {
        components: {
            DxTagBox
        },
        data() {
            return {
                dataSource: new ODataStore({
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

    import { TagBox } from 'devextreme-react/tag-box';
    import ODataStore from "devextreme/data/odata/store";

    const dataSource = new ODataStore({
        url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
        key: "Product_ID"
    });

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={dataSource}
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
        $("#tagBoxContainer").dxTagBox({
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
    <dx-tag-box
        [dataSource]="productsStore"
        valueExpr="Product_Cost"
        displayExpr="Product_Name">
    </dx-tag-box>

    <!--TypeScript-->
    import "devextreme/data/odata/store";
    import DataSource from "devextreme/data/data_source";
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        productsStore = new DataSource({
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
             DxTagBoxModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxTagBox
            :data-source="dataSource"
            value-expr="Product_Cost"
            display-expr="Product_Name"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';
    import DataSource from "devextreme/data/data_source";

    export default {
        components: {
            DxTagBox
        },
        data() {
            return {
                dataSource: new DataSource({
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

    import { TagBox } from 'devextreme-react/tag-box';
    import DataSource from "devextreme/data/data_source";

    const dataSource = new DataSource({
        store: {
            type: "odata",
            url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
            key: "Product_ID"
        },
        filter: ["Product_Available", "=", true]
    });

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={dataSource}
                    valueExpr="Product_Cost"
                    displayExpr="Product_Name"
                />
            );
        }
    }

    export default App;

---

### A 1-Click Solution for CRUD Web API Services with Role-based Access Control via EF Core

If you target .NET for your backend API, be sure to check out [Web API Service](https://docs.devexpress.com/eXpressAppFramework/403394/backend-web-api-service?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatastore) and register your [free copy today](https://www.devexpress.com/security-api-free?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatastore). The Solution Wizard scaffolds an OData v4 Web API Service (.NET 6+) with integrated authorization & CRUD operations powered by EF Core ORM. You can use OAuth2, JWT or custom authentication strategies alongside tools like Postman or Swagger (OpenAPI) for API testing.
The built-in Web API Service also filters out secured server data based on permissions granted to users. Advanced/enterprise functions include audit trail, endpoints to download reports, file attachments, check validation, obtain localized captions, etc.

To use the free Solution Wizard (which creates the Web API Service), run the Universal Component Installer from the [DevExpress Download Manager](https://www.devexpress.com/ClientCenter/DownloadManager/?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatastore) and use our predefined template in Visual Studio 2022+.

[Read Tutorial](https://docs.devexpress.com/eXpressAppFramework/404449/backend-web-api-service/get-started-with-web-api-service) | View Examples: [JavaScript (DevExtreme)](https://go.devexpress.com/XAF_Security_NonXAF_DevExtreme_OData.aspx) & [JavaScript (Svelte)](https://github.com/oliversturm/demo-dx-webapi-js/tree/stage-6) | [Watch Videos](https://www.youtube.com/watch?v=T7y4gwc1n4w&list=PL8h4jt35t1wiM1IOux04-8DiofuMEB33G)

#####See Also#####
- [Data Layer - What Are Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores')
- [Data Layer - Data Source Examples | OData](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Binding/Data_Source_Examples/#OData')
- [Access the DataSource](/concepts/05%20UI%20Components/TagBox/02%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/UI_Components/TagBox/Data_Binding/Access_the_DataSource/')
- [TagBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tag_Box/Overview)

[tags]tagBox, data binding, provide data, odata, ODataStore, DataSource, process data
