---
id: dxVectorMap.Options.commonAnnotationSettings
type: dxVectorMapCommonAnnotationConfig
inheritsType: dxVectorMapCommonAnnotationConfig
---
---
##### shortDescription
Specifies settings common for all annotations in the **VectorMap**.

---
Settings specified here can be ignored in favor of individual annotation settings specified in the [annotations[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/annotations/) array. Refer to the array's description for information on how to configure annotations.

The following code shows the **commonAnnotationSettings** declaration syntax:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#vectorMap").dxVectorMap({
            // ...
            commonAnnotationSettings: {
                tooltipEnabled: false
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-vector-map ... >
        <dx-common-annotation-settings
            [tooltipEnabled]="false">
        </dx-common-annotation-settings>
    </dx-vector-map>

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

    import { DxVectorMapModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxVectorMapModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxVectorMap ... >
            <DxCommonAnnotationSettings
                :tooltip-enabled="false"
            />
        </DxVectorMap>
    </template>

    <script>
    import DxVectorMap, {
        DxCommonAnnotationSettings
    } from 'devextreme-vue/vector-map';

    export default {
        components: {
            DxVectorMap,
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

    import VectorMap, {
        CommonAnnotationSettings
    } from 'devextreme-react/vector-map';

    class App extends React.Component {
        render() {
            return (
                <VectorMap ... >
                    <CommonAnnotationSettings
                        tooltipEnabled={false}
                    />
                </VectorMap>
            );
        }
    }
    export default App;

---

#####See Also#####
- [customizeAnnotation](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/customizeAnnotation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#customizeAnnotation')