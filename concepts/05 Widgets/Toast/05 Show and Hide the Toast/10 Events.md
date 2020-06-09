To execute certain commands before or after the **Toast** was shown/hidden, handle the [showing](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/showing.md '/Documentation/ApiReference/UI_Widgets/dxToast/Events/#showing'), [shown](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/shown.md '/Documentation/ApiReference/UI_Widgets/dxToast/Events/#shown'), [hiding](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/hiding.md '/Documentation/ApiReference/UI_Widgets/dxToast/Events/#hiding') or [hidden](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/hidden.md '/Documentation/ApiReference/UI_Widgets/dxToast/Events/#hidden') event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#toastContainer").dxToast({
            // ...
            onShowing: function (e) {
                // Handler of the "showing" event
            },
            onShown: function (e) {
                // Handler of the "shown" event
            },
            onHiding: function (e) {
                // Handler of the "hiding" event
            },
            onHidden: function (e) {
                // Handler of the "hidden" event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-toast ...
        (onShowing)="onShowing($event)"
        (onShown)="onShown($event)"
        (onHiding)="onHiding($event)"
        (onHidden)="onHidden($event)">
    </dx-toast>

    <!--TypeScript-->
    import { DxToastModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onShowing (e) {
            // Handler of the "showing" event
        },
        onShown (e) {
            // Handler of the "shown" event
        },
        onHiding (e) {
            // Handler of the "hiding" event
        },
        onHidden (e) {
            // Handler of the "hidden" event
        }
    }
    @NgModule({
         imports: [
             DxButtonModule,
             DxToastModule,
             // ...
         ],
         // ...
     })

##### Vue

    <template>
        <DxToast ...
            @showing="onShowing"
            @shown="onShown"
            @hiding="onHiding"
            @hidden="onHidden"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxToast } from 'devextreme-vue/toast';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxToast,
            DxButton
        },
        methods: {
            onShowing(e) {
                // Handler of the 'showing' event
            },
            onShown(e) {
                // Handler of the 'shown' event
            },
            onHiding(e) {
                // Handler of the 'hiding' event
            },
            onHidden(e) {
                // Handler of the 'hidden' event
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Toast } from 'devextreme-react/toast';
    import { Button } from 'devextreme-react/button';

    class App extends React.Component {
        onShowing(e) {
            // Handler of the 'showing' event
        }

        onShown(e) {
            // Handler of the 'shown' event
        }

        onHiding(e) {
            // Handler of the 'hiding' event
        }

        onHidden(e) {
            // Handler of the 'hidden' event
        }

        render() {
            return (
                <Toast ...
                    onShowing={this.onShowing}
                    onShown={this.onShown}
                    onHiding={this.onHiding}
                    onHidden={this.onHidden}
                />
            );
        }
    }

    export default App;

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxToast/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    const hiddenEventHandler1 = function (e) {
        // First handler of the "hidden" event
    };

    const hiddenEventHandler2 = function (e) {
        // Second handler of the "hidden" event
    };

    $("#toastContainer").dxToast("instance")
        .on("hidden", hiddenEventHandler1)
        .on("hidden", hiddenEventHandler2);

#####See Also#####
#include common-link-handleevents
- [Toast - Customize the Content](/concepts/05%20Widgets/Toast/10%20Customize%20the%20Content.md '/Documentation/Guide/Widgets/Toast/Customize_the_Content/')
- [Toast - Resize and Relocate](/concepts/05%20Widgets/Toast/15%20Resize%20and%20Relocate.md '/Documentation//Guide/Widgets/Toast/Resize_and_Relocate/')
- [Toast Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toast/Overview)
- [Toast API Reference](/api-reference/10%20UI%20Widgets/dxToast '/Documentation/ApiReference/UI_Widgets/dxToast/')