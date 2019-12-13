---
id: EdmLiteral.ctor(value)
---
---
##### shortDescription
Creates an **EdmLiteral** instance with a new value.

##### param(value): String
A value in a format the OData's <a href="http://www.odata.org/documentation/odata-version-2-0/overview/#AbstractTypeSystem" target="_blank">Abstract Type System</a> defines.

---
---
##### jQuery

    <!--JavaScript-->
    var edmLiteral = new DevExpress.data.EdmLiteral("100000L");

##### Angular

    <!--TypeScript-->
    import { EdmLiteral } from "devextreme/data/odata/utils";
    // ...
    export class AppComponent {
        constructor() {
            let edmLiteral = new EdmLiteral("100000L");
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import { EdmLiteral } from 'devextreme/data/odata/utils';

    export default {
        mounted() {
            this.edmLiteral = new EdmLiteral('100000L');
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
        }
    }
    export default App;

---