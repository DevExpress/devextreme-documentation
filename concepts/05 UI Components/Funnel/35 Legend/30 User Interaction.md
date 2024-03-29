A user can interact with the legend by hovering the pointer over legend items. This causes the [onHoverChanged](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/onHoverChanged.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#onHoverChanged') event handler to execute. Refer to the [Funnel Item Hover Events](/concepts/05%20UI%20Components/Funnel/14%20Funnel%20Items/10%20Hover/10%20Events.md '/Documentation/Guide/UI_Components/Funnel/Funnel_Items/Hover/#Events') topic for details.

In addition, a user can click legend items. The UI component does not react to this by default, but you can instruct it to by handling the [legendClick](/api-reference/10%20UI%20Components/dxFunnel/4%20Events/legendClick.md '/Documentation/ApiReference/UI_Components/dxFunnel/Events/#legendClick') event. If the handling function is not going to be changed at runtime, assign it to the [onLegendClick](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/onLegendClick.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#onLegendClick') property when you configure the UI component.  

---
##### jQuery

Otherwise, or if you need several handlers for the **legendClick** event, subscribe to it using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxFunnel/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            onLegendClick: function (e) {
                var item = e.item;
                // Event handling commands go here
            }
        });

        // ===== or =====
        var legendClickEventHandler1 = function (e) {
            var item = e.item;
            // First handler of the "legendClick" event
        };

        var legendClickEventHandler2 = function (e) {
            var item = e.item;
            // Second handler of the "legendClick" event
        };

        $("#funnelContainer").dxFunnel("instance")
            .on("legendClick", legendClickEventHandler1)
            .on("legendClick", legendClickEventHandler2);
    });

##### Angular

    <!--HTML--><dx-funnel ...
        (onLegendClick)="onLegendClick($event)">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onLegendClick (e) {
            var item = e.item;
            // Event handling commands go here
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxFunnel ...
            @legend-click="onLegendClick" 
         />
    </template>

    <script>
    import DxFunnel from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel
        },
        methods: {
            onLegendClick (e) {
                var item = e.item;
                // Event handling commands go here
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Funnel from 'devextreme-react/funnel';

    class App extends React.Component {
        render() {
            return (
                <Funnel ...
                    onLegendClick={this.onLegendClick} 
                 />
            );
        }
        onLegendClick(e) {
            var item = e.item;
            // Event handling commands go here
        }
    }

    export default App;

---

#####See Also#####
#include common-link-handleevents
