A continuous axis indicates numeric or date-time values. If you know the range of these values, you can arrange ticks using the [tickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/tickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tickInterval/') option. It specifies the interval between two side-by-side [major ticks](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tick/'). For numeric values, this option accepts a number; for date-time values, it accepts a string or an object with a single field that designates the date component measuring the interval. Similarly, you can arrange [minor ticks](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTick/') using the [minorTickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/minorTickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTickInterval/') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                tickInterval: 10,
                minorTickInterval: 2,

                // === or ===
                tickInterval: { years: 1 },
                minorTickInterval: { months: 6 },

                // === or ===
                tickInterval: 'year',
                minorTickInterval: 'month',

                // Making ticks visible
                tick: { visible: true },
                minorTick: { visible: true }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            [tickInterval]="10"
            [minorTickInterval]="2">
            <dxo-tick [visible]="true"></dxo-tick>
            <dxo-minor-tick [visible]="true"></dxo-minor-tick>
        </dxo-argument-axis>

        <!-- or -->
        <dxo-argument-axis>
            <dxo-tick-interval [years]="1"></dxo-tick-interval>
            <dxo-minor-tick-interval [months]="6"></dxo-minor-tick-interval>
            <dxo-tick [visible]="true"></dxo-tick>
            <dxo-minor-tick [visible]="true"></dxo-minor-tick>
        </dxo-argument-axis>

        <!-- or -->
        <dxo-argument-axis
            tickInterval="year"
            minorTickInterval="month">
            <dxo-tick [visible]="true"></dxo-tick>
            <dxo-minor-tick [visible]="true"></dxo-minor-tick>
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

Without knowing the range of values on the axis, you can arrange major ticks by specifying the minimum distance between two side-by-side ticks in pixels. For this purpose, set the [axisDivisionFactor](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/axisDivisionFactor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#axisDivisionFactor') option. Minor ticks in this case should be arranged using the [minorTickCount](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/minorTickCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#minorTickCount') option. It specifies how many minor ticks to place between two side-by-side major ticks.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                axisDivisionFactor: 20,
                minorTickCount: 4,

                tick: { visible: true },
                minorTick: { visible: true }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            [axisDivisionFactor]="20"
            [minorTickCount]="4">
            <dxo-tick [visible]="true"></dxo-tick>
            <dxo-minor-tick [visible]="true"></dxo-minor-tick>
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
