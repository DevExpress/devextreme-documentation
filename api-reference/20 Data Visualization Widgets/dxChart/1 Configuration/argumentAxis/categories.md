---
id: dxChart.Options.argumentAxis.categories
type: Array<Number, String, Date>
---
---
##### shortDescription
Specifies the order of categories on an axis of the *"discrete"* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type').

---
By default, arguments of the `number` and `date` types on discrete axes are sorted in ascending order regardless of the order they had in the data source.

Arguments of the `string` type on discrete axes keep the order of objects in the data source. For example, objects in the following data source are sorted by decreasing **area** value. Set *"continent"* as the [argumentField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#argumentField) value to keep the order of these objects after they are passed from the data source:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                categories: [
                    { continent: 'Asia', area: 43820000 },
                    { continent: 'Africa', area: 30370000 },
                    { continent: 'North America', area: 24490000 },
                    { continent: 'South America', area: 17840000 },
                    { continent: 'Antarctica', area: 13720000 },
                    { continent: 'Europe', area: 10180000 },
                    { continent: 'Australia', area: 9008500 }
                ];
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            [categories]="continentsByArea"
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
        <DxChart ... >
            <DxArgumentAxis 
                :categories="continentsByArea"
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

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis
                        categories={continentsByArea}
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
    var continentsByArea = [
        { continent: 'Africa', area: 30370000 },
        { continent: 'Antarctica', area: 13720000 },
        { continent: 'Asia', area: 43820000 },
        { continent: 'Australia', area: 9008500 },
        { continent: 'Europe', area: 10180000 },
        { continent: 'North America', area: 24490000 },
        { continent: 'South America', area: 17840000 },
    ];


[note]Arguments missing from the **categories** array will be added to its end automatically when the data type is `string`. When the type is `date` or `number`, the newly added arguments are sorted along with the initially loaded arguments.
