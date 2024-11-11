---
id: dxPieChartSeriesTypes.CommonPieChartSeries.label.displayFormat
type: String | undefined
default: undefined
---
---
##### shortDescription
Specifies the label's text.

---
This property is ignored if labels are [hidden](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/visible.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#visible''). 

Use the parameters of the **label.customizeLabel** function as placeholders in the **displayFormat** property value.

The example below illustrates how to customize label text for all series and individual series:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#chartContainer").dxPieChart({
        // ...
        commonSeriesSettings: {
            label: {
                visible: true,
                displayFormat: "{series}: {value}",
            }
        },
        series: [
            { valueField: 'y1564', name: '15-64 years' },
            { valueField: 'y014', name: '0-14 years' },
            { valueField: 'y65', name: '65 years and older', 
                label: { 
                    displayFormat: "<u>65+ years</u>: {value}",
                }, 
            },
        ],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pie-chart ... >
        <dxi-series valueField="y1564" name="15-64 years"></dxi-series>
        <dxi-series valueField="y014" name="0-14 years"></dxi-series>
        <dxi-series valueField="y65" name="65 years and older">
            <dxo-label displayformat="<u>65+ years</u>: {value}">
            </dxo-label>
        </dxi-series>
        <dxo-common-series-settings ... >
            <dxo-label 
                [visible]="true"
                displayFormat="{series}: {value}">
            </dxo-label>
        </dxo-common-series-settings>
    </dx-pie-chart>

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

    import { DxPieChartModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxPieChartModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPieChart ... >
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
                <DxLabel display-format="<u>65+ years</u>: {value}" />
            </DxSeries>
            <DxCommonSeriesSettings ... >
                <DxLabel :visible="true" display-format="{series}: {value}" />
            </DxCommonSeriesSettings>
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxSeries,
        DxLabel,
        DxCommonSeriesSettings
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
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

    import PieChart, {
        Series,
        Label,
        CommonSeriesSettings
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ... >
                    <Series valueField="y1564" name="15-64 years"></Series>
                    <Series valueField="y014" name="0-14 years"></Series>
                    <Series valueField="y65" name="65 years and older">
                        <Label displayFormat="<u>65+ years</u>: {value}" >
                        </Label>
                    </Series>                
                    <CommonSeriesSettings ... >
                        <Label 
                            visible={true}
                            displayFormat="{series}: {value}"
                            >
                        </Label>
                    </CommonSeriesSettings>
                </PieChart>
            );
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().PieChart()
        .CommonSeriesSettings(s => s
            .Label(label => label
                .DisplayFormat("{series}: {value}")
                .Visible(true)                    
                )
            )
        )
        .Series(s => {
            s.Add().ValueField("y1564").Name("15-64 years");
            s.Add().ValueField("y014").Name("0-14 years");
            s.Add().ValueField("y65").Name("65 years and older").Label(label => label
                .DisplayFormat("<u>65+ years</u>: {value}")
            );
        })
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().PieChart()
        .CommonSeriesSettings(s => s
            .Label(label => label
                .DisplayFormat("{series}: {value}")
                .Visible(true)                    
                )
            )
        )
        .Series(s => {
            s.Add().ValueField("y1564").Name("15-64 years");
            s.Add().ValueField("y014").Name("0-14 years");
            s.Add().ValueField("y65").Name("65 years and older").Label(label => label
                .DisplayFormat("<u>65+ years</u>: {value}")
            );
        })
        // ...
    )

---
