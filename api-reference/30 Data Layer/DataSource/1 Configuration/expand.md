---
id: DataSource.Options.expand
type: Array<String> | String
---
---
##### shortDescription
Specifies the navigation properties to be loaded with the OData entity. Available only for the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/').

---
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        store: {
            type: "odata",
            // ODataStore is configured here
        },
        expand: ["PropertyName1", "PropertyName2"]
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                store: new ODataStore({
                    // ODataStore is configured here
                }),
                expand: ["PropertyName1", "PropertyName2"]
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';
    import ODataStore from 'devextreme/data/odata/store';

    const ds = new DataSource({
        store: new ODataStore({
            // ODataStore is configured here
        }),
        expand: ['PropertyName1', 'PropertyName2']
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
    import ODataStore from 'devextreme/data/odata/store';

    const ds = new DataSource({
        store: new ODataStore({
            // ODataStore is configured here
        }),
        expand: ['PropertyName1', 'PropertyName2']
    });

    class App extends React.Component {
        // ...
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSource(ds => ds.OData()
            .Expand("PropertyName1", "PropertyName2")
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().WidgetName() _
        .DataSource(Function(ds)
            Return ds.OData() _
                     .Expand("PropertyName1", "PropertyName2")
        End Function)
    )
    
---

#####See Also#####
- [OData - Associations](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData/4%20Associations.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Associations')