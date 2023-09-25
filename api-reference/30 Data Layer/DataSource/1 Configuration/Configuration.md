---
##### shortDescription
This section describes properties that configure the **DataSource**.

---
[note]

The **DataSource** allows you to specify [**CustomStore** properties](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/') in its configuration object. If you define CustomStore properties as shown in the following code, they override the [store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/).

---
##### jQuery

    <!--JavaScript-->
    var infiniteList = new DevExpress.data.DataSource({
        load: function (loadOptions) {
            // Loading data objects
        },
        byKey: function (key) {
            // Retrieving a data object by key
        }
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        infiniteList: DataSource;
        constructor() {
            this.infiniteList = new DataSource({
                load: (loadOptions) => {
                    return new Promise((resolve, reject) => {
                        const data = // Loading data objects
                        resolve(data);
                    });
                },
                byKey: (key) => {
                    return new Promise((resolve, reject) => {
                        const obj = // Retrieving a data object by key
                        resolve(obj);
                    });
                }
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const infiniteList = new DataSource({
        load: (loadOptions) => {
            // Loading data objects
        },
        byKey: (key) => {
            // Retrieving a data object by key
        }
    });

    export default {
        // ...
        data() {
            return {
                infiniteList
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const infiniteList = new DataSource({
        load: (loadOptions) => {
            // Loading data objects
        },
        byKey: (key) => {
            // Retrieving a data object by key
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---

[/note]