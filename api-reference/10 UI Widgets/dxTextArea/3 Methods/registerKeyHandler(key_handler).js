$(function () {
    $("#myTextArea").dxTextArea({
        height: 300,
        focusStateEnabled: true
    });
    $("#myTextArea").dxTextArea("instance").registerKeyHandler('enter', function () { DevExpress.ui.notify("Enter key is pressed", "success", 1500) });
    $.ajax({
        type: "POST",
        url: "/LoremService.asmx/LoremIpsum",
        data: JSON.stringify({ count: 1 }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $("#myTextArea").dxTextArea("instance").option("text", data.d[0]);
            $("#myTextArea").dxTextArea("instance").repaint();
        }
    });
});