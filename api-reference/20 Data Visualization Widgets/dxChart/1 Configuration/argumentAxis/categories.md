---
id: dxChart.Options.argumentAxis.categories
type: Array<Number, String, Date>
---
---
##### shortDescription
Specifies the order of categories on an axis of the *"discrete"* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type').

---
Arguments of the `string` type on discrete axes keep the order of objects in the data source. Assign an array of properly sorted arguments to the **categories** option to sort the arguments, for example, alphabetically: 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $('#chartContainer').dxChart({
            // ...
            dataSource: dataSource,
            argumentAxis: {
                categories: continentNames,
                argumentField: 'continent'
            }
        });

        const dataSource = [
            { continent: 'Asia', area: 43820000 },
            { continent: 'Africa', area: 30370000 },
            { continent: 'North America', area: 24490000 },
            { continent: 'South America', area: 17840000 },
            { continent: 'Antarctica', area: 13720000 },
            { continent: 'Europe', area: 10180000 },
            { continent: 'Australia', area: 9008500 }
        ];

        const continentNames = [
            'Africa', 
            'Antarctica', 
            'Asia', 
            'Australia',
            'Europe',
            'North America',
            'South America'
        ];
    });

##### Angular

    <!--HTML--><dx-chart ...
        [dataSource]="dataSource">
        <dxo-argument-axis
            [categories]="continentNames"
            [argumentField]="continent">
        </dxo-argument-axis>
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
        dataSource = [
            { continent: 'Asia', area: 43820000 },
            { continent: 'Africa', area: 30370000 },
            { continent: 'North America', area: 24490000 },
            { continent: 'South America', area: 17840000 },
            { continent: 'Antarctica', area: 13720000 },
            { continent: 'Europe', area: 10180000 },
            { continent: 'Australia', area: 9008500 }
        ];

        continentNames = [
            'Africa', 
            'Antarctica', 
            'Asia', 
            'Australia',
            'Europe',
            'North America',
            'South America'
        ];
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
        <DxChart ... 
            :data-source="dataSource">
            <DxArgumentAxis 
                :categories="continentNames"
                argument-field="continent" 
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
        },
        data() {
            return {
                dataSource: [
                    { continent: 'Asia', area: 43820000 },
                    { continent: 'Africa', area: 30370000 },
                    { continent: 'North America', area: 24490000 },
                    { continent: 'South America', area: 17840000 },
                    { continent: 'Antarctica', area: 13720000 },
                    { continent: 'Europe', area: 10180000 },
                    { continent: 'Australia', area: 9008500 }
                ];
                
                continentNames = [
                    'Africa', 
                    'Antarctica', 
                    'Asia', 
                    'Australia',
                    'Europe',
                    'North America',
                    'South America'
                ];
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import Chart, {
        ArgumentAxis
    } from 'devextreme-react/chart';
    
    const dataSource = [
        { continent: 'Asia', area: 43820000 },
        { continent: 'Africa', area: 30370000 },
        { continent: 'North America', area: 24490000 },
        { continent: 'South America', area: 17840000 },
        { continent: 'Antarctica', area: 13720000 },
        { continent: 'Europe', area: 10180000 },
        { continent: 'Australia', area: 9008500 }
    ];

    const continentNames = [
        'Africa', 
        'Antarctica', 
        'Asia', 
        'Australia',
        'Europe',
        'North America',
        'South America'
    ];

    class App extends React.Component {
        render() {
            return (
                <Chart ... 
                    dataSource={dataSource}>
                    <ArgumentAxis
                        categories={continentNames}
                        argumentField="continent"
                    />
                </Chart>
            );
        }
    }

    export default App;     

---

Arguments of the `number` and `date` types on discrete axes are sorted in ascending order regardless of the order they have in the data source. Do not specify the **categories** option for these argument types.

When you add arguments of the `string` type to the **categories** array at runtime, these arguments will be added to its end automatically. When the argument type is `number` or `date`, the newly added arguments are sorted along with the initially loaded arguments.