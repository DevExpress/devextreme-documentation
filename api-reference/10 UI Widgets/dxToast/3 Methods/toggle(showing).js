$(function () {
    $("#buttonContainer").dxButton({
        text: 'Toggle toast',
        onClick: function () {
            var toastInstance = $("#toastContainer").dxToast("instance");
            toastInstance.toggle(!toastInstance.option("visible"));
        }
    });
    $("#toastContainer").dxToast({
        message: 'Click button to hide toast',
        displayTime: 10000
    });
});