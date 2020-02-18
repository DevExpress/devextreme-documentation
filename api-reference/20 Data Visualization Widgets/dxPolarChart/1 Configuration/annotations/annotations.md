---
id: dxPolarChart.Options.annotations
type: Array<dxPolarChartAnnotationConfig, Object>
inherits: dxPolarChart.Options.commonAnnotationSettings
---
---
##### shortDescription
Specifies the annotation collection.

---     
Annotations are images and text blocks that provide additional information on the visualized data. The image below demonstrates their appearance:       

![DevExtreme PolarChart: Annotations](/images/ChartJS/annotations/polar-chart-text-image-annotation.png)       
To configure annotations, assign an array of objects to the **annotations[]** option. Each object should have the [type](/api-reference/_hidden/dxChartCommonAnnotationConfig/type.md '{basewidgetpath}/Configuration/annotations/#type') field set to *"text"* or *"image"*. Depending on the **type**, specify the annotation's [text](/api-reference/_hidden/dxChartCommonAnnotationConfig/text.md '{basewidgetpath}/Configuration/annotations/#text') or [image](/api-reference/_hidden/dxChartCommonAnnotationConfig/image '{basewidgetpath}/Configuration/annotations/image/') option:
    
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName").dx{WidgetName}({
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
    <dx-{widget-name} ... >
        <dxi-annotation
            type="text"
            text="Annotation text">
        </dxi-annotation>
        <dxi-annotation
            type="image"
            image="http://image/url/myimage.png">
        </dxi-annotation>
    </dx-{widget-name}>

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

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxAnnotation
                type="text"
                text="Annotation text"
            />
            <DxAnnotation
                type="image"
                image="http://image/url/myimage.png"
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName}, {
        DxAnnotation
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
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

    import {WidgetName}, {
        Annotation
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ... >
                    <Annotation
                        type="text"
                        text="Annotation text"
                    />
                    <Annotation
                        type="image"
                        image="http://image/url/myimage.png"
                    />
                </{WidgetName}>
            );
        }
    }

    export default App;

---

Annotations can be unattached or anchored to a PolarChart element. The following list shows how to position them. PolarChart coordinates ([argument](/api-reference/_hidden/dxChartCommonAnnotationConfig/argument.md '{basewidgetpath}/Configuration/annotations/#argument'), [value](/api-reference/_hidden/dxChartCommonAnnotationConfig/value.md '{basewidgetpath}/Configuration/annotations/#value'), [axis](/api-reference/_hidden/dxChartCommonAnnotationConfig/axis.md '{basewidgetpath}/Configuration/annotations/#axis'), [series](/api-reference/_hidden/dxPolarChartCommonAnnotationConfig/series.md '{basewidgetpath}/Configuration/annotations/#series')), [angle](/api-reference/_hidden/dxPolarChartCommonAnnotationConfig/angle.md '{basewidgetpath}/Configuration/annotations/#angle') and [radius](/api-reference/_hidden/dxPolarChartCommonAnnotationConfig/radius.md '{basewidgetpath}/Configuration/annotations/#radius') specify the element that the annotation's arrow points to; pixel coordinates ([x](/api-reference/_hidden/dxChartCommonAnnotationConfig/x.md '{basewidgetpath}/Configuration/annotations/#x') and [y](/api-reference/_hidden/dxChartCommonAnnotationConfig/y.md '{basewidgetpath}/Configuration/annotations/#y')) specify the position of the annotation's center.

- **Unanchored annotation**

        annotations: [{
            x: 100,
            y: 200
        }]

- **Annotation anchored to a polar chart coordinate**

        annotations: [{
            argument: new Date(2019, 1, 16),
            value: 15
        }]

- **Annotation anchored to a series point**

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

- **Annotation's position defined by angle and radius**

        annotations: [{
            angle: 45,
            radius: 100
        }]

When a user long-presses an annotation or hovers the mouse pointer over it, the **{WidgetName}** displays a [tooltip](/api-reference/_hidden/dxChartCommonAnnotationConfig/tooltipEnabled.md '{basewidgetpath}/Configuration/annotations/#tooltipEnabled').

Objects in the **annotations[]** array configure individual annotations. To specify options common for all annotations, use the [commonAnnotationSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAnnotationSettings '{basewidgetpath}/Configuration/commonAnnotationSettings/') object. Individual settings take precedence over common settings.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Annotation/"
}

#####See Also#####
- [customizeAnnotation]({basewidgetpath}/Configuration/#customizeAnnotation)