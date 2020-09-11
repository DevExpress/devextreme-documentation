---
id: DataSource.Options.postProcess
type: function(data)
---
---
##### shortDescription
Specifies a post processing function.

##### param(data): Array<any>
Data loaded in the **DataSource**.

##### return: Array<any>
Data after processing.

---

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        postProcess: function (data) {
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
                postProcess: (data) => {
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
        postProcess: (data) => {
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
        postProcess: (data) => {
            // Your code goes here
        }
    });

    class App extends React.Component {
        // ...
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSourceOptions(dso => dso
            .PostProcess("dataSource_postProcess")
        )
    )

    <script type="text/javascript">
        function dataSource_postProcess (data) {
            // Your code goes here
        }
    </script>

---

[note]When the [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') option is enabled, the **postProcess** function handles only data available for the selected page. If you need to access all data, process data before it is passed to the store.

#####See Also#####
- [Post Processing](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/3%20Data%20Transformation/2%20Post%20Processing.md '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Data_Transformation/Post_Processing')
