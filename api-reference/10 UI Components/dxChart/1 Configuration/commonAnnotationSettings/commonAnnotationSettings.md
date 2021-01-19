---
id: dxChart.Options.commonAnnotationSettings
type: dxChartCommonAnnotationConfig
inheritsType: dxChartCommonAnnotationConfig
---
---
##### shortDescription
Specifies settings common for all annotations in the chart.

---
Settings specified here can be ignored in favor of individual annotation settings specified in the [annotations[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/) array. Refer to the array's description for information on how to configure annotations.

The following code shows the **commonAnnotationSettings** declaration syntax:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            commonAnnotationSettings: {
                tooltipEnabled: false
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dx-common-annotation-settings
            [tooltipEnabled]="false">
        </dx-common-annotation-settings>
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
        <DxChart ... >
            <DxCommonAnnotationSettings
                :tooltip-enabled="false"
            />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxCommonAnnotationSettings
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxCommonAnnotationSettings
        },
        data() {
            // ...
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        CommonAnnotationSettings
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <CommonAnnotationSettings
                        tooltipEnabled={false}
                    />
                </Chart>
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Annotation/"
}

#####See Also#####
- [customizeAnnotation](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/customizeAnnotation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#customizeAnnotation')