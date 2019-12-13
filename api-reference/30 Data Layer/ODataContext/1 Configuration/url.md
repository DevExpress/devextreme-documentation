---
id: ODataContext.Options.url
type: String
---
---
##### shortDescription
Specifies the URL of an OData service.

---
---
#####jQuery

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        // ...
        url: "https://js.devexpress.com/Demos/DevAV/odata/"
    });

#####Angular

    <!--TypeScript-->
    import ODataContext from "devextreme/data/odata/context";
    // ...
    export class AppComponent {
        context: ODataContext;
        constructor() {
            this.context = new ODataContext({
                // ...
                url: "https://js.devexpress.com/Demos/DevAV/odata/"
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ODataContext from 'devextreme/data/odata/context';

    const context = new ODataContext({
        // ...
        url: 'https://js.devexpress.com/Demos/DevAV/odata/'
    });

    export default {
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import ODataContext from 'devextreme/data/odata/context';

    const context = new ODataContext({
        // ...
        url: 'https://js.devexpress.com/Demos/DevAV/odata/'
    });
    
    class App extends React.Component {
        // ...
    }
    export default App;

---

#####See Also#####
- [entities](/api-reference/30%20Data%20Layer/ODataContext/1%20Configuration/entities.md '/Documentation/ApiReference/Data_Layer/ODataContext/Configuration/#entities')