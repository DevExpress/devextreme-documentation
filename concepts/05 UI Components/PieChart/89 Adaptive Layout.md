With the ever-growing variety of platforms, today's web sites and applications cannot stay competitive without being adaptive. Supporting this modern standard, the PieChart UI component possesses an adaptive layout. This enables the PieChart to hide its accessory elements if the container is not large enough to fit them. To configure the adaptive layout, use the [adaptiveLayout](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/adaptiveLayout '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/adaptiveLayout/') object. Set its **height** and **width** fields to specify the minimum container size at which the layout retains all its elements.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            adaptiveLayout: {
                height: 300,
                width: 400
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxo-adaptive-layout [height]="300" [width]="400"></dxo-adaptive-layout>
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
            <DxAdaptiveLayout
                :height="300"
                :width="400"
            />
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxAdaptiveLayout
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxAdaptiveLayout
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        AdaptiveLayout
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ...>
                    <AdaptiveLayout
                        height={300}
                        width={400}
                    />
                </PieChart>
            );
        }
    }

---

#include btn-open-codepen with {
    href: "https://codepen.io/vladaskorokhodova/pen/ZEwMXXV"
}

[note]

The layout does not automatically adapt to changes made in the UI component's container at runtime. Therefore, if you enable a user to resize the container, call the [render()](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/render().md '/Documentation/ApiReference/UI_Components/dxPieChart/Methods/#render') method after each resizing to render the PieChart in the new size.

---
##### jQuery

    <!--JavaScript-->$("#pieChartContainer").dxPieChart("render");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
        renderPieChart () {
            this.pieChart.instance.render();
        };
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
            ref="pieChart">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        },
        methods: {
            renderPieChart() {
                this.$refs.pieChart.instance.render();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart from 'devextreme-react/pie-chart';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.pieChartRef = React.createRef();

            this.renderPieChart = () => {
                this.pieChart.render();
            };
        }

        render() {
            return (
                <PieChart ...
                    ref={this.pieChartRef}>
                </PieChart>
            );
        }

        get pieChart() {
            return this.pieChartRef.current.instance();
        }
    }

---

[/note]

#####See Also#####
- [PieChart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Pie)
