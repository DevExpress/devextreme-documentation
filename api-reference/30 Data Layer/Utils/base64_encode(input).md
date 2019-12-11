---
module: data/utils
export: base64_encode
---
---
##### shortDescription
Encodes a string or array of bytes in [Base64](https://en.wikipedia.org/wiki/Base64).

##### param(input): String|Array<Number>
A string or array of bytes to be encoded.

##### return: String
A Base64-encoded string.

---
---
##### jQuery

    <!--JavaScript-->
    var base64str = DevExpress.data.base64_encode("test");
    
##### Angular

    <!--TypeScript-->
    import { base64_encode } from "devextreme/data/utils";
    // ...
    export class AppComponent {
        constructor () {
            let base64str = base64_encode("test");
        }
    }

---