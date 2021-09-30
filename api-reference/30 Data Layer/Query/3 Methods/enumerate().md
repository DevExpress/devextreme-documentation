---
id: Query.enumerate()
---
---
##### shortDescription
Executes the **Query**. This is an asynchronous alternative to the [toArray()](/api-reference/30%20Data%20Layer/Query/3%20Methods/toArray().md '/Documentation/ApiReference/Data_Layer/Query/Methods/#toArray') method.

##### return: Promise<any>
A Promise that is resolved after the operation is completed.
#include ref-promisedistinction

---
---
##### jQuery

    <!--JavaScript-->
    DevExpress.data.query("http://mydomain.com/MyDataService", queryOptions)
        .enumerate()
        .done(function (result) {
            // "result" contains the obtained array
        });

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            Query("http://mydomain.com/MyDataService", queryOptions)
                .enumerate()
                .then(result => {
                    // "result" contains the obtained array
                });
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import Query from 'devextreme/data/query';

    export default {
        mounted() {
            Query('http://mydomain.com/MyDataService', queryOptions)
                .enumerate()
                .then(result => {
                    // "result" contains the obtained array
                });
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import Query from 'devextreme/data/query';

    class App extends React.Component {
        constructor(props) {
            super(props);

            Query('http://mydomain.com/MyDataService', queryOptions)
                .enumerate()
                .then(result => {
                    // "result" contains the obtained array
                });
        }
    }
    export default App;

---