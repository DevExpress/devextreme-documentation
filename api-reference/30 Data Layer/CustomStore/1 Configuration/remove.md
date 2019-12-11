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
A Promise that is resolved after the data item is removed. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

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

#include common-note-axios

    <!-- tab: App.vue -->
    <script>
    import CustomStore from 'devextreme/data/custom_store';
    import DataSource from 'devextreme/data/data_source';
    import axios from 'axios';

    const store = new CustomStore({
        // ...
        remove: (key) => {
            return axios.delete("http://mydomain.com/MyDataService/myEntity/" + encodeURIComponent(key));
        }
    });

    export default {
        // ...
    }
    </script>

##### React

#include common-note-axios

    <!-- tab: App.js -->
    // ...
    import CustomStore from 'devextreme/data/custom_store';
    import DataSource from 'devextreme/data/data_source';
    import axios from 'axios';

    const store = new CustomStore({
        // ...
        remove: (key) => {
            return axios.delete("http://mydomain.com/MyDataService/myEntity/" + encodeURIComponent(key));
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---