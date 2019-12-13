---
id: Query.filter(predicate)
---
---
##### shortDescription
Filters data items using a custom function.

##### return: Query
The **Query** with transformed data.

##### param(predicate): function()
A function that accepts a data item and returns **true** if it should be included in the resulting array and **false** otherwise.

---
---
##### jQuery

    <!--JavaScript-->
    var filteredData = DevExpress.data.query([10, 20, 40, 50, 30])
        .filter(function (dataItem) {
            return dataItem < 25;
        })
        .toArray();

    console.log(filteredData); // outputs [10, 20]

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let filteredData = Query([10, 20, 40, 50, 30])
                .filter(dataItem => dataItem < 25)
                .toArray();

            console.log(filteredData); // outputs [10, 20]
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import Query from 'devextreme/data/query';

    export default {
        mounted() {
            this.filteredData = Query([10, 20, 40, 50, 30])
                .filter(dataItem => dataItem < 25)
                .toArray();

            console.log(this.filteredData); // outputs [10, 20]
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

            this.filteredData = Query([10, 20, 40, 50, 30])
                .filter(dataItem => dataItem < 25)
                .toArray();

            console.log(this.filteredData); // outputs [10, 20]
        }
    }
    export default App;

---

#####See Also#####
- [Filtering](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering')