---
id: dxPolarChartCommonAnnotationConfig.template
type: template
default: undefined
---
---
##### shortDescription
<!-- %shortDescription% -->

##### param(annotation): dxPolarChartCommonAnnotationConfig | any
<!-- %param(annotation)% -->

##### param(element): SVGGElement
<!-- %param(element)% -->

##### return: String | SVGElement | jQuery
<!-- %return% -->

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#polarChart").dxPolarChart({
            annotations: [{
                // ...
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
        <dxi-annotation ...
            type="custom"
            template="custom-annotation">
        </dxi-annotation>
        <svg *dxTemplate="let annotation of 'custom-annotation'">
            <!-- Declare custom SVG markup here -->
        </svg>
    </dx-polar-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPolarChart ... >
            <DxAnnotation ...
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
                <Annotation ...
                    type="custom"
                    render={CustomAnnotation}
                />
            </PolarChart>
        );
    }

---

<!-- import * from 'api-reference\_hidden\dxChartCommonAnnotationConfig\template.md' -->