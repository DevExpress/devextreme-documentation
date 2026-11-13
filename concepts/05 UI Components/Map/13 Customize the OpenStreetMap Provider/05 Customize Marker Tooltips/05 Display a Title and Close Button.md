Specify Popover [title](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#title), [showTitle](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#showTitle), and [showCloseButton](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#showCloseButton) properties to display a title and a Close button:

    <!--JavaScript-->
    function onMarkerClick(e) {
        e.tooltip?.option({
            title: 'Empire State Building',
            showTitle: true,
            showCloseButton: true
        });
    }
