---
id: CustomStore.Options.remove
type: function(key)
---
---
##### shortDescription
Specifies a custom implementation of the [remove(key)](/api-reference/30%20Data%20Layer/Store/3%20Methods/remove(key).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#removekey') method.

##### param(key): Object | String | Number
The key of the data item to be removed.

##### return: Promise<void>
A Promise that is resolved after the data item is removed.
#include ref-promisedistinction

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        // ...
        remove: function (key) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/myEntity/" + encodeURIComponent(key),
                method: "DELETE",
            })
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
                remove: (key) => {
                    return httpClient.delete("http://mydomain.com/MyDataService/myEntity/" + encodeURIComponent(key))
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

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    const store = new CustomStore({
        // ...
        remove: (key) => {
            return fetch(`https://mydomain.com/MyDataService/${encodeURIComponent(key)}`, {
                method: "DELETE"
            })
            .then(handleErrors);
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

    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }

    const store = new CustomStore({
        // ...
        remove: (key) => {
            return fetch(`https://mydomain.com/MyDataService/${encodeURIComponent(key)}`, {
                method: "DELETE"
            })
            .then(handleErrors);
        });
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---