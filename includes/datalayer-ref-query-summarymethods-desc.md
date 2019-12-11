First, call the [select(getter)](/api-reference/30%20Data%20Layer/Query/3%20Methods/select(getter).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#selectgetter') method to select the object field that provides numeric values if the **Query** is associated with an array of objects, or use the [${{summary}}(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#${{summary}}getter) method instead of **${{summary}}()**.

---
##### jQuery

    <!--JavaScript-->
    var dataObjects = [ ... ];

    DevExpress.data.query(dataObjects)
        .select("price")
        .${{summary}}()
        .done(function (result) {
            // "result" contains the calculated value 
        });

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let dataObjects = [ ... ];

            Query(dataObjects)
                .select("price")
                .${{summary}}()
                .then(result => {
                    // "result" contains the calculated value 
                });
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import Query from 'devextreme/data/query';

    const dataObjects = [ ... ];

    export default {
        mounted() {
            Query(dataObjects)
                .select('price')
                .${{summary}}()
                .then(result => {
                    // "result" contains the calculated value 
                });
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

            Query(dataObjects)
                .select('price')
                .${{summary}}()
                .then(result => {
                    // "result" contains the calculated value 
                });
        }
    }
    export default App;

---
