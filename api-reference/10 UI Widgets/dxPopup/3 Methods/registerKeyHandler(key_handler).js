$(function () {
    $("#myPopup").dxPopup({
        height: 200,
        title: "My Popup",
        focusStateEnabled: true,
        contentTemplate: function (contentElement) {
            contentElement.append("<p>Press the Enter key.</p>");
        }
    });
    $("#myPopup").dxPopup("instance").registerKeyHandler('enter', function () { $("#myPopup").dxPopup("instance").hide(); });
    $("#toggleButton").dxButton({
        text: 'Show popup',
        onClick: function () {
            $("#myPopup").dxPopup("instance").option("visible", true);
        }
    });
});