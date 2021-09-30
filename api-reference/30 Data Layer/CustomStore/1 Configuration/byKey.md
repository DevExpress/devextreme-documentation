---
id: CustomStore.Options.byKey
type: function(key)
---
---
##### shortDescription
Specifies a custom implementation of the [byKey(key)](/api-reference/30%20Data%20Layer/Store/3%20Methods/byKey(key).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#byKeykey') method.

##### param(key): Object | String | Number
A key value.

##### return: Promise<any>
A Promise that is resolved after the data item is loaded.
#include ref-promisedistinction

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        // ...
        byKey: function (key) {
            var d = new $.Deferred();
            $.get("http://mydomain.com/MyDataService?id=" + key)
                .done(function (dataItem) {
                    d.resolve(dataItem);
                });
            return d.promise();
        }
    });

##### Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import CustomStore from "devextreme/data/custom_store";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.store = new CustomStore({
                // ...
                byKey: (key) => {
                    return httpClient.get("http://mydomain.com/MyDataService?id=" + key)
                        .toPromise();
                }
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            HttpClientModule 
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <script>
    import CustomStore from 'devextreme/data/custom_store';
    import DataSource from 'devextreme/data/data_source';
    import 'whatwg-fetch';

    const store = new CustomStore({
        // ...
        byKey: (key) => {
            return fetch("http://mydomain.com/MyDataService?id=" + key);
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
    import CustomStore from 'devextreme/data/custom_store';
    import DataSource from 'devextreme/data/data_source';
    import 'whatwg-fetch';

    const store = new CustomStore({
        // ...
        byKey: (key) => {
            return fetch("http://mydomain.com/MyDataService?id=" + key);
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---