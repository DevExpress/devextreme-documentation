---
id: DataSource.searchValue(value)
---
---
##### shortDescription
Sets the [searchValue](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchValue.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchValue') option's value.

##### param(value): any
A new value.

---
Call the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method to update the widget bound to the **DataSource**:

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    ds.searchExpr("firstName");
    ds.searchOperation("contains");
    ds.searchValue("Jo");

    ds.load();

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // DataSource is configured here
            });
            
            this.ds.searchExpr("firstName");
            this.ds.searchOperation("contains");
            this.ds.searchValue("Jo");

            this.ds.load();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // DataSource is configured here
    });

    export default {
        data() {
            return {
                ds
            }
        },
        mounted() {
            ds.searchExpr('firstName');
            ds.searchOperation('contains');
            ds.searchValue('Jo');
            ds.load();
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // DataSource is configured here
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            ds.searchExpr('firstName');
            ds.searchOperation('contains');
            ds.searchValue('Jo');
            ds.load();
        }
    }
    export default App;

---

#####See Also#####
- [Data Layer - Search API](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/2%20Search%20Api.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api')