$(function () {
    $("#myTextBox").dxTextBox({
        text: "My text",
        focusStateEnabled: true
    });
    $("#myTextBox").dxTextBox("instance").registerKeyHandler('enter', function () { DevExpress.ui.notify("Enter key is pressed", "success", 1500) });
});
