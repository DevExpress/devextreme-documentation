When a funnel item's hover state is being changed, the Funnel raises the [hoverChanged](/api-reference/10%20UI%20Components/dxFunnel/4%20Events/hoverChanged.md '/Documentation/ApiReference/UI_Components/dxFunnel/Events/#hoverChanged') event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the UI component, assign it to the [onHoverChanged](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/onHoverChanged.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#onHoverChanged') property when you configure the UI component. To check whether the pointer entered or left a funnel item, call the item's [isHovered()](/api-reference/10%20UI%20Components/dxFunnel/6%20Item/3%20Methods/isHovered().md '/Documentation/ApiReference/UI_Components/dxFunnel/Item/Methods/#isHovered') method.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            onHoverChanged: function (e) {
                if (e.item.isHovered()) {
                    // Commands to execute when the pointer enters the item
                } else {
                    // Commands to execute when the pointer leaves the item
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel ...
        (onHoverChanged)="onHoverChanged($event)">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onHoverChanged (e) {
            if (e.item.isHovered()) {
                // Commands to execute when the pointer enters the item
            } else {
                // Commands to execute when the pointer leaves the item
            }
        };
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
        <DxFunnel
            @hover-changed="onHoverChanged"
        />
    </template>

    <script>
    import DxFunnel from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel
        },
        methods: {
            onHoverChanged (e) {
                if (e.item.isHovered()) {
                    // Commands to execute when the pointer enters the item
                } else {
                    // Commands to execute when the pointer leaves the item
                }
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
                <Funnel
                    onHoverChanged={onHoverChanged}
                />
            );
        }
    }

    function onHoverChanged (e) {
        if (e.item.isHovered()) {
            // Commands to execute when the pointer enters the item
        } else {
            // Commands to execute when the pointer leaves the item
        }
    }

    export default App;

---

---
##### jQuery

If you are going to change the event handler at runtime or if you need to attach several handlers to the **hoverChanged** event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxFunnel/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->
    var hoverChangedHandler1 = function (e) {
        // First handler of the "hoverChanged" event
    };

    var hoverChangedHandler2 = function (e) {
        // Second handler of the "hoverChanged" event
    };

    $("#funnelContainer").dxFunnel("instance")
        .on("hoverChanged", hoverChangedHandler1)
        .on("hoverChanged", hoverChangedHandler2);

---

#####See Also#####
#include common-link-handleevents
