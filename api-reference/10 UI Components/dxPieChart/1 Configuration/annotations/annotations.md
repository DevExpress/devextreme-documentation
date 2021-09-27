---
id: dxPieChart.Options.annotations
type: Array<dxPieChartAnnotationConfig, any>
inherits: dxPieChart.Options.commonAnnotationSettings
---
---
##### shortDescription
Specifies the annotation collection.

---
Annotations are containers for images, text blocks, and custom content that display additional information about the visualized data.

![DevExtreme PieChart: Annotations](/images/ChartJS/annotations/pie-annotations.png)

To create annotations, assign an array of objects to the **annotations[]** property. Each object configures an individual annotation. You can set each annotation's [type](/api-reference/_hidden/BaseWidgetAnnotationConfig/type.md '{basewidgetpath}/Configuration/annotations/#type'') property to *"text"*, *"image"*, or *"custom"*. Depending on the **type**, specify the annotation's [text](/api-reference/_hidden/BaseWidgetAnnotationConfig/text.md '{basewidgetpath}/Configuration/annotations/#text'), [image](/api-reference/_hidden/BaseWidgetAnnotationConfig/image '{basewidgetpath}/Configuration/annotations/image/'), or [template](/api-reference/_hidden/dxPieChartCommonAnnotationConfig/template.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/annotations/#template') property:
    
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pieChart").dxPieChart({
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
    <dx-pie-chart ... >
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
    </dx-pie-chart>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPieChart ... >
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
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxAnnotation
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
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

    import PieChart, {
        Annotation
    } from 'devextreme-react/pie-chart';

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
            <PieChart ... >
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
            </PieChart>
        );
    }

---

Annotations can be unattached or anchored to a chart element. The following list shows how to position them. Chart coordinates ([argument](/api-reference/_hidden/dxPieChartCommonAnnotationConfig/argument.md '{basewidgetpath}/Configuration/annotations/#argument') and [series](/api-reference/_hidden/dxPieChartCommonAnnotationConfig/series.md '{basewidgetpath}/Configuration/annotations/#series')) specify the element that the annotation's arrow points to; pixel coordinates ([x](/api-reference/_hidden/BaseWidgetAnnotationConfig/x.md '{basewidgetpath}/Configuration/annotations/#x') and [y](/api-reference/_hidden/BaseWidgetAnnotationConfig/y.md '{basewidgetpath}/Configuration/annotations/#y')) specify the position of the annotation's center.

- **Unanchored annotation**

        annotations: [{
            x: 100,
            y: 200
        }]

- **Annotation anchored to a series point**

        annotations: [{
            argument: "California",
            series: "States" // required if the PieChart contains more than one series
        }]

- **Annotation positioned at an argument's edge**

        annotations: [{
            argument: "Alaska",
            series: "States",
            location: "edge"
        }]


The PieChart displays a [tooltip](/api-reference/_hidden/BaseWidgetAnnotationConfig/tooltipEnabled.md '{basewidgetpath}/Configuration/annotations/#tooltipEnabled') when a user long-presses an annotation or hovers the mouse pointer over it.

Objects in the **annotations[]** array configure individual annotations. To specify properties that apply to all annotations, use the [commonAnnotationSettings](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/commonAnnotationSettings '{basewidgetpath}/Configuration/commonAnnotationSettings/') object. Individual settings take precedence over common settings.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithAnnotations/"
}

#####See Also#####
- [customizeAnnotation](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/customizeAnnotation.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#customizeAnnotation')
