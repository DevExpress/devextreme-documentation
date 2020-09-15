---
id: dxPolarChart.Options.commonAnnotationSettings
type: dxPolarChartCommonAnnotationConfig
inheritsType: dxPolarChartCommonAnnotationConfig
---
---
##### shortDescription
Specifies settings common for all annotations in the **PolarChart**.

---
Settings specified here can be ignored in favor of individual annotation settings specified in the [annotations[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/annotations/) array. Refer to the array's description for information on how to configure annotations.

The following code shows the **commonAnnotationSettings** declaration syntax:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#polarChart").dxPolarChart({
            // ...
            commonAnnotationSettings: {
                tooltipEnabled: false
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-polar-chart ... >
        <dx-common-annotation-settings
            [tooltipEnabled]="false">
        </dx-common-annotation-settings>
    </dx-polar-chart>

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

    import { DxPolarChartModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxPolarChartModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPolarChart ... >
            <DxCommonAnnotationSettings
                :tooltip-enabled="false"
            />
        </DxPolarChart>
    </template>

    <script>
    import DxPolarChart, {
        DxCommonAnnotationSettings
    } from 'devextreme-vue/polar-chart';

    export default {
        components: {
            DxPolarChart,
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

    import PolarChart, {
        CommonAnnotationSettings
    } from 'devextreme-react/polar-chart';

    class App extends React.Component {
        render() {
            return (
                <PolarChart ... >
                    <CommonAnnotationSettings
                        tooltipEnabled={false}
                    />
                </PolarChart>
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PolarChartAnnotations/"
}

#####See Also#####
- [customizeAnnotation](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/customizeAnnotation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#customizeAnnotation')