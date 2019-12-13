---
id: dxChart.Options.dataPrepareSettings
type: Object
---
---
##### shortDescription
Processes data before visualizing it.

---
The following code shows the **dataPrepareSettings** declaration syntax:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            dataPrepareSettings: {
                sortingMethod: false
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxo-data-prepare-settings
            [sortingMethod]="false">
        </dxo-data-prepare-settings>
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
        <dx-chart ... >
            <dx-data-prepare-settings
                :sorting-method="false"
            />
        </dx-chart>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxChart, {
        DxDataPrepareSettings 
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxDataPrepareSettings
        },
        data() {
            // ...
        }
    }
    </script>


##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Chart, {
        DataPrepareSettings 
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <DataPrepareSettings
                        sortingMethod={false}
                    />
                </Chart>
            );
        }
    }
    export default App;

---