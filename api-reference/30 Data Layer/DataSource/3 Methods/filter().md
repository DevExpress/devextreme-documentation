---
id: DataSource.filter()
---
---
##### shortDescription
Gets the [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') property's value.

##### return: Object
A filter expression.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        filter: ["age", ">", 18]
    });

    var filterExpr = ds.filter(); // returns ["age", ">", 18]

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                filter: ["age", ">", 18]
            });
            let filterExpr = this.ds.filter(); // returns ["age", ">", 18]
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        filter: ['age', '>', 18]
    });

    export default {
        data() {
            return {
                ds
            }
        },
        mounted() {
            this.filterExpr = ds.filter(); // returns ["age", ">", 18]
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        filter: ['age', '>', 18]
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            this.filterExpr = ds.filter(); // returns ["age", ">", 18]
        }
    }
    export default App;

---

#####See Also#####
- [Filtering](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Filtering')