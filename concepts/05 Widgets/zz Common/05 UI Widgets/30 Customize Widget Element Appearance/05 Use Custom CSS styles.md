You can apply custom CSS styles to widget elements. For this purpose, assign a custom class name to the widget element and use this class name when defining styles for widget elements.

    <!--HTML-->
    <div id="myPopup" class="custom-popup">
        Popup content
    </div>

<!---->

    <!--JavaScript-->
    $("#myPopover").dxPopup({
        visible: true,
        title: 'My Popup'
    });

<!---->

    <!--CSS-->
    .custom-popup .dx-popup-title {
        padding: 0px 10px;
    }
    .custom-popup .dx-popup-title .dx-toolbar-label {
        font-size: 12px;
        text-transform: uppercase;
    }
    .custom-popup .dx-popup-content {
        background: lightgray;
    }

