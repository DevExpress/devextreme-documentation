var showLoadPanel = function () {
    $("#loadPanelContainer").dxLoadPanel("instance").show();
    setTimeout(hideLoadPanel, 3000);
};
var hideLoadPanel = function () {
    $("#loadPanelContainer").dxLoadPanel("instance").hide();
};
$("#button").dxButton({
    text: "Load",
    onClick: showLoadPanel
});
$("#loadPanelContainer").dxLoadPanel({
    message: "Loading..."
});