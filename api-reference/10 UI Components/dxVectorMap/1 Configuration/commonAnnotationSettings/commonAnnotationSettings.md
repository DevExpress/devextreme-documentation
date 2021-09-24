---
id: dxVectorMap.Options.commonAnnotationSettings
type: dxVectorMapCommonAnnotationConfig
inheritsType: dxVectorMapCommonAnnotationConfig
---
---
##### shortDescription
Specifies settings common for all annotations in the VectorMap.

---
Settings specified here can be ignored in favor of individual annotation settings specified in the [annotations[]](/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/annotations/) array. Refer to the array's description for information on how to configure annotations.

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
    #include angular-app-module-ts

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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/CustomAnnotations/"
}

#####See Also#####
- [customizeAnnotation](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/customizeAnnotation.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/#customizeAnnotation')