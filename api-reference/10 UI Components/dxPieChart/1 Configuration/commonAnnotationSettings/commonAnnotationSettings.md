---
id: dxPieChart.Options.commonAnnotationSettings
type: dxPieChartCommonAnnotationConfig
inheritsType: dxPieChartCommonAnnotationConfig
---
---
##### shortDescription
Specifies settings common for all annotations in the PieChart.

---
Settings specified here can be ignored in favor of individual annotation settings specified in the [annotations[]](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/annotations/) array. Refer to the array's description for information on how to configure annotations.

The following code shows the **commonAnnotationSettings** declaration syntax:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pieChart").dxPieChart({
            // ...
            commonAnnotationSettings: {
                tooltipEnabled: false
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pie-chart ... >
        <dx-common-annotation-settings
            [tooltipEnabled]="false">
        </dx-common-annotation-settings>
    </dx-pie-chart>

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

    import { DxPieChartModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxPieChartModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPieChart ... >
            <DxCommonAnnotationSettings
                :tooltip-enabled="false"
            />
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxCommonAnnotationSettings
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
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

    import PieChart, {
        CommonAnnotationSettings
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ... >
                    <CommonAnnotationSettings
                        tooltipEnabled={false}
                    />
                </PieChart>
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithAnnotations/"
}

#####See Also#####
- [customizeAnnotation](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#customizeAnnotation)