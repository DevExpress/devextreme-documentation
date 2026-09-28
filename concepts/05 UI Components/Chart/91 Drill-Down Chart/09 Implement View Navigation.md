To navigate from the first to the second view, filter data by a different `parentID` in the Chart's [onPointClick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onPointClick') event handler. To navigate back, add the [Button](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/') UI component and reset the filter in the [onClick](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick') event handler. Distinguish between levels using the `isFirstLevel` flag.

---
##### jQuery

    <!--JavaScript-->
    // ...
    $(function() {
        var isFirstLevel = true;
        var chart = $("#chartContainer").dxChart({
            dataSource: filterData(""),
            series: [{
                argumentField: "arg",
                valueField: "val",
                type: "bar"
            }],
            onPointClick: function (e) {
                if (isFirstLevel) {
                    isFirstLevel = false;
                    chart.option("dataSource", filterData(e.target.originalArgument));
                    backButton.option("visible", true);
                }
            }
        }).dxChart("instance");

        var backButton = $("#backButton").dxButton({
            text: "Back",
            icon: "chevronleft",
            visible: false,
            onClick: function (e) {
                if (!isFirstLevel) {
                    isFirstLevel = true;
                    chart.option("dataSource", filterData(""));
                    backButton.option("visible", false);
                }
            }
        }).dxButton("instance");
    });

    <!--HTML-->
    <div id="chartContainer"></div>
    <div id="backButton" class="button-container"></div>

    <!--CSS-->
    .button-container {
        text-align: center;
        height: 40px;
        position: absolute;
        top: 7px;
        left: 0px;
    }

##### Angular

    <!--HTML-->
    <dx-chart
        [dataSource]="dataSource"
        (onPointClick)="onPointClick($event)">
        <dxi-chart-series argumentField="arg" valueField="val" type="bar"></dxi-chart-series>
    </dx-chart>
    <dx-button class="button-container"
        text="Back"
        icon="chevronleft"
        [visible]="!isFirstLevel"
        (onClick)="onButtonClick()">
    </dx-button>

    <!--TypeScript-->
    import { DxChartModule, DxButtonModule } from "devextreme-angular";
    import { Service, DataItem } from "./app.service";
    @Component({
        // ...
        providers: [Service]
    })
    export class AppComponent {
        dataSource: DataItem[];
        service: Service;
        isFirstLevel: boolean;
        constructor(service: Service) {
            this.dataSource = service.filterData("");
            this.service = service;
            this.isFirstLevel = true;
        }
        onPointClick(e) {
            if (this.isFirstLevel) {
                this.isFirstLevel = false;
                this.dataSource = this.service.filterData(e.target.originalArgument);
            }
        }
        onButtonClick() {
            if (!this.isFirstLevel) {
                this.isFirstLevel = true;
                this.dataSource = this.service.filterData("");
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

    <!--CSS-->
    .button-container {
        text-align: center;
        height: 40px;
        position: absolute;
        top: 7px;
        left: 0px;
    }

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ...
            :data-source="dataSource"
            @point-click="onPointClick">
            <DxSeries
                argument-field="arg"
                value-field="val"
                type="bar"
            />
        </DxChart>
        <DxButton
            :visible="!isFirstLevel"
            class="button-container"
            text="Back"
            icon="chevronleft"
            @click="onButtonClick"
        />
    </template>

    <script>
    import DxChart, {
        DxSeries
    } from 'devextreme-vue/chart';
    import DxButton from 'devextreme-vue/button';
    import service from './data.js';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxButton
        },
        data() {
            return {
                isFirstLevel: true,
                dataSource: service.filterData('')
            };
        },
        methods: {
            onPointClick({ target }) {
                if (this.isFirstLevel) {
                    this.isFirstLevel = false;
                    this.dataSource = service.filterData(target.originalArgument);
                }
            },
            onButtonClick() {
                if (!this.isFirstLevel) {
                    this.isFirstLevel = true;
                    this.dataSource = service.filterData("");
                }
            }
        }
    }
    </script>

    <style>
    .button-container {
        text-align: center;
        height: 40px;
        position: absolute;
        top: 7px;
        left: 0px;
    }
    </style>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useState } from 'react';
    import Chart, {
        Series,
        type ChartTypes
    } from 'devextreme-react/chart';
    import Button from 'devextreme-react/button';
    import service from './data.js';

    function App() {
        const [isFirstLevel, setIsFirstLevel] = useState(true);
        const [dataSource, setDataSource] = useState(() => service.filterData(''));

        const onPointClick = useCallback(({ target }: ChartTypes.PointClickEvent) => {
            if (isFirstLevel) {
                setIsFirstLevel(false);
                setDataSource(service.filterData(target.originalArgument as string));
            }
        }, [isFirstLevel]);

        const onButtonClick = useCallback(() => {
            if (!isFirstLevel) {
                setIsFirstLevel(true);
                setDataSource(service.filterData(''));
            }
        }, [isFirstLevel]);

        return (
            <React.Fragment>
                <Chart ...
                    dataSource={dataSource}
                    onPointClick={onPointClick}>
                    <Series
                        argumentField="arg"
                        valueField="val"
                        type="bar"
                    />
                </Chart>
                <Button className="button-container"
                    text="Back"
                    icon="chevronleft"
                    visible={!isFirstLevel}
                    onClick={onButtonClick}
                />
            </React.Fragment>
        );
    }

    export default App;

    <!--CSS-->
    .button-container {
        text-align: center;
        height: 40px;
        position: absolute;
        top: 7px;
        left: 0px;
    }

---

The following code shows how to implement navigation when using the DevExtreme **DataSource**:

---
##### jQuery

    <!--JavaScript-->
    var dxDataSource = new DevExpress.data.DataSource({
        store: {
            type: "array",
            data: population
        },
        filter: ["parentID", "=", ""]
    });

    $(function() {
        var isFirstLevel = true;
        var chart = $("#chartContainer").dxChart({
            dataSource: dxDataSource,
            series: [{
                argumentField: "arg",
                valueField: "val",
                type: "bar"
            }],
            onPointClick: function (e) {
                if (isFirstLevel) {
                    isFirstLevel = false;
                    dxDataSource.filter(["parentID", "=", e.target.originalArgument]);
                    dxDataSource.load();
                    backButton.option("visible", true);
                }
            }
        }).dxChart("instance");

        var backButton = $("#backButton").dxButton({
            text: "Back",
            icon: "chevronleft",
            visible: false,
            onClick: function (e) {
                if (!isFirstLevel) {
                    isFirstLevel = true;
                    dxDataSource.filter(["parentID", "=", ""]);
                    dxDataSource.load();
                    backButton.option("visible", false);
                }
            }
        }).dxButton("instance");
    });

    <!--HTML-->
    <div id="chartContainer"></div>
    <div id="backButton" class="button-container"></div>

    <!--CSS-->
    .button-container {
        text-align: center;
        height: 40px;
        position: absolute;
        top: 7px;
        left: 0px;
    }

##### Angular

    <!--HTML-->
    <dx-chart
        [dataSource]="dxDataSource"
        (onPointClick)="onPointClick($event)">
        <dxi-chart-series argumentField="arg" valueField="val" type="bar"></dxi-chart-series>
    </dx-chart>
    <dx-button class="button-container"
        text="Back"
        icon="chevronleft"
        [visible]="!isFirstLevel"
        (onClick)="onButtonClick()">
    </dx-button>

    <!--TypeScript-->
    import { DxChartModule, DxButtonModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        // ...
        dxDataSource = new DataSource({
            store: {
                type: "array",
                data: this.population
            },
            filter: ["parentID", "=", ""]
        });
        isFirstLevel: boolean = true;
        onPointClick(e) {
            if (this.isFirstLevel) {
                this.isFirstLevel = false;
                this.dxDataSource.filter(["parentID", "=", e.target.originalArgument]);
                this.dxDataSource.load();
            }
        }
        onButtonClick() {
            if (!this.isFirstLevel) {
                this.isFirstLevel = true;
                this.dxDataSource.filter(["parentID", "=", ""]);
                this.dxDataSource.load();
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

    <!--CSS-->
    .button-container {
        text-align: center;
        height: 40px;
        position: absolute;
        top: 7px;
        left: 0px;
    }

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ...
            :data-source="dxDataSource"
            @point-click="onPointClick">
            <DxSeries
                argument-field="arg"
                value-field="val"
                type="bar"
            />
        </DxChart>
        <DxButton
            :visible="!isFirstLevel"
            class="button-container"
            text="Back"
            icon="chevronleft"
            @click="onButtonClick"
        />
    </template>

    <script>
    import DxChart, {
        DxSeries
    } from 'devextreme-vue/chart';
    import DxButton from 'devextreme-vue/button';
    import DataSource from "devextreme/data/data_source";

    const population = [
        // ...
    ];

    export default {
        components: {
            DxChart,
            DxSeries,
            DxButton
        },
        data() {
            return {
                isFirstLevel: true,
                dxDataSource: new DataSource({
                    store: {
                        type: 'array',
                        data: population
                    },
                    filter: ['parentID', '=', '']
                })
            };
        },
        methods: {
           onPointClick({ target }) {
                if(this.isFirstLevel) {
                    this.isFirstLevel = false;
                    this.dxDataSource.filter(['parentID', '=', target.originalArgument]);
                    this.dxDataSource.load();
                }
            },
            onButtonClick() {
                if(!this.isFirstLevel) {
                    this.isFirstLevel = true;
                    this.dxDataSource.filter(['parentID', '=', '']);
                    this.dxDataSource.load();
                }
            }
        }
    }
    </script>

    <style>
    .button-container {
        text-align: center;
        height: 40px;
        position: absolute;
        top: 7px;
        left: 0px;
    }
    </style>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useState } from 'react';
    import Chart, {
        Series,
        type ChartTypes
    } from 'devextreme-react/chart';
    import Button from 'devextreme-react/button';
    import DataSource from 'devextreme/data/data_source';

    type DataItem = {
        arg: string;
        val: number;
        parentID: string;
    };

    const population: DataItem[] = [
        // ...
    ];

    const dxDataSource = new DataSource<DataItem>({
        store: {
            type: 'array',
            data: population
        },
        filter: ['parentID', '=', '']
    });

    function App() {
        const [isFirstLevel, setIsFirstLevel] = useState(true);

        const onPointClick = useCallback(({ target }: ChartTypes.PointClickEvent) => {
            if (isFirstLevel) {
                setIsFirstLevel(false);
                dxDataSource.filter(['parentID', '=', target.originalArgument]);
                dxDataSource.load();
            }
        }, [isFirstLevel]);

        const onButtonClick = useCallback(() => {
            if (!isFirstLevel) {
                setIsFirstLevel(true);
                dxDataSource.filter(['parentID', '=', '']);
                dxDataSource.load();
            }
        }, [isFirstLevel]);

        return (
            <React.Fragment>
                <Chart ...
                    dataSource={dxDataSource}
                    onPointClick={onPointClick}>
                    <Series
                        argumentField="arg"
                        valueField="val"
                        type="bar"
                    />
                </Chart>
                <Button className="button-container"
                    text="Back"
                    icon="chevronleft"
                    visible={!isFirstLevel}
                    onClick={onButtonClick}
                />
            </React.Fragment>
        );
    }

    export default App;

    <!--CSS-->
    .button-container {
        text-align: center;
        height: 40px;
        position: absolute;
        top: 7px;
        left: 0px;
    }

---
