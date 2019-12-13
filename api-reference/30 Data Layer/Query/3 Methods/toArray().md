---
id: Query.toArray()
---
---
##### shortDescription
Gets data items associated with the **Query**. This is a synchronous alternative to the [enumerate()](/api-reference/30%20Data%20Layer/Query/3%20Methods/enumerate().md '/Documentation/ApiReference/Data_Layer/Query/Methods/#enumerate') method.

##### return: Array<any>
The data items.

---
---
##### jQuery

    <!--JavaScript-->
    var data = DevExpress.data.query([10, 20, 50, 40, 30])
        .sortBy()
        .toArray();
        
    console.log(data); // outputs [10, 20, 30, 40, 50]

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let data = Query([10, 20, 50, 40, 30])
                .sortBy()
                .toArray();

            console.log(data); // outputs [10, 20, 30, 40, 50]
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import Query from 'devextreme/data/query';

    export default {
        mounted() {
            this.data = Query([10, 20, 50, 40, 30])
                .sortBy()
                .toArray();

            console.log(this.data); // outputs [10, 20, 30, 40, 50]
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

            this.data = Query([10, 20, 50, 40, 30])
                .sortBy()
                .toArray();

            console.log(this.data); // outputs [10, 20, 30, 40, 50]
        }
    }
    export default App;

---