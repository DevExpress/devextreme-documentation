---
type: String
---
---
##### shortDescription
Specifies the URL of an OData entity collection.

---
---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        // ...
        url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
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
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products"
            });
        };
    }

---