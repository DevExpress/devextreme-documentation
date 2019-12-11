var keyHandler = function () {
    var value = $("#mySwitch").dxSwitch("instance").option("value");
    $("#mySwitch").dxSwitch("instance").option("value", !value);
};

$(function () {
    $("#mySwitch").dxSwitch({
        value: false,
        focusStateEnabled: true
    });
    $("#mySwitch").dxSwitch("instance").registerKeyHandler('enter', keyHandler);
});
