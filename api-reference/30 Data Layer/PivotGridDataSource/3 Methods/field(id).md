---
id: PivotGridDataSource.field(id)
---
---
##### shortDescription
Gets all the options of a field with the specified identifier.

##### return: Object
The field's [options](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/').

##### param(id): Number | String
The field's [name](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/name.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#name'), [caption](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/caption.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption'), [dataField](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/dataField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField'), or index in the [fields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') array.

---
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

    // The following commands return the same object
    pivotGridDataSource.field("Sales");
    pivotGridDataSource.field("amount");
    pivotGridDataSource.field(0);
    
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

            // The following commands return the same object
            this.pivotGridDataSource.field("Sales");
            this.pivotGridDataSource.field("amount");
            this.pivotGridDataSource.field(0);
        }
    }

##### Vue

    <!-- tab: App.vue -->  
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            caption: 'Sales',
            dataField: 'amount',
            summaryType: 'sum',
            area: 'data'
        }]
    });

    export default {
        mounted() {
            // The following commands return the same object
            pivotGridDataSource.field('Sales');
            pivotGridDataSource.field('amount');
            pivotGridDataSource.field(0);
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
        fields: [{
            caption: 'Sales',
            dataField: 'amount',
            summaryType: 'sum',
            area: 'data'
        }]
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            // The following commands return the same object
            pivotGridDataSource.field('Sales');
            pivotGridDataSource.field('amount');
            pivotGridDataSource.field(0);
        }
        // ...
    }
    export default App;

---
#####See Also#####
- [getAreaFields(area, collectGroups)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/getAreaFields(area_collectGroups).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#getAreaFieldsarea_collectGroups')
- [fields()](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/fields().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fields')