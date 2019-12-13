A scale break allows breaking off a part of the axis to improve the readability of a chart with high amplitude values. Scale breaks are available for continuous or logarithmic [type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#type') axes only.

![DevExtreme HTML5 JavaScript Charts Scale Breaks](/images/ChartJS/visual_elements/scale-breaks_val-axis.png)

Use an axis' [breaks](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/breaks '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/breaks/') array to declare a scale break collection. Each object in this array must have the **startValue** and **endValue** fields that limit a single scale break. Note that a scale break is visible only if the range between the start and end values exceeds the tick interval.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: { // or argumentAxis
                breaks: [
                    { startValue: 100, endValue: 500 },
                    { startValue: 1000, endValue: 2000 }
                ]
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-value-axis> <!-- or <dxo-argument-axis> -->
            <dxi-break [startValue]="100" [endValue]="500"></dxi-break>
            <dxi-break [startValue]="1000" [endValue]="2000"></dxi-break>
        </dxi-value-axis>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
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

The value axis supports auto-calculated scale breaks, which can be enabled by setting the [autoBreaksEnabled](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/autoBreaksEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#autoBreaksEnabled') option to **true**. You can specify the [maxAutoBreakCount](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/maxAutoBreakCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#maxAutoBreakCount') option to limit the number of a scale breaks the widget can generate.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: {
                autoBreaksEnabled: true,
                maxAutoBreakCount: 2
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-value-axis
            [autoBreaksEnabled]="true"
            [maxAutoBreakCount]="2">
        </dxi-value-axis>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
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

#####See Also#####
- [Strips](/concepts/05%20Widgets/Chart/60%20Strips.md '/Documentation/Guide/Widgets/Chart/Strips/')
- [Constant Lines](/concepts/05%20Widgets/Chart/65%20Constant%20Lines.md '/Documentation/Guide/Widgets/Chart/Constant_Lines/')
