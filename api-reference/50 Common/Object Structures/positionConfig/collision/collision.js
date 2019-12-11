popupVisible = ko.observable(false);
collisionValue = ko.observable("none");
showPopup = function () {
    popupVisible(true);
};
hidePopup = function () {
    popupVisible(false);
};
collisionValues = [
  "none",
  "none flip",
  "none fit",
  "flip",
  "flip none",
  "flip fit",
  "fit",
  "fit none",
  "fit flip"
];