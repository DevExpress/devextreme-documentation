---
id: dxChartSeriesTypes.CommonSeries.label
type: Object
---
---
##### shortDescription
Configures point labels.

---
Declared in [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/'), the **label** settings apply to all point labels in the chart. Declared in a [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') configuration object, the **label** settings apply only to the point labels that belong to this particular series. The series-specific **label** settings override the common ones.

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
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxChartModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxChartModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-chart ... >
            <dx-series ... >
                <dx-label ...>
                    <!-- Settings for all point labels of an individual series -->
                </dx-label>
            </dx-series>
            <dx-common-series-settings ... >
                <dx-label ... >
                    <!-- Settings for all point labels in the Chart -->
                </dx-label>
            </dx-common-series-settings>
        </dx-chart>
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
- [customizeLabel](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/customizeLabel.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#customizeLabel')