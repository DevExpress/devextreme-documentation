---
default: undefined
inherits: ..\..\..\..\VizTimeInterval\VizTimeInterval.md
---
---
##### notUsedInTheme

##### shortDescription
Specifies the minimum length of the [visual range](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/visualRange/').

---
If the visual range is set on a numeric axis, assign a number to this option. If the axis displays date-time values, assign one of the accepted string values or an object to this option. The object should contain one or several fields described in this section, for example:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: {
                // ...
                minVisualRangeLength: { weeks: 2 }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxi-value-axis ... >
            <dxo-min-visual-range-length [weeks]="2"></dxo-min-visual-range-length>
        </dxi-value-axis>
    </dx-chart>

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

    import { DxChartModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxChartModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }


##### Vue

    <!-- tab: DxComponent.vue -->
    <template>
        <dx-chart ... >
            <dx-value-axis ... >
                <dx-min-visual-range-length :weeks="2" />
            </dx-value-axis>
        </dx-chart>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxChart, {
        DxValueAxis,
        DxMinVisualRangeLength
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxValueAxis,
            DxMinVisualRangeLength
        },
        data() {
            return {
                // ...
            }
        },
    }
    </script>

    <!-- tab: App.vue -->
    <template>
        <dx-component />
    </template>
    <script>
    import DxComponent from './components/DxComponent';

    export default {
        components: {
            DxComponent
        }
    }
    </script>

##### React

    <!-- tab: DxComponent.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import Chart, {
        ValueAxis,
        MinVisualRangeLength
    } from 'devextreme-react/chart';

    class DxComponent extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ValueAxis ... >
                        <MinVisualRangeLength weeks={2} />
                    </ValueAxis>
                </Chart>
            );
        }
    }
    export default DxComponent;

    <!-- tab: App.js -->
    import React, { Component } from 'react';
    import './App.css';
    import DxComponent from './DxComponent';

    class App extends Component {
        render() {
            return (
                <div>
                    <DxComponent />
                </div>
            );
        }
    }
    export default App;

---

When you use the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option via the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.

#####See Also#####
- [Visual and Whole Ranges](/concepts/05%20Widgets/Chart/20%20Axes/03%20Visual%20and%20Whole%20Ranges.md '/Documentation/Guide/Widgets/Chart/Axes/Visual_and_Whole_Ranges/')
- [visualRangeUpdateMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/visualRangeUpdateMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#visualRangeUpdateMode')
- [zoomAndPan](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/')