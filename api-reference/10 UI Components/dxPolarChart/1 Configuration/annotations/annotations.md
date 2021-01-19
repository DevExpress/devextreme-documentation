---
id: dxPolarChart.Options.annotations
type: Array<dxPolarChartAnnotationConfig, Object>
inherits: dxPolarChart.Options.commonAnnotationSettings
---
---
##### shortDescription
Specifies the annotation collection.

---
     
Annotations are images and text blocks that provide additional information about the visualized data.

![DevExtreme PolarChart: Annotations](/images/ChartJS/annotations/polar-chart-text-image-annotation.png)       
To configure annotations, assign an array of objects to the **annotations[]** option. Each object should have the [type](/api-reference/_hidden/BaseChartAnnotationConfig/type.md '{basewidgetpath}/Configuration/annotations/#type') field set to *"text"* or *"image"*. Depending on the **type**, specify the annotation's [text](/api-reference/_hidden/BaseChartAnnotationConfig/text.md '{basewidgetpath}/Configuration/annotations/#text') or [image](/api-reference/_hidden/BaseChartAnnotationConfig/image '{basewidgetpath}/Configuration/annotations/image/') option:
    
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#polarChart").dxPolarChart({
            annotations: [{
                type: "text",
                text: "Annotation text"
            }, {
                type: "image",
                image: "http://image/url/myimage.png"
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-polar-chart ... >
        <dxi-annotation
            type="text"
            text="Annotation text">
        </dxi-annotation>
        <dxi-annotation
            type="image"
            image="http://image/url/myimage.png">
        </dxi-annotation>
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
            <DxAnnotation
                type="text"
                text="Annotation text"
            />
            <DxAnnotation
                type="image"
                image="http://image/url/myimage.png"
            />
        </DxPolarChart>
    </template>

    <script>
    import DxPolarChart, {
        DxAnnotation
    } from 'devextreme-vue/polar-chart';

    export default {
        components: {
            DxPolarChart,
            DxAnnotation
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
        Annotation
    } from 'devextreme-react/polar-chart';

    class App extends React.Component {
        render() {
            return (
                <PolarChart ... >
                    <Annotation
                        type="text"
                        text="Annotation text"
                    />
                    <Annotation
                        type="image"
                        image="http://image/url/myimage.png"
                    />
                </PolarChart>
            );
        }
    }

    export default App;

---

Annotations can be anchored to a **PolarChart** element. To do this, use the [argument](/api-reference/_hidden/BaseChartAnnotationConfig/argument.md '{basewidgetpath}/Configuration/annotations/#argument'), [value](/api-reference/_hidden/BaseChartAnnotationConfig/value.md '{basewidgetpath}/Configuration/annotations/#value') or [series](/api-reference/_hidden/dxPolarChartCommonAnnotationConfig/series.md '{basewidgetpath}/Configuration/annotations/#series') options, depending on the element you want to anchor the annotation to.

To define the position of an unanchored annotation, set the pixel coordinates ([x](/api-reference/_hidden/BaseChartAnnotationConfig/x.md '{basewidgetpath}/Configuration/annotations/#x') and [y](/api-reference/_hidden/BaseChartAnnotationConfig/y.md '{basewidgetpath}/Configuration/annotations/#y')) or use [angle](/api-reference/_hidden/dxPolarChartCommonAnnotationConfig/angle.md '{basewidgetpath}/Configuration/annotations/#angle') and [radius](/api-reference/_hidden/dxPolarChartCommonAnnotationConfig/radius.md '{basewidgetpath}/Configuration/annotations/#radius') options.

- **Unanchored annotation**

        annotations: [{
            x: 100,
            y: 200
        }, {
            angle: 45,
            radius: 100
        }]
- **Annotation anchored to a polar chart coordinate**

        annotations: [{
            argument: new Date(2019, 1, 16),
            value: 15
        }]

- **Annotation anchored to a series or series point**

        annotations: [{
            argument: new Date(2019, 1, 16),
            series: "Series 1"
        }]

- **Annotation displayed on an axis**

        annotations: [{ 
            // An annotation on the argument axis 
            argument: new Date(2019, 1, 16)
        }, { 
            // An annotation on the value axis 
            value: 15
        }]

- **Mixed anchoring (pixel and chart coordinates used simultaneously)**

        annotations: [{
            argument: new Date(2019, 1, 16),
            y: 200
        }]


When a user long-presses an annotation or hovers the mouse pointer over it, the **PolarChart** displays a [tooltip](/api-reference/_hidden/BaseChartAnnotationConfig/tooltipEnabled.md '{basewidgetpath}/Configuration/annotations/#tooltipEnabled').

Objects in the **annotations[]** array configure individual annotations. To specify options common for all annotations, use the [commonAnnotationSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAnnotationSettings '{basewidgetpath}/Configuration/commonAnnotationSettings/') object. Individual settings take precedence over common settings.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PolarChartAnnotations/"
}

#####See Also#####
- [customizeAnnotation](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/customizeAnnotation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#customizeAnnotation')
