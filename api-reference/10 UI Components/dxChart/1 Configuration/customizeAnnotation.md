---
id: dxChart.Options.customizeAnnotation
type: function(annotation)
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Customizes an individual [annotation](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAnnotationSettings '{basewidgetpath}/Configuration/annotations/').

##### param(annotation): dxChartAnnotationConfig | any
The annotation before customizations.

##### return: dxChartAnnotationConfig
The annotation after customizations.

---
The following code shows how to use the **customizeAnnotation** function to apply different settings to text and image annotations:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            customizeAnnotation: function(annotationItem) {
                if(annotationItem.text) {
                    annotationItem.color = "red";
                }
                if(annotationItem.image) {
                    annotationItem.color = "blue";
                }
                return annotationItem;
            }
        });
    });

##### Angular  

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [customizeAnnotation]="customizeAnnotation">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        customizeAnnotation(annotationItem) {
            if(annotationItem.text) {
                annotationItem.color = "red";
            }
            if(annotationItem.image) {
                annotationItem.color = "blue";
            }
            return annotationItem;
        }
    }

    <!-- tab: app.module.ts -->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <Dx{WidgetName} ...
            :customize-annotation="customizeAnnotation">
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        methods: {
            customizeAnnotation(annotationItem) {
                if(annotationItem.text) {
                    annotationItem.color = "red";
                }
                if(annotationItem.image) {
                    annotationItem.color = "blue";
                }
                return annotationItem;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import {WidgetName} from 'devextreme-react/{widget-name}';

    export default function App() {
        const customizeAnnotation = (annotationItem) => {
            if(annotationItem.text) {
                annotationItem.color = "red";
            }
            if(annotationItem.image) {
                annotationItem.color = "blue";
            }
            return annotationItem;
        }

        return (
            <{WidgetName} ...
                customizeAnnotation={customizeAnnotation}>
            </{WidgetName}>
        );
    }
    
##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        @* ... *@
        .CustomizeAnnotation("customizeAnnotation")
    )

    <script type="text/javascript">
        function customizeAnnotation(annotationItem) {
            if(annotationItem.text) {
                annotationItem.color = "red";
            }
            if(annotationItem.image) {
                annotationItem.color = "blue";
            }
            return annotationItem;
        }
    </script>

---

#####See Also#####
- [annotations[]]({basewidgetpath}/Configuration/annotations/)
- [commonAnnotationSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAnnotationSettings '{basewidgetpath}/Configuration/commonAnnotationSettings/')