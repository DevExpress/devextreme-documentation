The **Chart** can be zoomed and scrolled using the [RangeSelector](/concepts/05%20Widgets/RangeSelector/10%20Visual%20Elements '/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/') widget. The following code shows how to bind these widgets together. Note that both the **Chart** and **RangeSelector** have a common data source and may have common series configuration if the **RangeSelector** should display the **Chart** in the background. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        // Common data source for both widgets
        var data = [ ... ];
        // Common series configuration for both widgets
        var seriesConfiguration = [ ... ];

        var chart = $("#chartContainer").dxChart({
            dataSource: data,
            series: seriesConfiguration
        }).dxChart("instance");

        $("#rangeSelectorContainer").dxRangeSelector({
            dataSource: data,
            // Displays the Chart in the background of the RangeSelector
            chart: {
                series: seriesConfiguration
            },
            onValueChanged: function (e) {
                // Zooms the Chart
                chart.zoomArgument(e.value[0], e.value[1]);
            },
            // Makes zooming and scrolling smoother
            behavior: { callValueChanged: 'onMoving' }
        });
    });

##### Angular

    <!--HTML--><dx-chart
        [dataSource]="data"
        [series]="seriesConfiguration">
    </dx-chart>
    <dx-range-selector
        [dataSource]="data"
        (onValueChanged)="onValueChanged($event)">
        <!-- Displays the Chart in the background of the RangeSelector -->
        <dxo-chart [series]="seriesConfiguration"></dxo-chart>
        <!-- Makes zooming and scrolling smoother -->
        <dxo-behavior callValueChanged="onMoving"></dxo-behavior>
    </dx-range-selector>

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxChartModule, DxChartComponent, DxRangeSelectorModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent) chart: DxChartComponent;
        // Common data source for both widgets
        data = [ ... ];
        // Common series configuration for both widgets
        seriesConfiguration = [ ... ];
        onValueChanged (e: any) {
            // Zooms the Chart
            this.chart.instance.zoomArgument(e.value[0], e.value[1]);
        };
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrollingAPI/jQuery/Light/"
}

#####See Also#####
- [zoomArgument(startValue, endValue)](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/3%20Methods/zoomArgument(startValue_endValue).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#zoomArgumentstartValue_endValue')

If you need to fix a zoom window and allow the user only to move it along the scale, set the [minRange](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/minRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/minRange/') and [maxRange](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/maxRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/maxRange/') options of the [scale](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/') object to a single value defining the length of the zoom window. Make sure to specify the initial zoom using the [value](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/value.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#value') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        // ...
        // The Chart is configured here

        $("#rangeSelectorContainer").dxRangeSelector({
            // ...
            scale: {
                minRange: 10,
                maxRange: 10,
            },
            value: [0, 10]
        });
    });

##### Angular

    <!--HTML--><dx-chart ... ></dx-chart>
    <dx-range-selector ... 
        [value]="[0, 10]">
        <dxo-scale [minRange]="10" [maxRange]="10"></dxo-scale>
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

#####See Also#####
- [RangeSelector - Scale](/concepts/05%20Widgets/RangeSelector/10%20Visual%20Elements/10%20Scale '/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/#Scale')
