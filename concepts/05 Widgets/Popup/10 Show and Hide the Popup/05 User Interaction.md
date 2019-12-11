The **Popup** can also be hidden when a user clicks outside it or presses the **Back** button on the device. To control this behavior of the **Popup**, use the [closeOnBackButton](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/closeOnBackButton.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#closeOnBackButton') and [closeOnOutsideClick](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/closeOnOutsideClick.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#closeOnOutsideClick') options.

    <!--JavaScript-->
    $(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            closeOnBackButton: false,
            closeOnOutsideClick: true
        });
    });