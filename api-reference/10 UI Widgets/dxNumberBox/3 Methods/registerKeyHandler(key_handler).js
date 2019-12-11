var enterKeyHandler = function () {
    var prevValue = $("#myNumberBox").dxNumberBox("instance").option("value");
    $("#myNumberBox").dxNumberBox("instance").option("value", prevValue + 1);
};

$(function () {
    $("#myNumberBox").dxNumberBox({
        focusStateEnabled: true
    });
    $("#myNumberBox").dxNumberBox("instance").registerKeyHandler('enter', enterKeyHandler);
});