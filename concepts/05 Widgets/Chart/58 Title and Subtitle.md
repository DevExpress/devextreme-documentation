Title and subtitle are textual elements that give an idea of what the **Chart** visualizes.

![DevExtreme HTML5 JavaScript Charts Title Subtitle](/images/ChartJS/visual_elements/chart_title.png)

The title is configured by the [title](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/title.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/title/') object. The subtitle is configured by the [subtitle](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title/subtitle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/title/subtitle/') object nested in the **title** object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
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

    <!--HTML--><dx-chart ... >
        <dxo-title
            text="I am the Title">
            <dxo-subtitle
                text="I am the Subtitle">
            </dxo-subtitle>
        </dxo-title>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ... >
            <DxTitle
                text="I am the Title"
            >
                <DxSubtitle
                    text="I am the Subtitle"
                />
            </DxTitle>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxTitle,
        DxSubtitle
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxTitle,
            DxSubtitle
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Title,
        Subtitle
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Title text="I am the Title">
                        <Subtitle text="I am the Subtitle" />
                    </Title>
                </Chart>
            );
        }
    }

    export default App;

---

You can set the title's text more concisely by assigning it directly to the **title** option. This is useful if you are satisfied with the default settings of the title and do not need a subtitle. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            title: "I am the Title"
        });
    });

##### Angular

    <!--HTML--><dx-chart
        title="I am the Title">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart
            title="I am the Title"
            ...
        >
        </DxChart>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
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
                <Chart
                    title="I am the Title"
                    ...
                >
                </Chart>
            );
        }
    }

    export default App;

---

For information about all options of the title and subtitle, visit the [title](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/title.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/title/') section of the API reference.

#####See Also#####
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LocalDataSource)

[tags]chart, title, subtitle, text
