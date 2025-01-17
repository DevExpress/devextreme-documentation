---
notUsedInTheme: 
uid: viz/chart:ValueAxis.minVisualRangeLength
type: Number | Object | Enums.TimeInterval | undefined
default: undefined
---
---
##### shortDescription
Specifies the minimum length of the [visual range](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/visualRange/').

---
<!--
If the visual range is set on a numeric axis, assign a number to this property. If the axis displays date-time values, assign one of the accepted string values or an object to this property. The object should contain one or several fields described in this section, for example:

---
##### jQuery

    &lt;!-- tab: index.js --&gt;
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

    &lt;!-- tab: app.component.html --&gt;
    &lt;dx-chart ... &gt;
        &lt;dxi-value-axis ... &gt;
            &lt;dxo-min-visual-range-length [weeks]="2"&gt;&lt;/dxo-min-visual-range-length&gt;
        &lt;/dxi-value-axis&gt;
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
            &lt;DxValueAxis ... &gt;
                &lt;DxMinVisualRangeLength :weeks="2" /&gt;
            &lt;/DxValueAxis&gt;
        &lt;/DxChart&gt;
    &lt;/template&gt;

    &lt;script&gt;
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
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';
    import Chart, {
        ValueAxis,
        MinVisualRangeLength
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                &lt;Chart ... &gt;
                    &lt;ValueAxis ... &gt;
                        &lt;MinVisualRangeLength weeks={2} /&gt;
                    &lt;/ValueAxis&gt;
                &lt;/Chart&gt;
            );
        }
    }
    export default App;

---


#####See Also#####
- [Visual and Whole Ranges](/concepts/05%20UI%20Components/Chart/20%20Axes/03%20Visual%20and%20Whole%20Ranges.md '/Documentation/Guide/UI_Components/Chart/Axes/Visual_and_Whole_Ranges/')
- [visualRangeUpdateMode](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/visualRangeUpdateMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#visualRangeUpdateMode')
- [zoomAndPan](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/zoomAndPan '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/')

-->