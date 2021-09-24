---
id: dxChartSeriesTypes.CommonSeries.label
type: Object
---
---
##### shortDescription
Configures point labels.

---
Declared in [commonSeriesSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/'), the **label** settings apply to all point labels in the chart. Declared in a [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') configuration object, the **label** settings apply only to the point labels that belong to this particular series. The series-specific **label** settings override the common ones.

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

    <!-- tab: app.component.html -->
    <dx-chart ... >
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

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChart ... >
            <DxSeries ... >
                <DxLabel ...>
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
        DxLabel,
        DxCommonSeriesSettings
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxLabel,
            DxCommonSeriesSettings
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import Chart, {
        Series,
        Label,
        CommonSeriesSettings
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series ... >
                        <Label ... >
                            // Settings for all point labels of an individual series
                        </Label>
                    </Series>
                    <CommonSeriesSettings ... >
                        <Label ... >
                            // Settings for all point labels in the Chart
                        </Label>
                    </CommonSeriesSettings>
                </Chart>
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AjaxRequest/"
}

#####See Also#####
- [customizeLabel](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/customizeLabel.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#customizeLabel')