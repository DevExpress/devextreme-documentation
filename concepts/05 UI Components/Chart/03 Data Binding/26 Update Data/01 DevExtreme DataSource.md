[note] This technique requires the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') specified in the [store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores').

To get the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance, call the **Chart**'s [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#getDataSource') method:

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
    import { ..., ViewChild } from "@angular/core";
    import { DxChartModule, DxChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxChartComponent) chart: DxChartComponent;
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

Then, access the underlying store with the [store()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/store().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#store') method, and call the store's [push(changes)](/api-reference/30%20Data%20Layer/Store/3%20Methods/push(changes).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#pushchanges') method to modify data. The **Chart** will be updated automatically.

    <!--JavaScript-->
    ds.store().push([
        { type: "update", key: "Oranges", data: { count: 10 } },
        { type: "remove", key: "Apples" }
    ]);

#####See Also#####
#include common-link-callmethods
- [DevExtreme Data Layer - Overview](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')
- [DevExtreme Data Layer - DataSource Examples](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Binding/Data_Source_Examples/')
