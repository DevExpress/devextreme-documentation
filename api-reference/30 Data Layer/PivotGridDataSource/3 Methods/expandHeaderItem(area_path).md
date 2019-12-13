---
id: PivotGridDataSource.expandHeaderItem(area, path)
---
---
##### shortDescription
Expands a specific header item.

##### param(area): String
The [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') that contains the header item to expand.

##### param(path): Array<Object>
A path to the header item.

---
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    // Expands the second quarter of 2015 in the column area
    pivotGridDataSource.expandHeaderItem("column", [2015, 2]);
    
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

            // Expands the second quarter of 2015 in the column area
            this.pivotGridDataSource.expandHeaderItem("column", [2015, 2]);
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
            // Expands the second quarter of 2015 in the column area
            pivotGridDataSource.expandHeaderItem('column', [2015, 2]);
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
            
            // Expands the second quarter of 2015 in the column area
            pivotGridDataSource.expandHeaderItem('column', [2015, 2]);
        }
        // ...
    }
    export default App;

---

#####See Also#####
- [collapseHeaderItem(area, path)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/collapseHeaderItem(area_path).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#collapseHeaderItemarea_path')
- **fields[]**.[expanded](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/expanded.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#expanded')