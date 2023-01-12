---
id: CustomStore.load(options)
---
---
##### shortDescription
Starts loading data.

##### return: Promise<any>
A Promise that is resolved after data is loaded.
#include ref-promisedistinction

##### param(options): LoadOptions
Data processing settings.

---
---
##### jQuery

    <!--JavaScript-->
    const store = new DevExpress.data.CustomStore({
        // CustomStore is configured here
    });

    store.load(options)
         .done(function (data) {
             // Process "data" here
         })
         .fail(function (error) {
             // Handle the "error" here
         });

##### Angular

    <!--TypeScript-->
    import CustomStore from "devextreme/data/custom_store";
    import DevExpress from "devextreme/bundles/dx.all";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor() {
            this.store = new CustomStore({
                // CustomStore is configured here
            });
            let options: DevExpress.data.LoadOptions = {
                // Data processing settings are specified here
            };
            this.store.load(options)
                .then(
                    (data) => { /* Process "data" here */ },
                    (error) => { /* Handle the "error" here */ }
                );
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import CustomStore from 'devextreme/data/custom_store';

    const store = new CustomStore({
        // CustomStore is configured here
    });

    export default {
        data() {
            return {
                store
            }
        },
        mounted() {
            let options = {
                // Data processing settings are specified here
            };
            store.load(options)
                .then(
                    (data) => { /* Process "data" here */ },
                    (error) => { /* Handle the "error" here */ }
                );
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import CustomStore from 'devextreme/data/custom_store';

    const store = new CustomStore({
        // CustomStore is configured here
    });

    class App extends React.Component {
        constructor(props) {
            super(props);

            let options = {
                // Data processing settings are specified here
            };
            store.load(options)
                .then(
                    (data) => { /* Process "data" here */ },
                    (error) => { /* Handle the "error" here */ }
                );
        }
        // ...
    }
    export default App;
    
---