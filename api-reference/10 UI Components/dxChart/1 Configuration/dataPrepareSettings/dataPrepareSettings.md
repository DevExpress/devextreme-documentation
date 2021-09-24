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

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChart ... >
            <DxDataPrepareSettings
                :sorting-method="false"
            />
        </DxChart>
    </template>

    <script>
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