---
id: dxChart.Options.argumentAxis.categories
type: Array<Number, String, Date>
---
---
##### shortDescription
Specifies the order of categories on an axis of the *"discrete"* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type').

---
By default, arguments of the `number` and `date` types on discrete axes are sorted in ascending order regardless of the order they have in the data source.

Arguments of the `string` type on discrete axes keep the order of objects in the data source. For example, objects in the following data source are sorted by decreasing **area** value. Set *"continent"* as the [argumentField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#argumentField) value to keep the order of these objects after they are passed from the data source:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            dataSource: continentsByArea,
            argumentAxis: {
                categories: continentNames,
                argumentField: continent
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
            'Asia', 
            'Africa', 
            'North America', 
            'South America',
            'Antarctica',
            'Europe',
            'Australia'
        ];
    });

##### Angular

    <!--HTML--><dx-chart ...
        [dataSource]="continentsByArea">
        <dxo-argument-axis
            [categories]="continentNames"
            [argumentField]="continent>
        </dxo-argument-axis>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        continentsByArea = [
            { continent: 'Asia', area: 43820000 },
            { continent: 'Africa', area: 30370000 },
            { continent: 'North America', area: 24490000 },
            { continent: 'South America', area: 17840000 },
            { continent: 'Antarctica', area: 13720000 },
            { continent: 'Europe', area: 10180000 },
            { continent: 'Australia', area: 9008500 }
        ];

        continentNames = [
            'Asia', 
            'Africa', 
            'North America', 
            'South America',
            'Antarctica',
            'Europe',
            'Australia'
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChart ... 
            :data-source="continentsByArea">
            <DxArgumentAxis 
                :categories=""
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
                    'Asia', 
                    'Africa', 
                    'North America', 
                    'South America',
                    'Antarctica',
                    'Europe',
                    'Australia'
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
        'Asia', 
        'Africa', 
        'North America', 
        'South America',
        'Antarctica',
        'Europe',
        'Australia'
    ];

    class App extends React.Component {
        render() {
            return (
                <Chart ... 
                    dataSource={continentsByArea}>
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

To sort the arguments of the `string` type, for example, alphabetically, you need to assign an array of properly sorted arguments to the **categories** option.

    <!--JavaScript-->
    const continentNames = [
        'Africa', 
        'Antarctica', 
        'Asia', 
        'Australia',
        'Europe',
        'North America',
        'South America'
    ];


[note]Arguments missing from the **categories** array will be added to its end automatically when the data type is `string`. When the type is `date` or `number`, the newly added arguments are sorted along with the initially loaded arguments.
