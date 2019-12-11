$(function () {
    $("#myDateBox").dxDateBox({
        type: "date",
        value: new Date(),
        focusStateEnabled: true
    });
    $("#myDateBox").dxDateBox("instance").registerKeyHandler('enter', function () { DevExpress.ui.notify("Enter key was pressed", "success", 1500); });
});