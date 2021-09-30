---
id: CustomStore.Options.insert
type: function(values)
---
---
##### shortDescription
Specifies a custom implementation of the [insert(values)](/api-reference/30%20Data%20Layer/Store/3%20Methods/insert(values).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#insertvalues') method.

##### param(values): Object
The data item to be inserted.

##### return: Promise<any>
A Promise that is resolved after the data item is inserted.
#include ref-promisedistinction

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        // ...
        insert: function (values) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/myEntity",
                method: "POST",
                data: values
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
                insert: (values) => {
                    return httpClient.post("http://mydomain.com/MyDataService/myEntity", values)
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
        insert: (values) => {
            return fetch("https://mydomain.com/MyDataService/myEntity", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(handleErrors);
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

    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }
    
    const store = new CustomStore({
        // ...
        insert: (values) => {
            return fetch("https://mydomain.com/MyDataService/myEntity", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(handleErrors);
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---