---
id: CustomStore.clearRawDataCache()
---
---
##### shortDescription
Deletes data from the cache. Takes effect only if the [cacheRawData](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/cacheRawData.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#cacheRawData') option is **true**.

---
---
##### jQuery

    var store = new DevExpress.data.CustomStore({
        // CustomStore is configured here
        cacheRawData: true
    });

    store.clearRawDataCache();

##### Angular

    <!--TypeScript-->
    import CustomStore from "devextreme/data/custom_store";
    // ...
    export class AppComponent {
        store: CustomStore;
        constructor( ... ) {
            this.store = new CustomStore({
                // CustomStore is configured here
                cacheRawData: true
            });
            this.store.clearRawDataCache();
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import CustomStore from 'devextreme/data/custom_store';

    const store = new CustomStore({
        // CustomStore is configured here
        cacheRawData: true
    });

    export default {
        data() {
            return {
                store
            }
        },
        mounted() {
            store.clearRawDataCache();
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
        cacheRawData: true
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            store.clearRawDataCache();
        }
        // ...
    }
    export default App;
    
---