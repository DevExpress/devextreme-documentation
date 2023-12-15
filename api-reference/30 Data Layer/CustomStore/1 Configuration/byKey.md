---
id: CustomStore.Options.byKey
type: function(key, extraOptions)
---
---
##### shortDescription
Specifies a custom implementation of the [byKey(key)](/api-reference/30%20Data%20Layer/CustomStore/3%20Methods/byKey(key_extraOptions).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#byKeykey_extraOptions') method.

##### param(key): Object | String | Number
A key value.

##### return: Promise<any>
A Promise that is resolved after the data item is loaded.
#include ref-promisedistinction

##### param(extraOptions): LoadOptions
<!-- Description goes here -->

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
    import { lastValueFrom } from 'rxjs';
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.store = new CustomStore({
                // ...
                byKey: (key) => {
                    return lastValueFrom(httpClient.get("http://mydomain.com/MyDataService?id=" + key));
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