Use the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') to bind the **TagBox** to data an OData service provides.

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
    import 'devextreme/dist/css/dx.common.css';
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
    import 'devextreme/dist/css/dx.common.css';
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
    import 'devextreme/dist/css/dx.common.css';
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
    import 'devextreme/dist/css/dx.common.css';
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

#####See Also#####
- [Data Layer - What Are Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores')
- [Data Layer - Data Source Examples | OData](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Binding/Data_Source_Examples/#OData')
- [Access the DataSource](/concepts/05%20Widgets/TagBox/02%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/TagBox/Data_Binding/Access_the_DataSource/')
- [TagBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tag_Box/Overview)

[tags]tagBox, data binding, provide data, odata, ODataStore, DataSource, process data
