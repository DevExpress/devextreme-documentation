---
id: ODataContext.invoke(operationName, params, httpMethod)
---
---
##### shortDescription
Invokes an OData operation that returns nothing.

##### return: Promise<void>
A Promise that is resolved after the operation has completed. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(operationName): String
The operation's name

##### param(params): Object
The operation's parameters.

##### param(httpMethod): Object
The HTTP method for this operation ("GET", "POST", "PATCH", or "MERGE").            
"POST" by default.

---
---
#####jQuery

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        // ODataContext is configured here
    });
    context.invoke("Add", { fieldName: "fieldValue" }, "POST");

#####Angular

    <!--TypeScript-->
    import ODataContext from "devextreme/data/odata/context";
    // ...
    export class AppComponent {
        context: ODataContext;
        constructor() {
            this.context = new ODataContext({
                // ODataContext is configured here
            });
            this.context.invoke("Add", { fieldName: "fieldValue" }, "POST");
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import ODataContext from 'devextreme/data/odata/context';

    const context = new ODataContext({
        // ODataContext is configured here
    });

    export default {
        mounted() {
            context.invoke('Add', { fieldName: 'fieldValue' }, 'POST');
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import ODataContext from 'devextreme/data/odata/context';

    const context = new ODataContext({
        // ODataContext is configured here
    });
    
    class App extends React.Component {
        constructor(props) {
            super(props);
            context.invoke('Add', { fieldName: 'fieldValue' }, 'POST');
        }
    }
    export default App;

---

#####See Also#####
- [Invoking Service Operations](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData/5%20Invoking%20Service%20Operations.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Invoking_Service_Operations')