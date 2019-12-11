toggleVisibility = function (clickOptions) {
  var visible = clickOptions.component.option("text") === "Show overlay";
  $("#overlayContainer").dxOverlay("instance").toggle(visible);
};