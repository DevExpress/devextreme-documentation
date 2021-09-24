---
id: dxPolarChart.Options.annotations
type: Array<dxPolarChartAnnotationConfig, Object>
inherits: dxPolarChart.Options.commonAnnotationSettings
---
---
##### shortDescription
Specifies the annotation collection.

---
     
Annotations are containers for images, text blocks, and custom content that display additional information about the visualized data.

![DevExtreme PolarChart: Annotations](/images/ChartJS/annotations/polar-chart-text-image-annotation.png)  

To create annotations, assign an array of objects to the **annotations[]** property. Each object configures an individual annotation. You can set each annotation's [type](/api-reference/_hidden/BaseWidgetAnnotationConfig/type.md '{basewidgetpath}/Configuration/annotations/#type') property to *"text"*, *"image"*, or *"custom"*. Depending on the **type**, specify the annotation's [text](/api-reference/_hidden/BaseWidgetAnnotationConfig/text.md '{basewidgetpath}/Configuration/annotations/#text'), [image](/api-reference/_hidden/BaseWidgetAnnotationConfig/image '{basewidgetpath}/Configuration/annotations/image/'), or [template](/api-reference/_hidden/dxPolarChartCommonAnnotationConfig/template.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/annotations/#template') property:
    
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
    <dx-polar-chart ... >
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
    </dx-polar-chart>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

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
            <DxAnnotation
                type="custom"
                template="custom-annotation"
            />
            <template #custom-annotation="{ data }">
                <svg>
                    <!-- Declare custom SVG markup here -->
                </svg>
            </template>
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
            <PolarChart ... >
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
            </PolarChart>
        );
    }

---

Annotations can be anchored to a PolarChart element. The following list shows how to position them. Chart coordinates ([argument](/api-reference/_hidden/BaseChartAnnotationConfig/argument.md '{basewidgetpath}/Configuration/annotations/#argument'), [value](/api-reference/_hidden/BaseChartAnnotationConfig/value.md '{basewidgetpath}/Configuration/annotations/#value') and [series](/api-reference/_hidden/dxPolarChartCommonAnnotationConfig/series.md '{basewidgetpath}/Configuration/annotations/#series') properties) specify the element that the annotation's arrow points to; pixel coordinates ([x](/api-reference/_hidden/BaseChartAnnotationConfig/x.md '{basewidgetpath}/Configuration/annotations/#x') and [y](/api-reference/_hidden/BaseChartAnnotationConfig/y.md '{basewidgetpath}/Configuration/annotations/#y')) specify the position of the annotation's center. You can also use polar coordinate system ([angle](/api-reference/_hidden/dxPolarChartCommonAnnotationConfig/angle.md '{basewidgetpath}/Configuration/annotations/#angle') and [radius](/api-reference/_hidden/dxPolarChartCommonAnnotationConfig/radius.md '{basewidgetpath}/Configuration/annotations/#radius') properties) to create unanchored annotations.

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


When a user long-presses an annotation or hovers the mouse pointer over it, the PolarChart displays a [tooltip](/api-reference/_hidden/BaseWidgetAnnotationConfig/tooltipEnabled.md '{basewidgetpath}/Configuration/annotations/#tooltipEnabled').

Objects in the **annotations[]** array configure individual annotations. To specify properties common for all annotations, use the [commonAnnotationSettings](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAnnotationSettings '{basewidgetpath}/Configuration/commonAnnotationSettings/') object. Individual settings take precedence over common settings.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PolarChartAnnotations/"
}

#####See Also#####
- [customizeAnnotation](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/customizeAnnotation.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/#customizeAnnotation')
