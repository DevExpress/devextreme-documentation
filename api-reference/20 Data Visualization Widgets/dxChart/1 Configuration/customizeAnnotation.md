---
id: dxChart.Options.customizeAnnotation
type: function(annotation)
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Customizes an individual [annotation](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/annotations '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/').

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
        $("#chartContainer").dxChart({
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
    <dx-chart ...
        [customizeAnnotation]="customizeAnnotation">
    </dx-chart>

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
    import { DxChartModule } from 'devextreme-angular';
    // ...
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <dx-chart ...
            :customize-annotation="customizeAnnotation">
        </dx-chart>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
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
    import Chart from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ...
                    customizeAnnotation={this.customizeAnnotation}>
                </Chart>
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
    @(Html.DevExtreme().Chart()
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
- [annotations[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/)
- [commonAnnotationSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAnnotationSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAnnotationSettings/')