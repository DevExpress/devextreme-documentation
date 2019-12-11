To navigate from the first to the second view, filter data by a different `parentID` in the **Chart**'s [onPointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointClick') event handler. To navigate back, add the [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') widget and reset the filter in the [onClick](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick') event handler. Distinguish between levels using the `isFirstLevel` flag.

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
        <dxi-series argumentField="arg" valueField="val" type="bar"></dxi-series>
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
        <dxi-series argumentField="arg" valueField="val" type="bar"></dxi-series>
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

---
