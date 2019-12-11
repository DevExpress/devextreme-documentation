---
##### shortDescription
Creates an **EdmLiteral** instance with a new value.

##### param(value): String
A value in a format the OData's [Abstract Type System](https://www.odata.org/documentation/odata-version-2-0/overview/#AbstractTypeSystem) defines.

---
---
##### jQuery

    <!--JavaScript-->
    var edmLiteral = new DevExpress.data.EdmLiteral("100000L");

##### Angular

    <!--TypeScript-->
    import { EdmLiteral } from "devextreme/data/odata/utils";
    // ...
    export class AppComponent {
        constructor() {
            let edmLiteral = new EdmLiteral("100000L");
        }
    }

---