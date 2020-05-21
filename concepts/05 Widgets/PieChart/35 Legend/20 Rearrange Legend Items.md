Although the legend's layout is virtually universal, in some cases, you may need to slightly adjust it, for example, rearrange legend items. You can learn how to do it from the following instructions.

- **Choose legend orientation**        
Depending on whether the legend is oriented vertically or horizontally, the **PieChart** arranges legend items in columns or in rows. To change the legend orientation, use the [orientation](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/orientation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#orientation') option.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#pieChartContainer").dxPieChart({
                // ...
                legend: {
                    orientation: "vertical" // or "horizontal"
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-pie-chart ...>
            <dxo-legend
                orientation="vertical"> <!-- or "horizontal" -->
            </dxo-legend>
        </dx-pie-chart>

        <!--TypeScript-->
        import { DxPieChartModule } from "devextreme-angular";
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                DxPieChartModule
            ],
            // ...
        })

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <DxPieChart ... >
                <DxLegend orientation="vertical"/> <!-- or "horizontal" -->
            </DxPieChart>
        </template>

        <script>
        import DxPieChart, {
            DxLegend
        } from 'devextreme-vue/pie-chart';

        export default {
            components: {
                DxPieChart,
                DxLegend
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import PieChart, {
            Legend
        } from 'devextreme-react/pie-chart';

        class App extends React.Component {
            render() {
                return (
                    <PieChart ... >
                        <Legend orientation="vertical" /> {/* or "horizontal" */}
                    </PieChart>
                );
            }
        }

    ---

    [note] To center a horizontally-oriented legend, assign *"center"* to the [horizontalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/horizontalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#horizontalAlignment') option. For details on the legend's location, refer to the [Relocate the Legend](/concepts/05%20Widgets/PieChart/35%20Legend/10%20Relocate%20the%20Legend.md '/Documentation/Guide/Widgets/PieChart/Legend/Relocate_the_Legend/') topic.

- **Set the number of columns or rows**     
To distribute all legend items between several columns (in a vertically-oriented legend) or rows (in a horizontally-oriented legend), set the [columnCount](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/columnCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#columnCount') or [rowCount](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/rowCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#rowCount') option respectively.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#pieChartContainer").dxPieChart({
                // ...
                legend: {
                    // ...
                    columnCount: 3
                    // rowCount: 2
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-pie-chart ...>
            <dxo-legend ...
                [columnCount]="3">
                <!-- [rowCount]="2"> -->
            </dxo-legend>
        </dx-pie-chart>

        <!--TypeScript-->
        import { DxPieChartModule } from "devextreme-angular";
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                DxPieChartModule
            ],
            // ...
        })

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <DxPieChart ... >
                <DxLegend ...
                    :column-count="3"
                    <!-- :row-count="2" -->
                />
            </DxPieChart>
        </template>

        <script>
        import DxPieChart, {
            DxLegend
        } from 'devextreme-vue/pie-chart';

        export default {
            components: {
                DxPieChart,
                DxLegend
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import PieChart, {
            Legend
        } from 'devextreme-react/pie-chart';

        class App extends React.Component {
            render() {
                return (
                    <PieChart ... >
                        <Legend
                            columnCount={3}
                            {/* rowCount={2} */}
                        />
                    </PieChart>
                );
            }
        }

    ---

- **Adjust the empty space between columns and rows**         
Regardless the legend orientation, you can adjust the empty space between columns and rows using the [columnItemSpacing](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/columnItemSpacing.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#columnItemSpacing') and [rowItemSpacing](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/rowItemSpacing.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#rowItemSpacing') options respectively.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#pieChartContainer").dxPieChart({
                // ...
                legend: {
                    // ...
                    columnItemSpacing: 20,
                    rowItemSpacing: 30
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-pie-chart ...>
            <dxo-legend ...
                [columnItemSpacing]="20"
                [rowItemSpacing]="30">
            </dxo-legend>
        </dx-pie-chart>

        <!--TypeScript-->
        import { DxPieChartModule } from "devextreme-angular";
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                DxPieChartModule
            ],
            // ...
        })

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <DxPieChart ... >
                <DxLegend ...
                    :column-item-spacing="20"
                    :row-item-spacing="30"
                />
            </DxPieChart>
        </template>

        <script>
        import DxPieChart, {
            DxLegend
        } from 'devextreme-vue/pie-chart';

        export default {
            components: {
                DxPieChart,
                DxLegend
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import PieChart, {
            Legend
        } from 'devextreme-react/pie-chart';

        class App extends React.Component {
            render() {
                return (
                    <PieChart ... >
                        <Legend
                            columnItemSpacing={20}
                            rowItemSpacing={30}
                        />
                    </PieChart>
                );
            }
        }

    ---

Below, you can try out all the mentioned options in action.

<div class="simulator-desktop-container" data-view="/Content/Applications/20_2/DataVisualization/Guides/PieChartLegend/rearrangeLegendItems.html, /Content/Applications/20_2/DataVisualization/Guides/PieChartLegend/rearrangeLegendItems.js, /Content/Applications/20_2/DataVisualization/Guides/PieChartLegend/rearrangeLegendItems.css"></div>

#####See Also#####
- [Relocate the Legend](/concepts/05%20Widgets/PieChart/35%20Legend/10%20Relocate%20the%20Legend.md '/Documentation/Guide/Widgets/PieChart/Legend/Relocate_the_Legend/')
- [PieChart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithMultipleSeries)