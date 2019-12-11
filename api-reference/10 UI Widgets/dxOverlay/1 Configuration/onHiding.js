overlayVisible = ko.observable(false);
showOverlay = function () {
    overlayVisible(true);
};
hideOverlay = function () {
    overlayVisible(false);
};
processHiding = function () {
    DevExpress.ui.dialog.alert("The widget is being hidden", "Action executed");
};