The visual range of arguments/values on an axis should include all arguments/values of all series. If you want to reduce the visual range, specify the [min](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/min.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#min') and [max](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/max.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#max') options of the axis. Note that if the [valueMarginsEnabled](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/valueMarginsEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#valueMarginsEnabled') option stays **true**, the axis extends beyond the **min** and **max** values because of margins specified by the [minValueMargin](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/minValueMargin.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#minValueMargin') and [maxValueMargin](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/maxValueMargin.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#maxValueMargin') options.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                min: 1950,
                max: 2000,
                valueMarginsEnabled: false
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            [min]="1950"
            [max]="2000"
            [valueMarginsEnabled]="false">
        </dxo-argument-axis>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

Axes can be relocated to their opposite side using the [position](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/position.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#position') option. Note that available positions for each axis depend on whether the chart is [rotated](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/rotated.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated') or not.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                position: 'top'
            },
            valueAxis: {
                position: 'right'
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            position="top">
        </dxo-argument-axis>
        <dxi-value-axis
            position="right">
        </dxi-value-axis>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

![DevExtreme HTML5 JavaScript Charts ArgumentAxis ValueAxis](/images/ChartJS/visual_elements/axes_relocated.png)

#####See Also#####
- [Axis Titles](/concepts/05%20Widgets/Chart/20%20Axes/25%20Axis%20Titles.md '/Documentation/Guide/Widgets/Chart/Axes/Axis_Titles/')
- [Axis Labels](/concepts/05%20Widgets/Chart/20%20Axes/15%20Axis%20Labels.md '/Documentation/Guide/Widgets/Chart/Axes/Axis_Labels/')
- [Multi-Axis Chart](/concepts/05%20Widgets/Chart/20%20Axes/70%20Multi-Axis%20Chart.md '/Documentation/Guide/Widgets/Chart/Axes/Multi-Axis_Chart/')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, min axis value, max axis value, axis margins, valueMarginsEnabled, minValueMargin, maxValueMargin, axis position, rotated chart
