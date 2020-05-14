Each series point can be accompanied with a label that displays the point's value or custom data.

![DevExtreme HTML5 JavaScript PieChart SeriesPointLabels](/images/PieChart/visual_elements/point_labels.png)

To configure point labels, use the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/') object. You can declare it as follows.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            series: [{
                label: {
                    // Settings for all point labels of an individual series
                }
            }, {
                // ...  
            }],
            commonSeriesSettings: {
                label: {
                    // Settings for all point labels in the PieChart
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxi-series>
            <dxo-label ... >
                <!-- Settings for all point labels of an individual series -->
            </dxo-label>
        </dxi-series>
        <dxo-common-series-settings ... >
            <dxo-label ... >
                <!-- Settings for all point labels in the PieChart -->
            </dxo-label>
        </dxo-common-series-settings>
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
            <DxSeries>
                <DxLabel ... >
                    <!-- Settings for all point labels of an individual series -->
                </DxLabel>
            </DxSeries>
            <DxCommonSeriesSettings ... >
                <DxLabel ... >
                    <!-- Settings for all point labels in the PieChart -->
                </DxLabel>
            </DxCommonSeriesSettings>
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxSeries,
        DxCommonSeriesSettings,
        DxLabel
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxSeries,
            DxCommonSeriesSettings,
            DxLabel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Series,
        CommonSeriesSettings,
        Label
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ... >
                    <Series>
                        <Label ... >
                            {/* Settings for all point labels of an individual series */}
                        </Label>
                    </Series>
                    <CommonSeriesSettings ... >
                        <Label ... >
                            {/* Settings for all point labels in the PieChart */}
                        </Label>
                    </CommonSeriesSettings>
                </PieChart>
            );
        }
    }

---

Point labels are not visible by default. To make them visible, assign **true** to the **label**.**visible** option. With this configuration, point labels are displayed detached from their respective series points. You can make the connection between labels and points more evident by making label connectors visible. For this purpose, assign **true** to the **label**.[connector](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/connector '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/connector/').**visible** option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            series: {
                label: {
                    visible: true,
                    connector: {
                        visible: true
                    }
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxi-series>
            <dxo-label [visible]="true">
                <dxo-connector [visible]="true"></dxo-connector>
            </dxo-label>
        </dxi-series>
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
            <DxSeries>
                <DxLabel :visible="true">
                    <DxConnector :visible="true"/>
                </DxLabel>
            </DxSeries>
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxSeries,
        DxLabel,
        DxConnector
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxSeries,
            DxLabel,
            DxConnector
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Series,
        Label,
        Connector
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ... >
                    <Series>
                        <Label visible={true}>
                            <Connector visible={true} />
                        </Label>
                    </Series>
                </PieChart>
            );
        }
    }

---

For details on other options of point labels, refer to the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/') section of the API reference and to other topics in this section.

#####See Also#####
- [Customize Labels](/concepts/05%20Widgets/PieChart/15%20Point%20Labels/05%20Customize%20Labels.md '/Documentation/Guide/Widgets/PieChart/Point_Labels/Customize_Labels/')
- [Resolve Label Overlapping](/concepts/05%20Widgets/PieChart/15%20Point%20Labels/10%20Resolve%20Overlapping.md '/Documentation/Guide/Widgets/PieChart/Point_Labels/Resolve_Overlapping/')
- [PieChart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Pie)