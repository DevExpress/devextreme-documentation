---
tags: chart, crosshair, pointer
---
Crosshair is a pointer represented by two mutually-crossing lines stretched over the entire chart plot. The crosshair helps a user identify values of the [series points](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Overview/') precisely. When enabled, the crosshair follows the cursor and snaps to the nearest series point.

![DevExtreme HTML5 JavaScript Charts Crosshair](/images/ChartJS/visual_elements/crosshair.png)

To enable the crosshair, set the **crosshair**.[enabled](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/crosshair/enabled.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/crosshair/#enabled') property to **true**. To show the crosshair labels, do the same with the **crosshair**.[label](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/crosshair/label '/Documentation/ApiReference/UI_Components/dxChart/Configuration/crosshair/label/').**visible** property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            crosshair: {
                enabled: true,
                label: {
                    visible: true
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-crosshair [enabled]="true">
            <dxo-label [visible]="true"></dxo-label>
        </dxo-crosshair>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
        <DxChart ... >
            <DxCrosshair :enabled="true">
                <DxLabel :visible="true"/>
            </DxCrosshair>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxCrosshair,
        DxLabel
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxCrosshair,
            DxLabel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Crosshair,
        Label
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Crosshair enabled={true}>
                        <Label visible={true}/>
                    </Crosshair>
                </Chart>
            );
        }
    }

    export default App;

---

For information about all properties of the crosshair and its labels, visit the [crosshair](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/crosshair '/Documentation/ApiReference/UI_Components/dxChart/Configuration/crosshair/') section of the API reference.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Crosshair/"
}


