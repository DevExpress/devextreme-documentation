To specify when the **Tooltip** should be shown and hidden, set the [showEvent](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/showEvent '/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/showEvent/') and [hideEvent](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/hideEvent '/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/hideEvent/') options. These options can accept several events at once as well as an object.

    <!--JavaScript-->$(function() {
        $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend'
        });
    });

The **Tooltip** can also be hidden when a user clicks outside it or presses the **Back** button on the device. To control this behavior of the **Tooltip**, use the [closeOnBackButton](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/closeOnBackButton.md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#closeOnBackButton') and [closeOnOutsideClick](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/closeOnOutsideClick.md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#closeOnOutsideClick') options.

    <!--JavaScript-->$(function() {
        $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            closeOnBackButton: false,
            closeOnOutsideClick: false
        });
    });