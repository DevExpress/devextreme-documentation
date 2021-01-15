Each [series point](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Overview/') can be accompanied with a label that displays the point's value(s) or custom data.

![DevExtreme HTML5 JavaScript Charts SeriesPoints](/images/ChartJS/visual_elements/point_labels.png)

To configure point labels, use the fields of the [label](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label '/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label '/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/'Configuration/series/label/'') object. This object can be declared as follows.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
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
                    // Settings for all point labels in the Chart
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series>
            <dxo-label ... >
                <!-- Settings for all point labels of an individual series -->
            </dxo-label>
        </dxi-series>
        <dxo-common-series-settings ... >
            <dxo-label ... >
                <!-- Settings for all point labels in the Chart -->
            </dxo-label>
        </dxo-common-series-settings>
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
            <DxSeries>
                <DxLabel ... >
                    <!-- Settings for all point labels of an individual series -->
                </DxLabel>
            </DxSeries>
            <DxCommonSeriesSettings ... >
                <DxLabel ... >
                    <!-- Settings for all point labels in the Chart -->
                </DxLabel>
            </DxCommonSeriesSettings>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries,
        DxCommonSeriesSettings,
        DxLabel
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxCommonSeriesSettings,
            DxLabel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series,
        CommonSeriesSettings,
        Label
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series>
                        <Label ... >
                            {/* Settings for all point labels of an individual series */}
                        </Label>
                    </Series>
                    <CommonSeriesSettings ... >
                        <Label ... >
                            {/* Settings for all point labels in the Chart */}
                        </Label>
                    </CommonSeriesSettings>
                </Chart>
            );
        }
    }

    export default App;

---

Point labels are not visible by default. To make them visible, assign **true** to the **label**.**visible** property. With this configuration, point labels are displayed detached from their respective series points. You can make the connection between labels and points more evident by making label connectors visible. For this purpose, assign **true** to the **label**.[connector](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label '/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label '/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/'Configuration/series/label/''connector/).**visible** property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
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

    <!--HTML--><dx-chart ... >
        <dxi-series>
            <dxo-label [visible]="true">
                <dxo-connector [visible]="true"></dxo-connector>
            </dxo-label>
        </dxi-series>
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
            <DxSeries>
                <DxLabel :visible="true">
                    <DxConnector :visible="true"/>
                </DxLabel>
            </DxSeries>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries,
        DxLabel,
        DxConnector
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxLabel,
            DxConnector
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series,
        Connector,
        Label
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series>
                        <Label visible={true}>
                            <Connector visible={true} />
                        </Label>
                    </Series>
                </Chart>
            );
        }
    }

    export default App;

---

For details on other properties of point labels, refer to the [label](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label '/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label '/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/'Configuration/series/label/'') section of the API reference and to other topics in this section.

#####See Also#####
- [Customize Point Labels](/concepts/05%20UI%20Components/Chart/15%20Point%20Labels/05%20Customize%20Point%20Labels.md '/Documentation/Guide/UI_Components/Chart/Point_Labels/Customize_Point_Labels/')
- [Resolve Label Overlapping](/concepts/05%20UI%20Components/Chart/15%20Point%20Labels/10%20Resolve%20Overlapping.md '/Documentation/Guide/UI_Components/Chart/Point_Labels/Resolve_Overlapping/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/CustomizePointsAndLabels)
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')

[tags]chart, point labels, overview, common label settings, label connector