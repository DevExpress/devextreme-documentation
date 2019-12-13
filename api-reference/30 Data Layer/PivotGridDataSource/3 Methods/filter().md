---
id: PivotGridDataSource.filter()
---
---
##### shortDescription
Gets the [filter](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#filter') option's value. Does not affect an [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/').

##### return: Object
A filter expression.

---
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // ...
        filter: ["age", ">", 18]
    });

    var filterExpr = pivotGridDataSource.filter(); // returns ["age", ">", 18]
    
##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                filter: ["age", ">", 18]
            });

            let filterExpr = this.pivotGridDataSource.filter(); // returns ["age", ">", 18]
        }
    }

##### Vue

    <!-- tab: App.vue -->  
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        filter: ['age', '>', 18]
    });

    export default {
        mounted() {
            this.filterExpr = pivotGridDataSource.filter(); // returns ["age", ">", 18]
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        filter: ['age', '>', 18]
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            this.filterExpr = pivotGridDataSource.filter(); // returns ["age", ">", 18]
        }
        // ...
    }
    export default App;

---

#####See Also#####
- [Filtering](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering')