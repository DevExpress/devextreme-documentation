Although the legend's layout is virtually universal, in some cases, you may need to slightly adjust it, for example, rearrange legend items. You can learn how to do it from the following instructions.

- **Choose legend orientation**        
Depending on whether the legend is oriented vertically or horizontally, the **Chart** arranges legend items in columns or in rows. To change the legend orientation, use the [orientation](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/orientation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#orientation') option.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                legend: {
                    orientation: "vertical" // or "horizontal"
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-chart>
            <dxo-legend
                orientation="vertical"> <!-- or "horizontal" -->
            </dxo-legend>
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

    [note] To center a horizontally-oriented legend, assign *"center"* to the [horizontalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/horizontalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#horizontalAlignment') option. For details on the location of the legend on a chart, refer to the [Relocate the Legend](/concepts/05%20Widgets/Chart/35%20Legend/10%20Relocate%20the%20Legend.md '/Documentation/Guide/Widgets/Chart/Legend/Relocate_the_Legend/') topic.

- **Set the number of columns or rows**     
To distribute all legend items between several columns (in a vertically-oriented legend) or rows (in a horizontally-oriented legend), set the [columnCount](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/columnCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#columnCount') or [rowCount](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/rowCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#rowCount') option respectively.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                legend: {
                    // ...
                    columnCount: 3
                    // rowCount: 2
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-chart>
            <dxo-legend
                [columnCount]="3">
                <!-- [rowCount]="2"> -->
            </dxo-legend>
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

- **Adjust the empty space between columns and rows**         
Regardless the legend orientation, you can adjust the empty space between columns and rows using the [columnItemSpacing](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/columnItemSpacing.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#columnItemSpacing') and [rowItemSpacing](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/rowItemSpacing.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#rowItemSpacing') options respectively.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                legend: {
                    // ...
                    columnItemSpacing: 20,
                    rowItemSpacing: 30
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-chart>
            <dxo-legend
                [columnItemSpacing]="20"
                [rowItemSpacing]="30">
            </dxo-legend>
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

Below, you can try out all the mentioned options in action.

<div class="simulator-desktop-container" data-view="/Content/Applications/19_2/DataVisualization/Guides/Legend/rearrangeLegendItems.html, /Content/Applications/19_2/DataVisualization/Guides/Legend/rearrangeLegendItems.js, /Content/Applications/19_2/DataVisualization/Guides/Legend/rearrangeLegendItems.css"></div>

#####See Also#####
- [Relocate the Legend](/concepts/05%20Widgets/Chart/35%20Legend/10%20Relocate%20the%20Legend.md '/Documentation/Guide/Widgets/Chart/Legend/Relocate_the_Legend/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/StepLine)
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, legend, legend items, legend orientation, colum count, columnCount, row count, rowCount, empty space between legend items, columnItemSpacing, rowItemSpacing
