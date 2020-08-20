---
id: dxVectorMapCommonAnnotationConfig.template
type: template
default: undefined
---
---
##### shortDescription
<!-- %shortDescription% -->

##### param(annotation): dxVectorMapAnnotationConfig | any
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
        $("#vectorMap").dxVectorMap({
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
    <dx-vector-map ... >
        <dxi-annotation ...
            type="custom"
            template="custom-annotation">
        </dxi-annotation>
        <svg *dxTemplate="let annotation of 'custom-annotation'">
            <!-- Declare custom SVG markup here -->
        </svg>
    </dx-vector-map>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxVectorMap ... >
            <DxAnnotation ...
                type="custom"
                template="custom-annotation"
            />
            <template #custom-annotation="{ data }">
                <svg>
                    <!-- Declare custom SVG markup here -->
                </svg>
            </template>
        </DxVectorMap>
    </template>

    <script>
    import DxVectorMap, {
        DxAnnotation
    } from 'devextreme-vue/vector-map';

    export default {
        components: {
            DxVectorMap,
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

    import VectorMap, {
        Annotation
    } from 'devextreme-react/vector-map';

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
            <VectorMap ... >
                <Annotation ...
                    type="custom"
                    render={CustomAnnotation}
                />
            </VectorMap>
        );
    }

---

<!-- import * from 'api-reference\_hidden\dxChartCommonAnnotationConfig\template.md' -->