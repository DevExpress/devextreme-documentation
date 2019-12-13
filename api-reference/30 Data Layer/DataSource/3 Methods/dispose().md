---
id: DataSource.dispose()
---
---
##### shortDescription
Disposes of all the resources allocated to the **DataSource** instance.

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

    ds.dispose();

##### Angular

    <!--TypeScript-->
    import { ..., OnDestroy } from '@angular/core';
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent implements OnDestroy {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // DataSource is configured here
            });
        }
        
        ngOnDestroy() {
            this.ds.dispose();
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
        beforeDestroy() {
            ds.dispose();
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
        componentWillUnmount() {
            ds.dispose();
        }
        // ...
    }
    export default App;

---

[note] Do not call this method if the **DataSource** instance was created by a widget.