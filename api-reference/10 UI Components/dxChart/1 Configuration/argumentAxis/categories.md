---
id: dxChart.Options.argumentAxis.categories
type: Array<Number, String, Date>
---
---
##### shortDescription
Specifies the order of categories on an axis of the *"discrete"* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/argumentAxis/#type').

---
Arguments of the `string` type on discrete axes maintain the order of objects in the data source. Arguments of the `number` and `date` types are sorted in ascending order regardless of their order within the data source. Specify the **categories** array to set the required order of arguments. In the following example, arguments are sorted alphabetically: 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $('#{widgetName}Container').dx{WidgetName}({
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

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [dataSource]="dataSource">
        <dxo-argument-axis
            [categories]="continentNames"
            argumentField="continent">
        </dxo-argument-axis>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
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

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... 
            :data-source="dataSource">
            <DxArgumentAxis 
                :categories="continentNames"
                argument-field="continent" 
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName}, {
        DxArgumentAxis
    } from 'devextreme-vue/{widget-name}'; 

    export default {
        components: {
            Dx{WidgetName},
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
                ],
                
                continentNames: [
                    'Africa', 
                    'Antarctica', 
                    'Asia', 
                    'Australia',
                    'Europe',
                    'North America',
                    'South America'
                ]
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import {WidgetName}, {
        ArgumentAxis
    } from 'devextreme-react/{widget-name}';
    
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
                <{WidgetName} ... 
                    dataSource={dataSource}>
                    <ArgumentAxis
                        categories={continentNames}
                        argumentField="continent"
                    />
                </{WidgetName}>
            );
        }
    }

    export default App;     

---
