---
id: DataSource.Options.onChanged
type: function(e)
EventForAction: DataSource.changed
---
---
##### shortDescription
A function that is executed after data is loaded.

##### param(e): Object
Information about changes.      
Appears only when the **push(changes)** method is called and the [reshapeOnPush](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/reshapeOnPush.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#reshapeOnPush') option is **false**.

##### field(e.changes): Array<any>
The received changes.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        onChanged: function () {
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
                onChanged: () => {
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
        onChanged: () => {
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
        onChanged: () => {
            // Your code goes here
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---