$("<link>", {
    rel: "stylesheet",
    href: "https://unpkg.com/ionicons@4.6.3/dist/css/ionicons.min.css"
 }).appendTo("head");

$(function() {
    DevExpress.ui.themes.current("material.blue.light");

    DevExpress.config({
        floatingActionButtonConfig: {
            position: {
                my: "right bottom",
                at: "right bottom",
                of: "#app-container",
                offset: "-16 -16"
            }
        }
    });

    $("#action-edit").dxSpeedDialAction({
        hint: "Edit",
        icon: "icon ion-md-create",
        onClick: function() {
            showNotification("Edit is clicked")
        }
    });

    var showNotification = function(message) {
        DevExpress.ui.notify({
            message: message,
            position: {
                my: "left bottom",
                at: "left bottom",
                of: "#app-container",
                offset: "16 -16"
            },
            minWidth: null,
            width: $("#app-container").width() * 0.7
        }, "info", 1000);
    }
});