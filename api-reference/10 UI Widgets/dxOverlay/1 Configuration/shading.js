overlayVisible = ko.observable(false);
overlayShading = ko.observable(true);
showOverlay = function () {
  overlayVisible(true);
};
hideOverlay = function () {
  overlayVisible(false);
};