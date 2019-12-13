[note]Before accessing a series point, you must gain access to its series. You can learn the details in the [Access a Series Using the API](/concepts/05%20Widgets/Chart/10%20Series/40%20Access%20a%20Series%20Using%20the%20API.md '/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/') topic.

To access series points, use the following methods. All of them return one or several objects whose fields and methods are described in the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/') section of the API reference.

- [getAllPoints()](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Series/3%20Methods/getAllPoints().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#getAllPoints')        
Gets all points of the series.

    ---
    ##### jQuery

        <!--JavaScript-->var series = $("#chartContainer").dxChart("getSeriesByName", "Series 1");
        var seriesPoints = series.getAllPoints();

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxChartModule, DxChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
            // Prior to Angular 8
            // @ViewChild(DxChartComponent) chart: DxChartComponent;
            seriesPointCollection: any = [];
            getSeriesPoints() {
                let series = this.chart.instance.getSeriesByName("Series 1");
                this.seriesPointCollection = series.getAllPoints();
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

- [getPointsByArg(pointArg)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/getPointsByArg(pointArg).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#getPointsByArgpointArg')      
Gets those points of the series that has a specific argument. Returns more than one point for [range](/concepts/05%20Widgets/Chart/11%20Series%20Types/70%20Range%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/') and [financial](/concepts/05%20Widgets/Chart/11%20Series%20Types/60%20Financial%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Financial_Series/') series.

    ---
    ##### jQuery

        <!--JavaScript-->var seriesPoints = series.getPointsByArg("China");

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxChartModule, DxChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
            // Prior to Angular 8
            // @ViewChild(DxChartComponent) chart: DxChartComponent;
            chinaPoint: any = {};
            getChinaPoints() {
                let series = this.chart.instance.getSeriesByName("Series 1");
                this.chinaPoints = series.getPointsByArg("China");
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

- [getPointByPos(positionIndex)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/getPointByPos(positionIndex).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#getPointByPospositionIndex')          
Gets a point by its index in the series. The index is zero-based.

    ---
    ##### jQuery

        <!--JavaScript-->var seriesPoint = series.getPointByPos(0);
    
    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxChartModule, DxChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
            // Prior to Angular 8
            // @ViewChild(DxChartComponent) chart: DxChartComponent;
            firstPoint: any = {};
            getFirstPoint() {
                let series = this.chart.instance.getSeriesByName("Series 1");
                this.firstPoint = series.getPointByPos(0);
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

- [getVisiblePoints()](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Series/3%20Methods/getVisiblePoints().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#getVisiblePoints')          
Gets those points of the series that fall into the axis's [visual range](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/visualRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/').

    ---
    ##### jQuery

        <!--JavaScript-->var visiblePoints = series.getVisiblePoints();

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxChartModule, DxChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
            // Prior to Angular 8
            // @ViewChild(DxChartComponent) chart: DxChartComponent;
            visiblePoints: any = [];
            getVisiblePoints() {
                let series = this.chart.instance.getSeriesByName("Series 1");
                this.visiblePoints = series.getVisiblePoints(0);
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

Apart from the API methods, you can access a series point in the event handlers. For example, the [onPointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointClick') event handler gets the clicked series point in the argument.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onPointClick: function (e) {
                var point = e.target;
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onPointClick)="onPointClick($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
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
            DxChartModule
        ],
        // ...
    })

---

[note] Each [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/') object contains a reference to its parent series in the [series](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/2%20Fields/series.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Fields/#series') field.

#####See Also#####
- [Access a Series Using the API](/concepts/05%20Widgets/Chart/10%20Series/40%20Access%20a%20Series%20Using%20the%20API.md '/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/')
- [Access a Point Label Using the API](/concepts/05%20Widgets/Chart/15%20Point%20Labels/15%20Access%20a%20Point%20Label%20Using%20the%20API.md '/Documentation/Guide/Widgets/Chart/Point_Labels/Access_a_Point_Label_Using_the_API/')
#include common-link-callmethods

[tags]chart, series point, get points, getAllPoints, get point by argument, getPointsByArg, get point by index, getPointByPos, get visible points, getVisiblePoints