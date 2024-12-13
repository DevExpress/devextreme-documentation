---
id: DataSource
module: common/data
export: DataSource
---
---
##### shortDescription
The **DataSource** is an object that provides an API for processing data from an underlying [store](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/').

##### lib
dx.web.js, dx.viz.js, dx.all.js

---
---
##### jQuery  

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        // ...
        // DataSource is configured here
        // ...
    });

##### Angular  

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        dataSource: DataSource;
        constructor () {
            this.dataSource = new DataSource({
                // ...
                // DataSource is configured here
                // ...
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        // ...
        // DataSource is configured here
        // ...
    });

    export default {
        data() {
            return {
                dataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        // ...
        // DataSource is configured here
        // ...
    });

    class App extends React.Component {
        // ...
    }
    export default App;

---

[note]

- If you create a **DataSource** instance outside a UI component (as shown above), make sure to [dispose](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/dispose().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#dispose') of it when it is no longer required. If the instance is created inside a UI component, it is disposed of automatically.

- DataSource is not designed to be used in multiple components simultaneously. If you want to share data between multiple widgets, create the [store object](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') common for all components. Each component should wrap this store in a separate DataSource.

[/note]

---
##### React

[note] If you use DataSource with Next.js, add a [`use client` directive](https://nextjs.org/docs/app/building-your-application/rendering/client-components#using-client-components-in-nextjs) to ensure the instance is created on the client only. DataSource instances do not support React serialization and therefore cannot be created on the server and sent to the client.

---

Refer to the [Data Layer](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/') and [DataSource Examples](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Binding/Data_Source_Examples/') articles for more information on working with data in DevExtreme.

#include datalayer-store-note-immutable with { name: "DataSource" }
