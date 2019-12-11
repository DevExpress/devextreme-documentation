var maxIndex = 2;
var keyHandler = function () {
    var curIndex = $("#myTabs").dxTabs("instance").option("selectedIndex");
    if (curIndex === maxIndex) {
        curIndex = -1;
    }
    $("#myTabs").dxTabs("instance").option("selectedIndex", curIndex + 1);
};

$(function () {
    $("#myTabs").dxTabs({
        dataSource: [
            { text: "User", icon: "user", content: "'User' tab content" },
            { text: "Comment", icon: "comment", content: "'Comment' tab content" },
            { text: "Find", icon: "find", content: "'Find' tab content" }
        ],
        focusStateEnabled: true
    });
    $("#myTabs").dxTabs("instance").registerKeyHandler('enter', keyHandler);
});