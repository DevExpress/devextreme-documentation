To zoom a standalone **Chart** initially, call its [zoomArgument(startValue, endValue)](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/3%20Methods/zoomArgument(startValue_endValue).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#zoomArgumentstartValue_endValue') method after the **Chart** is created.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var chart = $("#chartContainer").dxChart({
            // ...
        }).dxChart("instance");

        chart.zoomArgument(300, 500)
    });

##### Angular

    <!--HTML--><dx-chart ...
        (onDone)="zoom($event)">
    </dx-chart>

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        zoom (e: any) {
            e.component.zoomArgument(300, 500)
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

If the **Chart** is [bound to the RangeSelector](/concepts/05%20Widgets/Chart/92%20Zooming%20and%20Scrolling/10%20Using%20the%20RangeSelector%20Widget.md '/Documentation/Guide/Widgets/Chart/Zooming_and_Scrolling/#Using_the_RangeSelector_Widget'), specify the initial zoom for the **Chart** by setting the [value](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/value.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#value') option of the **RangeSelector**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        // ...
        // The Chart is configured here

        $("#rangeSelectorContainer").dxRangeSelector({
            // ...
            value: [0, 10]
        });
    });

##### Angular

    <!--HTML--><dx-chart ... ></dx-chart>
    <dx-range-selector ...
        [value]="[0, 10]">
    </dx-range-selector>

    <!--TypeScript-->
    import { DxChartModule, DxRangeSelectorModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule,
            DxRangeSelectorModule
        ],
        // ...
    })
    
---