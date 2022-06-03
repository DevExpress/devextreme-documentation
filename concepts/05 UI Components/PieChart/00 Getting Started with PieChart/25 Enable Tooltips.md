To enable tooltips, assign **true** to the [enabled](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/tooltip/enabled.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/tooltip/#enabled') property of the [tooltip](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/tooltip/') object. A PieChart tooltip displays information about the point value, but you can display custom content in a tooltip.

In this tutorial, the tooltip displays information about the point argument. Use the [tooltip](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/tooltip/').[contentTemplate](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/tooltip/contentTemplate.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/tooltip/#contentTemplate') function to assign a custom template for all PieChart tooltips.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pie-chart").dxPieChart({
            // ...
            tooltip: {
                enabled: true,
                contentTemplate: function (data) {
                    return data.argumentText;
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pie-chart ...
    >
        <!-- ... -->
        <dxo-tooltip
            [enabled]="true"
            [contentTemplate]="contentTemplate"
        >
        </dxo-tooltip>
    </dx-pie-chart>

    <!-- tab: app.component.ts -->
    // ...

    export class AppComponent {
        // ...
        contentTemplate (data: any) {
            return data.argumentText;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPieChart ...
        >
            <!-- ... -->
            <DxTooltip
                :enabled="true"
                :content-template="contentTemplate"
            >
            </DxTooltip>
        </DxPieChart> 
    </template>

    <script>
    // ...
    import { DxPieChart, DxTooltip } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxTooltip
        },
        data() {
            return {
                // ...
            }
        },
        methods: {    
            // ...
            contentTemplate (data) {
                return data.argumentText;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import { PieChart, Tooltip } from 'devextreme-react/pie-chart';

    const contentTemplate = (data) => {
        return data.argumentText;
    }

    function App() {
        return (
            <PieChart ...
            >
                <!-- ... -->
                <Tooltip
                    enabled={true}
                    contentTemplate={contentTemplate}
                >
                </Tooltip>
            </PieChart>
        ); 
    }

    export default App;

--- 