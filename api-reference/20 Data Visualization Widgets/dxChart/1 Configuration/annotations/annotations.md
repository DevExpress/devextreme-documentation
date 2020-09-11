---
id: dxChart.Options.annotations
type: Array<dxChartAnnotationConfig, Object>
inherits: dxChart.Options.commonAnnotationSettings
---
---
##### shortDescription
Specifies the annotation collection.

---
Annotations are images and text blocks that provide additional information on the visualized data. The image below demonstrates their appearance:

![DevExtreme Chart: Annotations](/images/ChartJS/visual_elements/annotations.png)

To configure annotations, assign an array of objects to the **annotations[]** option. Each object should have the [type](/api-reference/_hidden/BaseWidgetAnnotationConfig/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#type') field set to *"text"*, *"image"*, or *"custom"*. Depending on the **type**, specify the annotation's [text](/api-reference/_hidden/BaseWidgetAnnotationConfig/text.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#text'), [image](/api-reference/_hidden/BaseWidgetAnnotationConfig/image '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/image/'), [template](/api-reference/_hidden/dxChartCommonAnnotationConfig/template.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#template') option:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#chartContainer").dxChart({
            annotations: [{
                type: "text",
                text: "Annotation text"
            }, {
                type: "image",
                image: "http://image/url/myimage.png"
            }, {
                type: "custom",
                template: function(annotation) {
                    const data = annotation.data;
                    const $svg = $("<svg>");
                    // ...
                    // Customize the annotation's markup here
                    // ...
                    return $svg;
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxi-annotation
            type="text"
            text="Annotation text">
        </dxi-annotation>
        <dxi-annotation
            type="image"
            image="http://image/url/myimage.png">
        </dxi-annotation>
        <dxi-annotation
            type="custom"
            template="custom-annotation">
        </dxi-annotation>
        <svg *dxTemplate="let annotation of 'custom-annotation'">
            <!-- Declare custom SVG markup here -->
        </svg>
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
            <DxAnnotation
                type="text"
                text="Annotation text"
            />
            <DxAnnotation
                type="image"
                image="http://image/url/myimage.png"
            />
            <DxAnnotation
                type="custom"
                template="custom-annotation"
            />
            <template #custom-annotation="{ data }">
                <svg>
                    <!-- Declare custom SVG markup here -->
                </svg>
            </template>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxAnnotation
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
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

    import Chart, {
        Annotation
    } from 'devextreme-react/chart';

    function CustomAnnotation(annotation) {
        const data = annotation.data;
        return (
            <svg>
                {/* Declare custom SVG markup here */}
            </svg>
        );
    }

    export default function App() {
        return (
            <Chart ... >
                <Annotation
                    type="text"
                    text="Annotation text"
                />
                <Annotation
                    type="image"
                    image="http://image/url/myimage.png"
                />
                <Annotation
                    type="custom"
                    render={CustomAnnotation}
                />
            </Chart>
        );
    }

---

Annotations can be unattached or anchored to a chart element. The following list shows how to position them. Chart coordinates ([argument](/api-reference/_hidden/BaseChartAnnotationConfig/argument.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#argument'), [value](/api-reference/_hidden/BaseChartAnnotationConfig/value.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#value'), [axis](/api-reference/_hidden/dxChartCommonAnnotationConfig/axis.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#axis'), [series](/api-reference/_hidden/BaseChartAnnotationConfig/series.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#series')) specify the element that the annotation's arrow points to; pixel coordinates ([x](/api-reference/_hidden/BaseChartAnnotationConfig/x.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#x') and [y](/api-reference/_hidden/BaseChartAnnotationConfig/y.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#y')) specify the position of the annotation's center.

- **Unanchored annotation**

        annotations: [{
            x: 100,
            y: 200
        }]

- **Annotation anchored to a chart coordinate**

        annotations: [{
            argument: new Date(2019, 1, 16),
            value: 15,
            axis: "Value axis 2" // in a chart with multiple value axes
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
            value: 15,  
            axis: "Value axis 2" // in a chart with multiple value axes
        }]

- **Mixed anchoring (pixel and chart coordinates used simultaneously)**

        annotations: [{
            argument: new Date(2019, 1, 16),
            y: 200
        }]

When a user long-presses an annotation or hovers the mouse pointer over it, the **Chart** displays a [tooltip](/api-reference/_hidden/BaseWidgetAnnotationConfig/tooltipEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#tooltipEnabled').

Objects in the **annotations[]** array configure individual annotations. To specify options common for all annotations, use the [commonAnnotationSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAnnotationSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAnnotationSettings/') object. Individual settings take precedence over common settings.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Annotation/"
}

#####See Also#####
- [customizeAnnotation](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/customizeAnnotation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#customizeAnnotation')