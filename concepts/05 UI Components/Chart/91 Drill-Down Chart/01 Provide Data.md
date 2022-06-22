Although a drill-down chart visualizes hierarchical data, the data source should be an array of plain objects, for example:

    <!--JavaScript-->
    var population = [
        { arg: "North America", val: 493603615, parentID: "" },
        { arg: "South America", val: 331126555, parentID: "" },

        { arg: "United States", val: 325310275, parentID: "North America" },
        { arg: "Mexico", val: 121005815, parentID: "North America" },
        { arg: "Canada", val: 36048521, parentID: "North America" },
        { arg: "Cuba", val: 11239004, parentID: "North America" },

        { arg: "Brazil", val: 205737996, parentID: "South America" },
        { arg: "Colombia", val: 48400388, parentID: "South America" },
        { arg: "Venezuela", val: 30761000, parentID: "South America" },
        { arg: "Peru", val: 28220764, parentID: "South America" }
    ];

The main idea is to filter the data source by the `parentID` for different drill-down views. You can create a function that does the filtering:

---
##### jQuery

    <!-- tab: index.js -->
    var population = [
        // ...
    ];

    function filterData(name) {
        return population.filter(function (item) {
            return item.parentID === name;
        });
    }

    $(function() {
        $("#chartContainer").dxChart({
            dataSource: filterData(""),
            series: [{
                argumentField: "arg",
                valueField: "val",
                type: "bar"
            }]
        });
    });

##### Angular

    <!-- tab: app.service.ts -->
    import { Injectable } from "@angular/core";

    export class DataItem {
        arg: string;
        val: number;
        parentID: string;
    }

    let population: DataItem[] = [
        // ...
    ];

    @Injectable()
    export class Service {
        filterData(name): DataItem[] {
            return population.filter(function (item) {
                return item.parentID === name;
            });
        }
    }

    <!-- tab: app.component.html -->
    <dx-chart
        [dataSource]="dataSource">
        <dxi-series argumentField="arg" valueField="val" type="bar"></dxi-series>
    </dx-chart>

    <!-- tab: app.component.ts -->
    import { DxChartModule } from "devextreme-angular";
    import { Service, DataItem } from "./app.service";
    @Component({
        // ...
        providers: [Service]
    })
    export class AppComponent {
        dataSource: DataItem[];
        service: Service;
        constructor(service: Service) {
            this.dataSource = service.filterData("");
            this.service = service;
        }
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
            :data-source="dataSource">
            <DxSeries
                argument-field="arg"
                value-field="val"
                type="bar"
            />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries
    } from 'devextreme-vue/chart';

    const population = [
        // ...
    ];

    export default {
        components: {
            DxChart,
            DxSeries
        },
        data() {
            return {
                dataSource: this.filterData('')
            };
        },
        methods: {
            filterData(name) {
                return population.filter(item => item.parentID === name);
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series
    } from 'devextreme-react/chart';

    const population = [
        // ...
    ];

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = { dataSource: this.filterData('') };
        }

        render() {
            return (
                <Chart ...
                    dataSource={this.state.dataSource}>
                    <Series
                        argumentField="arg"
                        valueField="val"
                        type="bar"
                    />
                </Chart>
            );
        }

        filterData(name) {
            return population.filter(item => item.parentID === name);
        }
    }

---

... or employ the DevExtreme [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object that provides an [API for filtering](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter'):

---
##### jQuery

    <!-- tab: index.js -->
    var population = [
        // ...
    ];

    var dxDataSource = new DevExpress.data.DataSource({
        store: {
            type: "array",
            data: population
        },
        filter: ["parentID", "=", ""]
    });

    $(function() {
        $("#chartContainer").dxChart({
            dataSource: dxDataSource,
            series: [{
                argumentField: "arg",
                valueField: "val",
                type: "bar"
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart
        [dataSource]="dxDataSource">
        <dxi-series argumentField="arg" valueField="val" type="bar"></dxi-series>
    </dx-chart>

    <!-- tab: app.component.ts -->
    import { DxChartModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        population = [
            // ...
        ];
        dxDataSource = new DataSource({
            store: {
                type: "array",
                data: this.population
            },
            filter: ["parentID", "=", ""]
        });
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
            :data-source="dxDataSource">
            <DxSeries
                argument-field="arg"
                value-field="val"
                type="bar"
            />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries
    } from 'devextreme-vue/chart';
    import DataSource from 'devextreme/data/data_source';

    const population = [
        // ...
    ];

    export default {
        components: {
            DxChart,
            DxSeries
        },
        data() {
            return {
                dxDataSource: new DataSource({
                    store: {
                        type: 'array',
                        data: population
                    },
                    filter: ['parentID', '=', '']
                })
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series
    } from 'devextreme-react/chart';
    import DataSource from 'devextreme/data/data_source';

    const population = [
        // ...
    ];

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.dxDataSource = new DataSource({
                store: {
                    type: 'array',
                    data: population
                },
                filter: ['parentID', '=', '']
            });
        }

        render() {
            return (
                <Chart ...
                    dataSource={this.dxDataSource}>
                    <Series
                        argumentField="arg"
                        valueField="val"
                        type="bar"
                    />
                </Chart>
            );
        }
    }

---
