var rightArrowKeyHandler = function () {
    var end = $("#myRangeSlider").dxRangeSlider("instance").option("end");
    $("#myRangeSlider").dxRangeSlider("instance").option("end", end + 1);
};
var leftArrowKeyHandler = function () {
    var end = $("#myRangeSlider").dxRangeSlider("instance").option("end");
    $("#myRangeSlider").dxRangeSlider("instance").option("end", end - 1);
};

$(function () {
    $("#myRangeSlider").dxRangeSlider({
        min: 50,
        max: 100,
        start: 65,
        end: 85,
        focusStateEnabled: true
    });
    $("#myRangeSlider").dxRangeSlider("instance").registerKeyHandler('rightArrow', rightArrowKeyHandler);
    $("#myRangeSlider").dxRangeSlider("instance").registerKeyHandler('leftArrow', leftArrowKeyHandler);
});