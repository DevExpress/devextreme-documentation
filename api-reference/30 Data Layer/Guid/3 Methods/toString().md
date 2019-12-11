---
##### shortDescription
Gets the GUID. Works identically to the [valueOf()](/api-reference/30%20Data%20Layer/Guid/3%20Methods/valueOf().md '/Documentation/ApiReference/Data_Layer/Guid/Methods/#valueOf') method.

##### return: String
The GUID.

---
The returned GUID is always hyphened even if the **Guid** was created with a non-hyphened version:

---
##### jQuery

    <!--JavaScript-->
    var guid = new DevExpress.data.Guid("40810dcce08b10a28227c67c8933c31a");
    console.log(guid.toString()); // logs 40810dcc-e08b-10a2-8227-c67c8933c31a

##### Angular

    <!--TypeScript-->
    import Guid from "devextreme/core/guid";
    // ...
    export class AppComponent {
        constructor() {
            let guid = new Guid("40810dcce08b10a28227c67c8933c31a");
            console.log(guid.toString()); // logs 40810dcc-e08b-10a2-8227-c67c8933c31a
        }
    }

---