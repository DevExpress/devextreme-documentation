$(function () {
    $("#myCalendar").dxCalendar({
        focusStateEnabled: true
    });
    $("#myCalendar").dxCalendar("instance").registerKeyHandler('enter', function () { DevExpress.ui.notify("Enter key was pressed", "success", 1500); });
});