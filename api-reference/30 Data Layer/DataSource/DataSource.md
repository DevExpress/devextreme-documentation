---
module: data/data_source
export: default
type: Object
inherits: ..\..\10 UI Widgets\EventsMixin\EventsMixin.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **DataSource** is an object that provides an API for processing data from an underlying [store](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/').

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

---

[note] If you create a **DataSource** instance outside a widget (as shown above), make sure to [dispose](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/dispose().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#dispose') of it when it is no longer required. If the instance is created inside a widget, it is disposed of automatically.

Refer to the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') and [DataSource Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples/') articles for more information on working with data in DevExtreme.

When using a widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), declare the **DataSource** options in the `DataSourceOptions()` method.

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

#####See Also#####
- [ASP.NET MVC Controls - Data Binding](/concepts/35%20ASP.NET%20MVC%20Controls/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/')