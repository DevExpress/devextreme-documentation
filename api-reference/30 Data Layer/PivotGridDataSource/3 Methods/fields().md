---
id: PivotGridDataSource.fields()
---
---
##### shortDescription
Gets all the fields including those [generated automatically](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/retrieveFields.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#retrieveFields').

##### return: Array<PivotGridDataSource_Options_fields>
All [options](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') of all the fields.

---
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    var pivotGridFields = pivotGridDataSource.fields();
    
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

            let pivotGridFields = this.pivotGridDataSource.fields();
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
            this.pivotGridFields = pivotGridDataSource.fields();
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
            
            this.pivotGridFields = pivotGridDataSource.fields();
        }
        // ...
    }
    export default App;

---

#####See Also#####
- [getAreaFields(area, collectGroups)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/getAreaFields(area_collectGroups).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#getAreaFieldsarea_collectGroups')
- [field(id)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/field(id).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid')