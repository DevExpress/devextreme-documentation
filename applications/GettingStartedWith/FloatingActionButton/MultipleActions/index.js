$("<link>", {
    rel: "stylesheet",
    href: "https://unpkg.com/ionicons@4.6.3/dist/css/ionicons.min.css"
 }).appendTo("head");

$(function() {
    DevExpress.ui.themes.current("material.blue.light");

    DevExpress.config({
        floatingActionButtonConfig: {
            icon: "icon ion-md-share",
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
        icon: "icon ion-md-copy",
        onClick: function() {
            showNotification("Copied to clipboard");
        }
    });

    $("#action-mail").dxSpeedDialAction({
        hint: "Send by email",
        icon: "icon ion-md-mail",
        onClick: function() {
            showNotification("Sent by email");
        }
    });

    $("#action-facebook").dxSpeedDialAction({
        hint: "Share on Facebook",
        icon: "icon ion-logo-facebook",
        onClick: function() {
            showNotification("Shared on Facebook");
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