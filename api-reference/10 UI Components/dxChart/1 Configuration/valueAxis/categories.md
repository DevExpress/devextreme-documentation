---
id: dxChart.Options.valueAxis.categories
type: Array<Number, String, Date>
---
---
##### shortDescription
Specifies the order of categories on an axis of the *"discrete"* [type](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#type').

---
 

Values of the `string` type on discrete axes maintain the order of objects in the data source. Values of the `number` and `date` types are sorted in ascending order regardless of their order within the data source. Specify the **categories** array to set the required order of values. In the following example, the values are sorted alphabetically: 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $('#{widgetName}Container').dx{WidgetName}({
            // ...
            dataSource: dataSource,
            valueAxis: {
                categories: continentNames,
                valueField: 'continent'
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
        <dxo-value-axis
            [categories]="continentNames"
            valueField="continent">
        </dxo-value-axis>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    #include angular-component-decorator
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
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... 
            :data-source="dataSource">
            <DxValueAxis 
                :categories="continentNames"
                value-field="continent" 
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName}, {
        DxValueAxis
    } from 'devextreme-vue/{widget-name}'; 

    export default {
        components: {
            Dx{WidgetName},
            DxValueAxis
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
        ValueAxis
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
                    <ValueAxis
                        categories={continentNames}
                        valueField="continent"
                    />
                </{WidgetName}>
            );
        }
    }

    export default App;     

---
