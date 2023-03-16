To execute certain commands before or after the ContextMenu was opened/closed, handle the [showing](/api-reference/10%20UI%20Components/dxContextMenu/4%20Events/showing.md '/Documentation/ApiReference/UI_Components/dxContextMenu/Events/#showing'), [shown](/api-reference/10%20UI%20Components/dxContextMenu/4%20Events/shown.md '/Documentation/ApiReference/UI_Components/dxContextMenu/Events/#shown'), [hiding](/api-reference/10%20UI%20Components/dxContextMenu/4%20Events/hiding.md '/Documentation/ApiReference/UI_Components/dxContextMenu/Events/#hiding') or [hidden](/api-reference/10%20UI%20Components/dxContextMenu/4%20Events/hidden.md '/Documentation/ApiReference/UI_Components/dxContextMenu/Events/#hidden') event. If the event handling function is not going to be changed during the lifetime of the UI component, assign it to the corresponding **on*EventName*** property when you configure the UI component.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#contextMenuContainer").dxContextMenu({
            // ...
            onShowing: function(e) {
                // Handler of the 'showing' event
            },
            onShown: function(e) {
                // Handler of the 'shown' event
            },
            onHiding: function(e) {
                // Handler of the 'hiding' event
            },
            onHidden: function(e) {
                // Handler of the 'hidden' event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-context-menu ...
        (onShowing)="handleShowingEvent($event)"
        (onShown)="handleShownEvent($event)"
        (onHiding)="handleHidingEvent($event)"
        (onHidden)="handleHiddenEvent($event)">
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        handleShowingEvent(e) {
            // Handler of the 'showing' event
        }
        handleShownEvent(e) {
            // Handler of the 'shown' event
        }
        handleHidingEvent(e) {
            // Handler of the 'hiding' event
        }
        handleHiddenEvent(e) {
            // Handler of the 'hidden' event
        }
    }
    @NgModule({
         imports: [
             // ...
             DxContextMenuModule
         ],
         // ...
     })


##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxContextMenu ...
            @showing="handleShowingEvent"
            @shown="handleShownEvent"
            @hiding="handleHidingEvent"
            @hidden="handleHiddenEvent"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxContextMenu from 'devextreme-vue/context-menu';

    export default {
        components: {
            DxContextMenu
        },
        methods: {
            handleShowingEvent(e) {
                // Handler of the 'showing' event
            }
            handleShownEvent(e) {
                // Handler of the 'shown' event
            }
            handleHidingEvent(e) {
                // Handler of the 'hiding' event
            }
            handleHiddenEvent(e) {
                // Handler of the 'hidden' event
            }
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { ContextMenu } from 'devextreme-react/context-menu';

    class App extends React.Component {
        render() {
            return (
                <ContextMenu
                    onShowing={this.handleShowingEvent}
                    onShown={this.handleShownEvent}
                    onHiding={this.handleHidingEvent}
                    onHidden={this.handleHiddenEvent}
                />
            );
        }

        handleShowingEvent(e) {
            // Handler of the 'showing' event
        }
        handleShownEvent(e) {
            // Handler of the 'shown' event
        }
        handleHidingEvent(e) {
            // Handler of the 'hiding' event
        }
        handleHiddenEvent(e) {
            // Handler of the 'hidden' event
        }
    }

    export default App;

---

---
##### jQuery

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxContextMenu/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->
    var hiddenEventHandler1 = function(e) {
        // First handler of the "hidden" event
    };

    var hiddenEventHandler2 = function(e) {
        // Second handler of the "hidden" event
    };

    $("#contextMenuContainer").dxContextMenu("instance")
        .on("hidden", hiddenEventHandler1)
        .on("hidden", hiddenEventHandler2);

---

#####See Also#####
#include common-link-handleevents
- [ContextMenu - Access the Clicked Item](/concepts/05%20UI%20Components/ContextMenu/03%20Access%20the%20Clicked%20Item.md '/Documentation/Guide/UI_Components/ContextMenu/Access_the_Clicked_Item/')
- [Toast Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toast/Overview)
- [Toast API Reference](/api-reference/10%20UI%20Components/dxToast '/Documentation/ApiReference/UI_Components/dxToast/')