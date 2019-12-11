---
##### shortDescription
Gets the **EdmLiteral**'s value converted to a string.

##### return: String
The value.

---
---
##### jQuery

    <!--JavaScript-->
    var edmLiteral = new DevExpress.data.EdmLiteral("100000L");
    console.log(edmLiteral.valueOf()); // logs 100000L

##### Angular

    <!--TypeScript-->
    import { EdmLiteral } from "devextreme/data/odata/utils";
    // ...
    export class AppComponent {
        constructor() {
            let edmLiteral = new EdmLiteral("100000L");
            console.log(edmLiteral.valueOf()); // logs 100000L
        }
    }

---