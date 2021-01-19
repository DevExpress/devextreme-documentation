Axis labels display values indicated by [major axis ticks](/concepts/05%20Widgets/Chart/20%20Axes/07%20Axis%20Ticks.md '/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/').

![DevExtreme HTML5 JavaScript Charts AxisLabels](/images/ChartJS/visual_elements/axis_labels.png)

You can configure axis labels using the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/label '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/label/') object. It comprises options that specify the [alignment](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/label/alignment.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/label/#alignment'), [font](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/label/font '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/label/font/'), [text](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/label/customizeText.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/label/#customizeText'), and other attributes of axis labels. Pay particular attention to the [displayMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/label/displayMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/label/#displayMode') option that allows you to rotate or stagger axis labels.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis, or commonAxisSettings
                label: {
                    displayMode: "stagger",
                    staggeringSpacing: 10
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis> <!-- or dxi-value-axis, or dxo-common-axis-settings -->
            <dxo-label
                displayMode="stagger"
                [staggeringSpacing]="10">
            </dxo-label>
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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ... >
            <DxArgumentAxis> <!-- or DxValueAxis, or DxCommonAxisSettings -->
                <DxLabel
                    :staggering-spacing="10"
                    display-mode="stagger"
                />
            </DxArgumentAxis>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis,
        DxLabel
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxLabel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ArgumentAxis,
        Label
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis> {/* or ValueAxis, or CommonAxisSettings */}
                        <Label
                            staggeringSpacing={10}
                            displayMode="stagger"
                        />
                    </ArgumentAxis>
                </Chart>
            );
        }
    }

    export default App;

---

Another noteworthy option is [overlappingBehavior](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/label/overlappingBehavior.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/label/#overlappingBehavior'). It allows you to decide how axis labels should behave when they overlap each other.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis, or commonAxisSettings
                label: {
                    overlappingBehavior: "rotate",
                    rotationAngle: 45
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis> <!-- or dxi-value-axis, or dxo-common-axis-settings -->
            <dxo-label
                overlappingBehavior="rotate"
                [rotationAngle]="45">
            </dxo-label>
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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ... >
            <DxArgumentAxis> <!-- or DxValueAxis, or DxCommonAxisSettings -->
                <DxLabel
                    :rotation-angle="45"
                    overlapping-behavior="rotate"
                />
            </DxArgumentAxis>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis,
        DxLabel
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxLabel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ArgumentAxis,
        Label
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis> {/* or ValueAxis, or CommonAxisSettings */}
                        <Label
                            rotationAngle={45}
                            overlappingBehavior="rotate"
                        />
                    </ArgumentAxis>
                </Chart>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Axis Ticks](/concepts/05%20Widgets/Chart/20%20Axes/07%20Axis%20Ticks.md '/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/')
- [Axis Titles](/concepts/05%20Widgets/Chart/20%20Axes/25%20Axis%20Titles.md '/Documentation/Guide/Widgets/Chart/Axes/Axis_Titles/')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')

[tags]chart, axis labels, display mode, displayMode, overlapping behavior, overlappingBehavior
