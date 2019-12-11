---
type: String
---
---
##### shortDescription
Specifies the URL of an OData service.

---
---
#####jQuery

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        // ...
        url: "https://js.devexpress.com/Demos/DevAV/odata/",
    });

#####Angular

    <!--TypeScript-->
    import ODataContext from "devextreme/data/odata/context";
    // ...
    export class AppComponent {
        context: ODataContext;
        constructor() {
            this.context = new ODataContext({
                // ...
                url: "https://js.devexpress.com/Demos/DevAV/odata/",
            });
        }
    }

---

#####See Also#####
- [entities](/api-reference/30%20Data%20Layer/ODataContext/1%20Configuration/entities.md '/Documentation/ApiReference/Data_Layer/ODataContext/Configuration/#entities')