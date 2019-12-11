showCustomDialog = function () {
  var replace = function () {
    return "Replace";
  };
  var rename = function () {
    return "Rename";
  };
  var cancel = function () {
    return "Cancel";
  };
  var customDialog = DevExpress.ui.dialog.custom({
    title: "Item exists",
    message: "The item already exists",
    buttons: [
        { text: "Replace", onClick: replace },
        { text: "Rename", onClick: rename },
        { text: "Cancel", onClick: cancel } 
    ]
    });
    customDialog.show().done(function (dialogResult) {
        DevExpress.ui.notify(dialogResult, "info", 1000);
    });
};