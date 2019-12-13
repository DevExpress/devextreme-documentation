---
id: Store.Options.errorHandler
type: function()
---
---
##### shortDescription
Specifies the function that is executed when the store throws an error.

---
This function accepts a JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> object as the parameter.

---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // ...
        errorHandler: function (error) {
            console.log(error.message);
        }
    });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // ...
                errorHandler: function (error) {
                    console.log(error.message);
                }
            })
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // ...
        errorHandler: (error) => {
            console.log(error.message);
        }
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
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // ...
        errorHandler: (error) => {
            console.log(error.message);
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;
    
---