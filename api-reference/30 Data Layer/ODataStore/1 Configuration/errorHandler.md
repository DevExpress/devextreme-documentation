---
type: function(e)
---
---
##### shortDescription
Specifies a function that is executed when the **ODataStore** throws an error.

##### param(e): Object
A JavaScript [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object extended with the following fields:

##### field(e.httpStatus): Number
The error code.

##### field(e.errorDetails): Object
Error details. It is an OData [error response object](https://docs.oasis-open.org/odata/odata-json-format/v4.0/cs01/odata-json-format-v4.0-cs01.html#_Toc365464725) for OData-specific errors or a [jqXHR object](https://api.jquery.com/jQuery.ajax/#jqXHR) for other errors when you use jQuery.

##### field(e.requestOptions): Object
Request details. Contains the following fields:

- **accepts**: Object       
The data types that the client accepts mapped to their MIME types.

- **async**: Boolean     
Indicates whether the request was asynchronous or synchronous.

- **contentType**: String | Boolean       
The content type; **false** if no content type was specified.

- **data**: Object      
[Query options](https://docs.oasis-open.org/odata/odata/v4.01/cs01/part1-protocol/odata-v4.01-cs01-part1-protocol.html#sec_SystemQueryOptions).

- **dataType**: String      
The expected data type.

- **headers**: Object       
The request headers.

- **jsonp**: Boolean     
Indicates whether the request was sent using JSONP.

- **method**: String    
The request method ("GET", "POST", "PATCH", or "MERGE").

- **timeout**: Number       
The request timeout.

- **url**: String       
The request URL.

- **xhrFields**: Object     
Native [XMLHttpRequest object properties](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Properties) that were sent in the request.

---
---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        // ...
        errorHandler: function(error) {
            console.log(error.message);
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
                errorHandler: (error) => {
                    console.log(error.message);
                }
            });
        };
    }

---