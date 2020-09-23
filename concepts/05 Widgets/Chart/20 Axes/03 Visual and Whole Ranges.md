The visual and whole ranges help you control which part of the axis a user sees and interacts with. Both ranges are available for the argument and value axes.

The **visual range** specifies the axis range visible to the user. Use it to focus the **Chart** on a specific part of the series. The following image illustrates the difference between charts with and without the specified visual range:

<div id="figures">
    <figure>
        <img src="/Content/images/doc/20_2/ChartJS/visual-range-unspecified.png" alt="Visual range is unspecified" />
        <figcaption>Visual range is unspecified</figcaption>
    </figure>

    <figure>
        <img src="/Content/images/doc/20_2/ChartJS/visual-range-specified.png" alt='Visual range is ["A", "F"]' />
        <figcaption>Visual range is ["A", "F"]</figcaption>
    </figure>
</div>

Users can change the visual range if [zooming and panning](/concepts/05%20Widgets/Chart/95%20Zooming%20and%20Panning '/Documentation/Guide/Widgets/Chart/Zooming_and_Panning/') are enabled. However, users cannot move the visual range outside the data range (to an area with no data). If they should be able to do this, specify the **whole range**. It sets new limits for the visual range.

Both ranges can be specified using the start and end values or length. Refer to the [visualRange](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/visualRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/') or [wholeRange](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/wholeRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/wholeRange/') option's description for more information.

To change the visual range programmatically, call the [Axis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Axis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Axis/') object's [visualRange(visualRange)](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Axis/3%20Methods/visualRange(visualRange).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Axis/Methods/#visualRangevisualRange') method. Calling the same method [without arguments](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Axis/3%20Methods/visualRange().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Axis/Methods/#visualRange') allows you to get the current visual range:

---
##### jQuery

    <!--JavaScript-->$(function() {
        var chart = $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                visualRange: [50, 70]
            }
        }).dxChart("instance");

        var argAxis = chart.getArgumentAxis();
        console.log(argAxis.visualRange()); // outputs { startValue: 50, endValue: 70 }
        argAxis.visualRange([40, 60]); // sets a new visual range
    });

---

If your framework supports two-way binding, bind the axis' **visualRange** to a component property that you will change afterwards:

---
##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            [(visualRange)]="chart_visualRange">
        </dxo-argument-axis>
    </dx-chart>
    <dx-button
        text="Change Visual Range"
        (onClick)="chart_visualRange = [40, 60]">
    </dx-button>

    <!--TypeScript-->
    import { DxChartModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        chart_visualRange = [50, 70];
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ... >
            <DxArgumentAxis
                v-model:visual-range="chart_visualRange"
            />
        </DxChart>
        <DxButton
            text="Change Visual Range"
            @click="setChartRange()"
        />
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis
    } from 'devextreme-vue/chart';
    import DxButton from 'devextreme-vue/button';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxButton
        },
        data() {
            return {
                chart_visualRange: []
            };
        },
        methods: {
            setChartRange() {
                this.chart_visualRange = [40, 60];
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ArgumentAxis
    } from 'devextreme-react/chart';
    import Button from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = { chart_visualRange: [] };
            this.setChartRange = () => this.setState({ chart_visualRange: [40, 60] });
        }

        render() {
            return (
                <React.Fragment>
                <Chart
                    onOptionChanged={this.handleChange}>
                    <ArgumentAxis
                        visualRange={this.state.chart_visualRange}
                    />
                </Chart>
                <Button
                    text="Change Visual Range"
                    onClick={this.setChartRange}
                />
                </React.Fragment>
            );
        }

        handleChange(e) {
            if(e.fullName === 'argumentAxis.visualRange') {
                const range = e.value;
                // ...
            }
        }
    }

    export default App;

---

An axis' visual range can behave differently when chart data is updated. See the **visualRangeUpdateMode** option for the [argument axis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/visualRangeUpdateMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#visualRangeUpdateMode') or [value axis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/visualRangeUpdateMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#visualRangeUpdateMode') for more information.

#####See Also#####
- [Scale Breaks](/concepts/05%20Widgets/Chart/20%20Axes/33%20Scale%20Breaks.md '/Documentation/Guide/Widgets/Chart/Axes/Scale_Breaks/')
- [Rotate and Invert the Chart](/concepts/05%20Widgets/Chart/90%20Rotate%20and%20Invert%20the%20Chart.md '/Documentation/Guide/Widgets/Chart/Rotate_and_Invert_the_Chart/')

<style>
    #figures {
        text-align: center;
    }
    #figures > figure {
        display: inline-block;
        font-family: 'OpenSansCondensedBold';
        color: #969696;
    }
</style>
