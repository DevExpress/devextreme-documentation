---
id: Store.load(options)
---
---
##### shortDescription
Starts loading data.

##### return: Promise<any>
A Promise that is resolved after data is loaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(options): LoadOptions
Data processing settings.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // {WidgetName} is configured here
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
    import {WidgetName} from "devextreme/data/{widget_name}";
    import DevExpress from "devextreme/bundles/dx.all";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // {WidgetName} is configured here
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
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // {WidgetName} is configured here
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
    import {WidgetName} from 'devextreme/data/{widget_name}';

    const store = new {WidgetName}({
        // {WidgetName} is configured here
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