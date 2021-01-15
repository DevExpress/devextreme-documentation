The axis title is a short text displayed alongside the axis. Usually, the axis title shows units of measurement for axis values, but you can put any text in it.

![DevExtreme HTML5 JavaScript Charts AxisTitles](/images/ChartJS/visual_elements/axis_titles.png)

The axis title is configured by the [title](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/title '/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/'Configuration/argumentAxis/title/') property. If you assign an object to it, specifying the **text** field of this object is necessary for the axis title to be displayed. Besides the object, the **title** property accepts a string, thus providing a shortcut for setting the axis title. Therefore, this:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                title: 'Axis Title'
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            title="Axis Title">
        </dxo-argument-axis>
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
            <DxArgumentAxis
                title="Axis Title"
            />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ArgumentAxis
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis
                        title="Axis Title"
                    />
                </Chart>
            );
        }
    }

    export default App;

---

is the same as this:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                title: {
                    text: 'Axis Title'
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis>
            <dxo-title text="Axis Title"></dxo-title>
        </dxo-argument-axis>
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
            <DxArgumentAxis> <!-- or DxValueAxis -->
                <DxTitle
                    text="Axis Title"
                />
            </DxArgumentAxis>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis,
        DxTitle
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxTitle
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ArgumentAxis,
        Title
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis> {/* or ValueAxis */}
                        <Title
                            text="Axis Title"
                        />
                    </ArgumentAxis>
                </Chart>
            );
        }
    }

    export default App;

---

In addition to the **text** field, the **title** object may contain fields that specify the [font](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/title '/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/'Configuration/argumentAxis/title/'font/) and [margin](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/title '/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/'Configuration/argumentAxis/title/'#margin) of the axis title.

#####See Also#####
- [Chart Title and Subtitle](/concepts/05%20UI%20Components/Chart/58%20Title%20and%20Subtitle.md '/Documentation/Guide/UI_Components/Chart/Title_and_Subtitle/')
- [Limit and Relocate the Axes](/concepts/05%20UI%20Components/Chart/20%20Axes/40%20Limit%20and%20Relocate%20the%20Axes.md '/Documentation/Guide/UI_Components/Chart/Axes/Limit_and_Relocate_the_Axes/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Bubble)
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')

[tags]chart, axis titles, title font, title margin
