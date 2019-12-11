---
id: PivotGridDataSource.collapseAll(id)
---
---
##### shortDescription
Collapses all header items of a field with the specified identifier.

##### param(id): Number | String
The field's [name](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/name.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#name'), [dataField](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/dataField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField'), [caption](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/caption.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption'), or index in the [fields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') array.

---
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    pivotGridDataSource.collapseAll("Region");
    
##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // PivotGridDataSource is configured here
            });

            this.pivotGridDataSource.collapseAll("Region");
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
            pivotGridDataSource.collapseAll('Region');
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
            
            pivotGridDataSource.collapseAll('Region');
        }
        // ...
    }
    export default App;

---

#####See Also#####
- [expandAll(id)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/expandAll(id).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#expandAllid')
- **fields[]**.[expanded](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/expanded.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#expanded')