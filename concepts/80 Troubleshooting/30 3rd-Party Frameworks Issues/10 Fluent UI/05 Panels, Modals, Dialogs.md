If you use controls like Fluent UI <a href="https://developer.microsoft.com/en-us/fluentui#/controls/web/panel" target="_blank">Panel</a>, <a href="https://developer.microsoft.com/en-us/fluentui#/controls/web/modal" target="_blank">Modal</a>, or <a href="https://developer.microsoft.com/en-us/fluentui#/controls/web/dialog" target="_blank">Dialog</a> with DevExtreme components, you may experience several of the following issues.

#### Issue 

An overlay component (Popup, Popover, Tooltip) is displayed behind Fluent UI Panel, Modal, or Dialog.

#### Solution

In Fluent UI components, the z-index is set to `1000000`. Call the [baseZIndex(zIndex)](/api-reference/50%20Common/utils/ui/dxOverlay/baseZIndex(zIndex).md '/Documentation/ApiReference/Common/Utils/ui/dxOverlay/#baseZIndexzIndex') method to increase overlay component z-indexes in the application:

    <!-- tab: App.js -->
    import { baseZIndex } from 'devextreme/ui/overlay';
    baseZIndex(1000001);

#### Issue 

DevExtreme components that use drop-down windows or overlays are not responsive when added to the Fluent UI Panel, Modal, or Dialog.

#### Solution

To resolve the issue, disable FocusTrapZone focus trapping behavior:

    <!-- tab: App.js -->
    // ...

    const focusTrapZoneProps = {
        disabled: true
    };

    function App() {
        return (
            <Panel ...
                focusTrapZoneProps={focusTrapZoneProps}
            />
        );
    }
    
    export default App;

If you use the Fluent UI Dialog, specify the `modalProps` property, since the Dialog does not include `focusTrapZoneProps`:

    const focusTrapZoneProps = {
        disabled: true
    };

    const modalProps = { focusTrapZoneProps };

    function App() {
        return (
            <Dialog ...
                modalProps={modalProps}
            />
        );
    }

    export default App;

[tags] react