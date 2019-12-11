var panelVisible = false;
var toggleVisiblity = function () {
    panelVisible = !panelVisible;
    $("#loadPanelContainer").dxLoadPanel("instance").toggle(panelVisible);
    
};
$("#button").dxButton({
    text: "Load",
    onClick: function () {
        toggleVisiblity();
        setTimeout(toggleVisiblity, 3000);
    }
});
$("#loadPanelContainer").dxLoadPanel({
    message: "Loading..."
});