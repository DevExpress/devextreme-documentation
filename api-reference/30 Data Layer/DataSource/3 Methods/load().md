---
id: DataSource.load()
---
---
##### shortDescription
Starts loading data.

##### return: Promise<any>
A Promise that is resolved after data is loaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    ds.load()
        .done(function (data) {
            // Process "data" here
        })
        .fail(function (error) {
            // Handle the "error" here
        });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // DataSource is configured here
            });
            this.ds.load()
                .then(
                    (data) => { /* Process "data" here */ },
                    (error) => { /* Handle the "error" here */ }
                )
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // DataSource is configured here
    });

    export default {
        data() {
            return {
                ds
            }
        },
        mounted() {
            ds.load()
                .then(
                    (data) => { /* Process "data" here */ },
                    (error) => { /* Handle the "error" here */ }
                )
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // DataSource is configured here
    });

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            ds.load()
                .then(
                    (data) => { /* Process "data" here */ },
                    (error) => { /* Handle the "error" here */ }
                )
        }
    }
    export default App;

---

The Promise returned from this method is extended with the **operationId** field which you can use to cancel the invoked operation. See [cancel(operationId)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/cancel(operationId).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#canceloperationId') for details.

#####See Also#####
- [reload()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/reload().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload')