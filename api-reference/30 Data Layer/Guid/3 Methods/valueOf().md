---
id: Guid.valueOf()
---
---
##### shortDescription
Gets the GUID. Works identically to the [toString()](/api-reference/30%20Data%20Layer/Guid/3%20Methods/toString().md '/Documentation/ApiReference/Data_Layer/Guid/Methods/#toString') method.

##### return: String
The GUID.

---
The returned GUID is always hyphened even if the **Guid** was created with a non-hyphened version:

---
##### jQuery

    <!--JavaScript-->
    var guid = new DevExpress.data.Guid("40810dcce08b10a28227c67c8933c31a");
    console.log(guid.valueOf()); // logs 40810dcc-e08b-10a2-8227-c67c8933c31a

##### Angular

    <!--TypeScript-->
    import Guid from "devextreme/core/guid";
    // ...
    export class AppComponent {
        constructor() {
            let guid = new Guid("40810dcce08b10a28227c67c8933c31a");
            console.log(guid.valueOf()); // logs 40810dcc-e08b-10a2-8227-c67c8933c31a
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import Guid from 'devextreme/core/guid';

    export default {
        mounted() {
            this.guid = new Guid("40810dcce08b10a28227c67c8933c31a");
            console.log(this.guid.valueOf()); // logs 40810dcc-e08b-10a2-8227-c67c8933c31a
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

            this.guid = new Guid("40810dcce08b10a28227c67c8933c31a");
            console.log(this.guid.valueOf()); // logs 40810dcc-e08b-10a2-8227-c67c8933c31a
        }
    }
    export default App;

---