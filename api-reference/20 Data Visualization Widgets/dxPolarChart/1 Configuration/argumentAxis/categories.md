---
id: dxPolarChart.Options.argumentAxis.categories
type: Array<Number, String, Date>
---
---
##### shortDescription
Specifies the order in which arguments (categories) are arranged on the discrete argument axis.

---
Arguments of the `number` and `date` types on discrete axes are sorted in ascending order regardless of the order they have in the data source.

By default, arguments of the `string` type on discrete axes keep the order of objects in the data source. For example, objects in the following data source are sorted by decreasing **area** value. The resulting arguments will be sorted the same way:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $('#polarChartContainer').dxPolarChart({
            // ...
            dataSource: continentsByArea,
            argumentAxis: {
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
    });

##### Angular

    <!--HTML--><dx-polar-chart ...
        [dataSource]="continentsByArea">
        <dxo-argument-axis
            [argumentField]="continent">
        </dxo-argument-axis>
    </dx-polar-chart>

    <!--TypeScript-->
    import { DxPolarChartModule } from "devextreme-angular";
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
            DxPolarChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPolarChart ... 
            :data-source="continentsByArea">
            <DxArgumentAxis 
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

    class App extends React.Component {
        render() {
            return (
                <PolarChart ... 
                    dataSource={continentsByArea}>
                    <ArgumentAxis
                        argumentField="continent"
                    />
                </PolarChart>
            );
        }
    }

    export default App;     

---

To sort the arguments, for example, alphabetically, you need to assign an array of properly sorted arguments to the **categories** option: 

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

    <!--HTML--><dx-polar-chart ...
        [dataSource]="continentsByArea">
        <dxo-argument-axis
            [categories]="continentNames"
            [argumentField]="continent">
        </dxo-argument-axis>
    </dx-polar-chart>

    <!--TypeScript-->
    import { DxPolarChartModule } from "devextreme-angular";
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
            'Africa', 
            'Antarctica', 
            'Asia', 
            'Australia',
            'Europe',
            'North America',
            'South America'
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxPolarChartModule
        ],
        // ...
    })

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

[note]Arguments missing from the **categories** array will be added to its end automatically when the argument type is `string`. When the type is `date` or `number`, the newly added arguments are sorted along with the initially loaded arguments.
