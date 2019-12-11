animationTypes = [
  "fade",
  "pop",
  "slide"
];
overlayVisible = ko.observable(false);
animationType = ko.observable(animationTypes[0]);
animationConfig = ko.observable({});
typeChanged = function () {
  switch (animationType()) {
    case "slide":
      animationConfig({
        show: { type: "slide", from: { top: -$(window).height(), opacity: 1 }, to: { top: 200 } },
        hide: { type: "slide", from: { top: 200 }, to: { top: -$(window).height() } }
      });
      break;
    case "pop":
      animationConfig({
        show: { type: "pop", from: { scale: 0, opacity: 1 }, to: { scale: 1 } },
        hide: { type: "pop", from: { scale: 1 }, to: { scale: 0 } }
      });
      break;
    case "fade":
      animationConfig({
        show: { type: "fade", from: 0, to: 1 },
        hide: { type: "fade", from: 1, to: 0 }
      });
      break;
    default:
      animationConfig({});
  }
}
showOverlay = function () {
  overlayVisible(true);
};
hideOverlay = function () {
  overlayVisible(false);
};
