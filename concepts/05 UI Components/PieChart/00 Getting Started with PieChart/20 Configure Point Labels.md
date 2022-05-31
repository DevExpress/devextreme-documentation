You can accompany each series point with a label that displays the point's value or custom data.

To make point labels visible, assign **true** to the [series](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/).[label](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/).[visible](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#visible) property. With this configuration, the component displays point labels detached from their respective series points. To make the connection between labels and points visible, set the [label](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/).[connector](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/connector/).[visible](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/connector/#visible) property to **true**.

The component displays labels besides the points. Change the [label](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/).[position](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#position) property to rearrange labels in columns or place them inside series points.

If you need to change the point labels text, declare the [label](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/).[customizeText](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#customizeText) function. It must return a string value.

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
