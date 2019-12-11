overlayVisible = ko.observable(false);
showOverlay = function () {
  overlayVisible(true);
};
hideOverlay = function () {
  overlayVisible(false);
};
processShowing = function () {
  DevExpress.ui.dialog.alert("The widget is being shown", "Action executed");
};