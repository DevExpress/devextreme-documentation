var enterKeyHandler = function () {
    var prevValue = $("#myCheckBox").dxCheckBox("instance").option("value");
    $("#myCheckBox").dxCheckBox("instance").option("value", !prevValue);
};
$(function () {
    $("#myCheckBox").dxCheckBox({
        text: "Check me",
        focusStateEnabled: true
    });
    $("#myCheckBox").dxCheckBox("instance").registerKeyHandler('enter', enterKeyHandler);
});