Specify Popover [title](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/title.md '/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#title'), [showTitle](/api-reference/10%20UI%20Components/dxPopover/1%20Configuration/showTitle.md '/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#showTitle'), and [showCloseButton](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/showCloseButton.md '/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#showCloseButton') properties to display a title and a Close button:

    <!--JavaScript-->
    function onMarkerClick(e) {
        e.tooltip?.option({
            title: 'Empire State Building',
            showTitle: true,
            showCloseButton: true
        });
    }
