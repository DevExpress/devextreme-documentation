---
id: PivotGridDataSource.expandAll(id)
---
---
##### shortDescription
Expands all the header items of a field with the specified identifier.

##### param(id): Number | String
The field's [name](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/name.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#name'), [caption](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/caption.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption'), [dataField](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/dataField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField'), or index in the [fields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') array.

---
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    pivotGridDataSource.expandAll("Region");
    
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

            this.pivotGridDataSource.expandAll("Region");
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
            pivotGridDataSource.expandAll('Region');
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
            
            pivotGridDataSource.expandAll('Region');
        }
        // ...
    }
    export default App;

---

#####See Also#####
- [collapseAll(id)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/collapseAll(id).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#collapseAllid')
- **fields[]**.[expanded](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/expanded.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#expanded')