---
id: ODataStore.Options.url
type: String
---
---
##### shortDescription
Specifies the URL of an OData entity collection.

---
---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        // ...
        url: "http://www.example.com/Northwind.svc/Products"
    });

#####Angular

    <!--TypeScript-->
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        store: ODataStore;
        constructor() {
            this.store = new ODataStore({
                // ...
                url: "http://www.example.com/Northwind.svc/Products"
            });
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ODataStore from 'devextreme/data/odata/store';

    const store = new ODataStore({
        // ...
        url: 'http://www.example.com/Northwind.svc/Products'
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
    import ODataStore from 'devextreme/data/odata/store';

    const store = new ODataStore({
        // ...
        url: 'http://www.example.com/Northwind.svc/Products'
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---