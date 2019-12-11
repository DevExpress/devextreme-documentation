---
##### shortDescription
Gets an entity with a specific key.

##### param(key): Object|String|Number
An entity's key value.

##### param(extraOptions): Object
Additional options.

##### field(extraOptions.expand): String | Array<String>
The names of the navigation properties to be loaded simultaneously with the entity (see [OData - Associations](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData/4%20Associations.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Associations')).

##### return: Promise<any>
A Promise that is resolved after the entity is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
In the following code, the **byKey** method loads the product with ID `1` along with the `"Category"` navigation property:

---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        // ...
        key: "Product_ID"
    });
    store.byKey(1, { expand: "Category" })
        .done(function (dataItem) {
            // Process the "dataItem" here
        })
        .fail(function (error) {
            // Handle the "error" here
        });

#####Angular

    <!--TypeScript-->
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        store: ODataStore;
        constructor() {
            this.store = new ODataStore({
                // ...
                key: "Product_ID"
            });
            this.store.byKey(1, { expand: "Category" }).then(
                (dataItem) => { /* Process the "dataItem" here */ },
                (error) => { /* Handle the "error" here */ }
            );
        };
    }

---