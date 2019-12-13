The **Chart** exposes the following methods for accessing a series. All of them return one or several objects whose fields and methods are described in the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/') section of the API reference.

- [getAllSeries()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getAllSeries().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getAllSeries')        
Gets all series of the **Chart**.

    ---
    ##### jQuery

        <!--JavaScript-->var seriesCollection = $("#chartContainer").dxChart("getAllSeries");

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxChartModule, DxChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
            // Prior to Angular 8
            // @ViewChild(DxChartComponent) chart: DxChartComponent;
            seriesCollection: any = [];
            getAllSeries() {
                this.seriesCollection = this.chart.instance.getAllSeries();
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

- [getSeriesByName(seriesName)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getSeriesByName(seriesName).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getSeriesByNameseriesName')       
Gets a series by its [name](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/ChartSeries/name.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#name').

    ---
    ##### jQuery

        <!--JavaScript-->var series = $("#chartContainer").dxChart("getSeriesByName", "Series 1");

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxChartModule, DxChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
            // Prior to Angular 8
            // @ViewChild(DxChartComponent) chart: DxChartComponent;
            series: any = {};
            getSeries() {
                this.series = this.chart.instance.getSeriesByName("Series 1");
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

- [getSeriesByPos(seriesIndex)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getSeriesByPos(seriesIndex).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getSeriesByPosseriesIndex')       
Gets a series by its index in the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') array. The index is zero-based.

    ---
    ##### jQuery

        <!--JavaScript-->var series = $("#chartContainer").dxChart("getSeriesByPos", 0);

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxChartModule, DxChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
            // Prior to Angular 8
            // @ViewChild(DxChartComponent) chart: DxChartComponent;
            series: any = {};
            getSeries() {
                this.series = this.chart.instance.getSeriesByPos(0);
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

Apart from the API methods, you can access a series in the event handlers. For example, the [onSeriesClick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onSeriesClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesClick') event handler gets the clicked series in the argument.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onSeriesClick: function (e) {
                var series = e.target;
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onSeriesClick)="onSeriesClick($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onSeriesClick (e) {
            let series = e.target;
            // ...
        };
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

Once you get the series, you can access its child points. For further information, refer to the [Access a Series Point Using the API](/concepts/05%20Widgets/Chart/14%20Series%20Points/25%20Access%20a%20Series%20Point%20Using%20the%20API.md '/Documentation/Guide/Widgets/Chart/Series_Points/Access_a_Series_Point_Using_the_API/') topic.

#####See Also#####
- [Show and Hide a Series](/concepts/05%20Widgets/Chart/10%20Series/50%20Show%20and%20Hide%20a%20Series.md '/Documentation/Guide/Widgets/Chart/Series/Show_and_Hide_a_Series/')
#include common-link-callmethods

[tags]chart, series, get series, getAllSeries, get series by name, getSeriesByName, get series by index, getSeriesByPos