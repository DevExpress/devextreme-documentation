You can accompany each series point with a label that displays the point's value or custom data.

To make point labels visible, assign **true** to the [series](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/').[label](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/').[visible](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/visible.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#visible') property. With this configuration, the component displays point labels detached from their respective series points. To make the connection between labels and points visible, set the [label](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/').[connector](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/connector '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/connector/').[visible](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/connector/visible.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/connector/#visible') property to **true**.

The component displays labels next to points. Change the [label](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/').[position](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/position.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#position') property to rearrange labels in columns or place them inside series points.

If you need to change the point's label text, declare the [label](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/').[customizeText](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/customizeText.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#customizeText') function. It must return a string value.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pie-chart").dxPieChart({
            // ...
            series: {
                // ...
                label: {
                    visible: true,
                    connector: {
                        visible: true
                    },
                    position: "columns",
                    customizeText: function (pointInfo) {
                        return pointInfo.value + " billionaires";
                    }
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pie-chart ...
    >
        <dxi-series ...
        >
            <dxo-label 
                [visible]="true"
                position="columns"
                [customizeText]="customizeText"
            >
                <dxo-connector [visible]="true"></dxo-connector>
            </dxo-label>
        </dxi-series>
    </dx-pie-chart>

    <!-- tab: app.component.ts -->
    // ...

    export class AppComponent {
        // ...
        customizeText (pointInfo: any) {
            return pointInfo.value + " billionaires";
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPieChart ...
        >
            <DxSeries ...
            >
                <DxLabel
                    :visible="true"
                    position="columns"
                    :customize-text="customizeText"
                >
                    <DxConnector :visible="true"></DxConnector>
                </DxLabel>
            </DxSeries>
        </DxPieChart> 
    </template>

    <script>
    // ...
    import { DxPieChart, DxSeries, DxLabel } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxSeries,
            DxLabel
        },
        data() {
            return {
                // ...
            }
        },
        methods: {    
            customizeText (pointInfo) {
                return pointInfo.value + " billionaires";
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import { PieChart, Series, Label } from 'devextreme-react/pie-chart';

    const customizeText = (pointInfo) => {
        return pointInfo.value + " billionaires";
    }

    function App() {
        return (
            <PieChart ...
            >
                <Series ... 
                >
                    <Label 
                        visible={true}
                        position="columns"
                        customizeText={customizeText}
                    >
                        <Connector visible={true}></Connector>
                    </Label>
                </Series>
            </PieChart>
        ); 
    }

    export default App;

--- 
