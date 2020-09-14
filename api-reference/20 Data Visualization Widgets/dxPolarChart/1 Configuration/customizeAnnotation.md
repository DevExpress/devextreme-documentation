---
id: dxPolarChart.Options.customizeAnnotation
type: function(annotation)
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Customizes an individual [annotation](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/annotations '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/annotations/').

##### param(annotation): dxPolarChartAnnotationConfig | any
The annotation before customizations.

##### return: dxPolarChartAnnotationConfig
The annotation after customizations.

---
The following code shows how to use the **customizeAnnotation** function to apply different settings to text and image annotations:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#polarChart").dxPolarChart({
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
    <dx-polar-chart ...
        [customizeAnnotation]="customizeAnnotation">
    </dx-polar-chart>

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
    import { DxPolarChartModule } from 'devextreme-angular';
    // ...
    @NgModule({
        imports: [
            // ...
            DxPolarChartModule
        ],
        // ...
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxPolarChart ...
            :customize-annotation="customizeAnnotation">
        </DxPolarChart>
    </template>

    <script>
    import DxPolarChart from 'devextreme-vue/polar-chart';

    export default {
        components: {
            DxPolarChart
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
    import PolarChart from 'devextreme-react/polar-chart';

    class App extends React.Component {
        render() {
            return (
                <PolarChart ...
                    customizeAnnotation={this.customizeAnnotation}>
                </PolarChart>
            );
        }

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

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().PolarChart()
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
- [annotations[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/annotations/)
- [commonAnnotationSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAnnotationSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAnnotationSettings/')
