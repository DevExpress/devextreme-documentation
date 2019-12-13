---
id: DataSource.paginate(value)
---
---
##### shortDescription
Sets the [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') option's value.

##### param(value): Boolean
A new value.

---
Call the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method to update the widget bound to the **DataSource**:

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        paginate: true,
        pageSize: 10
    });

    ds.paginate(false);
    ds.load();

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                paginate: true,
                pageSize: 10
            });
            this.ds.paginate(false);
            this.ds.load();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        paginate: true,
        pageSize: 10
    });

    export default {
        data() {
            return {
                ds
            }
        },
        mounted() {
            ds.paginate(false);
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
        // ...
        paginate: true,
        pageSize: 10
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            ds.paginate(false);
            ds.load();
        }
    }
    export default App;

---