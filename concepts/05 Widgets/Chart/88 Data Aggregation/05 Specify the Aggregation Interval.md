Series points are grouped for aggregation using intervals: those points that fall within the same interval on the argument axis get aggregated together. You can specify the length of the intervals in axis units (numbers or dates), in pixels, or aggregate points by categories:

- **Axis units** (for continuous and logarithmic [axes](/concepts/05%20Widgets/Chart/20%20Axes/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Axes/Overview/') only)       
Use the **argumentAxis**.[aggregationInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregationInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/aggregationInterval/') option. 

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                argumentAxis: {
                    // A new interval every 100 units
                    aggregationInterval: 100,
                    // A new interval every day
                    aggregationInterval: "day",
                    // A new interval every five days
                    aggregationInterval: { days: 5 }
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-chart ... >
            <dxo-argument-axis
                [aggregationInterval]="100"  <!-- A new interval every 100 units -->
                aggregationInterval="day"> <!-- A new interval every day -->
                <dxo-aggregation-interval
                    [days]="5">            <!-- A new interval every five days -->
                </dxo-aggregation-interval>
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

- **Pixels**            
Use the **argumentAxis**.[aggregationGroupWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregationGroupWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#aggregationGroupWidth') option.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                argumentAxis: {
                    // A new interval every 100 pixels
                    aggregationGroupWidth: 100
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-chart ... >
            <dxo-argument-axis
                [aggregationGroupWidth]="100"> <!-- A new interval every 100 pixels -->
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

- **Categories**        
Aggregation by categories can be applied only when the axis displays [categories](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/categories.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#categories'), and each category contains two or more points. To apply it, set **argumentAxis**.[aggregateByCategory](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregateByCategory.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#aggregateByCategory') to **true**:

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                argumentAxis: {
                    aggregateByCategory: true
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-chart ... >
            <dxo-argument-axis
                [aggregateByCategory]="true">
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