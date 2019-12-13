---
id: LocalStore.Options.name
type: String
---
---
##### shortDescription
Specifies the name under which data should be saved in the local storage. The `dx-data-localStore-` prefix will be added to the name.

---
---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.LocalStore({
        // ...
        name: "myStore"
    });

##### Angular

    <!--TypeScript-->
    import LocalStore from "devextreme/data/local_store";
    // ...
    export class AppComponent {
        store: LocalStore;
        constructor() {
            this.store = new LocalStore({
                // ...
                name: "myStore"
            })
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import LocalStore from 'devextreme/data/local_store';

    const store = new LocalStore({
        // ...
        name: 'myStore'
    });

    export default {
        // ...
        data() {
            return {
                store
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import LocalStore from 'devextreme/data/local_store';

    const store = new LocalStore({
        // ...
        name: 'myStore'
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---