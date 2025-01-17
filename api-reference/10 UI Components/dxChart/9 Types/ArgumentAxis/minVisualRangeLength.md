---
notUsedInTheme: 
uid: viz/chart:ArgumentAxis.minVisualRangeLength
type: Number | Object | Enums.TimeInterval | undefined
default: undefined
---
---
##### shortDescription
Specifies the minimum length of the [visual range](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/visualRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/visualRange/').

---
<!--
If the visual range is set on a numeric axis, assign a number to this property. If the axis displays date-time values, assign one of the accepted string values or an object to this property. The object should contain one or several fields described in this section, for example:

---
##### jQuery

    &lt;!-- tab: index.js --&gt;
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                // ...
                minVisualRangeLength: { weeks: 2 }
            }
        });
    });

##### Angular

    &lt;!-- tab: app.component.html --&gt;
    &lt;dx-chart ... &gt;
        &lt;dxo-argument-axis ... &gt;
            &lt;dxo-min-visual-range-length [weeks]="2"&gt;&lt;/dxo-min-visual-range-length&gt;
        &lt;/dxo-argument-axis&gt;
    &lt;/dx-chart&gt;

    &lt;!-- tab: app.component.ts --&gt;
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }

    &lt;!-- tab: app.module.ts --&gt;
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

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;DxChart ... &gt;
            &lt;DxArgumentAxis ... &gt;
                &lt;DxMinVisualRangeLength :weeks="2" /&gt;
            &lt;/DxArgumentAxis&gt;
        &lt;/DxChart&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import DxChart, {
        DxArgumentAxis,
        DxMinVisualRangeLength
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxMinVisualRangeLength
        },
        data() {
            return {
                // ...
            }
        },
    }
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';
    import Chart, {
        ArgumentAxis,
        MinVisualRangeLength
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                &lt;Chart ... &gt;
                    &lt;ArgumentAxis ... &gt;
                        &lt;MinVisualRangeLength weeks={2} /&gt;
                    &lt;/ArgumentAxis&gt;
                &lt;/Chart&gt;
            );
        }
    }
    export default App;

---


#####See Also#####
- [Visual and Whole Ranges](/concepts/05%20UI%20Components/Chart/20%20Axes/03%20Visual%20and%20Whole%20Ranges.md '/Documentation/Guide/UI_Components/Chart/Axes/Visual_and_Whole_Ranges/')
- [visualRangeUpdateMode](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/visualRangeUpdateMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#visualRangeUpdateMode')
- [zoomAndPan](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/zoomAndPan '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/')

-->