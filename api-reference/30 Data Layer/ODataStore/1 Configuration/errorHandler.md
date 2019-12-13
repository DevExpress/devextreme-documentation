---
id: ODataStore.Options.errorHandler
type: function(e)
---
---
##### shortDescription
Specifies a function that is executed when the **ODataStore** throws an error.

##### param(e): Object
A JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> object extended with the following fields:

##### field(e.errorDetails): Object
Error details. It is an OData <a href="http://docs.oasis-open.org/odata/odata-json-format/v4.0/cs01/odata-json-format-v4.0-cs01.html#_Toc365464725" target="_blank">error response object</a> for OData-specific errors or a <a href="http://api.jquery.com/jQuery.ajax/#jqXHR" target="_blank">jqXHR object</a> for other errors when you use jQuery.

##### field(e.httpStatus): Number
The error code.

##### field(e.requestOptions): Object
Request details. Contains the following fields:

- **accepts**: Object       
The data types that the client accepts mapped to their MIME types.

- **async**: Boolean     
Indicates whether the request was asynchronous or synchronous.

- **contentType**: String | Boolean       
The content type; **false** if no content type was specified.

- **data**: Object      
<a href="http://docs.oasis-open.org/odata/odata/v4.01/cs01/part1-protocol/odata-v4.01-cs01-part1-protocol.html#sec_SystemQueryOptions" target="_blank">Query options</a>.

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
Native <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Properties" target="_blank">XMLHttpRequest object properties</a> that were sent in the request.

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

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ODataStore from 'devextreme/data/odata/store';

    const store = new ODataStore({
        // ...
        errorHandler: (error) => {
            console.log(error.message);
        }
    });

    export default {
        // ...
        data() {
            return {
                store
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import ODataStore from 'devextreme/data/odata/store';

    const store = new ODataStore({
        // ...
        errorHandler: (error) => {
            console.log(error.message);
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---