---
id: Guid.ctor()
---
---
##### shortDescription
Creates a new **Guid** instance that contains a generated GUID.

---
---
##### jQuery

    <!--JavaScript-->
    var guid = new DevExpress.data.Guid();

##### Angular

    <!--TypeScript-->
    import Guid from "devextreme/core/guid";
    // ...
    export class AppComponent {
        constructor() {
            let guid = new Guid();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import Guid from 'devextreme/core/guid';

    export default {
        mounted() {
            this.guid = new Guid();
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import Guid from 'devextreme/core/guid';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.guid = new Guid();
        }
    }
    export default App;

---