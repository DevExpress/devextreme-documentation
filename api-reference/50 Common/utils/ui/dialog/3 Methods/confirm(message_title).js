showConfirm = function () {
  var result = DevExpress.ui.dialog.confirm("Are you sure?", "Confirm changes");
  result.done(function (dialogResult) {
    if (dialogResult)
      DevExpress.ui.notify("Confirmed", "success", 2000);
    else
      DevExpress.ui.notify("Canceled", "error", 2000);
  });
};