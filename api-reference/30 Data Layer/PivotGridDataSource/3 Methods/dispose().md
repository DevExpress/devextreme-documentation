---
id: PivotGridDataSource.dispose()
---
---
##### shortDescription
Disposes of all the resources allocated to the **PivotGridDataSource** instance.

---
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    pivotGridDataSource.dispose();
    
##### Angular

    <!--TypeScript-->
    import { ..., OnDestroy } from '@angular/core';
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent implements OnDestroy {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // PivotGridDataSource is configured here
            });
        }

        ngOnDestroy() {
            this.pivotGridDataSource.dispose();
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
        beforeDestroy() {
            pivotGridDataSource.dispose();
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
        componentWillUnmount() {
            pivotGridDataSource.dispose();
        }
        // ...
    }
    export default App;

---

[note] Do not call this method if the widget created the **PivotGridDataSource** instance.