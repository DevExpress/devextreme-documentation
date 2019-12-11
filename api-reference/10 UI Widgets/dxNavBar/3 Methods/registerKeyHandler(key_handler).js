var maxIndex = 5;
var keyHandler = function () {
    var curIndex = $("#myNavBar").dxNavBar("instance").option("selectedIndex");
    if (curIndex === maxIndex) {
        curIndex = -1;
    }
    $("#myNavBar").dxNavBar("instance").option("selectedIndex", curIndex + 1);
};

$(function () {
    $("#myNavBar").dxNavBar({
        dataSource: [
            { text: "user", icon: "user" },
            { text: "find", icon: "find" },
            { text: "favorites", icon: "favorites", badge: "New" },
            { text: "about", icon: "info" },
            { text: "home", icon: "home" },
            { text: "URI", icon: "tips", badge: "!" }
        ],
        focusStateEnabled: true
    });
    $("#myNavBar").dxNavBar("instance").registerKeyHandler('rightArrow', keyHandler);
});