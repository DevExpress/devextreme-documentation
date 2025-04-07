---
id: Utils.query(url, queryOptions)
module: common/data
export: query
---
---
##### shortDescription
Creates a [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/') instance that accesses a remote data service using its URL.

##### return: Query
A **Query** instance.

##### param(url): String
The data service's URL.

##### param(queryOptions): Object
Additional query properties.

---
The **queryOptions** object should contain the **adapter** function that implements data access logic. The **queryOptions** object can also contain the **errorHandler** function for handling errors that may occur during the **Query**'s execution.

---
##### jQuery

    <!--JavaScript-->
    var query = DevExpress.data.query("http://mydomain.com/MyDataService", queryOptions);

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let query = Query("http://mydomain.com/MyDataService", queryOptions);
        };
    }

##### Vue

    <!-- tab: App.vue -->  
    <script>
    import Query from 'devextreme/data/query';

    export default {
        mounted() {
            this.query = Query('http://mydomain.com/MyDataService', queryOptions);
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
            
            this.query = Query('http://mydomain.com/MyDataService', queryOptions);
        }
        // ...
    }
    export default App;

---

#####See Also#####
- [Query Concept](/concepts/70%20Data%20Binding/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Binding/Data_Layer/#Query_Concept')