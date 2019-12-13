---
id: LocalStore.Options.flushInterval
type: Number
default: 10000
---
---
##### shortDescription
Specifies a delay in milliseconds between when data changes and the moment these changes are saved in the local storage. Applies only if [immediate](/api-reference/30%20Data%20Layer/LocalStore/1%20Configuration/immediate.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#immediate') is **false**.

---
---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.LocalStore({
        // ...
        immediate: false,
        flushInterval: 3000
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
                immediate: false,
                flushInterval: 3000
            })
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import LocalStore from 'devextreme/data/local_store';

    const store = new LocalStore({
        // ...
        immediate: false,
        flushInterval: 3000
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
        immediate: false,
        flushInterval: 3000
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---