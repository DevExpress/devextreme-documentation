When a funnel item's selection state is being changed, the Funnel raises the [selectionChanged](/api-reference/10%20UI%20Components/dxFunnel/4%20Events/selectionChanged.md '/Documentation/ApiReference/UI_Components/dxFunnel/Events/#selectionChanged') event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the UI component, assign it to the [onSelectionChanged](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#onSelectionChanged') property when you configure the UI component. To check whether a funnel item was selected or the selection was cleared, call the item's [isSelected()](/api-reference/10%20UI%20Components/dxFunnel/6%20Item/3%20Methods/isSelected().md '/Documentation/ApiReference/UI_Components/dxFunnel/Item/Methods/#isSelected') method.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            onSelectionChanged: function (e) {
                if (e.item.isSelected()) {
                    // Commands to execute when the item is selected
                } else {
                    // Commands to execute when the selection is cleared
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel ...
        (onSelectionChanged)="onSelectionChanged($event)">
    </dx-funnel>

    <!--JavaScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onSelectionChanged (e) {
            if (e.item.isSelected()) {
                // Commands to execute when the item is selected
            } else {
                // Commands to execute when the selection is cleared
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
            @selection-changed="onSelectionChanged"
        />
    </template>

    <script>
    import DxFunnel from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel
        },
        methods: {
            onSelectionChanged (e) {
                if (e.item.isSelected()) {
                    // Commands to execute when the item is selected
                } else {
                    // Commands to execute when the selection is cleared
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
                    onSelectionChanged={onSelectionChanged}
                />
            );
        }
    }

    function onSelectionChanged (e) {
        if (e.item.isSelected()) {
            // Commands to execute when the item is selected
        } else {
            // Commands to execute when the selection is cleared
        }
    }

    export default App;

---

---
##### jQuery

If you are going to change the event handler at runtime, or if you need to attach several handlers to the **selectionChanged** event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxFunnel/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->
    var selectionChangedHandler1 = function (e) {
        // First handler of the "selectionChanged" event
    };

    var selectionChangedHandler2 = function (e) {
        // Second handler of the "selectionChanged" event
    };

    $("#funnelContainer").dxFunnel("instance")
        .on("selectionChanged", selectionChangedHandler1)
        .on("selectionChanged", selectionChangedHandler2);

---

#####See Also#####
#include common-link-handleevents
