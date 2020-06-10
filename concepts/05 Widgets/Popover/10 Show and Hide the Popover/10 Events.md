To execute certain commands before or after the **Popover** was shown/hidden, handle the [showing](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/showing.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Events/#showing'), [shown](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/shown.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Events/#shown'), [hiding](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/hiding.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Events/#hiding') or [hidden](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/hidden.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Events/#hidden') event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option when you configure the widget.

---
##### jQuery 

    <!--JavaScript-->$(function () {
        $("#popoverContainer").dxPopover({
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
    <dx-popover ...
        (onShowing)="onShowing($event)"
        (onShown)="onShown($event)"
        (onHiding)="onHiding($event)"
        (onHidden)="onHidden($event)">
    </dx-popover>

    <!--TypeScript-->
    import { DxPopoverModule } from "devextreme-angular";
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
            // ...
            DxPopoverModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxPopover ...
            @showing="onShowing"
            @shown="onShown"
            @hiding="onHiding"
            @hidden="onHidden"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxPopover } from 'devextreme-vue/popover';

    export default {
        components: {
            DxPopover
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

    import { Popover } from 'devextreme-react/popover';

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
                <Popover ...
                    onShowing={this.onShowing}
                    onShown={this.onShown}
                    onHiding={this.onHiding}
                    onHidden={this.onHidden}
                />
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Popover()
        // ...
        .OnShowing("popover_onShowing")
        .OnShown("popover_onShown")
        .OnHiding("popover_onHiding")
        .OnHidden("popover_onHidden")
    )

    <script type="text/javascript">
        function popover_onShowing (e) {
            // Handler of the "showing" event
        },
        function popover_onShown (e) {
            // Handler of the "shown" event
        },
        function popover_onHiding (e) {
            // Handler of the "hiding" event
        },
        function popover_onHidden (e) {
            // Handler of the "hidden" event
        }
    </script>

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    const hiddenEventHandler1 = function (e) {
        // First handler of the "hidden" event
    };

    const hiddenEventHandler2 = function (e) {
        // Second handler of the "hidden" event
    };

    $("#popoverContainer").dxPopover("instance")
        .on("hidden", hiddenEventHandler1)
        .on("hidden", hiddenEventHandler2);

#####See Also#####
#include common-link-handleevents
- [Popover - Customize the Content](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/')
- [Popover - Resize and Relocate](/concepts/05%20Widgets/Popover/15%20Resize%20and%20Relocate.md '/Documentation/Guide/Widgets/Popover/Resize_and_Relocate/')
- [Popover Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popover/Overview)