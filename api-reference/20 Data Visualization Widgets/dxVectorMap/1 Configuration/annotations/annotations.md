---
id: dxVectorMap.Options.annotations
type: Array<dxVectorMapAnnotationConfig, Object>
inherits: dxVectorMap.Options.commonAnnotationSettings
---
---
##### shortDescription
Specifies the annotation collection.

---
Annotations are images and text blocks that provide additional information about the visualized data.

![DevExtreme VectorMap: Annotations](/images/ChartJS/annotations/vector-map-text-image-annotation.png) 

To configure annotations, assign an array of objects to the **annotations[]** option. Each object should have the [type](/api-reference/_hidden/BaseWidgetAnnotationConfig/type.md '{basewidgetpath}/Configuration/annotations/#type') field set to *"text"*, *"image"*, or *"custom"*. Depending on the **type**, specify the annotation's [text](/api-reference/_hidden/BaseWidgetAnnotationConfig/text.md '{basewidgetpath}/Configuration/annotations/#text'), [image](/api-reference/_hidden/BaseWidgetAnnotationConfig/image '{basewidgetpath}/Configuration/annotations/image/'), or [template](/api-reference/_hidden/dxVectorMapCommonAnnotationConfig/template.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/annotations/#template') option:
    
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#vectorMap").dxVectorMap({
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
    <dx-vector-map ... >
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
            </VectorMap>
        );
    }

---

Annotations can be positioned at specific geographic coordinates or coordinates of the client area:

- **Geographic [coordinates](/api-reference/_hidden/dxVectorMapCommonAnnotationConfig/coordinates.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/annotations/#coordinates')**

        annotations: [{
            coordinates: [-75.4999, 43.00035]
        }]

- **Client area coordinates ([x](/api-reference/_hidden/dxVectorMapCommonAnnotationConfig/x.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/annotations/#x') and [y](/api-reference/_hidden/dxVectorMapCommonAnnotationConfig/y.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/annotations/#y'))**

        annotations: [{
            x: 100,
            y: 200
        }]

When a user long-presses an annotation or hovers the mouse pointer over it, the **VectorMap** displays a [tooltip](/api-reference/_hidden/BaseWidgetAnnotationConfig/tooltipEnabled.md '{basewidgetpath}/Configuration/annotations/#tooltipEnabled').

Objects in the **annotations[]** array configure individual annotations. To specify options common for all annotations, use the [commonAnnotationSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/commonAnnotationSettings '{basewidgetpath}/Configuration/commonAnnotationSettings/') object. Individual settings take precedence over common settings.

#####See Also#####
- [customizeAnnotation](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/customizeAnnotation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#customizeAnnotation')
