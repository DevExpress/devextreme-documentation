---
id: Utils.query(array, queryOptions)
module: common/data
export: query
---
---
##### shortDescription
Creates a [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/') instance.

##### return: Query
A **Query** instance.

##### param(array): Array<any>
Data to be associated with the **Query**.

##### param(queryOptions): Object
Additional query properties.

---
---
##### jQuery

    <!--JavaScript-->
    var query = DevExpress.data.query([10, 20, 50, 40, 30]);

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let query = Query([10, 20, 50, 40, 30]);
        };
    }

##### Vue

    <!-- tab: App.vue -->  
    <script>
    import Query from 'devextreme/data/query';

    export default {
        mounted() {
            this.query = Query([10, 20, 50, 40, 30]);
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
            
            this.query = Query([10, 20, 50, 40, 30]);
        }
        // ...
    }
    export default App;

---

#####See Also#####
- [Query Concept](/concepts/70%20Data%20Binding/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Binding/Data_Layer/#Query_Concept')