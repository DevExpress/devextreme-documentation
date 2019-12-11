var rightArrowKeyHandler = function () {
    var value = $("#mySlider").dxSlider("instance").option("value");
    $("#mySlider").dxSlider("instance").option("value", value + 1);
};
var leftArrowKeyHandler = function () {
    var value = $("#mySlider").dxSlider("instance").option("value");
    $("#mySlider").dxSlider("instance").option("value", value - 1);
};

$(function () {
    $("#mySlider").dxSlider({
        min: 50,
        max: 100,
        start: 65,
        value: 85,
        focusStateEnabled: true
    });
    $("#mySlider").dxSlider("instance").registerKeyHandler('rightArrow', rightArrowKeyHandler);
    $("#mySlider").dxSlider("instance").registerKeyHandler('leftArrow', leftArrowKeyHandler);
});