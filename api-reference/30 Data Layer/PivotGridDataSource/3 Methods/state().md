---
id: PivotGridDataSource.state()
---
---
##### shortDescription
Gets the current **PivotGridDataSource** state. Part of the PivotGrid UI component's [state storing](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/stateStoring '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/stateStoring/') feature.

##### return: Object
The **PivotGridDataSource** state - fields configuration, filters, expanded headers, etc.

---
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    // Get the state
    var pivotGridState = pivotGridDataSource.state();

    // Set the state
    pivotGridDataSource.state(pivotGridState);

    // Reset to the default state
    pivotGridDataSource.state({});
    // ===== or =====
    pivotGridDataSource.state(null);


##### Angular

    <!-- tab: app.component.ts -->
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // PivotGridDataSource is configured here
            });

            // Get the state
            let pivotGridState = this.pivotGridDataSource.state();

            // Set the state
            this.pivotGridDataSource.state(pivotGridState);

            // Reset to the default state
            this.pivotGridDataSource.state({});
            // ===== or =====
            this.pivotGridDataSource.state(null);
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
            // Get the state
            let pivotGridState = pivotGridDataSource.state();

            // Set the state
            pivotGridDataSource.state(pivotGridState);

            // Reset to the default state
            pivotGridDataSource.state({});
            // ===== or =====
            pivotGridDataSource.state(null);
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

            // Get the state
            let pivotGridState = pivotGridDataSource.state();

            // Set the state
            pivotGridDataSource.state(pivotGridState);

            // Reset to the default state
            pivotGridDataSource.state({});
            // ===== or =====
            pivotGridDataSource.state(null);
        }
        // ...
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/StatePersistence/"
}