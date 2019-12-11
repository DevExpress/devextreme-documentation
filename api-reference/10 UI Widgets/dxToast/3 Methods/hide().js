$(function () {
    $("#buttonContainer").dxButton({
        text: 'Toggle toast',
        onClick: function () {
            var toastInstance = $("#toastContainer").dxToast("instance");
            toastInstance.option("visible") ? toastInstance.hide() : toastInstance.show();
        }
    });
    $("#toastContainer").dxToast({
        message: 'Click button to hide toast',
        displayTime: 10000
    });
});