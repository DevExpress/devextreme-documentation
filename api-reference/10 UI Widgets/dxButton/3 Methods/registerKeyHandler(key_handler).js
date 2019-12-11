$(function () {
    $("#myButton").dxButton({
        text: 'Click me',
        focusStateEnabled: true,
        onClick: function () {
            DevExpress.ui.notify("Button is clicked")
        }
    });
    $("#myButton").dxButton("instance").registerKeyHandler("enter", function () { DevExpress.ui.notify("Enter key is pressed", "success", 1500) });
});