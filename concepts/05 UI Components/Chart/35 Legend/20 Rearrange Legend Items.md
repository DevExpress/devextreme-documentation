Although the legend's layout is virtually universal, in some cases, you may need to slightly adjust it, for example, rearrange legend items. You can learn how to do it from the following instructions.

- **Choose legend orientation**        
Depending on whether the legend is oriented vertically or horizontally, the Chart arranges legend items in columns or in rows. To change the legend orientation, use the [orientation](/api-reference/10%20UI%20Components/BaseLegend/orientation.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#orientation') property.

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

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <DxChart ... >
                <DxLegend orientation="vertical"/> <!-- or "horizontal" -->
            </DxChart>
        </template>

        <script>
        import DxChart, {
            DxLegend
        } from 'devextreme-vue/chart';

        export default {
            components: {
                DxChart,
                DxLegend
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import Chart, {
            Legend
        } from 'devextreme-react/chart';

        class App extends React.Component {
            render() {
                return (
                    <Chart ... >
                        <Legend orientation="vertical" /> {/* or "horizontal" */}
                    </Chart>
                );
            }
        }

        export default App;

    ---

    [note] To center a horizontally-oriented legend, assign *"center"* to the [horizontalAlignment](/api-reference/10%20UI%20Components/BaseLegend/horizontalAlignment.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#horizontalAlignment') property. For details on the location of the legend on a chart, refer to the [Relocate the Legend](/concepts/05%20UI%20Components/Chart/35%20Legend/10%20Relocate%20the%20Legend.md '/Documentation/Guide/UI_Components/Chart/Legend/Relocate_the_Legend/') topic.

- **Set the number of columns or rows**     
To distribute all legend items between several columns (in a vertically-oriented legend) or rows (in a horizontally-oriented legend), set the [columnCount](/api-reference/10%20UI%20Components/BaseLegend/columnCount.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#columnCount') or [rowCount](/api-reference/10%20UI%20Components/BaseLegend/rowCount.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#rowCount') property respectively.

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
    
    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <DxChart ... >
                <DxLegend :column-count="3"/> <!-- or :row-count="2" -->
            </DxChart>
        </template>

        <script>
        import DxChart, {
            DxLegend
        } from 'devextreme-vue/chart';

        export default {
            components: {
                DxChart,
                DxLegend
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import Chart, {
            Legend
        } from 'devextreme-react/chart';

        class App extends React.Component {
            render() {
                return (
                    <Chart ... >
                        <Legend columnCount={3}/> {/* or rowCount={2} */}
                    </Chart>
                );
            }
        }

        export default App;

    ---

- **Adjust the empty space between columns and rows**         
Regardless the legend orientation, you can adjust the empty space between columns and rows using the [columnItemSpacing](/api-reference/10%20UI%20Components/BaseLegend/columnItemSpacing.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#columnItemSpacing') and [rowItemSpacing](/api-reference/10%20UI%20Components/BaseLegend/rowItemSpacing.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#rowItemSpacing') properties respectively.

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

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <DxChart ... >
                <DxLegend
                    :column-item-spacing="20"
                    :row-item-spacing="30"
                />
            </DxChart>
        </template>

        <script>
        import DxChart, {
            DxLegend
        } from 'devextreme-vue/chart';

        export default {
            components: {
                DxChart,
                DxLegend
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import Chart, {
            Legend
        } from 'devextreme-react/chart';

        class App extends React.Component {
            render() {
                return (
                    <Chart ... >
                        <Legend
                            columnItemSpacing={20}
                            rowItemSpacing={30}
                        />
                    </Chart>
                );
            }
        }

        export default App;

    ---

Below, you can try out all the mentioned properties in action.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/DataVisualization/Guides/Legend/rearrangeLegendItems.html, /Content/Applications/25_1/DataVisualization/Guides/Legend/rearrangeLegendItems.js, /Content/Applications/25_1/DataVisualization/Guides/Legend/rearrangeLegendItems.css"></div>

#####See Also#####
- [Relocate the Legend](/concepts/05%20UI%20Components/Chart/35%20Legend/10%20Relocate%20the%20Legend.md '/Documentation/Guide/UI_Components/Chart/Legend/Relocate_the_Legend/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/StepLine)
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')

[tags]chart, legend, legend items, legend orientation, colum count, columnCount, row count, rowCount, empty space between legend items, columnItemSpacing, rowItemSpacing
