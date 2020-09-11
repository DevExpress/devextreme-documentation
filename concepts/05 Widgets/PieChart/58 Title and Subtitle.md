Title and subtitle are textual elements that give an idea of what the **PieChart** visualizes.

![DevExtreme HTML5 JavaScript PieChart Title Subtitle](/images/PieChart/visual_elements/chart_title.png)

The title is configured by the [title](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/title.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/title/') object. The subtitle is configured by the [subtitle](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title/subtitle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/title/subtitle/') object nested in the **title** object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            title: {
                text: "I am the Title",
                subtitle: {
                    text: "I am the Subtitle"
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxo-title
            text="I am the Title">
            <dxo-subtitle
                text="I am the Subtitle">
            </dxo-subtitle>
        </dxo-title>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxPieChart ...>
            <DxTitle text="I am the Title">
                <DxSubtitle text="I am the Subtitle"/>
            </DxTitle>
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxTitle,
        DxSubtitle
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxTitle,
            DxSubtitle
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Title,
        Subtitle
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ...>
                    <Title text="I am the Title">
                        <Subtitle text="I am the Subtitle" />
                    </Title>
                </PieChart>
            );
        }
    }

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithMultipleSeries/"
}

You can set the title's text more concisely by assigning it directly to the **title** option. This is useful if you are satisfied with the default settings of the title and do not need a subtitle. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            title: "I am the Title"
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ...
        title="I am the Title">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxPieChart ...
            title="I am the Title">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ...
                    title="I am the Title">
                </PieChart>
            );
        }
    }

---

For information about all options of the title and subtitle, visit the [title](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/title.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/title/') section of the API reference.

#####See Also#####
- [Adaptive Layout](/concepts/05%20Widgets/PieChart/89%20Adaptive%20Layout.md '/Documentation/Guide/Widgets/PieChart/Adaptive_Layout/')
- [Equally-Sized Pies](/concepts/05%20Widgets/PieChart/95%20Equally-Sized%20Pies.md '/Documentation/Guide/Widgets/PieChart/Equally-Sized_Pies/')