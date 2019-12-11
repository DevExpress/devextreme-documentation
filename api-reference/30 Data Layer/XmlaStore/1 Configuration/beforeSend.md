---
type: function(options)
---
---
##### shortDescription
Specifies a function that customizes the request before it is sent to the server.

##### param(options): Object
The request parameters. When jQuery is used, this object can contain [jQuery.ajax()](https://api.jquery.com/jquery.ajax)-supported fields.

##### field(options.url): String
The request URL.

##### field(options.method): String
The request method ("GET", "POST", "PATCH", or "MERGE").

##### field(options.headers): Object
The request headers.

##### field(options.xhrFields): Object
Native [XMLHttpRequest object properties](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Properties).

##### field(options.data): String
A query string that contains data to be sent to the server.

##### field(options.dataType): String
The expected result's data type.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.XmlaStore({
        url: "https://my-web-srv01/OLAP/msmdpump.dll",
        catalog: "AdventureWorksDW2012",
        cube: "Adventure Works",
        beforeSend: function (e) {  
            e.headers = {
                "Custom Header": "value"
            };
        }
    });

    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // ...
        store: store
    });

##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    import XmlaStore from "devextreme/ui/pivot_grid/xmla_store";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                store: new XmlaStore({
                    url: "https://my-web-srv01/OLAP/msmdpump.dll",
                    catalog: "AdventureWorksDW2012",
                    cube: "Adventure Works",
                    beforeSend: (e) => {
                        e.headers = {
                            "Custom Header": "value"
                        }
                    }
                })
            });
        }
    }

---