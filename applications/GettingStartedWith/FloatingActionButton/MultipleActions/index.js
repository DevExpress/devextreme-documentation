$(function() {
    DevExpress.config({
        floatingActionButtonConfig: {
            icon: "share",
            position: {
                my: "right bottom",
                at: "right bottom",
                of: "#app-container",
                offset: "-16 -16"
            }
        }
    });

    $("#action-copy").dxSpeedDialAction({
        hint: "Copy to clipboard",
        icon: "copy",
        onClick: function() {
            showNotification("Copied to clipboard");
        }
    });

    $("#action-mail").dxSpeedDialAction({
        hint: "Send by email",
        icon: "email",
        onClick: function() {
            showNotification("Sent by email");
        }
    });

    $("#action-social").dxSpeedDialAction({
        hint: "Share on Social Media",
        icon: "link",
        onClick: function() {
            showNotification("Shared on Social Media");
        }
    });

    function showNotification(message) {
        DevExpress.ui.notify({
            message: message,
            position: {
                my: "left bottom",
                at: "left bottom",
                of: "#app-container",
                offset: "16 -16"
            },
            minWidth: null,
            width: function() {
                return $("#app-container").width() * 0.7;
            }
        }, "info", 1000);
    }
});