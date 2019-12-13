The **Chart** can be zoomed and panned using the [RangeSelector](/concepts/05%20Widgets/RangeSelector/10%20Visual%20Elements '/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/') widget. The following code shows how to bind these widgets. Note that the **Chart** and **RangeSelector** have a common data source and may have the same series configuration if the **RangeSelector** should display the **Chart** in the background.

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
                chart.getArgumentAxis().visualRange(e.value);
            },
            // Makes zooming and panning smoother
            behavior: { callValueChanged: "onMoving" }
        });
    });

##### Angular

    <!--HTML--><dx-chart
        [dataSource]="data"
        [series]="seriesConfiguration">
        <dxo-argument-axis
            [(visualRange)]="chart_visualRange">
        </dxo-argument-axis>
    </dx-chart>
    <dx-range-selector
        [dataSource]="data"
        [(value)]="chart_visualRange">
        <!-- Displays the Chart in the background of the RangeSelector -->
        <dxo-chart [series]="seriesConfiguration"></dxo-chart>
        <!-- Makes zooming and panning smoother -->
        <dxo-behavior callValueChanged="onMoving"></dxo-behavior>
    </dx-range-selector>

    <!--TypeScript-->
    import { DxChartModule, DxRangeSelectorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // Common data source for both widgets
        data = [ ... ];
        // Common series configuration for both widgets
        seriesConfiguration = [ ... ];
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrollingAPI/"
}

When your data source is updated in real time, the behavior of both the **Chart**'s [visual range](/concepts/05%20Widgets/Chart/20%20Axes/03%20Visual%20and%20Whole%20Ranges.md '/Documentation/Guide/Widgets/Chart/Axes/Visual_and_Whole_Ranges/') and the **RangeSelector**'s selected range depends on the [selectedRangeUpdateMode](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/selectedRangeUpdateMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#selectedRangeUpdateMode') option specified for the **RangeSelector**:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        // ...
        // The Chart is configured here

        $("#rangeSelectorContainer").dxRangeSelector({
            // ...
            selectedRangeUpdateMode: "keep" // the ranges remain unchanged
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... ></dx-chart>
    <dx-range-selector ... 
        selectedRangeUpdateMode="keep"> <!-- the ranges remain unchanged -->
    </dx-range-selector>

    <!--TypeScript-->
    import { DxChartModule, DxRangeSelectorModule } from "devextreme-angular";
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


If you need to fix the zoom window and allow users to only move it along the scale, set the [scale](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/') object's [minRange](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/minRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/minRange/') and [maxRange](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/maxRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/maxRange/') options to a single value defining the zoom window's length. Make sure you specify the initial zoom factor using the [value](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/value '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#value') option.

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
                maxRange: 10
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
    import { DxChartModule, DxRangeSelectorModule } from "devextreme-angular";
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
