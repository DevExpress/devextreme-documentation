---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.label.displayFormat
type: String | undefined
default: undefined
---
---
##### shortDescription
Specifies the label's text.

---
This property is ignored if labels are [hidden](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label/visible.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/series/label/#visible''). 

Use the parameters of the **label.customizeLabel** function as placeholders in the **displayFormat** property value.

The example below illustrates how to customize label text for all series and individual series:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#chartContainer").dxPolarChart({
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
    <dx-polar-chart ... >
        <dxi-polar-chart-series valueField="y1564" name="15-64 years"></dxi-polar-chart-series>
        <dxi-polar-chart-series valueField="y014" name="0-14 years"></dxi-polar-chart-series>
        <dxi-polar-chart-series valueField="y65" name="65 years and older">
            <dxo-polar-chart-label displayformat="<u>65+ years</u>: {valueText}">
            </dxo-polar-chart-label>
        </dxi-polar-chart-series>
        <dxo-polar-chart-common-series-settings ... >
            <dxo-polar-chart-label 
                format="thousands"
                [visible]="true"
                displayFormat="{seriesName}: {valueText}">
            </dxo-polar-chart-label>
        </dxo-polar-chart-common-series-settings>
    </dx-polar-chart>

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

    <!-- tab: App.vue -->
    <template>
        <DxPolarChart ... >
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
        </DxPolarChart>
    </template>

    <script>
    import DxPolarChart, {
        DxSeries,
        DxLabel,
        DxCommonSeriesSettings
    } from 'devextreme-vue/polar-chart';

    export default {
        components: {
            DxPolarChart,
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

    import PolarChart, {
        Series,
        Label,
        CommonSeriesSettings
    } from 'devextreme-react/polar-chart';

    export default function App() {
        return (
            <PolarChart ... >
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
            </PolarChart>
        );
    }

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().PolarChart()
        .CommonSeriesSettings(s => s
            .Label(label => label
                .Format(Format.Thousands)
                .DisplayFormat("{seriesName}: {valueText}")
                .Visible(true)                    
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
    @(Html.DevExtreme().PolarChart()
        .CommonSeriesSettings(s => s
            .Label(label => label
                .Format(Format.Thousands)
                .DisplayFormat("{seriesName}: {valueText}")
                .Visible(true)                    
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
