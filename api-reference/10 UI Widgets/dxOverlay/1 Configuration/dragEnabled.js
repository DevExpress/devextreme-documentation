overlayVisible = ko.observable(false);
overlayDragEnabled = ko.observable(true);
showOverlay = function () {
  overlayVisible(true);
};
hideOverlay = function () {
  overlayVisible(false);
};