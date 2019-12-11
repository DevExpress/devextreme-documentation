$("#button1").dxButton({
    text: 'Show popup',
    onClick: function () {
        $("#popupContainer").dxPopup("instance").show();
    }
});
$("#popupContainer").dxPopup({
    title: "My Popup",
    onContentReady: function () {
        $("#button2").dxButton({
            text: 'Hide popup',
            onClick: function () {
                $("#popupContainer").dxPopup("instance").hide();
            }
        });
    }
});