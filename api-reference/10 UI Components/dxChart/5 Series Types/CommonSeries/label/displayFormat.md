---
id: dxChartSeriesTypes.CommonSeries.label.displayFormat
type: String | undefined
default: undefined
---
---
##### shortDescription
Specifies the label's text.

---

This property is ignored if labels are [hidden](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label/visible.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/label/#visible'). 

Use the parameters of the **label.customizeText** function as placeholders in the **displayFormat** property value.

The example below illustrates how to customize label text for all series and individual series:

![DevExtreme Charts - Format label text](/images/ChartJS/label-display-format.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#chartContainer").dxChart({
        // ...
        commonSeriesSettings: {
            type: 'line',
            label: {
                format: 'thousands',
                visible: true,
                displayFormat: "{seriesName}: {valueText}",
            }
        },
        series: [
            { valueField: 'y1564', name: '15-64 years' },
            { valueField: 'y014', name: '0-14 years' },
            { valueField: 'y65', name: '65 years and older', 
                label: { 
                    displayFormat: "<u>65+ years</u>: {valueText}",
                }, 
            },
        ],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxi-series valueField="y1564" name="15-64 years"></dxi-series>
        <dxi-series valueField="y014" name="0-14 years"></dxi-series>
        <dxi-series valueField="y65" name="65 years and older">
            <dxo-label displayformat="<u>65+ years</u>: {valueText}">
            </dxo-label>
        </dxi-series>
        <dxo-common-series-settings ... >
            <dxo-label 
                format="thousands"
                [visible]="true"
                displayFormat="{seriesName}: {valueText}">
            </dxo-label>
        </dxo-common-series-settings>
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

    <!-- tab: App.vue -->
    <template>
        <DxChart ... >
            <DxSeries
                value-field="y1564"
                name="15-64 years"
            />
            <DxSeries
                value-field="y014"
                name="0-14 years"
            />
            <DxSeries
                value-field="y65"
                name="65 years and older">
                <DxLabel display-format="<u>65+ years</u>: {valueText}" />
            </DxSeries>
            <DxCommonSeriesSettings ... >
                <DxLabel :visible="true" format="thousands" display-format="{seriesName}: {valueText}" />
            </DxCommonSeriesSettings>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries,
        DxLabel,
        DxCommonSeriesSettings
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxLabel,
            DxCommonSeriesSettings
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import Chart, {
        Series,
        Label,
        CommonSeriesSettings
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series valueField="y1564" name="15-64 years"></Series>
                    <Series valueField="y014" name="0-14 years"></Series>
                    <Series valueField="y65" name="65 years and older">
                        <Label displayFormat="<u>65+ years</u>: {valueText}" >
                        </Label>
                    </Series>                
                    <CommonSeriesSettings ... >
                        <Label 
                            format="thousands" 
                            visible={true}
                            displayFormat="{seriesName}: {valueText}"
                            >
                        </Label>
                    </CommonSeriesSettings>
                </Chart>
            );
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Chart()
        .CommonSeriesSettings(s => s
            .Label(label => label
                .Format(Format.Thousands)
                .DisplayFormat("{seriesName}: {valueText}")
                .Visible(true)                    
                )
            )
        )
        .Series(s => {
            s.Add().ValueField("y1564").Name("15-64 years");
            s.Add().ValueField("y014").Name("0-14 years");
            s.Add().ValueField("y65").Name("65 years and older").Label(label => label
                .DisplayFormat("<u>65+ years</u>: {valueText}")
            );
        })
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Chart()
        .CommonSeriesSettings(s => s
            .Label(label => label
                .Format(Format.Thousands)
                .DisplayFormat("{seriesName}: {valueText}")
                .Visible(true)                    
                )
            )
        )
        .Series(s => {
            s.Add().ValueField("y1564").Name("15-64 years");
            s.Add().ValueField("y014").Name("0-14 years");
            s.Add().ValueField("y65").Name("65 years and older").Label(label => label
                .DisplayFormat("<u>65+ years</u>: {valueText}")
            );
        })
        // ...
    )

---
