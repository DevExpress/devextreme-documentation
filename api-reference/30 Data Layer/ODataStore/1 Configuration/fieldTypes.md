---
id: ODataStore.Options.fieldTypes
type: Object
default: {}
---
---
##### shortDescription
Specifies the data field types. Accepts the following types: *"String"*, *"Int32"*, *"Int64"*, *"Boolean"*, *"Single"*, "*Decimal"* and *"[Guid](/api-reference/30%20Data%20Layer/Guid '/Documentation/ApiReference/Data_Layer/Guid/')"*.

---
Set this option if you are going to [filter data](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering'). An object assigned to it should list data fields and their types as field-value pairs. You can also use this option instead of the [keyType](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/keyType.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#keyType') to specify the key property's type.

---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
        key: "Product_ID",
        fieldTypes: {
            Product_ID: "Guid",
            Product_Name: "String",
            Product_Price: "Int32"
        }
    });

##### Angular

    <!--TypeScript-->
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        store: ODataStore;
        constructor() {
            this.store = new ODataStore({
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",  
                key: "Product_ID",
                fieldTypes: {
                    Product_ID: "Guid",
                    Product_Name: "String",
                    Product_Price: "Int32"
                }
            });
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ODataStore from 'devextreme/data/odata/store';

    const store = new ODataStore({
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',  
        key: 'Product_ID',
        fieldTypes: {
            Product_ID: 'Guid',
            Product_Name: 'String',
            Product_Price: 'Int32'
        }
    });

    export default {
        // ...
        data() {
            return {
                store
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import ODataStore from 'devextreme/data/odata/store';

    const store = new ODataStore({
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',  
        key: 'Product_ID',
        fieldTypes: {
            Product_ID: 'Guid',
            Product_Name: 'String',
            Product_Price: 'Int32'
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->@(Html.DevExtreme().WidgetName()
        .DataSource(d => d.OData()
            .Url("https://js.devexpress.com/Demos/DevAV/odata/Products")
            .Key("Product_ID")
            .FieldTypes(new Dictionary<string, EdmType> {
                { "Product_ID", EdmType.Guid },
                { "Product_Name", EdmType.String },
                { "Product_Price", EdmType.Int32 }
            })
        )
    )

---