---
id: EdmLiteral.valueOf()
---
---
##### shortDescription
Gets the **EdmLiteral**'s value converted to a string.

##### return: String
The value.

---
---
##### jQuery

    <!--JavaScript-->
    var edmLiteral = new DevExpress.data.EdmLiteral("100000L");
    console.log(edmLiteral.valueOf()); // logs 100000L

##### Angular

    <!--TypeScript-->
    import { EdmLiteral } from "devextreme/data/odata/utils";
    // ...
    export class AppComponent {
        constructor() {
            let edmLiteral = new EdmLiteral("100000L");
            console.log(edmLiteral.valueOf()); // logs 100000L
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import { EdmLiteral } from 'devextreme/data/odata/utils';

    export default {
        mounted() {
            this.edmLiteral = new EdmLiteral('100000L');
            console.log(this.edmLiteral.valueOf()); // logs 100000L
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import { EdmLiteral } from 'devextreme/data/odata/utils';

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            this.edmLiteral = new EdmLiteral('100000L');
            console.log(this.edmLiteral.valueOf()); // logs 100000L
        }
    }
    export default App;

---