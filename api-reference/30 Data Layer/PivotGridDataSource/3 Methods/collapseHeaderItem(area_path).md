---
id: PivotGridDataSource.collapseHeaderItem(area, path)
---
---
##### shortDescription
Collapses a specific header item.

##### param(area): String
The [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') that contains the header item to collapse.

##### param(path): Array<String, Number, Date>
A path to the header item.

---
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    // Collapses the second quarter of 2015 in the column area
    pivotGridDataSource.collapseHeaderItem("column", [2015, 2]);
    
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

            // Collapses the second quarter of 2015 in the column area
            this.pivotGridDataSource.collapseHeaderItem("column", [2015, 2]);
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
            // Collapses the second quarter of 2015 in the column area
            pivotGridDataSource.collapseHeaderItem('column', [2015, 2]);
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
            
            // Collapses the second quarter of 2015 in the column area
            pivotGridDataSource.collapseHeaderItem('column', [2015, 2]);
        }
        // ...
    }
    export default App;

---

#####See Also#####
- [expandHeaderItem(area, path)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/expandHeaderItem(area_path).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#expandHeaderItemarea_path')
- **fields[]**.[expanded](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/expanded.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#expanded')