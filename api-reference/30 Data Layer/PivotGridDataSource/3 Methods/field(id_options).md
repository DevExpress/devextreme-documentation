---
id: PivotGridDataSource.field(id, options)
---
---
##### shortDescription
Updates field options' values.

##### param(id): Number | String
The field's [name](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/name.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#name'), [caption](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/caption.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption'), [dataField](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/dataField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField'), or index in the [fields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') array.

##### param(options): Object
The [options](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') with their new values.

---
Call the [load()](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#load') method to update the **PivotGrid**:

---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // ...
        fields: [{
            caption: "Sales",
            dataField: "amount",
            summaryType: "sum",
            area: "data"
        }]
    });

    // Changes the "Sales" field's summaryType
    pivotGridDataSource.field("Sales", { summaryType: "avg" });
    pivotGridDataSource.load();
    
##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                fields: [{
                    caption: "Sales",
                    dataField: "amount",
                    summaryType: "sum",
                    area: "data"
                }]
            });

            // Changes the "Sales" field's summaryType
            this.pivotGridDataSource.field("Sales", { summaryType: "avg" });
            this.pivotGridDataSource.load();
        }
    }

##### Vue

    <!-- tab: App.vue -->  
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    export default {
        mounted() {
            // Changes the "Sales" field's summaryType
            pivotGridDataSource.field('Sales', { summaryType: 'avg' });
            pivotGridDataSource.load();
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            // Changes the "Sales" field's summaryType
            pivotGridDataSource.field('Sales', { summaryType: 'avg' });
            pivotGridDataSource.load();
        }
        // ...
    }
    export default App;

---