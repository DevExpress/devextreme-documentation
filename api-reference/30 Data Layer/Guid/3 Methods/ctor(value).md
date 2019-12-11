---
##### shortDescription
Creates a new **Guid** instance that contains the specified GUID.

##### param(value): String
A string representation of the GUID.

---
Hyphens in the GUID are optional:

---
##### jQuery

    <!--JavaScript-->
    var guid = new DevExpress.data.Guid("40810dcc-e08b-10a2-8227-c67c8933c31a");
    // or
    var guid = new DevExpress.data.Guid("40810dcce08b10a28227c67c8933c31a");

##### Angular

    <!--TypeScript-->
    import Guid from "devextreme/core/guid";
    // ...
    export class AppComponent {
        constructor() {
            let guid = new Guid("40810dcc-e08b-10a2-8227-c67c8933c31a");
            // or
            let guid = new Guid("40810dcce08b10a28227c67c8933c31a");
        }
    }

---