---
id: PivotGridDataSource.getAreaFields(area, collectGroups)
---
---
##### shortDescription
Gets all the fields within an area.

##### return: Array<PivotGridDataSource_Options_fields>
All the [options](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') of all the fields within the area.

##### param(area): String
The [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') that contains the fields to get.

##### param(collectGroups): Boolean
Pass **true** to return [grouped fields](/concepts/05%20Widgets/PivotGrid/050%20Grouping/030%20Fields%20Grouping.md '/Documentation/Guide/Widgets/PivotGrid/Grouping/#Fields_Grouping') in a single array entry or **false** to return them as separate entries.     
The default value is **false**.

---
---
##### jQuery

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // PivotGridDataSource is configured here
    });

    var columnAreaFields = pivotGridDataSource.getAreaFields("column", true);
    
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

            let columnAreaFields = this.pivotGridDataSource.getAreaFields("column", true);
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
            this.columnAreaFields = pivotGridDataSource.getAreaFields('column', true);
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
            
            this.columnAreaFields = pivotGridDataSource.getAreaFields('column', true);
        }
        // ...
    }
    export default App;

---

#####See Also#####
- [fields()](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/fields().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fields')
- [field(id)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/field(id).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid')