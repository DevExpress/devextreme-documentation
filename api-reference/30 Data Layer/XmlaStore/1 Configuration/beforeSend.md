---
id: XmlaStore.Options.beforeSend
type: function(options)
---
---
##### shortDescription
Specifies a function that customizes the request before it is sent to the server.

##### param(options): Object
The request parameters. When jQuery is used, this object can contain <a href="http://api.jquery.com/jquery.ajax/" target="_blank">jQuery.ajax()</a>-supported fields.

##### field(options.data): String
A query string that contains data to be sent to the server.

##### field(options.dataType): String
The expected result's data type.

##### field(options.headers): Object
The request headers.

##### field(options.method): String
The request method ("GET", "POST", "PATCH", or "MERGE").

##### field(options.url): String
The request URL.

##### field(options.xhrFields): Object
Native <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Properties" target="_blank">XMLHttpRequest object properties</a>.

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

##### Vue

    <!-- tab: App.vue -->   
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import XmlaStore from 'devextreme/ui/pivot_grid/xmla_store';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        store: new XmlaStore({
            url: 'https://my-web-srv01/OLAP/msmdpump.dll',
            catalog: 'AdventureWorksDW2012',
            cube: 'Adventure Works',
            beforeSend: (e) => {
                e.headers = {
                    'Custom Header': 'value'
                }
            }
        })
    });

    export default {
        // ...
        data() {
            return {
                pivotGridDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import XmlaStore from 'devextreme/ui/pivot_grid/xmla_store';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        store: new XmlaStore({
            url: 'https://my-web-srv01/OLAP/msmdpump.dll',
            catalog: 'AdventureWorksDW2012',
            cube: 'Adventure Works',
            beforeSend: (e) => {
                e.headers = {
                    'Custom Header': 'value'
                }
            }
        })
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---