Each [series point](/concepts/05%20Widgets/Chart/14%20Series%20Points/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Series_Points/Overview/') can be accompanied with a label that displays the point's value(s) or custom data.

![DevExtreme HTML5 JavaScript Charts SeriesPoints](/images/ChartJS/visual_elements/point_labels.png)

To configure point labels, use the fields of the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/') object. This object can be declared as follows.

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
                stackedline: { // or any other series type
                    label: {
                        // Settings for all point labels belonging to Stacked Line series
                    }
                },
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
            <dxo-stackedline> <!-- or any other series type -->
                <dxo-label ... >
                    <!-- Settings for all point labels belonging to Stacked Line series -->
                </dxo-label>
            </dxo-stackedline>
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

---

Point labels are not visible by default. To make them visible, assign **true** to the **label**.**visible** option. With this configuration, point labels are displayed detached from their respective series points. You can make the connection between labels and points more evident by making label connectors visible. For this purpose, assign **true** to the **label**.[connector](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/label/connector '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/connector/').**visible** option.

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

---

For details on other options of point labels, refer to the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/') section of the API reference and to other topics in this section.

#####See Also#####
- [Customize Point Labels](/concepts/05%20Widgets/Chart/15%20Point%20Labels/05%20Customize%20Point%20Labels.md '/Documentation/Guide/Widgets/Chart/Point_Labels/Customize_Point_Labels/')
- [Resolve Label Overlapping](/concepts/05%20Widgets/Chart/15%20Point%20Labels/10%20Resolve%20Overlapping.md '/Documentation/Guide/Widgets/Chart/Point_Labels/Resolve_Overlapping/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/CustomizePointsAndLabels)
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, point labels, overview, common label settings, label connector