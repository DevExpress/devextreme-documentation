---
id: dxPolarChart.Options.argumentAxis.categories
type: Array<Number, String, Date>
---
---
##### shortDescription
Specifies the order of categories on an axis of the *"discrete"* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#type').

---
Arguments of the `string` type on discrete axes keep the order of objects in the data source. Assign an array of properly sorted arguments to the **categories** option to sort the arguments, for example, alphabetically: 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $('#polarChartContainer').dxPolarChart({
            // ...
            dataSource: continentsByArea,
            argumentAxis: {
                categories: continentNames,
                argumentField: 'continent'
            }
        });

        const continentsByArea = [
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

    <!--HTML-->
    <dx-polar-chart ...
        [dataSource]="dataSource">
        <dxo-argument-axis
            [categories]="continentNames"
            [argumentField]="continent">
        </dxo-argument-axis>
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
        <DxPolarChart ... 
            :data-source="continentsByArea">
            <DxArgumentAxis 
                :categories="continentNames"
                argument-field="continent" 
            />
        </DxPolarChart>
    </template>

    <script>
    import DxPolarChart, {
        DxArgumentAxis
    } from 'devextreme-vue/polar-chart'; 

    export default {
        components: {
            DxPolarChart,
            DxArgumentAxis
        },
        data() {
            return {
                continentsByArea: [
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

    import PolarChart, {
        ArgumentAxis
    } from 'devextreme-react/polar-chart';
    
    const continentsByArea = [
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
                <PolarChart ... 
                    dataSource={continentsByArea}>
                    <ArgumentAxis
                        categories={continentNames}
                        argumentField="continent"
                    />
                </PolarChart>
            );
        }
    }

    export default App;     

---

Arguments of the `number` and `date` types on discrete axes are sorted in ascending order regardless of the order they have in the data source. Do not specify the **categories** option for these argument types.

When you add arguments of the `string` type to the **categories** array at runtime, these arguments will be added to its end automatically. When the argument type is `number` or `date`, the newly added arguments are sorted along with the initially loaded arguments.