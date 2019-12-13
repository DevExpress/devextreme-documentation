---
id: DataSource.store()
---
---
##### shortDescription
Gets the instance of the store underlying the **DataSource**.

##### return: Object
A store instance.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        store: {
            // Store is configured here
        }
    });

    var store = ds.store();

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                store: {
                    // Store is configured here
                }
            });
            let store = this.ds.store();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        store: {
            // Store is configured here
        }
    });

    export default {
        data() {
            return {
                ds
            }
        },
        mounted() {
            this.store = ds.store();
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        store: {
            // Store is configured here
        }
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            this.store = ds.store();
        }
    }
    export default App;

---