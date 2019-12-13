---
id: ODataStore.Options.keyType
acceptValues: 'String' | 'Int32' | 'Int64' | 'Guid' | 'Boolean' | 'Single' | 'Decimal'
type: String | Object
---
---
##### shortDescription
Specifies the type of the key property or properties.

---
Set this option if you do not need to [filter data](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering'). Otherwise, use the [fieldTypes](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/fieldTypes.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#fieldTypes') option. In the following code, the `Product_ID` and `Product_Code` key properties are `Guid` and `Int32`, respectively:

---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
        key: [ "Product_ID", "Product_Code" ],
        keyType: {
            Product_ID: "Guid",
            Product_Code: "Int32"
        }
    });

#####Angular

    <!--TypeScript-->
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        store: ODataStore;
        constructor() {
            this.store = new ODataStore({
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: [ "Product_ID", "Product_Code" ],
                keyType: {
                    Product_ID: "Guid",
                    Product_Code: "Int32"
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
        key: [ 'Product_ID', 'Product_Code' ],
        keyType: {
            Product_ID: 'Guid',
            Product_Code: 'Int32'
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
        key: [ 'Product_ID', 'Product_Code' ],
        keyType: {
            Product_ID: 'Guid',
            Product_Code: 'Int32'
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---

When specifying this option in an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, use the `EdmType` enum that has the following values: `Int32`, `Int64`, `Guid`, `String`, `Boolean`, `Single` and `Decimal`.