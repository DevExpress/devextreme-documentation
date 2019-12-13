---
id: DataSource.totalCount()
---
---
##### shortDescription
Gets the number of data items in the store after the last [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') operation without paging. Takes effect only if [requireTotalCount](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/requireTotalCount.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#requireTotalCount') is **true**

##### return: Number
The number of data items.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        requireTotalCount: true
    });

    var itemCount = ds.totalCount();

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                requireTotalCount: true
            });
            let itemCount = this.ds.totalCount();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        requireTotalCount: true
    });

    export default {
        data() {
            return {
                ds
            }
        },
        mounted() {
            this.itemCount = ds.totalCount();
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        requireTotalCount: true
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            this.itemCount = ds.totalCount();
        }
    }
    export default App;

---