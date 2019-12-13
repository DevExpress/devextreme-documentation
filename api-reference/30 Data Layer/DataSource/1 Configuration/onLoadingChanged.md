---
id: DataSource.Options.onLoadingChanged
type: function(isLoading)
EventForAction: DataSource.loadingChanged
---
---
##### shortDescription
A function that is executed when the data loading status changes.

##### param(isLoading): Boolean
Indicates whether data is being loaded.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        onLoadingChanged: function (isLoading) {
            // Your code goes here
        }
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                onLoadingChanged: (isLoading) => {
                    // Your code goes here
                }
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        onLoadingChanged: (isLoading) => {
            // Your code goes here
        }
    });

    export default {
        // ...
        data() {
            return {
                ds
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        // ...
        onLoadingChanged: (isLoading) => {
            // Your code goes here
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---