This technique is universal for any data source as anything passed to the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#dataSource') option of the **Chart** ends up wrapped in the [DevExtreme DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). To get the **DataSource** instance, call the [getDataSource()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getDataSource().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getDataSource') method of the **Chart**.

---

#####**jQuery**

    <!--JavaScript-->var ds = $("#chartContainer").dxChart("getDataSource");

#####**AngularJS**

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.ds = {};
            $scope.chartOptions = {
                // ...
                onInitialized: function (e) {
                    $scope.ds = e.component.getDataSource();  
                }
            };
        });

#####**Knockout**

    <!--JavaScript-->var viewModel = {
        ds: {},
        chartOptions: {
            // ...
            onInitialized: function (e) {
                viewModel.ds = e.component.getDataSource();    
            }
        }
    };
    
    ko.applyBindings(viewModel);
    
##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxChartModule, DxChartComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent) chart: DxChartComponent;
        ds: any = {};
        getDataSource() {
            this.ds = this.chart.instance.getDataSource();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })
    
---

After that, you need to access the underlying [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores) with the [store()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/store().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#store') method, and call the [insert(values)](/api-reference/30%20Data%20Layer/Store/3%20Methods/insert(values).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#insertvalues'), [update(key, values)](/api-reference/30%20Data%20Layer/Store/3%20Methods/update(key_values).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#updatekey_values') or [remove(key)](/api-reference/30%20Data%20Layer/Store/3%20Methods/remove(key).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#removekey') method of the Store to modify data. Note that in order to use the **update(key, values)** and **remove(key)** methods, you need to specify the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') property for the Store. After all modifications are made, call the [load](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method in the **DataSource** instance to make the **Chart** reflect the changes.

    <!--JavaScript-->ds.store().update("Oranges", { count: 10 });
    ds.store().remove("Apples");
    ds.load();

[note] You can also apply data shaping options, such as [filtering](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr'), [sorting](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/sort(sortExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#sortsortExpr'), etc., using the **DataSource** at runtime. In any case, call the **load** method afterwards to notify the **Chart** of the changes.

#####See Also#####
#include common-link-callmethods
- [DevExtreme Data Layer - Overview](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/')
- [DevExtreme Data Layer - DataSource Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples/')
