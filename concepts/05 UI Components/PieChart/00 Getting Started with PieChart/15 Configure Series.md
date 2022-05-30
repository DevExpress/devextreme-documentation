Once you assign the data source, specify the [series](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/) [type](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#type). The PieChart has two series types: the default **Pie** and **Doughnut**. The only difference between them is the **Doughnut** has a blank center. 

To display the data, specify the [series](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/) nested options: [argumentField](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#argumentField) and [valueField](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#valueField). Then, the component can determine the object fields that indicate PieChart arguments and values in the array.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pie-chart").dxPieChart({
            // ...
            series: {
                argumentField: "country",
                valueField: "amount",
            },
            type: "doughnut"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pie-chart ...
        type="doughnut"
    >
        <dxi-series 
            argumentField="country" 
            valueField="amount"
        >
        </dxi-series>
    </dx-pie-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPieChart ...
            type="doughnut"
        >
            <DxSeries
                argument-field="country"
                value-field="amount"
            >
            </DxSeries>
        </DxPieChart> 
    </template>

    <script>
    // ...
    import { DxPieChart, DxSeries } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxSeries
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import { PieChart, Series } from 'devextreme-react/pie-chart';

    function App() {
        return (
            <PieChart ...
                type="doughnut"
            >
                <Series 
                    argumentField="country" 
                    valueField="amount"
                >
                </Series>
            </PieChart>
        ); 
    }

    export default App;

--- 
