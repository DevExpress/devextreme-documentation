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
A Promise that is resolved after the data item is inserted. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

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

#include common-note-axios

    <!-- tab: App.vue -->
    <script>
    import CustomStore from 'devextreme/data/custom_store';
    import DataSource from 'devextreme/data/data_source';
    import axios from 'axios';

    const store = new CustomStore({
        // ...
        insert: (values) => {
            return axios.post("http://mydomain.com/MyDataService/myEntity", values);
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
        insert: (values) => {
            return axios.post("http://mydomain.com/MyDataService/myEntity", values);
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---