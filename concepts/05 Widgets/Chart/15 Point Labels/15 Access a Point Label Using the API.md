[note] Before accessing a point label, you must gain access to its series point. You can learn the details in the [Access a Series Point Using the API](/concepts/05%20Widgets/Chart/14%20Series%20Points/25%20Access%20a%20Series%20Point%20Using%20the%20API.md '/Documentation/Guide/Widgets/Chart/Series_Points/Access_a_Series_Point_Using_the_API/') topic.

To access a point label, call the [getLabel()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/getLabel().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Methods/#getLabel') method on its series point. This method returns an object whose members are described in the [Label](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Label/') section of the API reference. Note that for [Range Series](/concepts/05%20Widgets/Chart/11%20Series%20Types/70%20Range%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/'), the **getLabel()** method returns an array of two **Label** objects.

---
##### jQuery

    <!--JavaScript-->var series = $("#chartContainer").dxChart("getSeriesByName", "Series 1");
    var seriesPoints = series.getAllPoints();
    var label = seriesPoints[0].getLabel();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxChartModule, DxChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxChartComponent) chart: DxChartComponent;
        label: any = {};
        getPointLabel () {
            let series = this.chart.instance.getSeriesByName("Series 1");
            let seriesPoints = series.getAllPoints();
            this.label = seriesPoints[0].getLabel();
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

Once you access a label, you can, for example, hide or show it by calling the **hide()** or **show()** method.

    <!--JavaScript-->label.hide();
    // label.show();

#####See Also#####
- [Access a Series Using the API](/concepts/05%20Widgets/Chart/10%20Series/40%20Access%20a%20Series%20Using%20the%20API.md '/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/')
- [Access a Series Point Using the API](/concepts/05%20Widgets/Chart/14%20Series%20Points/25%20Access%20a%20Series%20Point%20Using%20the%20API.md '/Documentation/Guide/Widgets/Chart/Series_Points/Access_a_Series_Point_Using_the_API/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/CustomizePointsAndLabels)
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, point labels, show point label, hide point label, label visibility 