Before accessing a series point, gain access to its series by calling the [getAllSeries()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getAllSeries().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#getAllSeries') method. You can call the [getSeriesByName(seriesName)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getSeriesByName(seriesName).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#getSeriesByNameseriesName')  or [getSeriesByPos(seriesIndex)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getSeriesByPos(seriesIndex).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#getSeriesByPosseriesIndex') method as an alternative for multi-series **PieCharts**.

---
##### jQuery

    <!--JavaScript-->var series = $("#pieChartContainer").dxPieChart("getAllSeries")[0];

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
        series: any = [];
        getSeries() {
            this.series = this.pieChart.instance.getAllSeries()[0];
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

Use the following methods to access series points. All of them return one or several objects whose fields and methods are described in the API reference's [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/') section.

- [getAllPoints()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/getAllPoints().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Series/Methods/#getAllPoints')        
Gets all the series points.

    ---
    ##### jQuery

        <!--JavaScript-->var series = $("#pieChartContainer").dxPieChart("getAllSeries")[0];
        var seriesPoints = series.getAllPoints();

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
            seriesPoints: any = [];
            getSeriesPoints() {
                let series = this.pieChart.instance.getAllSeries()[0];
                this.seriesPoints = series.getAllPoints();
            }
        }
        @NgModule({
            imports: [
                // ...
                DxPieChartModule
            ],
            // ...
        })

    ---

- [getPointsByArg(pointArg)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/getPointsByArg(pointArg).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Series/Methods/#getPointsByArgpointArg')      
Gets those series points that have a specific argument.

    ---
    ##### jQuery

        <!--JavaScript-->var chinaPoints = series.getPointsByArg("China");

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
            chinaPoints: any = {};
            getChinaPoints() {
                let series = this.pieChart.instance.getAllSeries()[0];
                this.chinaPoints = series.getPointsByArg("China");
            }
        }
        @NgModule({
            imports: [
                // ...
                DxPieChartModule
            ],
            // ...
        })

    ---

- [getPointByPos(positionIndex)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/getPointByPos(positionIndex).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Series/Methods/#getPointByPospositionIndex')          
Gets a point using its index. The index is zero-based.

    ---
    ##### jQuery

        <!--JavaScript-->var firstPoint = series.getPointByPos(0);
    
    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
            firstPoint: any = {};
            getFirstPoint() {
                let series = this.pieChart.instance.getAllSeries()[0];
                this.firstPoint = series.getPointByPos(0);
            }
        }
        @NgModule({
            imports: [
                // ...
                DxPieChartModule
            ],
            // ...
        })

    ---

- [getVisiblePoints()](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Series/3%20Methods/getVisiblePoints().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Series/Methods/#getVisiblePoints')          
Gets only [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Point/3%20Methods/isVisible().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#isVisible') series points.

    ---
    ##### jQuery

        <!--JavaScript-->var visiblePoints = series.getVisiblePoints();

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
            visiblePoints: any = [];
            getVisiblePoints() {
                let series = this.pieChart.instance.getAllSeries()[0];
                this.visiblePoints = series.getVisiblePoints();
            }
        }
        @NgModule({
            imports: [
                // ...
                DxPieChartModule
            ],
            // ...
        })

    ---

Apart from the API methods, you can access a series point in the event handlers. For example, the [onPointClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onPointClick') event handler gets the clicked series point in the argument.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            onPointClick: function (e) {
                var point = e.target;
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart
        (onPointClick)="onPointClick($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onPointClick (e) {
            let point = e.target;
            // ...
        };
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

[note] Each [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/') object contains a reference to its parent series in the [series](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/2%20Fields/series.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Fields/#series') field.

#####See Also#####
- [Access a Point Label Using the API](/concepts/05%20Widgets/PieChart/15%20Point%20Labels/15%20Access%20a%20Label%20Using%20the%20API.md '/Documentation/Guide/Widgets/PieChart/Point_Labels/Access_a_Label_Using_the_API/')
#include common-link-callmethods
