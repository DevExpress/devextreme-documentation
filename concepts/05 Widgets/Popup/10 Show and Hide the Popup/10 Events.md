To execute certain commands before or after the **Popup** was shown/hidden, handle the [showing](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/showing.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Events/#showing'), [shown](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/shown.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Events/#shown'), [hiding](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/hiding.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Events/#hiding') or [hidden](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/hidden.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Events/#hidden') event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option when you configure the widget.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#popupContainer").dxPopup({
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
    <dx-popup ...
        (onShowing)="popup_showing($event)"
        (onShown)="popup_shown($event)"
        (onHiding)="popup_hiding($event)"
        (onHidden)="popup_hidden($event)">
    </dx-popup>

    <!--TypeScript-->
    import { DxPopupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        popup_showing (e) {
            // Handler of the "showing" event
        }
        popup_shown (e) {
            // Handler of the "shown" event
        }
        popup_hiding (e) {
            // Handler of the "hiding" event
        }
        popup_hidden (e) {
            // Handler of the "hidden" event
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPopupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxPopup ...
            @showing="onShowing"
            @shown="onShown"
            @hiding="onHiding"
            @hidden="onHidden"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxPopup } from 'devextreme-vue/popup';

    export default {
        components: {
            DxPopup
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

    import { Popup } from 'devextreme-react/popup';

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
                <Popup ...
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

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxPopup/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    const hiddenEventHandler1 = function (e) {
        // First handler of the "hidden" event
    };

    const hiddenEventHandler2 = function (e) {
        // Second handler of the "hidden" event
    };

    $("#popupContainer").dxPopup("instance")
        .on("hidden", hiddenEventHandler1)
        .on("hidden", hiddenEventHandler2);

#####See Also#####
#include common-link-handleevents
- [Popup - Customize the Content](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/')
- [Popup - Resize and Relocate](/concepts/05%20Widgets/Popup/15%20Resize%20and%20Relocate.md '/Documentation/Guide/Widgets/Popup/Resize_and_Relocate/')
- [Popup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup/Overview)
- [Popup API Reference](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/')