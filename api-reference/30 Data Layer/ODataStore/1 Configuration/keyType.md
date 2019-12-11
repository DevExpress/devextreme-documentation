---
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

---

When specifying this option in an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), use the `EdmType` enum that has the following values: `Int32`, `Int64`, `Guid`, `String`, `Boolean`, `Single` and `Decimal`.