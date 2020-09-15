---
id: DataSource
module: data/data_source
export: default
type: Object
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

##### AngularJS  

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.dataSource = new DevExpress.data.DataSource({
                // ...
                // DataSource is configured here
                // ...
            });
        });

##### Knockout  

    <!--JavaScript-->
    var viewModel = {
        dataSource: new DevExpress.data.DataSource({
            // ...
            // DataSource is configured here
            // ...
        })
    };

    ko.applyBindings(viewModel);

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

[note] If you create a **DataSource** instance outside a widget (as shown above), make sure to [dispose](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/dispose().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#dispose') of it when it is no longer required. If the instance is created inside a widget, it is disposed of automatically.

Refer to the [Data Layer](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/') and [DataSource Examples](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Binding/Data_Source_Examples/') articles for more information on working with data in DevExtreme.

When using a widget as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, declare the **DataSource** options in the `DataSourceOptions()` method.

    <!--Razor C#-->@(Html.DevExtreme().DataGrid()
        .ID("dataGrid")
        .DataSource(d => d
            // ...
            // Data access is configured here
        )
        .DataSourceOptions(o => o
            .Filter("['ProductID', '>', 10]")
            .Sort("LastName", false)
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().DataGrid() _
        .ID("dataGrid") _
        .DataSource(Function(d)
            Return d.
                @* Data access is configured here *@
        End Function) _
        .DataSourceOptions(Sub(o)
            o.Filter("['ProductID', '>', 10]") _
             .Sort("LastName", False)
        End Sub)
    )

#include datalayer-store-note-immutable with { name: "DataSource" }

#####See Also#####
- <a href="https://docs.devexpress.com/AspNetCore/400575/devextreme-based-controls/concepts/bind-controls-to-data" target="_blank">ASP.NET MVC Controls - Bind Controls to Data</a>