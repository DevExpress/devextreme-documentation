overlayVisible = ko.observable(false);
atValue = ko.observable("bottom");
myValue = ko.observable("bottom");
showOverlay = function () {
  overlayVisible(true);
};
hideOverlay = function () {
  overlayVisible(false);
};
positionValues = [
  "left top",
  "top",
  "right top",
  "right",
  "right bottom",
  "bottom",
  "left bottom",
  "left",
  "center"
];