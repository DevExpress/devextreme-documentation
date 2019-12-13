If your dataset excludes non-working days, you can skip them on the axis as well by setting the [workdaysOnly](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/workdaysOnly.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#workdaysOnly') option to **true**. Use the [workWeek](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/workWeek.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#workWeek') array to specify which days are workdays. You can also include or exclude specific dates from the axis using the [singleWorkdays](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/singleWorkdays.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#singleWorkdays') and [holidays](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/holidays.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#holidays') arrays respectively.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                workdaysOnly: true,
                workWeek: [0, 1, 2, 3, 4, 5],
                holidays: ["2017/1/16", "2017/2/20", "2017/5/29"]
                singleWorkdays: ["2017/1/1"]
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            [workdaysOnly]="true"
            [workWeek]="[0, 1, 2, 3, 4, 5]"
            [holidays]="['2017/1/16', '2017/2/20', '2017/5/29']"
            [singleWorkdays]="['2017/1/1']">
        </dxo-argument-axis>
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

[note] This feature is available for the argument axis only.

