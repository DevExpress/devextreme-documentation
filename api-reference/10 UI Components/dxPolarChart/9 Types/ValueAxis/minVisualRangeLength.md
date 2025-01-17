---
notUsedInTheme: 
uid: viz/polar_chart:ValueAxis.minVisualRangeLength
type: Number | Object | Enums.TimeInterval | undefined
default: undefined
---
---
##### shortDescription
Specifies the minimum length of the [visual range](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/visualRange/').

---
<!--
Assign a number to this property if the visual range is set on a numeric axis. If the axis displays date-time values, assign one of the accepted string values or an object to this property. The object should contain one or several fields described in this section, for example:

---
##### jQuery

    &lt;!-- tab: index.js --&gt;
    $(function() {
        $("#polarChart").dxPolarChart({
            // ...
            valueAxis: {
                // ...
                minVisualRangeLength: { weeks: 2 }
            }
        });
    });

##### Angular

    &lt;!-- tab: app.component.html --&gt;
    &lt;dx-polar-chart ... &gt;
        &lt;dxi-value-axis ... &gt;
            &lt;dxo-min-visual-range-length [weeks]="2"&gt;&lt;/dxo-min-visual-range-length&gt;
        &lt;/dxi-value-axis&gt;
    &lt;/dx-polar-chart&gt;

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

    import { DxPolarChartModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxPolarChartModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }


##### Vue

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;DxPolarChart ... &gt;
            &lt;DxValueAxis ... &gt;
                &lt;DxMinVisualRangeLength :weeks="2" /&gt;
            &lt;/DxValueAxis&gt;
        &lt;/DxPolarChart&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import DxPolarChart, {
        DxValueAxis,
        DxMinVisualRangeLength
    } from 'devextreme-vue/polar-chart';

    export default {
        components: {
            DxPolarChart,
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
    import PolarChart, {
        ValueAxis,
        MinVisualRangeLength
    } from 'devextreme-react/polar-chart';

    class App extends React.Component {
        render() {
            return (
                &lt;PolarChart ... &gt;
                    &lt;ValueAxis ... &gt;
                        &lt;MinVisualRangeLength weeks={2} /&gt;
                    &lt;/ValueAxis&gt;
                &lt;/PolarChart&gt;
            );
        }
    }
    export default App;

---


#####See Also#####
- [wholeRange](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/valueAxis/wholeRange '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/wholeRange/')
- [visualRangeUpdateMode](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/valueAxis/visualRangeUpdateMode '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/#visualRangeUpdateMode')

-->