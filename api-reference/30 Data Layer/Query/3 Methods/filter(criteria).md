---
id: Query.filter(criteria)
---
---
##### shortDescription
Filters data items using a filter expression.

##### return: Query
The **Query** with transformed data.

##### param(criteria): Array<any>
A filter expression; described in the [Filtering](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') section.

---
---
##### jQuery

    <!--JavaScript-->
    var dataObjects = [ ... ];

    var filteredData = DevExpress.data.query(dataObjects)
        .filter(["price", "<", 500])
        // or
        // .filter("price", "<", 500)
        .toArray();

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let dataObjects = [ ... ];

            let filteredData = Query(dataObjects)
                .filter(["price", "<", 500])
                // or
                // .filter("price", "<", 500)
                .toArray();
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import Query from 'devextreme/data/query';

    const dataObjects = [ ... ];

    export default {
        mounted() {
            this.filteredData = Query(dataObjects)
                .filter(['price', '<', 500])
                // or
                // .filter('price', '<', 500)
                .toArray();
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import Query from 'devextreme/data/query';

    const dataObjects = [ ... ];

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.filteredData = Query(dataObjects)
                .filter(['price', '<', 500])
                // or
                // .filter('price', '<', 500)
                .toArray();
        }
    }
    export default App;

---