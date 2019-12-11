actionSheetVisible = ko.observable(false);
actionSheetData = [
    { text: "Reply" },
    { text: "ReplyAll" },
    { text: "Forward" },
    { text: "Delete" }
];
showActionSheet = function () {
  actionSheetVisible(true);
};
processContentReady = function () {
  DevExpress.ui.dialog.alert("The widget content is ready", "Action executed");
};