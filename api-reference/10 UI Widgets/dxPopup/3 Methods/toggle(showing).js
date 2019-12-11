toggleVisibility = function (clickOptions) {
    var visible = clickOptions.component.option("text") === "Show popup";
    $("#popupContainer").dxPopup("instance").toggle(visible);
};
$("#button1").dxButton({
    text: 'Show popup',
    onClick: toggleVisibility
});
$("#popupContainer").dxPopup({
    title: "My Popup",
    onContentReady: function () {
        $("#button2").dxButton({
            text: 'Hide popup',
            onClick: toggleVisibility
        });
    }
});